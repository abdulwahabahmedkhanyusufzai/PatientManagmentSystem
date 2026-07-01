package com.pm.patientservice.grpc;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.70.0)",
    comments = "Source: patient.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class PatientGrpcServiceGrpc {

  private PatientGrpcServiceGrpc() {}

  public static final java.lang.String SERVICE_NAME = "com.pm.patientservice.PatientGrpcService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.pm.patientservice.grpc.PatientRequest,
      com.pm.patientservice.grpc.PatientResponse> getGetPatientByIdMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPatientById",
      requestType = com.pm.patientservice.grpc.PatientRequest.class,
      responseType = com.pm.patientservice.grpc.PatientResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.pm.patientservice.grpc.PatientRequest,
      com.pm.patientservice.grpc.PatientResponse> getGetPatientByIdMethod() {
    io.grpc.MethodDescriptor<com.pm.patientservice.grpc.PatientRequest, com.pm.patientservice.grpc.PatientResponse> getGetPatientByIdMethod;
    if ((getGetPatientByIdMethod = PatientGrpcServiceGrpc.getGetPatientByIdMethod) == null) {
      synchronized (PatientGrpcServiceGrpc.class) {
        if ((getGetPatientByIdMethod = PatientGrpcServiceGrpc.getGetPatientByIdMethod) == null) {
          PatientGrpcServiceGrpc.getGetPatientByIdMethod = getGetPatientByIdMethod =
              io.grpc.MethodDescriptor.<com.pm.patientservice.grpc.PatientRequest, com.pm.patientservice.grpc.PatientResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetPatientById"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.pm.patientservice.grpc.PatientRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.pm.patientservice.grpc.PatientResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PatientGrpcServiceMethodDescriptorSupplier("GetPatientById"))
              .build();
        }
      }
    }
    return getGetPatientByIdMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.pm.patientservice.grpc.Empty,
      com.pm.patientservice.grpc.PatientListResponse> getGetAllPatientsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllPatients",
      requestType = com.pm.patientservice.grpc.Empty.class,
      responseType = com.pm.patientservice.grpc.PatientListResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.pm.patientservice.grpc.Empty,
      com.pm.patientservice.grpc.PatientListResponse> getGetAllPatientsMethod() {
    io.grpc.MethodDescriptor<com.pm.patientservice.grpc.Empty, com.pm.patientservice.grpc.PatientListResponse> getGetAllPatientsMethod;
    if ((getGetAllPatientsMethod = PatientGrpcServiceGrpc.getGetAllPatientsMethod) == null) {
      synchronized (PatientGrpcServiceGrpc.class) {
        if ((getGetAllPatientsMethod = PatientGrpcServiceGrpc.getGetAllPatientsMethod) == null) {
          PatientGrpcServiceGrpc.getGetAllPatientsMethod = getGetAllPatientsMethod =
              io.grpc.MethodDescriptor.<com.pm.patientservice.grpc.Empty, com.pm.patientservice.grpc.PatientListResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetAllPatients"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.pm.patientservice.grpc.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.pm.patientservice.grpc.PatientListResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PatientGrpcServiceMethodDescriptorSupplier("GetAllPatients"))
              .build();
        }
      }
    }
    return getGetAllPatientsMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PatientGrpcServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceStub>() {
        @java.lang.Override
        public PatientGrpcServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PatientGrpcServiceStub(channel, callOptions);
        }
      };
    return PatientGrpcServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports all types of calls on the service
   */
  public static PatientGrpcServiceBlockingV2Stub newBlockingV2Stub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceBlockingV2Stub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceBlockingV2Stub>() {
        @java.lang.Override
        public PatientGrpcServiceBlockingV2Stub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PatientGrpcServiceBlockingV2Stub(channel, callOptions);
        }
      };
    return PatientGrpcServiceBlockingV2Stub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PatientGrpcServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceBlockingStub>() {
        @java.lang.Override
        public PatientGrpcServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PatientGrpcServiceBlockingStub(channel, callOptions);
        }
      };
    return PatientGrpcServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PatientGrpcServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PatientGrpcServiceFutureStub>() {
        @java.lang.Override
        public PatientGrpcServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PatientGrpcServiceFutureStub(channel, callOptions);
        }
      };
    return PatientGrpcServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void getPatientById(com.pm.patientservice.grpc.PatientRequest request,
        io.grpc.stub.StreamObserver<com.pm.patientservice.grpc.PatientResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetPatientByIdMethod(), responseObserver);
    }

    /**
     */
    default void getAllPatients(com.pm.patientservice.grpc.Empty request,
        io.grpc.stub.StreamObserver<com.pm.patientservice.grpc.PatientListResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetAllPatientsMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service PatientGrpcService.
   */
  public static abstract class PatientGrpcServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return PatientGrpcServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service PatientGrpcService.
   */
  public static final class PatientGrpcServiceStub
      extends io.grpc.stub.AbstractAsyncStub<PatientGrpcServiceStub> {
    private PatientGrpcServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PatientGrpcServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PatientGrpcServiceStub(channel, callOptions);
    }

    /**
     */
    public void getPatientById(com.pm.patientservice.grpc.PatientRequest request,
        io.grpc.stub.StreamObserver<com.pm.patientservice.grpc.PatientResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetPatientByIdMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllPatients(com.pm.patientservice.grpc.Empty request,
        io.grpc.stub.StreamObserver<com.pm.patientservice.grpc.PatientListResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetAllPatientsMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service PatientGrpcService.
   */
  public static final class PatientGrpcServiceBlockingV2Stub
      extends io.grpc.stub.AbstractBlockingStub<PatientGrpcServiceBlockingV2Stub> {
    private PatientGrpcServiceBlockingV2Stub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PatientGrpcServiceBlockingV2Stub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PatientGrpcServiceBlockingV2Stub(channel, callOptions);
    }

    /**
     */
    public com.pm.patientservice.grpc.PatientResponse getPatientById(com.pm.patientservice.grpc.PatientRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetPatientByIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.pm.patientservice.grpc.PatientListResponse getAllPatients(com.pm.patientservice.grpc.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllPatientsMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do limited synchronous rpc calls to service PatientGrpcService.
   */
  public static final class PatientGrpcServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<PatientGrpcServiceBlockingStub> {
    private PatientGrpcServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PatientGrpcServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PatientGrpcServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.pm.patientservice.grpc.PatientResponse getPatientById(com.pm.patientservice.grpc.PatientRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetPatientByIdMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.pm.patientservice.grpc.PatientListResponse getAllPatients(com.pm.patientservice.grpc.Empty request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetAllPatientsMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service PatientGrpcService.
   */
  public static final class PatientGrpcServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<PatientGrpcServiceFutureStub> {
    private PatientGrpcServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PatientGrpcServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PatientGrpcServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.pm.patientservice.grpc.PatientResponse> getPatientById(
        com.pm.patientservice.grpc.PatientRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetPatientByIdMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.pm.patientservice.grpc.PatientListResponse> getAllPatients(
        com.pm.patientservice.grpc.Empty request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetAllPatientsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_PATIENT_BY_ID = 0;
  private static final int METHODID_GET_ALL_PATIENTS = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AsyncService serviceImpl;
    private final int methodId;

    MethodHandlers(AsyncService serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_PATIENT_BY_ID:
          serviceImpl.getPatientById((com.pm.patientservice.grpc.PatientRequest) request,
              (io.grpc.stub.StreamObserver<com.pm.patientservice.grpc.PatientResponse>) responseObserver);
          break;
        case METHODID_GET_ALL_PATIENTS:
          serviceImpl.getAllPatients((com.pm.patientservice.grpc.Empty) request,
              (io.grpc.stub.StreamObserver<com.pm.patientservice.grpc.PatientListResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  public static final io.grpc.ServerServiceDefinition bindService(AsyncService service) {
    return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
        .addMethod(
          getGetPatientByIdMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.pm.patientservice.grpc.PatientRequest,
              com.pm.patientservice.grpc.PatientResponse>(
                service, METHODID_GET_PATIENT_BY_ID)))
        .addMethod(
          getGetAllPatientsMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.pm.patientservice.grpc.Empty,
              com.pm.patientservice.grpc.PatientListResponse>(
                service, METHODID_GET_ALL_PATIENTS)))
        .build();
  }

  private static abstract class PatientGrpcServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PatientGrpcServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.pm.patientservice.grpc.PatientProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("PatientGrpcService");
    }
  }

  private static final class PatientGrpcServiceFileDescriptorSupplier
      extends PatientGrpcServiceBaseDescriptorSupplier {
    PatientGrpcServiceFileDescriptorSupplier() {}
  }

  private static final class PatientGrpcServiceMethodDescriptorSupplier
      extends PatientGrpcServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final java.lang.String methodName;

    PatientGrpcServiceMethodDescriptorSupplier(java.lang.String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (PatientGrpcServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PatientGrpcServiceFileDescriptorSupplier())
              .addMethod(getGetPatientByIdMethod())
              .addMethod(getGetAllPatientsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
