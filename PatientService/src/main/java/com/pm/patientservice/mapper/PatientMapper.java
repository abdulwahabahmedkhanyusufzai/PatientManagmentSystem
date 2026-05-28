package com.pm.patientservice.mapper;

import com.pm.patientservice.dto.PatientRequestDTO;
import com.pm.patientservice.dto.PatientResponseDTO;
import com.pm.patientservice.model.Patient;

public class PatientMapper {
  public static PatientResponseDTO toDTO(Patient patient) {
    if (patient == null) {
      return null;
    }
    PatientResponseDTO dto = new PatientResponseDTO();
    dto.setId(patient.getId());
    dto.setName(patient.getName());
    dto.setEmail(patient.getEmail());
    dto.setAddress(patient.getAddress());
    dto.setDateOfBirth(patient.getDateOfBirth());
    dto.setRegisteredDate(patient.getRegisteredDate());
    return dto;
  }

  public static Patient toModel(PatientRequestDTO dto) {
    if (dto == null) {
      return null;
    }
    Patient patient = new Patient();
    patient.setName(dto.getName());
    patient.setEmail(dto.getEmail());
    patient.setAddress(dto.getAddress());
    patient.setDateOfBirth(dto.getDateOfBirth());
    patient.setRegisteredDate(dto.getRegisteredDate());
    return patient;
  }
}
