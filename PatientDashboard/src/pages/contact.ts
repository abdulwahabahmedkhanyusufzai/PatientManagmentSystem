export function renderContact(): string {
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
            <li><a href="/about" class="nav-link" data-navigo>About</a></li>
            <li><a href="/contact" class="nav-link active" data-navigo>Contact</a></li>
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
          <h1>Connect With Our Team</h1>
          <p class="subtitle" style="margin: 0 auto;">Inquire about clinical licenses, custom HL7 integration, or system provisioning.</p>
        </section>

        <div class="contact-grid">
          <!-- Info Side -->
          <div class="contact-info-cards">
            <div class="info-card">
              <div class="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="info-card-details">
                <h3>General Support</h3>
                <p>support@mediflow.com</p>
                <p>24/7 priority response for hospitals</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="info-card-details">
                <h3>Global Headquarters</h3>
                <p>MediFlow Technologies Inc.</p>
                <p>450 Health Sciences Way, Suite 1200<br/>San Francisco, CA 94107</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="info-card-details">
                <h3>Integration Hotline</h3>
                <p>+1 (800) 555-FLOW</p>
                <p>Mon - Fri, 8:00 AM - 6:00 PM PST</p>
              </div>
            </div>
          </div>

          <!-- Form Side -->
          <div style="background-color: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
            <h2 style="font-size: 1.5rem; font-weight:800; margin-bottom: 1.5rem; color: var(--text-primary); letter-spacing:-0.01em;">Request an Integration Demo</h2>
            
            <form class="auth-form" onsubmit="event.preventDefault(); alert('Request submitted successfully! Our health tech integrations team will reach out within 24 hours.');">
              <div class="form-group">
                <label class="form-label" for="contact-name">Full Name</label>
                <input type="text" id="contact-name" class="form-input" placeholder="Dr. Alex Rivera" required />
              </div>
              
              <div class="form-group">
                <label class="form-label" for="contact-org">Healthcare Organization</label>
                <input type="text" id="contact-org" class="form-input" placeholder="Mercy General Hospital" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Work Email</label>
                <input type="email" id="contact-email" class="form-input" placeholder="arivera@mercygeneral.org" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-notes">Integration Notes / Requirements</label>
                <textarea id="contact-notes" class="form-input" rows="4" placeholder="Describe your EHR systems (Epic, Cerner) and estimated clinical staff licenses..." style="resize:none;"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="padding: 0.8rem; width: 100%; font-size: 0.95rem; font-weight: 700; margin-top: 1rem;">
                Submit Demo Request
              </button>
            </form>
          </div>
        </div>
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
              <li><a href="#features" class="footer-link">Features</a></li>
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
