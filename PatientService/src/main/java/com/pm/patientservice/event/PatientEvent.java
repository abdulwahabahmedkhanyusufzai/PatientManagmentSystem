package com.pm.patientservice.event;

import java.time.LocalDateTime;
import java.util.UUID;

public class PatientEvent {

  private UUID patientId;
  private String eventType;
  private LocalDateTime timestamp;
  private Object payload;

  public PatientEvent() {}

  public PatientEvent(UUID patientId, String eventType, Object payload) {
    this.patientId = patientId;
    this.eventType = eventType;
    this.timestamp = LocalDateTime.now();
    this.payload = payload;
  }

  public UUID getPatientId() {
    return patientId;
  }

  public void setPatientId(UUID patientId) {
    this.patientId = patientId;
  }

  public String getEventType() {
    return eventType;
  }

  public void setEventType(String eventType) {
    this.eventType = eventType;
  }

  public LocalDateTime getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(LocalDateTime timestamp) {
    this.timestamp = timestamp;
  }

  public Object getPayload() {
    return payload;
  }

  public void setPayload(Object payload) {
    this.payload = payload;
  }
}
