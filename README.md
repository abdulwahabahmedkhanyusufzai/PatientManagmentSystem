# Patient Management System (Google-Level Architecture)

A robust, planetary-scale-ready microservices system built with modern engineering excellence

## 🚀 Advanced Architecture Features
*   **Zero-Trust Security:** Fully transformed into an **OAuth2 Resource Server** using JWT validation. Move beyond Basic Auth to standard Identity Provider integration.
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
*   **GatewayService:** API Gateway, Rate Limiting, Resilience, Logging.
*   **PatientService:** Core CRUD, OAuth2 Security, Contract Provider.
*   **Infrastructure:** PostgreSQL, Redis.

## ⚡ Cloud-Native Optimization
* Java services now use production Docker defaults (multi-stage builds, non-root runtime, JVM container memory flags).
* Production runtime tuning is available via `SPRING_PROFILES_ACTIVE=prod` in each service.
* Kubernetes manifests now include resource requests/limits and startup probes for safer scheduling and faster restarts.
* Autoscaling and disruption safety are defined in `/home/runner/work/PatientManagmentSystem/PatientManagmentSystem/abdulwahabahmedkhanyusufzai/PatientManagmentSystem/k8s/autoscaling.yaml`.
* CI now enforces startup-time, memory, and image-size budgets with scripts under `/home/runner/work/PatientManagmentSystem/PatientManagmentSystem/abdulwahabahmedkhanyusufzai/PatientManagmentSystem/scripts/perf`.
*   Frontend production container serves compressed static assets with immutable cache headers.

## 🗑️ Removed Features (De-cluttering & Simplification)
The following planetary-scale components and complex delivery patterns were removed to simplify development and deployment overhead:
*   **Terraform:** Removed infrastructure provisioning configurations.
*   **HashiCorp Vault (Secret Manager):** Removed Vault config dependency and initialized service credentials/addresses directly through local environment variables (standard `.env` files and `docker-compose.yml` properties).
*   **ArgoCD & Canary Deployments:** Removed `argocd-app.yaml`, `argo-rollout.yaml`, and `app-canary.yaml` deployment manifests to simplify standard Kubernetes deployments.
*   **Prometheus & Grafana:** Removed Prometheus metrics collection and Grafana visualization dashboard configurations.
