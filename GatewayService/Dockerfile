FROM maven:3.9.9-eclipse-temurin-17-alpine AS maven-base

FROM ghcr.io/graalvm/native-image-community:17-ol9 AS build
# Copy maven from maven image
COPY --from=maven-base /usr/share/maven /usr/share/maven
RUN ln -s /usr/share/maven/bin/mvn /usr/bin/mvn

WORKDIR /app
COPY pom.xml .
RUN mvn -B -ntp dependency:go-offline
COPY src ./src
RUN mvn -B -ntp -Pnative native:compile -DskipTests

FROM gcr.io/distroless/base-debian12
WORKDIR /app
USER nonroot:nonroot
COPY --from=build /app/target/GatewayService /app/gatewayservice
EXPOSE 8080
ENTRYPOINT ["/app/gatewayservice"]
