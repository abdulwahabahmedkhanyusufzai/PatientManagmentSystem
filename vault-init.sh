#!/bin/bash
export VAULT_ADDR='http://127.0.0.1:8200'
export VAULT_TOKEN='root'

echo "Waiting for Vault to be ready..."
until vault status > /dev/null 2>&1; do
  sleep 1
done

echo "Configuring secrets for patient-service..."
vault kv put secret/patient-service \
    spring.datasource.username=sa \
    spring.datasource.password= \
    spring.kafka.bootstrap-servers=localhost:9092 \
    spring.security.oauth2.resourceserver.jwt.issuer-uri=http://localhost:8081/realms/patient-realm

echo "Configuring secrets for gateway-service..."
vault kv put secret/gateway-service \
    spring.data.redis.host=localhost \
    grpc.client.patient-service.address=static://localhost:9091 \
    spring.security.oauth2.resourceserver.jwt.issuer-uri=http://localhost:8081/realms/patient-realm

echo "Vault initialization complete."
