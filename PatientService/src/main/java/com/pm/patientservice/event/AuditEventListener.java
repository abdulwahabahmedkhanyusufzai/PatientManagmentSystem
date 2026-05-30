package com.pm.patientservice.event;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class AuditEventListener {

  private static final Logger logger = LoggerFactory.getLogger(AuditEventListener.class);

  @KafkaListener(topics = "patient-events", groupId = "patient-audit-group")
  public void consume(PatientEvent event) {
    logger.info(
        "AUDIT LOG - Event consumed: Type: {}, Patient ID: {}, Timestamp: {}",
        event.getEventType(),
        event.getPatientId(),
        event.getTimestamp());
  }
}
