package com.pm.patientservice.controller;

import static com.google.common.truth.Truth.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.pm.patientservice.dto.PatientRequestDTO;
import com.pm.patientservice.dto.PatientResponseDTO;
import com.pm.patientservice.service.PatientService;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import tools.jackson.databind.ObjectMapper;

@WebMvcTest(PatientController.class)
class PatientControllerTest {

  @Autowired private MockMvc mockMvc;

  @MockitoBean private PatientService patientService;

  @Autowired private ObjectMapper objectMapper;

  @Test
  void getPatients_returnsOk() throws Exception {
    PatientResponseDTO patient = new PatientResponseDTO();
    patient.setName("John Doe");

    when(patientService.getPatients()).thenReturn(List.of(patient));

    MvcResult result = mockMvc.perform(get("/patients")).andExpect(status().isOk()).andReturn();

    String content = result.getResponse().getContentAsString();
    assertThat(content).contains("John Doe");
  }

  @Test
  void getPatientById_returnsOk_whenFound() throws Exception {
    UUID id = UUID.randomUUID();
    PatientResponseDTO patient = new PatientResponseDTO();
    patient.setName("John Doe");

    when(patientService.getPatientById(id)).thenReturn(patient);

    MvcResult result =
        mockMvc.perform(get("/patients/" + id)).andExpect(status().isOk()).andReturn();

    String content = result.getResponse().getContentAsString();
    assertThat(content).contains("John Doe");
  }

  @Test
  void createPatient_returnsOk_whenValid() throws Exception {
    PatientRequestDTO request = new PatientRequestDTO();
    request.setName("Jane Doe");
    request.setEmail("jane.doe@example.com");
    request.setAddress("456 Elm St");
    request.setDateOfBirth(LocalDate.of(1995, 5, 5));
    request.setRegisteredDate(LocalDate.of(2024, 5, 28));

    PatientResponseDTO response = new PatientResponseDTO();
    response.setName("Jane Doe");

    when(patientService.createPatient(any(PatientRequestDTO.class))).thenReturn(response);

    mockMvc
        .perform(
            post("/patients")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
        .andExpect(status().isOk());
  }

  @Test
  void createPatient_returnsBadRequest_whenInvalid() throws Exception {
    PatientRequestDTO request = new PatientRequestDTO();
    // Missing required fields

    mockMvc
        .perform(
            post("/patients")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
        .andExpect(status().isBadRequest());
  }

  @Test
  void deletePatient_returnsNoContent() throws Exception {
    UUID id = UUID.randomUUID();

    mockMvc.perform(delete("/patients/" + id)).andExpect(status().isNoContent());
  }
}
