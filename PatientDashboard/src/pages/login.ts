export function renderLogin(): string {
  // We can attach form submit handler after rendering if we want, or use inline script / navigation
  return `
    <div class="public-shell">
      <!-- Simple Header -->
      <nav class="navbar" style="position: static; height: 72px;">
        <div class="nav-container">
          <a href="/" class="brand-logo" data-navigo>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span>MediFlow</span>
          </a>
          <a href="/" class="btn btn-secondary" data-navigo>Back to Home</a>
        </div>
      </nav>

      <div class="login-page-container">
        <!-- Login Form Side -->
        <div class="login-form-side">
          <div class="login-header">
            <h2>Welcome Back</h2>
            <p>Access your provider workspace and secure records.</p>
          </div>

          <form class="auth-form" onsubmit="event.preventDefault(); sessionStorage.setItem('isLoggedIn', 'true'); window.location.hash = '#/dashboard';">
            <div class="form-group">
              <label class="form-label" for="email">Work Email Address</label>
              <input type="email" id="email" class="form-input" placeholder="dr.smith@mediflow.com" required value="demo.provider@mediflow.com" />
            </div>

            <div class="form-group">
              <label class="form-label" for="password">Password</label>
              <input type="password" id="password" class="form-input" placeholder="••••••••" required value="demopassword" />
            </div>

            <div class="form-checkbox-row">
              <label class="checkbox-label">
                <input type="checkbox" checked style="accent-color: var(--primary);" />
                Remember this device
              </label>
              <a href="#" class="form-link">Forgot Password?</a>
            </div>

            <button type="submit" class="btn btn-primary" style="padding: 0.8rem; font-size: 0.95rem; font-weight: 700; width: 100%;">
              Sign In Securely
            </button>
          </form>
          
          <p style="margin-top: 2rem; text-align: center; font-size: 0.875rem; color: var(--text-secondary);">
            New provider? <a href="/contact" class="form-link" data-navigo>Request System Provisioning</a>
          </p>
        </div>

        <!-- Illustration Side -->
        <div class="login-illustration-side">
          <div class="illustration-content">
            <h3>Designed for clinical excellence & total compliance.</h3>
            <p>Our HIPAA-aligned platform provides high-availability dashboards to coordinate your patient care pathway seamlessly.</p>
            
            <div class="testimonial-mini">
              <p>"MediFlow has cut our patient intake processing time in half while providing our staff with a secure, beautifully structured portal."</p>
              <div class="testimonial-author">Dr. Sarah Jenkins, Chief of Medicine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
