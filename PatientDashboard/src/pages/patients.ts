export interface Patient {
  id: string;
  name: string;
  age: string;
  gender: string;
  email: string;
  physician: string;
  department: string;
  intakeDate: string;
  status: string;
}

export const mockPatients: Patient[] = [
  { id: '#P-2983', name: 'Evelyn Stone', age: '42', gender: 'F', email: 'evelyn.stone@example.com', physician: 'Dr. Jenkins', department: 'Cardiology', intakeDate: 'Jul 01, 2026', status: 'Admitted' },
  { id: '#P-9201', name: 'Marcus Vance', age: '58', gender: 'M', email: 'marcus.vance@example.com', physician: 'Dr. Al-Mutawa', department: 'Emergency', intakeDate: 'Jul 03, 2026', status: 'Critical' },
  { id: '#P-1823', name: 'Clara Oswald', age: '29', gender: 'F', email: 'clara.oswald@example.com', physician: 'Dr. Lee', department: 'Outpatient', intakeDate: 'Jun 28, 2026', status: 'Checked Out' },
  { id: '#P-4820', name: 'Thomas Shelby', age: '47', gender: 'M', email: 'thomas.shelby@example.com', physician: 'Dr. Jenkins', department: 'Intensive Care', intakeDate: 'Jun 30, 2026', status: 'Under Observation' },
  { id: '#P-3024', name: 'Adaline Bowman', age: '81', gender: 'F', email: 'adaline.bowman@example.com', physician: 'Dr. Vance', department: 'Geriatrics', intakeDate: 'Jul 02, 2026', status: 'Admitted' }
];

export let patientsData: Patient[] = [...mockPatients];

export function setPatientsData(data: Patient[]) {
  patientsData = data;
}

export function renderPatients(): string {
  const rows = patientsData.map(p => {
    let statusClass = 'badge-success';
    if (p.status === 'Critical') statusClass = 'badge-danger';
    if (p.status === 'Under Observation') statusClass = 'badge-warning';
    
    return `
      <tr>
        <td style="font-weight: 700; color: var(--primary);">${p.id}</td>
        <td style="font-weight: 600;">${p.name}</td>
        <td>${p.age} / ${p.gender}</td>
        <td>${p.physician}</td>
        <td>${p.department}</td>
        <td>${p.intakeDate}</td>
        <td><span class="badge ${statusClass}">${p.status}</span></td>
        <td>
          <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="alert('Viewing patient chart for: ${p.name}')">View Chart</button>
        </td>
      </tr>
    `;
  }).join('');

  return `
    <!-- Action Row -->
    <div class="search-filter-row page-fade-in">
      <div class="search-input-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="text" id="patient-search-input" class="form-input" placeholder="Search patients by name, ID or physician..." />
      </div>
      
      <div class="filter-button-group">
        <button class="btn btn-secondary active" style="background-color: var(--primary-light); color: var(--primary); border-color: rgba(13, 148, 136, 0.2);">All Patients</button>
      </div>

      <button class="btn btn-primary" id="btn-register-patient" style="display: inline-flex; gap: 0.5rem; align-items:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Register Patient
      </button>
    </div>

    <!-- Register Modal -->
    <div id="register-modal" class="sidebar-overlay" style="display:none; justify-content:center; align-items:center;">
      <div class="panel-card" style="width:100%; max-width:500px; margin: 2rem; position:relative; z-index:1001;">
        <div class="panel-header" style="margin-bottom:1.5rem">
          <h3 class="panel-title">Register New Patient</h3>
          <button id="modal-close" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--text-secondary)">&times;</button>
        </div>
        <form id="register-patient-form" class="auth-form">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="reg-name" class="form-input" placeholder="e.g. John Doe" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="reg-email" class="form-input" placeholder="e.g. john.doe@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Physical Address</label>
            <input type="text" id="reg-address" class="form-input" placeholder="e.g. 123 Health Ave, NY" required />
          </div>
          <div class="form-group">
            <label class="form-label">Date of Birth</label>
            <input type="date" id="reg-dob" class="form-input" required />
          </div>
          <button type="submit" class="btn btn-primary" style="margin-top:1rem; width:100%">Save Patient Record</button>
        </form>
      </div>
    </div>

    <!-- Patients Table -->
    <div class="table-responsive page-fade-in">
      <table class="premium-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age / Gender</th>
            <th>Primary Physician</th>
            <th>Department</th>
            <th>Intake Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="patients-table-body">
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}
