package com.pm.gatewayservice.controller;

import com.pm.patientservice.grpc.Empty;
import com.pm.patientservice.grpc.PatientGrpcServiceGrpc;
import com.pm.patientservice.grpc.PatientListResponse;
import com.pm.patientservice.grpc.PatientRequest;
import com.pm.patientservice.grpc.PatientResponse;
import java.util.List;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/grpc/patients")
public class PatientGrpcController {

  @GrpcClient("patient-service")
  private PatientGrpcServiceGrpc.PatientGrpcServiceBlockingStub patientStub;

  @GetMapping
  public Mono<List<PatientResponse>> getAllPatients() {
    return Mono.fromCallable(
        () -> {
          PatientListResponse response = patientStub.getAllPatients(Empty.newBuilder().build());
          return response.getPatientsList();
        });
  }

  @GetMapping("/{id}")
  public Mono<PatientResponse> getPatientById(@PathVariable String id) {
    return Mono.fromCallable(
        () -> patientStub.getPatientById(PatientRequest.newBuilder().setId(id).build()));
  }
}
