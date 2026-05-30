package com.pm.patientservice.event;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class PatientEventPublisher {

  private static final Logger logger = LoggerFactory.getLogger(PatientEventPublisher.class);
  private static final String TOPIC = "patient-events";

  private final KafkaTemplate<String, PatientEvent> kafkaTemplate;

  public PatientEventPublisher(KafkaTemplate<String, PatientEvent> kafkaTemplate) {
    this.kafkaTemplate = kafkaTemplate;
  }

  public void publishPatientEvent(PatientEvent event) {
    logger.info(
        "Publishing event: {} for Patient ID: {}", event.getEventType(), event.getPatientId());
    kafkaTemplate.send(TOPIC, event.getPatientId().toString(), event);
  }
}
