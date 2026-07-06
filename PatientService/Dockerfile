FROM maven:3.9.9-eclipse-temurin-21-alpine AS maven-base

FROM ghcr.io/graalvm/native-image-community:21-ol9 AS build
# Copy maven from maven image
COPY --from=maven-base /usr/share/maven /usr/share/maven
RUN ln -s /usr/share/maven/bin/mvn /usr/bin/mvn

WORKDIR /app
COPY pom.xml .
RUN mvn -B -ntp dependency:go-offline
COPY src ./src
ENV NATIVE_IMAGE_USER_ARGS="-J-Xmx3g"
RUN mvn -B -ntp -Pnative native:compile -DskipTests

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y libz-dev ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
RUN useradd -u 10001 -m nonroot
USER nonroot
COPY --from=build /app/target/PatientService /app/patientservice
EXPOSE 4000 9091
ENTRYPOINT ["/app/patientservice"]
