package com.pm.patientservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pm.patientservice.dto.PatientRequestDTO;
import com.pm.patientservice.dto.PatientResponseDTO;
import com.pm.patientservice.exception.EmailAlreadyExistsException;
import com.pm.patientservice.exception.PatientNotFoundException;
import com.pm.patientservice.mapper.PatientMapper;
import com.pm.patientservice.model.OutboxEvent;
import com.pm.patientservice.model.Patient;
import com.pm.patientservice.repository.OutboxRepository;
import com.pm.patientservice.repository.PatientRepository;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PatientService {
  private final PatientRepository patientRepository;
  private final OutboxRepository outboxRepository;
  private final ObjectMapper objectMapper;

  public PatientService(
      PatientRepository patientRepository,
      OutboxRepository outboxRepository,
      ObjectMapper objectMapper) {
    this.patientRepository = patientRepository;
    this.outboxRepository = outboxRepository;
    this.objectMapper = objectMapper;
  }

  @Transactional(readOnly = true)
  public List<PatientResponseDTO> getPatients() {
    List<Patient> patients = patientRepository.findAll();
    return patients.stream().map(PatientMapper::toDTO).toList();
  }

  @Transactional(readOnly = true)
  public PatientResponseDTO getPatientById(UUID id) {
    return patientRepository
        .findById(id)
        .map(PatientMapper::toDTO)
        .orElseThrow(() -> new PatientNotFoundException("Patient not found with ID: " + id));
  }

  @Transactional
  public PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO) {
    if (patientRepository.existsByEmail(patientRequestDTO.getEmail())) {
      throw new EmailAlreadyExistsException(
          String.format("A patient with email '%s' already exists.", patientRequestDTO.getEmail()));
    }
    Patient patientEntity = PatientMapper.toModel(patientRequestDTO);
    Patient savedPatient = patientRepository.save(patientEntity);

    try {
      String payload = objectMapper.writeValueAsString(savedPatient);
      OutboxEvent event =
          new OutboxEvent(
              UUID.randomUUID(),
              "Patient",
              savedPatient.getId().toString(),
              "PATIENT_CREATED",
              payload);
      outboxRepository.save(event);
    } catch (JsonProcessingException e) {
      throw new RuntimeException("Failed to serialize patient event", e);
    }

    return PatientMapper.toDTO(savedPatient);
  }

  @Transactional
  public PatientResponseDTO updatePatient(UUID id, PatientRequestDTO patientRequestDTO) {
    Patient patient =
        patientRepository
            .findById(id)
            .orElseThrow(() -> new PatientNotFoundException("Patient not found with ID: " + id));

    if (patientRepository.existsByEmailAndIdNot(patientRequestDTO.getEmail(), id)) {
      throw new EmailAlreadyExistsException(
          String.format("A patient with email '%s' already exists.", patientRequestDTO.getEmail()));
    }

    patient.setName(patientRequestDTO.getName());
    patient.setEmail(patientRequestDTO.getEmail());
    patient.setAddress(patientRequestDTO.getAddress());
    patient.setDateOfBirth(patientRequestDTO.getDateOfBirth());
    patient.setRegisteredDate(patientRequestDTO.getRegisteredDate());

    Patient updatedPatient = patientRepository.save(patient);
    return PatientMapper.toDTO(updatedPatient);
  }

  @Transactional
  public void deletePatient(UUID id) {
    if (!patientRepository.existsById(id)) {
      throw new PatientNotFoundException("Patient not found with ID: " + id);
    }
    patientRepository.deleteById(id);
  }
}
