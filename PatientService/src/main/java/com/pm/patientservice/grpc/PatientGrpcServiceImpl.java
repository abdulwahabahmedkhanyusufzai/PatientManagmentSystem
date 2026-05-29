package com.pm.patientservice.grpc;

import com.pm.patientservice.dto.PatientResponseDTO;
import com.pm.patientservice.service.PatientService;
import io.grpc.stub.StreamObserver;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

@GrpcService
public class PatientGrpcServiceImpl extends PatientGrpcServiceGrpc.PatientGrpcServiceImplBase {

  @Autowired private PatientService patientService;

  @Override
  public void getPatientById(PatientRequest request, StreamObserver<PatientResponse> responseObserver) {
    PatientResponseDTO patient = patientService.getPatientById(UUID.fromString(request.getId()));
    responseObserver.onNext(mapToGrpcResponse(patient));
    responseObserver.onCompleted();
  }

  @Override
  public void getAllPatients(Empty request, StreamObserver<PatientListResponse> responseObserver) {
    List<PatientResponseDTO> patients = patientService.getPatients();
    List<PatientResponse> grpcPatients =
        patients.stream().map(this::mapToGrpcResponse).collect(Collectors.toList());

    responseObserver.onNext(PatientListResponse.newBuilder().addAllPatients(grpcPatients).build());
    responseObserver.onCompleted();
  }

  private PatientResponse mapToGrpcResponse(PatientResponseDTO dto) {
    return PatientResponse.newBuilder()
        .setId(dto.getId().toString())
        .setName(dto.getName())
        .setEmail(dto.getEmail())
        .setAddress(dto.getAddress())
        .setDateOfBirth(dto.getDateOfBirth().toString())
        .setRegisteredDate(dto.getRegisteredDate().toString())
        .build();
  }
}
