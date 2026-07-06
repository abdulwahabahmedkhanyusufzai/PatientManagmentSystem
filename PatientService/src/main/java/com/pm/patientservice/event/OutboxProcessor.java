package com.pm.patientservice.event;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pm.patientservice.model.OutboxEvent;
import com.pm.patientservice.repository.OutboxRepository;
import java.util.List;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class OutboxProcessor {

  private static final Logger logger = LoggerFactory.getLogger(OutboxProcessor.class);

  private final OutboxRepository outboxRepository;
  private final PatientEventPublisher eventPublisher;
  private final ObjectMapper objectMapper;

  public OutboxProcessor(
      OutboxRepository outboxRepository,
      PatientEventPublisher eventPublisher,
      ObjectMapper objectMapper) {
    this.outboxRepository = outboxRepository;
    this.eventPublisher = eventPublisher;
    this.objectMapper = objectMapper;
  }

  @Scheduled(fixedDelay = 1000)
  @Transactional
  public void processOutbox() {
    List<OutboxEvent> events = outboxRepository.findAll();
    if (events.isEmpty()) {
      return;
    }

    logger.info("Processing {} outbox events", events.size());

    for (OutboxEvent event : events) {
      try {
        UUID patientId = UUID.fromString(event.getAggregateId());
        Object payloadObj = objectMapper.readValue(event.getPayload(), Object.class);

        PatientEvent patientEvent = new PatientEvent(patientId, event.getType(), payloadObj);
        eventPublisher.publishPatientEvent(patientEvent);

        outboxRepository.delete(event);
      } catch (Exception e) {
        logger.error("Failed to process outbox event: {}", event.getId(), e);
      }
    }
  }
}
