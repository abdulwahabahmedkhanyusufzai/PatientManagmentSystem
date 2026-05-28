package com.pm.patientservice.service;

import static com.google.common.truth.Truth.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.pm.patientservice.dto.PatientRequestDTO;
import com.pm.patientservice.dto.PatientResponseDTO;
import com.pm.patientservice.exception.EmailAlreadyExistsException;
import com.pm.patientservice.exception.PatientNotFoundException;
import com.pm.patientservice.model.Patient;
import com.pm.patientservice.repository.PatientRepository;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class PatientServiceTest {

  @Mock private PatientRepository patientRepository;

  private PatientService patientService;

  @BeforeEach
  void setUp() {
    patientService = new PatientService(patientRepository);
  }

  @Test
  void getPatients_returnsList() {
    Patient patient = new Patient();
    patient.setId(UUID.randomUUID());
    patient.setName("John Doe");
    patient.setEmail("john.doe@example.com");
    patient.setAddress("123 Main St");
    patient.setDateOfBirth(LocalDate.of(1990, 1, 1));
    patient.setRegisteredDate(LocalDate.now(ZoneId.systemDefault()));

    when(patientRepository.findAll()).thenReturn(List.of(patient));

    List<PatientResponseDTO> result = patientService.getPatients();

    assertThat(result).hasSize(1);
    assertThat(result.get(0).getName()).isEqualTo("John Doe");
    assertThat(result.get(0).getEmail()).isEqualTo("john.doe@example.com");
  }

  @Test
  void getPatientById_success() {
    UUID id = UUID.randomUUID();
    Patient patient = new Patient();
    patient.setId(id);
    patient.setName("John Doe");
    patient.setEmail("john.doe@example.com");
    patient.setAddress("123 Main St");
    patient.setDateOfBirth(LocalDate.of(1990, 1, 1));
    patient.setRegisteredDate(LocalDate.of(2024, 1, 1));

    when(patientRepository.findById(id)).thenReturn(Optional.of(patient));

    PatientResponseDTO result = patientService.getPatientById(id);

    assertThat(result.getName()).isEqualTo("John Doe");
    assertThat(result.getEmail()).isEqualTo("john.doe@example.com");
  }

  @Test
  void getPatientById_throwsException_whenNotFound() {
    UUID id = UUID.randomUUID();
    when(patientRepository.findById(id)).thenReturn(Optional.empty());

    assertThrows(PatientNotFoundException.class, () -> patientService.getPatientById(id));
  }

  @Test
  void createPatient_success() {
    PatientRequestDTO request = new PatientRequestDTO();
    request.setName("Jane Doe");
    request.setEmail("jane.doe@example.com");
    request.setAddress("456 Elm St");
    request.setDateOfBirth(LocalDate.of(1995, 5, 5));
    request.setRegisteredDate(LocalDate.of(2024, 5, 28));

    when(patientRepository.existsByEmail(request.getEmail())).thenReturn(false);
    when(patientRepository.save(any(Patient.class)))
        .thenAnswer(
            invocation -> {
              Patient p = invocation.getArgument(0);
              p.setId(UUID.randomUUID());
              return p;
            });

    PatientResponseDTO result = patientService.createPatient(request);

    assertThat(result.getName()).isEqualTo("Jane Doe");
    assertThat(result.getEmail()).isEqualTo("jane.doe@example.com");
    verify(patientRepository).save(any(Patient.class));
  }

  @Test
  void createPatient_throwsException_whenEmailExists() {
    PatientRequestDTO request = new PatientRequestDTO();
    request.setEmail("existing@example.com");

    when(patientRepository.existsByEmail(request.getEmail())).thenReturn(true);

    assertThrows(EmailAlreadyExistsException.class, () -> patientService.createPatient(request));
  }

  @Test
  void updatePatient_success() {
    UUID id = UUID.randomUUID();
    PatientRequestDTO request = new PatientRequestDTO();
    request.setName("Updated Name");
    request.setEmail("updated@example.com");
    request.setAddress("Updated Address");
    request.setDateOfBirth(LocalDate.of(1990, 1, 1));
    request.setRegisteredDate(LocalDate.of(2024, 5, 28));

    Patient existingPatient = new Patient();
    existingPatient.setId(id);
    existingPatient.setEmail("old@example.com");

    when(patientRepository.findById(id)).thenReturn(Optional.of(existingPatient));
    when(patientRepository.existsByEmailAndIdNot(request.getEmail(), id)).thenReturn(false);
    when(patientRepository.save(any(Patient.class)))
        .thenAnswer(invocation -> invocation.getArgument(0));

    PatientResponseDTO result = patientService.updatePatient(id, request);

    assertThat(result.getName()).isEqualTo("Updated Name");
    assertThat(result.getEmail()).isEqualTo("updated@example.com");
  }

  @Test
  void updatePatient_success_sameEmail() {
    UUID id = UUID.randomUUID();
    PatientRequestDTO request = new PatientRequestDTO();
    request.setName("Updated Name");
    request.setEmail("same@example.com");
    request.setAddress("Updated Address");
    request.setDateOfBirth(LocalDate.of(1990, 1, 1));
    request.setRegisteredDate(LocalDate.of(2024, 5, 28));

    Patient existingPatient = new Patient();
    existingPatient.setId(id);
    existingPatient.setEmail("same@example.com");

    when(patientRepository.findById(id)).thenReturn(Optional.of(existingPatient));
    when(patientRepository.existsByEmailAndIdNot(request.getEmail(), id)).thenReturn(false);
    when(patientRepository.save(any(Patient.class)))
        .thenAnswer(invocation -> invocation.getArgument(0));

    PatientResponseDTO result = patientService.updatePatient(id, request);

    assertThat(result.getName()).isEqualTo("Updated Name");
    assertThat(result.getEmail()).isEqualTo("same@example.com");
  }

  @Test
  void updatePatient_throwsException_whenNotFound() {
    UUID id = UUID.randomUUID();
    PatientRequestDTO request = new PatientRequestDTO();

    when(patientRepository.findById(id)).thenReturn(Optional.empty());

    assertThrows(PatientNotFoundException.class, () -> patientService.updatePatient(id, request));
  }

  @Test
  void deletePatient_success() {
    UUID id = UUID.randomUUID();
    when(patientRepository.existsById(id)).thenReturn(true);

    patientService.deletePatient(id);

    verify(patientRepository).deleteById(id);
  }

  @Test
  void deletePatient_throwsException_whenNotFound() {
    UUID id = UUID.randomUUID();
    when(patientRepository.existsById(id)).thenReturn(false);

    assertThrows(PatientNotFoundException.class, () -> patientService.deletePatient(id));
  }
}
