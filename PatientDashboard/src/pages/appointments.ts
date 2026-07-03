export function renderAppointments(): string {
  return `
    <div class="calendar-view">
      <!-- Calendar Header -->
      <div class="calendar-header-row">
        <div style="display:flex; align-items:center; gap: 1rem;">
          <h2 style="font-size: 1.5rem; font-weight:800; color: var(--text-primary);">July 2026</h2>
          <div style="display:flex; gap:0.25rem;">
            <button class="btn btn-secondary" style="padding:0.4rem 0.6rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button class="btn btn-secondary" style="padding:0.4rem 0.6rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary">Month View</button>
          <button class="btn btn-secondary">Week View</button>
          <button class="btn btn-primary" style="display:flex; align-items:center; gap:0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            New Booking
          </button>
        </div>
      </div>

      <!-- Calendar Grid -->
      <div class="calendar-grid-premium">
        <!-- Week Header -->
        <div class="calendar-day-header">Sun</div>
        <div class="calendar-day-header">Mon</div>
        <div class="calendar-day-header">Tue</div>
        <div class="calendar-day-header">Wed</div>
        <div class="calendar-day-header">Thu</div>
        <div class="calendar-day-header">Fri</div>
        <div class="calendar-day-header">Sat</div>

        <!-- Row 1 -->
        <div class="calendar-day-cell"><span class="day-number inactive">28</span></div>
        <div class="calendar-day-cell"><span class="day-number inactive">29</span></div>
        <div class="calendar-day-cell"><span class="day-number inactive">30</span></div>
        <div class="calendar-day-cell"><span class="day-number">1</span><div class="calendar-event">09:00 - E. Stone</div></div>
        <div class="calendar-day-cell"><span class="day-number">2</span></div>
        <div class="calendar-day-cell"><span class="day-number">3</span><div class="calendar-event secondary-event">14:00 - M. Vance</div></div>
        <div class="calendar-day-cell"><span class="day-number">4</span></div>

        <!-- Row 2 -->
        <div class="calendar-day-cell"><span class="day-number">5</span></div>
        <div class="calendar-day-cell"><span class="day-number">6</span><div class="calendar-event">10:30 - C. Oswald</div></div>
        <div class="calendar-day-cell"><span class="day-number">7</span></div>
        <div class="calendar-day-cell"><span class="day-number">8</span></div>
        <div class="calendar-day-cell"><span class="day-number">9</span><div class="calendar-event">11:15 - T. Shelby</div></div>
        <div class="calendar-day-cell"><span class="day-number">10</span></div>
        <div class="calendar-day-cell"><span class="day-number">11</span></div>

        <!-- Row 3 -->
        <div class="calendar-day-cell"><span class="day-number">12</span></div>
        <div class="calendar-day-cell"><span class="day-number">13</span></div>
        <div class="calendar-day-cell"><span class="day-number today">14</span><div class="calendar-event">09:30 - A. Bowman</div><div class="calendar-event secondary-event">13:00 - Dr. Jenkins</div></div>
        <div class="calendar-day-cell"><span class="day-number">15</span></div>
        <div class="calendar-day-cell"><span class="day-number">16</span></div>
        <div class="calendar-day-cell"><span class="day-number">17</span></div>
        <div class="calendar-day-cell"><span class="day-number">18</span></div>

        <!-- Row 4 -->
        <div class="calendar-day-cell"><span class="day-number">19</span></div>
        <div class="calendar-day-cell"><span class="day-number">20</span><div class="calendar-event">16:00 - Consult</div></div>
        <div class="calendar-day-cell"><span class="day-number">21</span></div>
        <div class="calendar-day-cell"><span class="day-number">22</span></div>
        <div class="calendar-day-cell"><span class="day-number">23</span></div>
        <div class="calendar-day-cell"><span class="day-number">24</span></div>
        <div class="calendar-day-cell"><span class="day-number">25</span></div>
      </div>
    </div>
  `;
}
