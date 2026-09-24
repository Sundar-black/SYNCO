class AdminDashboard {
  constructor() {
    this.modal = document.getElementById('admin-dashboard');
    this.trigger = document.getElementById('terminal-toggle');
    this.closeBtn = document.getElementById('dash-close-btn');
    this.navItems = document.querySelectorAll('.dash-nav-item');
    this.sections = document.querySelectorAll('.dash-content-section');
    
    this.secTitle = document.getElementById('dash-section-title');
    this.secDesc = document.getElementById('dash-section-desc');
    
    this.contactForm = document.getElementById('main-contact-form');
    this.leadsList = document.getElementById('dash-leads-list');
    this.totalLeadsLabel = document.getElementById('dash-total-leads');
    this.badgeCount = document.getElementById('leads-badge-count');
    this.leadsCount = 3;
    
    this.particleSlider = document.getElementById('cfg-particles');
    this.speedSelector = document.getElementById('cfg-speed');
    this.particleLabel = document.getElementById('particle-val-lbl');
    this.dashParticleVal = document.getElementById('dash-particles-count');
    
    this.bindEvents();
  }

  bindEvents() {
    if (this.trigger) this.trigger.addEventListener('click', () => this.open());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    this.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => this.handleLeadSubmit(e));
    }

    if (this.particleSlider) {
      this.particleSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        if (this.particleLabel) this.particleLabel.textContent = `Current Nodes: ${val}`;
        if (this.dashParticleVal) this.dashParticleVal.textContent = val;
        
        if (window.warpBg) {
          window.warpBg.particleCount = parseInt(val);
          window.warpBg.createParticles();
        }
      });
    }

    if (this.speedSelector) {
      this.speedSelector.addEventListener('change', (e) => {
        const speed = parseFloat(e.target.value);
        if (window.warpBg) {
          window.warpBg.speedMultiplier = speed;
          window.warpBg.createParticles();
        }
      });
    }
  }

  open() {
    if (this.modal) this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.modal) this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  switchTab(tabName) {
    this.navItems.forEach(item => item.classList.remove('active'));
    this.sections.forEach(sec => sec.classList.remove('active'));
    
    const activeItem = document.querySelector(`.dash-nav-item[data-tab="${tabName}"]`);
    const activeSection = document.getElementById(`sec-${tabName}`);
    
    if (activeItem) activeItem.classList.add('active');
    if (activeSection) activeSection.classList.add('active');

    if (this.secTitle && this.secDesc) {
      switch(tabName) {
        case 'overview':
          this.secTitle.textContent = 'System Overview';
          this.secDesc.textContent = 'Real-time statistics of SYNCO digital components.';
          break;
        case 'leads':
          this.secTitle.textContent = 'Synchronized Inquiries';
          this.secDesc.textContent = 'Direct consultations captured via portal forms.';
          break;
        case 'settings':
          this.secTitle.textContent = 'Canvas Controls';
          this.secDesc.textContent = 'Modify animation settings and visual parameters.';
          break;
      }
    }
  }

  logSystem(message) {
    const logContainer = document.getElementById('dash-log-entry');
    if (logContainer) {
      const p = document.createElement('p');
      const time = new Date().toLocaleTimeString();
      p.innerHTML = `&gt; [${time}] ${message}`;
      logContainer.parentNode.insertBefore(p, logContainer);
    }
  }

  handleLeadSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('frm-name').value;
    const email = document.getElementById('frm-email').value;
    const division = document.getElementById('frm-division').value;
    
    const activeDay = document.querySelector('.cal-day.active');
    const monthElem = document.getElementById('cal-month-select');
    const monthVal = monthElem ? monthElem.value.substring(0, 3) : 'Aug';
    const day = activeDay ? activeDay.getAttribute('data-day') : '1';
    const timeInput = document.getElementById('frm-time');
    const time = timeInput ? timeInput.value : '10:00 AM';
    
    const dateStr = `${monthVal} ${day}, ${time}`;
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${division} (${dateStr})</td>
      <td>Just now</td>
      <td><span class="lead-status status-new">NEW</span></td>
    `;
    
    if (this.leadsList) this.leadsList.insertBefore(tr, this.leadsList.firstChild);
    
    this.leadsCount++;
    if (this.totalLeadsLabel) this.totalLeadsLabel.textContent = this.leadsCount;
    if (this.badgeCount) this.badgeCount.textContent = this.leadsCount;
    
    this.logSystem(`[NEW INQUIRY] Captured from ${name} (${email}) for ${division}`);
    this.contactForm.reset();
    
    this.showNotification(`Consultation Confirmed!<br>Our team is preparing for ${dateStr}.`);
  }

  showNotification(msg) {
    const box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.bottom = '30px';
    box.style.right = '30px';
    box.style.background = '#111113';
    box.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    box.style.borderRadius = '14px';
    box.style.padding = '20px 24px';
    box.style.color = '#ffffff';
    box.style.zIndex = '100000';
    box.style.fontFamily = 'inherit';
    box.style.backdropFilter = 'blur(16px)';
    box.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    box.style.opacity = '0';
    box.style.transform = 'translateY(10px)';
    box.style.transition = 'all 0.4s ease';
    box.innerHTML = `
      <div style="display:flex; align-items:center; gap: 14px;">
        <div style="width:28px; height:28px; border-radius:50%; background:#ffffff; color:#000000; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:12px;">
          ✓
        </div>
        <div>
          <h4 style="font-size:0.9rem; font-weight:600;">Request Submitted</h4>
          <p style="font-size:0.8rem; color:#86868b; line-height:1.4;">${msg}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(box);
    
    setTimeout(() => {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
    }, 50);
    
    setTimeout(() => {
      box.style.opacity = '0';
      box.style.transform = 'translateY(10px)';
      setTimeout(() => box.remove(), 400);
    }, 4000);
  }
}

window.addEventListener('load', () => {
  window.dashHUD = new AdminDashboard();
});
