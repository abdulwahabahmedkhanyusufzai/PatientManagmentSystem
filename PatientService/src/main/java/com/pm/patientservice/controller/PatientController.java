package com.pm.patientservice.controller;

import com.pm.patientservice.dto.PatientRequestDTO;
import com.pm.patientservice.dto.PatientResponseDTO;
import com.pm.patientservice.dto.validators.CreatePatientValidationGroup;
import com.pm.patientservice.service.PatientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.groups.Default;
import java.util.List;
import java.util.UUID;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/** REST controller for managing patient records. */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/patients")
@Tag(
    name = "Patient Management",
    description = "Operations for creating, retrieving, updating, and deleting patient records")
public class PatientController {
  private final PatientService patientService;

  public PatientController(PatientService patientService) {
    this.patientService = patientService;
  }

  /**
   * Retrieves all registered patients.
   *
   * @return A list of patient records.
   */
  @GetMapping
  @Operation(
      summary = "Get all patients",
      description = "Returns a list of all registered patients.")
  public ResponseEntity<List<PatientResponseDTO>> getPatients() {
    List<PatientResponseDTO> patients = patientService.getPatients();
    return ResponseEntity.ok().body(patients);
  }

  /**
   * Retrieves a specific patient by their unique ID.
   *
   * @param id The UUID of the patient.
   * @return The patient record if found.
   */
  @GetMapping("/{id}")
  @Operation(
      summary = "Get patient by ID",
      description = "Returns a single patient record by their UUID.")
  @ApiResponse(responseCode = "200", description = "Patient found")
  @ApiResponse(responseCode = "404", description = "Patient not found")
  public ResponseEntity<PatientResponseDTO> getPatientById(@PathVariable UUID id) {
    PatientResponseDTO patient = patientService.getPatientById(id);
    return ResponseEntity.ok().body(patient);
  }

  /**
   * Creates a new patient record.
   *
   * @param patientRequestDTO The patient details.
   * @return The created patient record.
   */
  @PostMapping
  @Operation(
      summary = "Create a new patient",
      description = "Registers a new patient in the system.")
  @ApiResponse(responseCode = "200", description = "Patient created successfully")
  @ApiResponse(responseCode = "400", description = "Invalid input or email already exists")
  public ResponseEntity<PatientResponseDTO> createPatient(
      @Validated({Default.class, CreatePatientValidationGroup.class}) @RequestBody
          PatientRequestDTO patientRequestDTO) {
    PatientResponseDTO patientResponseDTO = patientService.createPatient(patientRequestDTO);
    return ResponseEntity.ok().body(patientResponseDTO);
  }

  /**
   * Updates an existing patient record.
   *
   * @param id The UUID of the patient to update.
   * @param patientRequestDTO The updated details.
   * @return The updated patient record.
   */
  @PutMapping("/{id}")
  @Operation(summary = "Update patient", description = "Updates details of an existing patient.")
  @ApiResponse(responseCode = "200", description = "Patient updated successfully")
  @ApiResponse(responseCode = "404", description = "Patient not found")
  public ResponseEntity<PatientResponseDTO> updatePatient(
      @PathVariable UUID id,
      @Validated({Default.class}) @RequestBody PatientRequestDTO patientRequestDTO) {
    PatientResponseDTO patientResponseDTO = patientService.updatePatient(id, patientRequestDTO);
    return ResponseEntity.ok().body(patientResponseDTO);
  }

  /**
   * Deletes a patient record by ID.
   *
   * @param id The UUID of the patient to delete.
   * @return A 204 No Content response on success.
   */
  @DeleteMapping("/{id}")
  @Operation(
      summary = "Delete patient",
      description = "Permanently removes a patient record from the system.")
  @ApiResponse(responseCode = "204", description = "Patient deleted successfully")
  @ApiResponse(responseCode = "404", description = "Patient not found")
  public ResponseEntity<Void> deletePatient(@PathVariable UUID id) {
    patientService.deletePatient(id);
    return ResponseEntity.noContent().build();
  }
}
