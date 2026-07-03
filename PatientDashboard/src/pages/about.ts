export function renderAbout(): string {
  return `
    <div class="public-shell page-fade-in">
      <!-- Premium Navbar -->
      <nav class="navbar">
        <div class="nav-container">
          <a href="/" class="brand-logo" data-navigo>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span>MediFlow</span>
          </a>
          <ul class="nav-links">
            <li><a href="/" class="nav-link" data-navigo>Home</a></li>
            <li><a href="/about" class="nav-link active" data-navigo>About</a></li>
            <li><a href="/contact" class="nav-link" data-navigo>Contact</a></li>
          </ul>
          <div class="nav-actions">
            <!-- Theme Toggle Button -->
            <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Theme">
              <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>

            <a href="/login" class="btn btn-secondary" data-navigo>Sign In</a>
            <a href="/dashboard" class="btn btn-primary" data-navigo>Go to App</a>
          </div>
        </div>
      </nav>

      <!-- Main Public Content -->
      <main class="public-content">
        <section class="text-section-hero">
          <h1>About MediFlow Platform</h1>
          <p class="subtitle" style="margin: 0 auto;">Pioneering secure cloud infrastructure for health care provider workspaces.</p>
        </section>

        <section class="text-section-body">
          <h2>Our Clinical Mission</h2>
          <p>MediFlow was built from the ground up to solve the friction healthcare providers face when operating legacy Electronic Health Record (EHR) platforms. We believe that clinical software should be as fast, intuitive, and secure as the modern web apps doctors and nurses use in their personal lives.</p>
          
          <h2>HIPAA Security Standard compliance</h2>
          <p>Every line of code and database schema within the MediFlow environment conforms directly to the Health Insurance Portability and Accountability Act (HIPAA) requirements. We ensure all patient identifiers are encrypted both in transit (TLS 1.3) and at rest (AES-256 with rotation rules).</p>
          
          <h2>Pillars of Our Engineering</h2>
          <ul style="margin-left: 1.5rem; margin-bottom: 2rem; display:flex; flex-direction:column; gap:0.5rem; color:var(--text-secondary);">
            <li><strong>Low Latency:</strong> Sub-second query times across millions of records.</li>
            <li><strong>Intuitive Dashboarding:</strong> Reducing the cognitive load on clinical practitioners.</li>
            <li><strong>Robust Interoperability:</strong> Seamless export standards supporting FHIR/HL7 guidelines.</li>
          </ul>
        </section>
      </main>

      <!-- Public Footer -->
      <footer class="main-footer">
        <div class="footer-container">
          <div class="footer-brand">
            <a href="#" class="brand-logo" data-navigo>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <span>MediFlow</span>
            </a>
            <p class="footer-text">Built to elevate care delivery standards, coordinate clinical teams, and safeguard crucial medical records securely.</p>
          </div>
          <div class="footer-column">
            <h3>Platform</h3>
            <ul class="footer-links">
              <li><a href="/" class="footer-link">Features</a></li>
              <li><a href="/login" class="footer-link" data-navigo>Provider Login</a></li>
              <li><a href="/dashboard" class="footer-link" data-navigo>Dashboard Portal</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Compliance & Trust</h3>
            <ul class="footer-links">
              <li><a href="/about" class="footer-link" data-navigo>HIPAA Guidelines</a></li>
              <li><a href="/about" class="footer-link" data-navigo>Security Audits</a></li>
              <li><a href="/about" class="footer-link" data-navigo>Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Company</h3>
            <ul class="footer-links">
              <li><a href="/about" class="footer-link" data-navigo>About MediFlow</a></li>
              <li><a href="/contact" class="footer-link" data-navigo>Contact Support</a></li>
              <li><a href="/contact" class="footer-link" data-navigo>Schedule Demo</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} MediFlow Technologies Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `;
}
