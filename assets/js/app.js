// Project mock data for case studies
const projectData = {
  "1": {
    title: "Aether Platform",
    cat: "IT DIVISION · WEB DEV",
    client: "Aether Labs",
    spec: "Headless Node System",
    date: "Q2 2026",
    desc: "We engineered a clean-room modular dashboard displaying multi-tenant analytics. Backed by highly efficient GraphQL APIs and a React framework, it processes heavy datasets under 80ms while rendering live network charts on HTML5 canvases.",
    stat1: "+280%",
    lbl1: "Active Engagement",
    stat2: "< 80ms",
    lbl2: "Average Server Load"
  },
  "2": {
    title: "Nova Launch Campaign",
    cat: "DM DIVISION · ADS",
    client: "Nova Corp",
    spec: "Performance Marketing",
    date: "Q2 2026",
    desc: "Nova required organic reach and paid conversions. Our DM team built structured landing environments and target routines on Google & Meta platforms. Using real-time bidding analytics, we scaled ROAS to 4.2x, acquiring over 50k qualified platform signups.",
    stat1: "+340%",
    lbl1: "Acquisition Index",
    stat2: "4.2x",
    lbl2: "Return on Ad Spend"
  },
  "3": {
    title: "Spectra Mobile",
    cat: "IT DIVISION · APP DEV",
    client: "Spectra Logistics",
    spec: "Native App Development",
    date: "Q1 2026",
    desc: "Spectra coordinates real-time logistics. We architected a swift mobile system using React Native with native bridge expansions. It supports offline queue sync, local secure DB structures, and localized push syncs, sustaining 100% uptime under grid spikes.",
    stat1: "20M",
    lbl1: "Daily Sync Requests",
    stat2: "100%",
    lbl2: "Uptime Score"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Navigation Links Active State Scroll Spy
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-target') === current) {
        item.classList.add('active');
      }
    });
  });

  // Smooth scroll navigate
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Ecosystem Switcher (SYNCO IT <=> SYNCO DM)
  const ecosystemSwitch = document.getElementById('ecosystem-switch');
  const optIt = document.getElementById('opt-it');
  const optDm = document.getElementById('opt-dm');
  const statusLabel = document.getElementById('status-label');
  
  const heroInteractiveTitle = document.getElementById('hero-interactive-title');
  const heroDescriptionText = document.getElementById('hero-description-text');
  
  const servicesItPanel = document.getElementById('services-it-panel');
  const servicesDmPanel = document.getElementById('services-dm-panel');

  function swapEcosystem(mode) {
    if (mode === 'it') {
      ecosystemSwitch.className = 'switch-control switch-active-it';
      optIt.classList.add('active');
      optDm.classList.remove('active');
      statusLabel.textContent = 'IT Division Services';
      
      document.body.className = 'tech-mode';
      
      // Update background Canvas theme
      if (window.warpBg) {
        window.warpBg.setTheme('it');
      }
      
      // Transition Panels
      gsap.to(servicesDmPanel, { opacity: 0, duration: 0.3, onComplete: () => {
        servicesDmPanel.style.display = 'none';
        servicesItPanel.style.display = 'block';
        gsap.fromTo(servicesItPanel, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
      }});

      // Animate Hero Content Swapping
      animateHeroText("Futuristic IT Ecosystem", "SYNCO IT combines bleeding-edge web development, modular mobile architecture, and high-performance UI/UX design into single premium brands.");
      
    } else {
      ecosystemSwitch.className = 'switch-control switch-active-dm';
      optDm.classList.add('active');
      optIt.classList.remove('active');
      statusLabel.textContent = 'Digital Marketing Campaigns';
      
      document.body.className = 'creative-mode';
      
      // Update background Canvas theme
      if (window.warpBg) {
        window.warpBg.setTheme('dm');
      }
      
      // Transition Panels
      gsap.to(servicesItPanel, { opacity: 0, duration: 0.3, onComplete: () => {
        servicesItPanel.style.display = 'none';
        servicesDmPanel.style.display = 'block';
        gsap.fromTo(servicesDmPanel, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
      }});

      // Animate Hero Content Swapping
      animateHeroText("Creative Brand Authority", "SYNCO DM builds high-converting video showreels, intent-focused search engine dominance, and programmatic search/social ads for hyper-scale user acquisition.");
    }
  }

  function animateHeroText(titleText, descText) {
    const tl = gsap.timeline();
    tl.to([heroInteractiveTitle, heroDescriptionText], { opacity: 0, y: -15, duration: 0.25, stagger: 0.05, onComplete: () => {
      heroInteractiveTitle.textContent = titleText;
      heroDescriptionText.textContent = descText;
    }})
    .fromTo([heroInteractiveTitle, heroDescriptionText], { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 });
  }

  optIt.addEventListener('click', (e) => { e.stopPropagation(); swapEcosystem('it'); });
  optDm.addEventListener('click', (e) => { e.stopPropagation(); swapEcosystem('dm'); });
  ecosystemSwitch.addEventListener('click', () => {
    if (ecosystemSwitch.classList.contains('switch-active-it')) {
      swapEcosystem('dm');
    } else {
      swapEcosystem('it');
    }
  });

  // 3D Tilt Card Interaction
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      // Tilt mathematics
      const angleX = (yc - y) / 12;
      const angleY = (x - xc) / 12;
      
      card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-6px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // Portfolio Filters
  const filterBtns = document.querySelectorAll('.tab-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          gsap.to(item, { scale: 1, opacity: 1, duration: 0.4, display: 'block' });
        } else {
          gsap.to(item, { scale: 0.8, opacity: 0, duration: 0.4, display: 'none' });
        }
      });
    });
  });

  // Portfolio Case Study Modal Trigger
  const modal = document.getElementById('portfolio-modal');
  const modalClose = document.getElementById('modal-close-btn');
  
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      const data = projectData[id];
      
      if (!data) return;
      
      // Populate fields dynamically
      document.getElementById('modal-project-cat').textContent = data.cat;
      document.getElementById('modal-project-title').textContent = data.title;
      document.getElementById('modal-project-client').textContent = data.client;
      document.getElementById('modal-project-spec').textContent = data.spec;
      document.getElementById('modal-project-date').textContent = data.date;
      document.getElementById('modal-project-desc').textContent = data.desc;
      
      document.getElementById('modal-project-stat-1').textContent = data.stat1;
      document.getElementById('modal-project-stat-lbl-1').textContent = data.lbl1;
      document.getElementById('modal-project-stat-2').textContent = data.stat2;
      document.getElementById('modal-project-stat-lbl-2').textContent = data.lbl2;
      
      // Open modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Modal GSAP reveal
      gsap.fromTo('.modal-content', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.2)' });
    });
  });

  modalClose.addEventListener('click', () => {
    gsap.to('.modal-content', { scale: 0.85, opacity: 0, duration: 0.3, onComplete: () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }});
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modalClose.click();
  });

  // Testimonials Carousel Controls (if present)
  const carousel = document.querySelector('.testimonials-carousel');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  
  if (carousel && prevBtn && nextBtn) {
    let slideIndex = 0;
    
    function updateCarousel() {
      carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    
    nextBtn.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % slides.length;
      updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }

  // Dynamic Interactive Calendar Engine (with Past Disabling & 2-Hour Slot Buffer)
  const calGrid = document.querySelector('.cal-grid');
  const monthSelect = document.getElementById('cal-month-select');
  const yearSelect = document.getElementById('cal-year-select');
  const prevMonthBtn = document.getElementById('cal-prev-month');
  const nextMonthBtn = document.getElementById('cal-next-month');
  
  const manualTimeInput = document.getElementById('frm-time');
  const timeChips = document.querySelectorAll('.time-chip');

  const monthsList = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  function parseTimeTo24H(timeStr) {
    const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return 10;
    let h = parseInt(match[1], 10);
    const m = parseInt(match[2], 10);
    const period = match[3].toUpperCase();
    if (period === 'PM' && h < 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    return h + (m / 60);
  }

  function updateAvailableTimeSlots() {
    if (!manualTimeInput || !timeChips.length) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonthIndex = now.getMonth();
    const currentDate = now.getDate();
    
    // 2 hours buffer from current real system time
    const minAvailableHour = now.getHours() + (now.getMinutes() / 60) + 2;

    const selectedMonthName = monthSelect ? monthSelect.value : '';
    const selectedYear = yearSelect ? parseInt(yearSelect.value, 10) : currentYear;
    const monthIndex = monthsList.indexOf(selectedMonthName);

    const activeDayElem = calGrid ? calGrid.querySelector('.cal-day.active') : null;
    const activeDayNum = activeDayElem ? parseInt(activeDayElem.getAttribute('data-day'), 10) : currentDate;

    const isToday = (selectedYear === currentYear && monthIndex === currentMonthIndex && activeDayNum === currentDate);

    let firstValidChipTime = null;

    timeChips.forEach(chip => {
      const chipTimeStr = chip.getAttribute('data-time');
      const chipHour = parseTimeTo24H(chipTimeStr);

      if (isToday && chipHour < minAvailableHour) {
        chip.classList.add('disabled-slot');
        chip.classList.remove('active');
      } else {
        chip.classList.remove('disabled-slot');
        if (!firstValidChipTime) {
          firstValidChipTime = chipTimeStr;
        }
      }
    });

    const activeChip = document.querySelector('.time-chip.active:not(.disabled-slot)');
    if (!activeChip && firstValidChipTime) {
      timeChips.forEach(c => c.classList.remove('active'));
      const newActive = Array.from(timeChips).find(c => c.getAttribute('data-time') === firstValidChipTime);
      if (newActive) {
        newActive.classList.add('active');
        manualTimeInput.value = firstValidChipTime;
      }
    } else if (activeChip) {
      manualTimeInput.value = activeChip.getAttribute('data-time');
    }
  }

  function renderDynamicCalendar() {
    if (!calGrid || !monthSelect || !yearSelect) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonthIndex = now.getMonth();
    const currentDate = now.getDate();

    const selectedMonthName = monthSelect.value;
    const selectedYear = parseInt(yearSelect.value, 10);
    const monthIndex = monthsList.indexOf(selectedMonthName);

    if (monthIndex === -1) return;

    const isPastMonth = (selectedYear < currentYear) || (selectedYear === currentYear && monthIndex < currentMonthIndex);
    const isCurrentMonth = (selectedYear === currentYear && monthIndex === currentMonthIndex);

    // 1st day of the selected month
    const firstDateObj = new Date(selectedYear, monthIndex, 1);
    const firstDayIndex = firstDateObj.getDay();
    const startColumn = (firstDayIndex === 0) ? 6 : firstDayIndex - 1;

    const totalDaysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate();
    const prevMonthDays = new Date(selectedYear, monthIndex, 0).getDate();

    // Determine initial active day for this month view
    let defaultActiveDay = 1;
    if (isCurrentMonth) {
      defaultActiveDay = currentDate;
    }

    let html = `
      <span class="cal-day-label">M</span>
      <span class="cal-day-label">T</span>
      <span class="cal-day-label">W</span>
      <span class="cal-day-label">T</span>
      <span class="cal-day-label">F</span>
      <span class="cal-day-label">S</span>
      <span class="cal-day-label">S</span>
    `;

    // 1. Previous month muted days
    for (let i = startColumn - 1; i >= 0; i--) {
      const prevDayNum = prevMonthDays - i;
      html += `<span class="cal-day muted">${prevDayNum}</span>`;
    }

    // 2. Current month active / past-disabled days (1 to totalDaysInMonth)
    for (let d = 1; d <= totalDaysInMonth; d++) {
      let isPastDay = false;
      if (isPastMonth) {
        isPastDay = true;
      } else if (isCurrentMonth && d < currentDate) {
        isPastDay = true;
      }

      if (isPastDay) {
        html += `<span class="cal-day muted past-disabled" title="Past date unavailable">${d}</span>`;
      } else {
        const isActive = (d === defaultActiveDay) ? 'active' : '';
        html += `<span class="cal-day ${isActive}" data-day="${d}">${d}</span>`;
      }
    }

    // 3. Next month muted days to complete grid row
    const totalCells = startColumn + totalDaysInMonth;
    const remainingCells = (7 - (totalCells % 7)) % 7;
    for (let n = 1; n <= remainingCells; n++) {
      html += `<span class="cal-day muted">${n}</span>`;
    }

    calGrid.innerHTML = html;

    // Re-bind day click listeners
    const freshCalDays = calGrid.querySelectorAll('.cal-day:not(.muted)');
    freshCalDays.forEach(day => {
      day.addEventListener('click', () => {
        freshCalDays.forEach(d => d.classList.remove('active'));
        day.classList.add('active');
        updateAvailableTimeSlots();
      });
    });

    updateAvailableTimeSlots();
  }

  // Initial render on load
  if (calGrid) {
    const now = new Date();
    if (monthSelect) monthSelect.value = monthsList[now.getMonth()];
    if (yearSelect) yearSelect.value = now.getFullYear().toString();

    renderDynamicCalendar();
  }

  // Month & Year Select Change Handlers
  if (monthSelect) {
    monthSelect.addEventListener('change', renderDynamicCalendar);
  }
  if (yearSelect) {
    yearSelect.addEventListener('change', renderDynamicCalendar);
  }

  // Navigation Arrows Click Handlers
  if (prevMonthBtn && monthSelect) {
    prevMonthBtn.addEventListener('click', () => {
      let idx = monthsList.indexOf(monthSelect.value);
      if (idx > 0) {
        monthSelect.value = monthsList[idx - 1];
        renderDynamicCalendar();
      } else if (yearSelect) {
        let curYear = parseInt(yearSelect.value, 10);
        const prevYearOption = yearSelect.querySelector(`option[value="${curYear - 1}"]`);
        if (prevYearOption) {
          yearSelect.value = (curYear - 1).toString();
          monthSelect.value = 'December';
          renderDynamicCalendar();
        }
      }
    });
  }

  if (nextMonthBtn && monthSelect) {
    nextMonthBtn.addEventListener('click', () => {
      let idx = monthsList.indexOf(monthSelect.value);
      if (idx < monthsList.length - 1) {
        monthSelect.value = monthsList[idx + 1];
        renderDynamicCalendar();
      } else if (yearSelect) {
        let curYear = parseInt(yearSelect.value, 10);
        const nextYearOption = yearSelect.querySelector(`option[value="${curYear + 1}"]`);
        if (nextYearOption) {
          yearSelect.value = (curYear + 1).toString();
          monthSelect.value = 'January';
          renderDynamicCalendar();
        }
      }
    });
  }

  // Manual Time Input & Chips Suggestion Binding
  if (timeChips.length && manualTimeInput) {
    timeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (chip.classList.contains('disabled-slot')) return;
        timeChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const selectedTime = chip.getAttribute('data-time');
        manualTimeInput.value = selectedTime;
      });
    });
  }

  // Scroll Reveal Animations via ScrollTrigger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Section headers fade in
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        duration: 1.0,
        ease: 'power2.out'
      });
    });

    // Service cards stagger reveal
    gsap.from('.services-panel .service-card', {
      scrollTrigger: {
        trigger: '.services-panel',
        start: 'top 75%'
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1.0,
      ease: 'power3.out'
    });

    // Portfolio items stagger reveal
    gsap.from('.portfolio-grid .portfolio-item', {
      scrollTrigger: {
        trigger: '.portfolio-grid',
        start: 'top 80%'
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.15,
      duration: 1.0,
      ease: 'power2.out'
    });
  }
});
