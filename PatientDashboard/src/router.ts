import Navigo from 'navigo';
import { renderLanding } from './pages/landing';
import { renderLogin } from './pages/login';
import { renderDashboard } from './pages/dashboard';
import { renderPatients, setPatientsData, mockPatients } from './pages/patients';
import type { Patient } from './pages/patients';
import { renderAppointments } from './pages/appointments';
import { renderAbout } from './pages/about';
import { renderContact } from './pages/contact';

// Initialize Theme on Application Load with Sandbox Safeguards
let isDarkTheme = false;
try {
  const savedTheme = localStorage.getItem('theme');
  isDarkTheme = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
} catch (e) {
  isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

if (isDarkTheme) {
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.remove('dark-theme');
}

// --------------------------------------------------------------------------
// API Integration Helpers
// --------------------------------------------------------------------------
async function loadPatientsFromAPI() {
  try {
    const response = await fetch('http://localhost:8080/patients');
    if (response.ok) {
      const data = await response.json();
      const formatted: Patient[] = data.map((p: any) => {
        // Calculate age from Date of Birth
        let age = 'N/A';
        if (p.dateOfBirth) {
          const dob = new Date(p.dateOfBirth);
          const diff = Date.now() - dob.getTime();
          age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)).toString();
        }
        return {
          id: `#P-${p.id.substring(0, 4).toUpperCase()}`,
          name: p.name,
          email: p.email,
          age: age,
          gender: 'M/F',
          physician: 'Dr. Jenkins',
          department: 'Outpatient',
          intakeDate: p.registeredDate || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
          status: 'Admitted'
        };
      });
      setPatientsData(formatted);
      
      const tbody = document.getElementById('patients-table-body');
      if (tbody) {
        tbody.innerHTML = formatted.map(p => `
          <tr>
            <td style="font-weight: 700; color: var(--primary);">${p.id}</td>
            <td style="font-weight: 600;">${p.name}</td>
            <td>${p.age} / ${p.gender}</td>
            <td>${p.physician}</td>
            <td>${p.department}</td>
            <td>${p.intakeDate}</td>
            <td><span class="badge badge-success">${p.status}</span></td>
            <td>
              <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="alert('Viewing patient chart for: ${p.name}')">View Chart</button>
            </td>
          </tr>
        `).join('');
      }
    }
  } catch (e) {
    console.warn('Backend API connection failed. Sourcing local patient array data.', e);
  }
}

function setupPatientsListeners() {
  const registerBtn = document.getElementById('btn-register-patient');
  const modal = document.getElementById('register-modal');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('register-patient-form') as HTMLFormElement;

  if (registerBtn && modal && closeBtn) {
    registerBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
      }, 10);
    });

    closeBtn.addEventListener('click', () => {
      modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    });
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = (document.getElementById('reg-name') as HTMLInputElement).value;
      const email = (document.getElementById('reg-email') as HTMLInputElement).value;
      const address = (document.getElementById('reg-address') as HTMLInputElement).value;
      const dateOfBirth = (document.getElementById('reg-dob') as HTMLInputElement).value;

      try {
        const response = await fetch('http://localhost:8080/patients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, address, dateOfBirth })
        });

        if (response.ok) {
          alert('Patient registered successfully in microservice database!');
          await loadPatientsFromAPI();
          if (modal) {
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
            setTimeout(() => { modal.style.display = 'none'; }, 300);
          }
        } else {
          alert('Database Validation Error: ' + response.statusText);
        }
      } catch (err) {
        console.error('Failed to create patient on backend API:', err);
        alert('Backend API offline! Sourcing patient record to local memory.');
        
        // Sourcing local fallback record
        const newPatient: Patient = {
          id: `#P-${Math.floor(1000 + Math.random() * 9000)}`,
          name,
          email,
          age: Math.floor((Date.now() - new Date(dateOfBirth).getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toString(),
          gender: 'M/F',
          physician: 'Dr. Jenkins',
          department: 'Outpatient',
          intakeDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
          status: 'Admitted'
        };
        const current = [...mockPatients, newPatient];
        setPatientsData(current);
        
        const tbody = document.getElementById('patients-table-body');
        if (tbody) {
          tbody.innerHTML = current.map(p => `
            <tr>
              <td style="font-weight: 700; color: var(--primary);">${p.id}</td>
              <td style="font-weight: 600;">${p.name}</td>
              <td>${p.age} / ${p.gender}</td>
              <td>${p.physician}</td>
              <td>${p.department}</td>
              <td>${p.intakeDate}</td>
              <td><span class="badge badge-success">${p.status}</span></td>
              <td>
                <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="alert('Viewing patient chart for: ${p.name}')">View Chart</button>
              </td>
            </tr>
          `).join('');
        }
        if (modal) {
          modal.style.opacity = '0';
          modal.style.pointerEvents = 'none';
          setTimeout(() => { modal.style.display = 'none'; }, 300);
        }
      }
    });
  }
}

