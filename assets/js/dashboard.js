class AdminDashboard {
  constructor() {
    this.modal = document.getElementById('admin-dashboard');
    this.trigger = document.getElementById('terminal-toggle');
    this.closeBtn = document.getElementById('dash-close-btn');
    this.navItems = document.querySelectorAll('.dash-nav-item');
    this.sections = document.querySelectorAll('.dash-content-section');
    
    this.secTitle = document.getElementById('dash-section-title');
    this.secDesc = document.getElementById('dash-section-desc');
    
    // Form and Lead tracking
    this.contactForm = document.getElementById('main-contact-form');
    this.leadsList = document.getElementById('dash-leads-list');
    this.totalLeadsLabel = document.getElementById('dash-total-leads');
    this.leadsCount = 3; // Initial mock count
    
    // Configurations inputs
    this.particleSlider = document.getElementById('cfg-particles');
    this.speedSelector = document.getElementById('cfg-speed');
    this.particleLabel = document.getElementById('particle-val-lbl');
    this.dashParticleVal = document.getElementById('dash-particles-count');
    
    this.bindEvents();
  }

  bindEvents() {
    // Open/Close
    this.trigger.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    
    // Background click close
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Navigation Tabs
    this.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Form Submission Integration
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => this.handleLeadSubmit(e));
    }

    // Config inputs changes
    if (this.particleSlider) {
      this.particleSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        this.particleLabel.textContent = `Current Nodes: ${val}`;
        this.dashParticleVal.textContent = val;
        
        // Update live canvas config
        if (window.warpBg) {
          const activeTheme = window.warpBg.themes[window.warpBg.currentTheme];
          activeTheme.particleCount = parseInt(val);
          window.warpBg.createParticles();
          this.logSystem(`Updated warp grid node count dynamically to ${val}`);
        }
      });
    }

    if (this.speedSelector) {
      this.speedSelector.addEventListener('change', (e) => {
        const speed = parseFloat(e.target.value);
        if (window.warpBg) {
          const activeTheme = window.warpBg.themes[window.warpBg.currentTheme];
          activeTheme.speedMultiplier = speed;
          window.warpBg.createParticles();
          this.logSystem(`Canvas rendering velocity multiplier adjusted to ${speed}x`);
        }
      });
    }
  }

  open() {
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.logSystem('Admin Dashboard Terminal interface accessed.');
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  switchTab(tabName) {
    this.navItems.forEach(item => item.classList.remove('active'));
    this.sections.forEach(sec => sec.classList.remove('active'));
    
    const activeItem = document.querySelector(`.dash-nav-item[data-tab="${tabName}"]`);
    const activeSection = document.getElementById(`sec-${tabName}`);
    
    if (activeItem) activeItem.classList.add('active');
    if (activeSection) activeSection.classList.add('active');

    // Update Header titles
    switch(tabName) {
      case 'overview':
        this.secTitle.textContent = 'Ecosystem Health Overview';
        this.secDesc.textContent = 'Real-time statistics of SYNCO digital components.';
        break;
      case 'leads':
        this.secTitle.textContent = 'Synchronized Lead Inbox';
        this.secDesc.textContent = 'Direct inquiries captured via index forms.';
        break;
      case 'settings':
        this.secTitle.textContent = 'Tactile Node Settings';
        this.secDesc.textContent = 'Modify animation settings and server simulations.';
        break;
    }
  }

  logSystem(message) {
    const logContainer = document.getElementById('dash-log-entry');
    if (logContainer) {
      const p = document.createElement('p');
      const time = new Date().toLocaleTimeString();
      p.innerHTML = `&gt; [${time}] ${message}`;
      logContainer.parentNode.insertBefore(p, logContainer);
      logContainer.parentNode.scrollTop = logContainer.parentNode.scrollHeight;
    }
  }

  handleLeadSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('frm-name').value;
    const email = document.getElementById('frm-email').value;
    const division = document.getElementById('frm-division').value;
    
    // Fetch active slot
    const activeDay = document.querySelector('.cal-day.active');
    const activeTime = document.querySelector('.time-slot.active');
    const day = activeDay ? activeDay.getAttribute('data-day') : '1';
    const time = activeTime ? activeTime.getAttribute('data-time') : '10:00 AM';
    
    const dateStr = `Aug ${day}, ${time}`;
    
    // Add row to Leads Table
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${division} (${dateStr})</td>
      <td>Just now</td>
      <td><span class="lead-status status-new">NEW</span></td>
    `;
    
    this.leadsList.insertBefore(tr, this.leadsList.firstChild);
    
    // Increment leads stats
    this.leadsCount++;
    this.totalLeadsLabel.textContent = this.leadsCount;
    
    // Trigger dashboard logs
    this.logSystem(`[NEW LEAD] Captured inquiry from ${name} (${email}) for ${division}`);
    
    // Reset Form
    this.contactForm.reset();
    
    // Show premium alert overlay
    this.showHapticAlert(`Ecosystem Sync Initialized! <br> Our ${division} team is preparing for ${dateStr}.`);
  }

  showHapticAlert(msg) {
    const alertBox = document.createElement('div');
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '40px';
    alertBox.style.right = '40px';
    alertBox.style.background = 'rgba(3, 3, 7, 0.95)';
    alertBox.style.border = '1px solid var(--accent-primary)';
    alertBox.style.boxShadow = '0 0 25px var(--accent-glow)';
    alertBox.style.borderRadius = '12px';
    alertBox.style.padding = '25px';
    alertBox.style.color = '#fff';
    alertBox.style.zIndex = '100000';
    alertBox.style.fontFamily = 'var(--font-heading)';
    alertBox.style.backdropFilter = 'blur(10px)';
    alertBox.style.opacity = '0';
    alertBox.style.transform = 'translateY(20px)';
    alertBox.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
    alertBox.innerHTML = `
      <div style="display:flex; align-items:center; gap: 15px;">
        <div style="width:30px; height:30px; border-radius:50%; background:rgba(0,240,255,0.1); border:1px solid var(--accent-primary); display:flex; align-items:center; justify-content:center; color:var(--accent-primary);">
          ✓
        </div>
        <div>
          <h4 style="font-size:0.95rem; margin-bottom:4px; font-weight:600;">Ecosystem Synced</h4>
          <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">${msg}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
      alertBox.style.opacity = '1';
      alertBox.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
      alertBox.style.opacity = '0';
      alertBox.style.transform = 'translateY(20px)';
      setTimeout(() => alertBox.remove(), 500);
      
      // Auto open dashboard to display lead list
      this.open();
      this.switchTab('leads');
    }, 4500);
  }
}

// Instantiate dashboard controller
window.addEventListener('load', () => {
  window.dashHUD = new AdminDashboard();
});
