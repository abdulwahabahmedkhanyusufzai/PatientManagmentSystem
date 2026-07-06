package com.pm.gatewayservice.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import reactor.core.publisher.Mono;

@Configuration
public class LoggingConfig {

  private static final Logger logger = LoggerFactory.getLogger(LoggingConfig.class);

  @Bean
  @Order(-1)
  public GlobalFilter loggingFilter() {
    return (exchange, chain) -> {
      long startTime = System.currentTimeMillis();
      String path = exchange.getRequest().getPath().value();
      String method =
          exchange.getRequest().getMethod() != null
              ? exchange.getRequest().getMethod().name()
              : "UNKNOWN";

      return chain
          .filter(exchange)
          .then(
              Mono.fromRunnable(
                  () -> {
                    long duration = System.currentTimeMillis() - startTime;
                    int statusCode = 0;
                    if (exchange.getResponse().getStatusCode() != null) {
                      statusCode = exchange.getResponse().getStatusCode().value();
                    }
                    logger.info(
                        "Observed request: {} {} | Status: {} | Duration: {}ms",
                        method,
                        path,
                        statusCode,
                        duration);
                  }));
    };
  }
}
