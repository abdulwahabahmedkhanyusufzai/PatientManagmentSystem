package com.pm.aichatservice.service;

import com.pm.patientservice.grpc.Empty;
import com.pm.patientservice.grpc.PatientGrpcServiceGrpc;
import com.pm.patientservice.grpc.PatientListResponse;
import java.util.function.Function;
import java.util.stream.Collectors;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;

@Configuration
public class AiAgentTools {

  @GrpcClient("patient-service")
  private PatientGrpcServiceGrpc.PatientGrpcServiceBlockingStub patientStub;

  public record PatientListRequest(String query) {}

  public record PatientListResponse(String data) {}

  @Bean
  @Description("Get a list of all patients from the system")
  public Function<PatientListRequest, PatientListResponse> getPatientList() {
    return request -> {
      com.pm.patientservice.grpc.PatientListResponse response =
          patientStub.getPatients(Empty.newBuilder().build());
      String patients =
          response.getPatientsList().stream()
              .map(
                  p ->
                      String.format(
                          "ID: %s, Name: %s, Email: %s", p.getId(), p.getName(), p.getEmail()))
              .collect(Collectors.joining("\n"));
      return new PatientListResponse(patients);
    };
  }
}
