# Patient Management System (Google-Level Architecture)

A robust, planetary-scale-ready microservices system built with modern engineering excellence

## 🚀 Advanced Architecture Features
*   **Reliable Event Delivery:** Uses **Apache Kafka** and the **Transactional Outbox Pattern** to guarantee eventual consistency and publish/subscribe messaging between microservices without distributed transactions.
*   **Resilient Traffic Control:** 
    *   **Redis-backed Rate Limiting:** Protects against DDoS and noisy neighbors using a distributed token bucket algorithm.
    *   **Circuit Breakers & Retries:** Integrated **Resilience4j** to prevent cascading failures and handle transient network glitches.
*   **Consumer-Driven Contract Testing:** Uses **Spring Cloud Contract** to ensure API compatibility between the Gateway and downstream services, preventing breaking changes.
*   **Enterprise Observability:**
    *   **Distributed Tracing:** Full trace propagation via **Micrometer Tracing (Brave/Zipkin)**.
    *   **Structured JSON Logging:** High-performance, searchable logs compatible with ELK/Splunk.
*   **Google Engineering Standards:**
    *   **Safety:** Integrated **Google ErrorProne** for compile-time bug detection.
    *   **Consistency:** Non-negotiable code formatting via **Spotless (Google Java Format)**.
    *   **Self-Healing:** Kubernetes manifests with precision Liveness and Readiness probes.

## 🏗️ Components
*   **GatewayService:** API Gateway, Rate Limiting, Resilience, and Routing.
*   **PatientService:** Core CRUD, Outbox pattern, and Contract Provider.
*   **NotificationService:** Listens to Kafka to dispatch emails on patient events.
*   **AiChatService:** Retrieval-Augmented Generation (RAG) AI agent for interactive patient queries.
*   **Infrastructure:** PostgreSQL, Redis, Apache Kafka.

## ⚡ Cloud-Native Optimization
* Java services now use production Docker defaults (multi-stage builds, non-root runtime, JVM container memory flags).
* Production runtime tuning is available via `SPRING_PROFILES_ACTIVE=prod` in each service.
* Kubernetes manifests now include resource requests/limits and startup probes for safer scheduling and faster restarts.
* Autoscaling and disruption safety are defined in `./k8s/autoscaling.yaml`.
* CI now enforces startup-time, memory, and image-size budgets with scripts under `./scripts/perf/`.
*   Frontend production container serves compressed static assets with immutable cache headers.

## 🗑️ Architectural Trade-offs & Simplifications
To maintain a lean, developer-friendly continuous delivery pipeline and prioritize execution speed, the following heavy infrastructure components were deliberately bypassed for this scope:
*   **Terraform:** Removed infrastructure provisioning configurations.
*   **HashiCorp Vault (Secret Manager):** Removed Vault config dependency and initialized service credentials/addresses directly through local environment variables (standard `.env` files and `docker-compose.yml` properties).
*   **ArgoCD & Canary Deployments:** Removed `argocd-app.yaml`, `argo-rollout.yaml`, and `app-canary.yaml` deployment manifests to simplify standard Kubernetes deployments.
*   **gRPC Protocol:** Migrated microservice endpoints to REST APIs (using Spring `RestClient`) to keep service-to-service communication simple, readable, and standard for web clients without protoc compilations.
*   **Prometheus & Grafana:** Removed Prometheus metrics collection and Grafana visualization dashboard configurations.
*   **Keycloak & Spring Security (OAuth2):** Removed Keycloak service container and all OAuth2 JWT-based access security configurations.
*   **Istio Service Mesh:** Removed Istio routing, mutual TLS security, and container sidecar injection manifests.
