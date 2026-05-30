import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 users
    { duration: '1m', target: 20 },  // Hold at 20 users
    { duration: '30s', target: 0 },  // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(99)<500'], // 99% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'],   // Error rate must be less than 1%
  },
};

export default function () {
  const res = http.get('http://localhost:8080/actuator/health');
  
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);
}
