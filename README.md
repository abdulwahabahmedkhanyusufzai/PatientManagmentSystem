# Patient Management System (Google-Level Architecture)

A robust, planetary-scale-ready microservices system built with modern engineering excellence.

## 🚀 Advanced Architecture Features
*   **Zero-Trust Security:** Fully transformed into an **OAuth2 Resource Server** using JWT validation. Move beyond Basic Auth to standard Identity Provider integration.
*   **Resilient Traffic Control:** 
    *   **Redis-backed Rate Limiting:** Protects against DDoS and noisy neighbors using a distributed token bucket algorithm.
    *   **Circuit Breakers & Retries:** Integrated **Resilience4j** to prevent cascading failures and handle transient network glitches.
*   **Consumer-Driven Contract Testing:** Uses **Spring Cloud Contract** to ensure API compatibility between the Gateway and downstream services, preventing breaking changes.
*   **Enterprise Observability:**
    *   **Distributed Tracing:** Full trace propagation via **Micrometer Tracing (Brave/Zipkin)**.
    *   **Structured JSON Logging:** High-performance, searchable logs compatible with ELK/Splunk.
    *   **Prometheus & Grafana:** Comprehensive metrics scraping for real-time monitoring.
*   **Google Engineering Standards:**
    *   **Safety:** Integrated **Google ErrorProne** for compile-time bug detection.
    *   **Consistency:** Non-negotiable code formatting via **Spotless (Google Java Format)**.
    *   **Self-Healing:** Kubernetes manifests with precision Liveness and Readiness probes.

## 🏗️ Components
*   **GatewayService:** API Gateway, Rate Limiting, Resilience, Logging.
*   **PatientService:** Core CRUD, OAuth2 Security, Contract Provider.
*   **Infrastructure:** PostgreSQL, Redis, Prometheus, Grafana.