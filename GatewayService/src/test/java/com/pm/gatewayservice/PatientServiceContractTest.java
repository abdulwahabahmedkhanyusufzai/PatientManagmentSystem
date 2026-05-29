package com.pm.gatewayservice;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.contract.stubrunner.spring.AutoConfigureStubRunner;
import org.springframework.cloud.contract.stubrunner.spring.StubRunnerProperties;
import org.springframework.test.web.reactive.server.WebTestClient;

@SpringBootTest(
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
    properties = {"PATIENT_SERVICE_URI=http://localhost:8090"})
@AutoConfigureStubRunner(
    ids = "com.pm:PatientService:+:stubs:8090",
    stubsMode = StubRunnerProperties.StubsMode.LOCAL)
class PatientServiceContractTest {

  @Autowired private WebTestClient webTestClient;

  @Test
  void shouldRouteToPatientService() {
    webTestClient
        .get()
        .uri("/patients")
        .exchange()
        .expectStatus()
        .isOk()
        .expectBody()
        .jsonPath("$[0].name")
        .isEqualTo("John Doe");
  }
}
