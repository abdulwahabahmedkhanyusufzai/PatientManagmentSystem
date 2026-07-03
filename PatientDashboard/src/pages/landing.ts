export function renderLanding(): string {
  return `
    <div class="public-shell page-fade-in">
      <!-- Glow bubbles in the background -->
      <div class="glow-blur-container">
        <div class="glow-bubble glow-teal"></div>
        <div class="glow-bubble glow-blue"></div>
      </div>

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
            <li><a href="/" class="nav-link active" data-navigo>Home</a></li>
            <li><a href="/about" class="nav-link" data-navigo>About</a></li>
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
        <!-- Hero Section -->
        <section class="landing-hero">
          <div class="badge-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            HIPAA Compliant & Fully Secure
          </div>
          <h1>The secure, intelligent core for <span>patient management</span></h1>
          <p>Streamline your clinical workflows, coordinate patient care effortlessly, and boost provider collaboration—all within one highly-secured EHR platform.</p>
          <div class="landing-hero-actions">
            <a href="/login" class="btn btn-indigo" data-navigo>Launch Dashboard</a>
            <a href="/contact" class="btn btn-secondary" data-navigo>Book a Demo</a>
          </div>

          <!-- Interactive UI Preview (Dashboard mockup) -->
          <div class="hero-mockup">
            <div class="mockup-inner">
              <svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:var(--bg-body); width:100%; height:auto; transition: background-color 0.4s ease;">
                <!-- Sidebar -->
                <rect x="0" y="0" width="160" height="450" fill="var(--bg-card)" />
                <line x1="160" y1="0" x2="160" y2="450" stroke="var(--border-color)" stroke-width="1"/>
                <circle cx="30" cy="30" r="10" fill="var(--primary)" />
                <rect x="50" y="25" width="70" height="10" rx="3" fill="var(--primary)" />
                
                <!-- Sidebar Menu Items -->
                <rect x="15" y="70" width="130" height="24" rx="5" fill="var(--primary-light)" />
                <rect x="25" y="77" width="10" height="10" rx="2" fill="var(--primary)" />
                <rect x="45" y="78" width="60" height="8" rx="2" fill="var(--primary)" />
                
                <rect x="25" y="110" width="10" height="10" rx="2" fill="var(--text-muted)" />
                <rect x="45" y="111" width="60" height="8" rx="2" fill="var(--text-muted)" />

                <rect x="25" y="140" width="10" height="10" rx="2" fill="var(--text-muted)" />
                <rect x="45" y="141" width="60" height="8" rx="2" fill="var(--text-muted)" />

                <rect x="25" y="170" width="10" height="10" rx="2" fill="var(--text-muted)" />
                <rect x="45" y="171" width="60" height="8" rx="2" fill="var(--text-muted)" />
                
                <!-- Main Header -->
                <rect x="160" y="0" width="640" height="50" fill="var(--bg-card)" />
                <line x1="160" y1="50" x2="800" y2="50" stroke="var(--border-color)" stroke-width="1"/>
                <rect x="180" y="18" width="120" height="14" rx="4" fill="var(--text-primary)" />
                <circle cx="760" cy="25" r="12" fill="var(--border-color)" />
                <circle cx="720" cy="25" r="8" fill="var(--text-muted)" />
                
                <!-- Content Dashboard Grid -->
                <!-- Card 1 -->
                <rect x="180" y="75" width="135" height="70" rx="8" fill="var(--bg-card)" stroke="var(--border-color)" stroke-width="1"/>
                <circle cx="285" cy="110" r="14" fill="var(--primary-light)" />
                <rect x="195" y="90" width="60" height="8" rx="2" fill="var(--text-secondary)" />
                <rect x="195" y="105" width="40" height="14" rx="3" fill="var(--text-primary)" />
                <rect x="195" y="125" width="50" height="6" rx="2" fill="var(--success)" />

                <!-- Card 2 -->
                <rect x="330" y="75" width="135" height="70" rx="8" fill="var(--bg-card)" stroke="var(--border-color)" stroke-width="1"/>
                <circle cx="435" cy="110" r="14" fill="var(--secondary-light)" />
                <rect x="345" y="90" width="60" height="8" rx="2" fill="var(--text-secondary)" />
                <rect x="345" y="105" width="40" height="14" rx="3" fill="var(--text-primary)" />
                <rect x="345" y="125" width="50" height="6" rx="2" fill="var(--success)" />

                <!-- Card 3 -->
                <rect x="480" y="75" width="135" height="70" rx="8" fill="var(--bg-card)" stroke="var(--border-color)" stroke-width="1"/>
                <circle cx="585" cy="110" r="14" fill="rgba(14, 165, 233, 0.15)" />
                <rect x="495" y="90" width="60" height="8" rx="2" fill="var(--text-secondary)" />
                <rect x="495" y="105" width="40" height="14" rx="3" fill="var(--text-primary)" />
                <rect x="495" y="125" width="50" height="6" rx="2" fill="var(--danger)" />

                <!-- Card 4 -->
                <rect x="630" y="75" width="150" height="70" rx="8" fill="var(--bg-card)" stroke="var(--border-color)" stroke-width="1"/>
                <circle cx="745" cy="110" r="14" fill="var(--danger-bg)" />
                <rect x="645" y="90" width="60" height="8" rx="2" fill="var(--text-secondary)" />
                <rect x="645" y="105" width="40" height="14" rx="3" fill="var(--text-primary)" />
                <rect x="645" y="125" width="50" height="6" rx="2" fill="var(--success)" />
                
                <!-- Graph Card -->
                <rect x="180" y="160" width="380" height="260" rx="10" fill="var(--bg-card)" stroke="var(--border-color)" stroke-width="1"/>
                <rect x="195" y="180" width="120" height="12" rx="3" fill="var(--text-primary)" />
                <!-- Chart Lines -->
                <path d="M 200 380 L 260 320 L 320 340 L 380 270 L 440 290 L 500 210 L 540 230" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round"/>
                <path d="M 200 380 L 260 320 L 320 340 L 380 270 L 440 290 L 500 210 L 540 230 L 540 390 L 200 390 Z" fill="url(#gradient-teal)" opacity="0.1"/>
                
                <defs>
                  <linearGradient id="gradient-teal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--primary)"/>
                    <stop offset="100%" stop-color="var(--bg-card)"/>
                  </linearGradient>
                </defs>

                <!-- Sidebar Right (Activities) -->
                <rect x="575" y="160" width="205" height="260" rx="10" fill="var(--bg-card)" stroke="var(--border-color)" stroke-width="1"/>
                <rect x="590" y="180" width="90" height="12" rx="3" fill="var(--text-primary)" />
                <!-- List Items -->
                <circle cx="600" cy="220" r="10" fill="var(--bg-body)" />
                <rect x="620" y="215" width="120" height="10" rx="2" fill="var(--text-secondary)" />
                <rect x="620" y="230" width="50" height="6" rx="2" fill="var(--text-muted)" />

                <circle cx="600" cy="260" r="10" fill="var(--bg-body)" />
                <rect x="620" y="255" width="110" height="10" rx="2" fill="var(--text-secondary)" />
                <rect x="620" y="270" width="70" height="6" rx="2" fill="var(--text-muted)" />

                <circle cx="600" cy="300" r="10" fill="var(--bg-body)" />
                <rect x="620" y="295" width="130" height="10" rx="2" fill="var(--text-secondary)" />
                <rect x="620" y="310" width="40" height="6" rx="2" fill="var(--text-muted)" />
              </svg>
            </div>
          </div>
        </section>

        <!-- Hospital Trust Band -->
        <section class="hospital-trust-band">
          <p class="trust-title">Trusted by top medical institutions</p>
          <div class="hospital-logos">
            <div class="hospital-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              St. Jude Health
            </div>
            <div class="hospital-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Mayo Medical
            </div>
            <div class="hospital-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"/>
                <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10Z"/>
              </svg>
              Vanderbilt Care
            </div>
            <div class="hospital-logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              Johns Hopkins
            </div>
          </div>
        </section>

        <!-- Features Grid Section -->
        <section class="landing-section" id="features">
          <div class="section-header">
            <h2>Fully Featured Medical Operations</h2>
            <p>Deploy a fully compliance-ready suite built to scale to thousands of active medical personnel and patient files.</p>
          </div>
          
          <div class="features-grid">
            <!-- Feature 1 -->
            <article class="premium-feature-card">
              <div class="feature-icon-container">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Data Privacy & Encryption</h3>
              <p>Rest easy with HIPAA-ready data storage, end-to-end database column encryption, and comprehensive system auditing log rails.</p>
            </article>

            <!-- Feature 2 -->
            <article class="premium-feature-card">
              <div class="feature-icon-container">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>Intelligent Scheduling</h3>
              <p>Resolve resource contentions in real time. Automate SMS reminders to drastically reduce appointment no-shows by up to 45%.</p>
            </article>

            <!-- Feature 3 -->
            <article class="premium-feature-card">
              <div class="feature-icon-container">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
              </div>
              <h3>Actionable Clinical Insights</h3>
              <p>Utilize real-time clinical tracking metrics to pinpoint patient wait times and track physician schedule utilization with interactive graphing.</p>
            </article>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section">
          <div class="stats-container">
            <div class="stat-item">
              <h3>99.99%</h3>
              <p>Platform Uptime</p>
            </div>
            <div class="stat-item">
              <h3>15,000+</h3>
              <p>Active Clinicians</p>
            </div>
            <div class="stat-item">
              <h3>3.8M</h3>
              <p>Secure Records Managed</p>
            </div>
            <div class="stat-item">
              <h3>< 2 Mins</h3>
              <p>Average Wait Time Saved</p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="premium-cta-section">
          <div class="cta-banner-wrapper">
            <div class="cta-text-content">
              <h2>Ready to secure and optimize your patient workflows?</h2>
              <p>Create an account instantly or schedule a 1-on-1 demonstration with our health tech workflow engineers.</p>
            </div>
            <div class="cta-action-button-container">
              <a href="/login" class="btn btn-indigo btn-lg" style="padding: 1rem 2rem; font-size:1rem;" data-navigo>Launch App Instantly</a>
            </div>
          </div>
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
          <div style="display:flex; gap:1.5rem;">
            <a href="#" class="footer-link">Terms of Service</a>
            <a href="#" class="footer-link">Privacy Statement</a>
          </div>
        </div>
      </footer>
    </div>
  `;
}
