package com.pm.aichatservice.service;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.client.RestClient;

@Configuration
public class AiAgentTools {

  @Value("${patient.service.url:http://localhost:4000}")
  private String patientServiceUrl;

  public record PatientListRequest(String query) {}

  public record PatientListResponse(String data) {}

  public record PatientResponse(String id, String name, String email) {}

  @Bean
  @Description("Get a list of all patients from the system")
  public Function<PatientListRequest, PatientListResponse> getPatientList() {
    return request -> {
      RestClient restClient = RestClient.create(patientServiceUrl);
      List<PatientResponse> response =
          restClient
              .get()
              .uri("/patients")
              .retrieve()
              .body(new ParameterizedTypeReference<List<PatientResponse>>() {});

      if (response == null || response.isEmpty()) {
        return new PatientListResponse("No patients found.");
      }

      String patients =
          response.stream()
              .map(p -> String.format("ID: %s, Name: %s, Email: %s", p.id(), p.name(), p.email()))
              .collect(Collectors.joining("\n"));
      return new PatientListResponse(patients);
    };
  }
}
