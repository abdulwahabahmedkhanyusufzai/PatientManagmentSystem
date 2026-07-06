package com.pm.patientservice.config;

import org.springframework.aot.hint.MemberCategory;
import org.springframework.aot.hint.RuntimeHints;
import org.springframework.aot.hint.RuntimeHintsRegistrar;
import org.springframework.aot.hint.TypeReference;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportRuntimeHints;

@Configuration
@ImportRuntimeHints(FlywayAotConfig.FlywayHints.class)
public class FlywayAotConfig {

  public static class FlywayHints implements RuntimeHintsRegistrar {
    @Override
    public void registerHints(RuntimeHints hints, ClassLoader classLoader) {
      // Register Flyway extensions for reflection
      hints
          .reflection()
          .registerType(
              TypeReference.of(
                  "org.flywaydb.core.internal.configuration.extensions.DeployScriptFilenameConfigurationExtension"),
              MemberCategory.INVOKE_PUBLIC_METHODS,
              MemberCategory.INVOKE_PUBLIC_CONSTRUCTORS);
      hints
          .reflection()
          .registerType(
              TypeReference.of(
                  "org.flywaydb.core.internal.configuration.extensions.PrepareScriptFilenameConfigurationExtension"),
              MemberCategory.INVOKE_PUBLIC_METHODS,
              MemberCategory.INVOKE_PUBLIC_CONSTRUCTORS);
      hints
          .reflection()
          .registerType(
              TypeReference.of(
                  "org.flywaydb.core.internal.configuration.extensions.PublishingConfigurationExtension"),
              MemberCategory.INVOKE_PUBLIC_METHODS,
              MemberCategory.INVOKE_PUBLIC_CONSTRUCTORS);
    }
  }
}
