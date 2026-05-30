package com.pm.notificationservice.listener;

import com.pm.notificationservice.model.PatientEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class PatientEventListener {

  private static final Logger logger = LoggerFactory.getLogger(PatientEventListener.class);
  private final JavaMailSender mailSender;

  public PatientEventListener(JavaMailSender mailSender) {
    this.mailSender = mailSender;
  }

  @KafkaListener(topics = "patient-events", groupId = "notification-group")
  public void handlePatientEvent(PatientEvent event) {
    logger.info(
        "Received event: {} for patient ID: {}", event.getEventType(), event.getPatientId());

    if ("PATIENT_CREATED".equals(event.getEventType())) {
      sendWelcomeEmail(event);
    }
  }

  private void sendWelcomeEmail(PatientEvent event) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("no-reply@pm-system.com");
    message.setTo("admin@pm-system.com"); // Placeholder for demonstration
    message.setSubject("Welcome to Patient Management System");
    message.setText(
        String.format(
            "Hello, \n\nA new patient with ID %s has been registered.", event.getPatientId()));

    try {
      mailSender.send(message);
      logger.info("Welcome email sent for patient ID: {}", event.getPatientId());
    } catch (Exception e) {
      logger.error("Failed to send email for patient ID: {}", event.getPatientId(), e);
    }
  }
}
