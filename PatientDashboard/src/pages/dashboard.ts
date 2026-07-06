export function renderDashboard(): string {
  return `
    <!-- Top Stats Cards -->
    <div class="dashboard-grid">
      <!-- Card 1 -->
      <div class="stat-card-premium">
        <div class="stat-info">
          <span class="stat-label">Total Patients Managed</span>
          <span class="stat-value" id="dashboard-total-patients">1,482</span>
          <span class="stat-trend up">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            +12% this month
          </span>
        </div>
        <div class="stat-icon teal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="stat-card-premium">
        <div class="stat-info">
          <span class="stat-label">Appointments Today</span>
          <span class="stat-value">18</span>
          <span class="stat-trend up">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            6 completed
          </span>
        </div>
        <div class="stat-icon indigo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
          </svg>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="stat-card-premium">
        <div class="stat-info">
          <span class="stat-label">Urgent Reports</span>
          <span class="stat-value">3</span>
          <span class="stat-trend down" style="color: var(--danger);">
            Requires review
          </span>
        </div>
        <div class="stat-icon rose">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="stat-card-premium">
        <div class="stat-info">
          <span class="stat-label">Bed Occupancy Rate</span>
          <span class="stat-value">84%</span>
          <span class="stat-trend up">
            Normal threshold
          </span>
        </div>
        <div class="stat-icon sky">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="9" width="20" height="12" rx="2" ry="2"/>
            <path d="M2 4v5M22 4v5M2 8h20"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Charts & Tables Layout Section -->
    <div class="dashboard-sections">
      <!-- Left side: Activity Graph -->
      <div class="panel-card">
        <div class="panel-header">
          <h3 class="panel-title">Admissions vs. Discharges (7-Day Overview)</h3>
          <span style="font-size:0.8rem; color:var(--text-secondary); font-weight: 600;">Updated 10m ago</span>
        </div>
        
        <div class="graph-container">
          <svg viewBox="0 0 600 220" width="100%" height="100%">
            <!-- Grid lines -->
            <line x1="40" y1="30" x2="560" y2="30" stroke="#f1f5f9" stroke-width="1.5"/>
            <line x1="40" y1="80" x2="560" y2="80" stroke="#f1f5f9" stroke-width="1.5"/>
            <line x1="40" y1="130" x2="560" y2="130" stroke="#f1f5f9" stroke-width="1.5"/>
            <line x1="40" y1="180" x2="560" y2="180" stroke="#e2e8f0" stroke-width="1.5"/>
            
            <!-- X Axis labels -->
            <text x="40" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">Mon</text>
            <text x="126" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">Tue</text>
            <text x="212" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">Wed</text>
            <text x="298" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">Thu</text>
            <text x="384" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">Fri</text>
            <text x="470" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">Sat</text>
            <text x="556" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">Sun</text>
            
            <!-- Y Axis labels -->
            <text x="25" y="34" fill="#94a3b8" font-size="10" text-anchor="end">150</text>
            <text x="25" y="84" fill="#94a3b8" font-size="10" text-anchor="end">100</text>
            <text x="25" y="134" fill="#94a3b8" font-size="10" text-anchor="end">50</text>
            <text x="25" y="184" fill="#94a3b8" font-size="10" text-anchor="end">0</text>
            
            <!-- Admission Path (Teal) -->
            <path d="M 40 150 L 126 120 L 212 135 L 298 90 L 384 110 L 470 50 L 556 70" fill="none" stroke="#0d9488" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 40 150 L 126 120 L 212 135 L 298 90 L 384 110 L 470 50 L 556 70 L 556 180 L 40 180 Z" fill="url(#grad-teal)" opacity="0.08"/>

            <!-- Discharge Path (Indigo) -->
            <path d="M 40 170 L 126 140 L 212 110 L 298 120 L 384 95 L 470 85 L 556 60" fill="none" stroke="#4f46e5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            
            <!-- Linear Gradients -->
            <defs>
              <linearGradient id="grad-teal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0d9488"/>
                <stop offset="100%" stop-color="#ffffff"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <!-- Right side: Recent Intake logs -->
      <div class="panel-card">
        <div class="panel-header">
          <h3 class="panel-title">System Activities</h3>
        </div>
        
        <ul class="recent-activities-list">
          <li class="activity-item">
            <div class="activity-avatar">SJ</div>
            <div class="activity-details">
              <p class="activity-text"><strong>Sarah Jenkins</strong> signed off on Lab Report for Patient #8103.</p>
              <span class="activity-time">5 minutes ago</span>
            </div>
          </li>
          
          <li class="activity-item">
            <div class="activity-avatar">MK</div>
            <div class="activity-details">
              <p class="activity-text"><strong>Mark Kollins</strong> booked appointment for Cardiology consultation.</p>
              <span class="activity-time">22 minutes ago</span>
            </div>
          </li>
          
          <li class="activity-item">
            <div class="activity-avatar">HS</div>
            <div class="activity-details">
              <p class="activity-text"><strong>Helen Stuart</strong> check-in registered for Room 304B.</p>
              <span class="activity-time">1 hour ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `;
}
