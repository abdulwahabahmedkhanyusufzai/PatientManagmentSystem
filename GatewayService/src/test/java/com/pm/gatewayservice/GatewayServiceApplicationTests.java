package com.pm.gatewayservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {"spring.cloud.gateway.redis-rate-limiter.enabled=false"})
class GatewayServiceApplicationTests {

  @Test
  void contextLoads() {}
}
