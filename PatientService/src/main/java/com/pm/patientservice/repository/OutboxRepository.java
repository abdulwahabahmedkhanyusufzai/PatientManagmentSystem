package com.pm.patientservice.repository;

import com.pm.patientservice.model.OutboxEvent;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutboxRepository extends JpaRepository<OutboxEvent, UUID> {}