// --------------------------------------------------------------------------
// Floating AI Assistant Event Listeners
// --------------------------------------------------------------------------
function setupAiChat() {
  const trigger = document.getElementById('ai-chat-trigger');
  const drawer = document.getElementById('ai-chat-drawer');
  const closeBtn = document.getElementById('ai-drawer-close');
  const chatInput = document.getElementById('ai-chat-input') as HTMLInputElement;
  const sendBtn = document.getElementById('ai-chat-send');
  const chatBody = document.getElementById('ai-drawer-body');

  if (!trigger || !drawer || !closeBtn || !chatInput || !sendBtn || !chatBody) return;

  // Cache local non-nullable reference to satisfy TypeScript closures
  const activeChatBody = chatBody;

  trigger.addEventListener('click', () => {
    drawer.classList.toggle('active');
  });

  closeBtn.addEventListener('click', () => {
    drawer.classList.remove('active');
  });

  async function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatInput.value = '';

    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message system';
    typingDiv.style.opacity = '0.7';
    typingDiv.innerHTML = '<p><em>Clinical Copilot is thinking...</em></p>';
    activeChatBody.appendChild(typingDiv);
    activeChatBody.scrollTop = activeChatBody.scrollHeight;

    try {
      const response = await fetch(`http://localhost:8080/chat?message=${encodeURIComponent(text)}`);
      activeChatBody.removeChild(typingDiv);
      if (response.ok) {
        const reply = await response.text();
        appendMessage(reply, 'system');
      } else {
        appendMessage("I couldn't fetch live insight from the medical service. Running offline diagnostics: PMS systems are online.", 'system');
      }
    } catch (e) {
      if (activeChatBody.contains(typingDiv)) activeChatBody.removeChild(typingDiv);
      const lower = text.toLowerCase();
      let reply = "Hello! I am your clinical copilot. I am currently running in simulated offline mode.";
      if (lower.includes('patient') || lower.includes('registry')) {
        reply = `We have ${mockPatients.length} active patients registered in the clinical registry. You can inspect or search them in the Patients tab.`;
      } else if (lower.includes('wait') || lower.includes('admissions') || lower.includes('stats')) {
        reply = "Current Overview stats: admissions and discharges are tracking normally, with average wait times under 2 minutes.";
      } else if (lower.includes('security') || lower.includes('hipaa') || lower.includes('encrypt')) {
        reply = "PMS utilizes column-level AES-256 encryption. Compliance auditing metrics are 100% active.";
      }
      appendMessage(reply, 'system');
    }
  }

  function appendMessage(text: string, sender: 'user' | 'system') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${sender}`;
    msgDiv.innerHTML = `<p>${text}</p>`;
    activeChatBody.appendChild(msgDiv);
    activeChatBody.scrollTop = activeChatBody.scrollHeight;
  }

  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

// --------------------------------------------------------------------------
// Global UI Bindings
// --------------------------------------------------------------------------
function setupPageInteractions() {
  // Theme Toggle Button Binding
  const toggleBtn = document.querySelector('#theme-toggle');
  if (toggleBtn) {
    const cleanBtn = toggleBtn.cloneNode(true);
    toggleBtn.parentNode?.replaceChild(cleanBtn, toggleBtn);
    cleanBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (e) {
        // Safe sandbox fallback
      }
    });
  }

  // Mobile Drawer Toggle Bindings
  const mobileToggle = document.querySelector('#mobile-sidebar-toggle');
  const sidebar = document.querySelector('.app-sidebar');
  const overlay = document.querySelector('#sidebar-overlay');
  
  if (mobileToggle && sidebar && overlay) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.add('mobile-open');
      overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
    });

    const sidebarLinks = document.querySelectorAll('.sidebar-item-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
      });
    });
  }

  // Page Specific Bindings
  if (document.getElementById('patients-table-body')) {
    setupPatientsListeners();
    loadPatientsFromAPI();
  }

  if (document.getElementById('ai-chat-trigger')) {
    setupAiChat();
  }
}

// Initialize router
const router = new Navigo('/', { hash: true });

function renderPage(content: string) {
  const appDiv = document.querySelector<HTMLDivElement>('#app');
  if (appDiv) {
    appDiv.innerHTML = content;
    router.updatePageLinks();
    setupPageInteractions();
  }
}

// App Shell Wrapper for Private Routes
function renderAppShell(title: string, content: string, activeRoute: string): string {
  return `
    <div class="app-shell">
      <!-- Overlay Backdrop for Mobile Slide Drawer -->
      <div class="sidebar-overlay" id="sidebar-overlay"></div>

      <!-- App Sidebar -->
      <aside class="app-sidebar">
        <div class="sidebar-header">
          <a href="/" class="brand-logo" data-navigo>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span>MediFlow</span>
          </a>
        </div>
        
        <ul class="sidebar-menu">
          <li>
            <a href="/dashboard" class="sidebar-item-link ${activeRoute === '/dashboard' ? 'active' : ''}" data-navigo>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="9"/>
                <rect x="14" y="3" width="7" height="5"/>
                <rect x="14" y="12" width="7" height="9"/>
                <rect x="3" y="16" width="7" height="5"/>
              </svg>
              Overview
            </a>
          </li>
          <li>
            <a href="/patients" class="sidebar-item-link ${activeRoute === '/patients' ? 'active' : ''}" data-navigo>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Patients
            </a>
          </li>
          <li>
            <a href="/appointments" class="sidebar-item-link ${activeRoute === '/appointments' ? 'active' : ''}" data-navigo>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Appointments
            </a>
          </li>
        </ul>
        
        <div class="sidebar-footer">
          <div class="user-profile-preview">
            <div class="user-avatar">DR</div>
            <div class="user-info">
              <span class="user-name">Dr. A. Rahman</span>
              <span class="user-role">Lead Cardiologist</span>
            </div>
          </div>
          <a href="/" class="btn btn-secondary" style="width: 100%; margin-top: 1.25rem; text-align: center; font-size: 0.85rem;" data-navigo>Logout</a>
        </div>
      </aside>

      <!-- App Main Content Area -->
      <main class="app-main">
        <header class="app-header">
          <div style="display:flex; align-items:center; gap: 1rem;">
            <!-- Mobile Menu Toggle Button -->
            <button class="mobile-menu-btn icon-button" id="mobile-sidebar-toggle" aria-label="Toggle Menu">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
            <h1 class="page-title">${title}</h1>
          </div>
          
          <div class="header-actions">
            <!-- Theme Toggle Button -->
            <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Theme">
              <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>

            <!-- Notifications -->
            <button class="icon-button">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span class="badge-dot"></span>
            </button>
            
            <div style="height: 24px; width: 1px; background-color: var(--border-color);"></div>
            <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-secondary);">Workspace: Dept A</span>
          </div>
        </header>
        <div class="app-content-body">
          ${content}
        </div>
      </main>

      <!-- Floating Clinical AI Assistant Widget -->
      <button class="ai-chat-trigger" id="ai-chat-trigger" title="Clinical AI Assistant">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span class="pulse-ring"></span>
      </button>

      <!-- AI Chat Drawer Panel -->
      <div class="ai-chat-drawer" id="ai-chat-drawer">
        <div class="ai-drawer-header">
          <div class="ai-drawer-title">
            <div class="ai-avatar-glow">AI</div>
            <div>
              <h4>MediFlow Copilot</h4>
              <span class="online-indicator">Clinical Assistant</span>
            </div>
          </div>
          <button class="ai-drawer-close" id="ai-drawer-close">&times;</button>
        </div>
        
        <div class="ai-drawer-body" id="ai-drawer-body">
          <div class="ai-message system">
            <p>Hello! I am your clinical AI assistant. I can query patient registries, analyze service load, or help with diagnostic lookups. Ask me anything!</p>
          </div>
        </div>
        
        <div class="ai-drawer-footer">
          <input type="text" id="ai-chat-input" placeholder="Type message..." />
          <button id="ai-chat-send" aria-label="Send Message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

router
  .on('/', () => renderPage(renderLanding()))
  .on('/login', () => renderPage(renderLogin()))
  .on('/dashboard', () => renderPage(renderAppShell('Clinic Overview', renderDashboard(), '/dashboard')))
  .on('/patients', () => renderPage(renderAppShell('Patient Registry', renderPatients(), '/patients')))
  .on('/appointments', () => renderPage(renderAppShell('Appointment Scheduler', renderAppointments(), '/appointments')))
  .on('/about', () => renderPage(renderAbout()))
  .on('/contact', () => renderPage(renderContact()))
  .resolve();

// Boot check: Force default hash route if none exists to resolve Navigo landing page
if (!window.location.hash) {
  window.location.hash = '#/';
}

export { router };
