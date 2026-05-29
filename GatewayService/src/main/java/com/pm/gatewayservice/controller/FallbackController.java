package com.pm.gatewayservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class FallbackController {

  @GetMapping("/fallback/patient-service")
  public Mono<String> patientServiceFallback() {
    return Mono.just("Patient Service is temporarily unavailable. Please try again later.");
  }
}
