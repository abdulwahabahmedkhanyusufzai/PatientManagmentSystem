resource "kubernetes_namespace" "patient_system" {
  metadata {
    name = "patient-system"
    labels = {
      istio-injection = "enabled"
    }
  }
}

# Example of managing a Helm release via Terraform (e.g., for Prometheus/Grafana)
resource "helm_release" "prometheus" {
  name       = "prometheus"
  repository = "https://prometheus-community.github.io/helm-charts"
  chart      = "prometheus"
  namespace  = kubernetes_namespace.patient_system.metadata[0].name

  set {
    name  = "server.persistentVolume.enabled"
    value = "false"
  }
}
