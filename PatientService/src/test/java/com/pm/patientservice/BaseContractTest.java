package com.pm.patientservice;

import com.pm.patientservice.dto.PatientResponseDTO;
import com.pm.patientservice.service.PatientService;
import io.restassured.module.mockmvc.RestAssuredMockMvc;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.web.context.WebApplicationContext;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@WithMockUser
public abstract class BaseContractTest {

  @Autowired private WebApplicationContext context;

  @MockitoBean private PatientService patientService;

  @BeforeEach
  public void setup() {
    RestAssuredMockMvc.webAppContextSetup(context);

    PatientResponseDTO patient = new PatientResponseDTO();
    patient.setId(UUID.fromString("123e4567-e89b-12d3-a456-426614174000"));
    patient.setName("John Doe");
    patient.setEmail("john.doe@example.com");
    patient.setAddress("123 Main St, Springfield");
    patient.setDateOfBirth(LocalDate.of(1985, 6, 15));
    patient.setRegisteredDate(LocalDate.of(2024, 1, 10));

    Mockito.when(patientService.getPatients()).thenReturn(List.of(patient));
  }
}
