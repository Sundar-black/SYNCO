// Service Data for Modals
const serviceData = {
  "Web Development": {
    badge: "SYNCO ENGINEERING",
    title: "Web Development & Cloud Architecture",
    tagline: "Sub-100ms LCP Web Platforms Engineered for High Conversion",
    overview: "We build fast, resilient web applications that convert visitors into active ecosystem users. Leveraging Next.js 14 server components, TypeScript type safety, and customized WebGL canvas animation pipelines, our web solutions dominate competition.",
    pillars: [
      { title: "Next.js 14 & SSR Architecture", desc: "Sub-100ms server rendering with edge cache routing and static generation." },
      { title: "Custom WebGL & GSAP Engine", desc: "Hardware-accelerated dynamic canvas backgrounds and 60fps micro-animations." },
      { title: "Headless CMS & API Layers", desc: "Seamless GraphQL/REST microservice integration with real-time data sync." },
      { title: "Technical SEO Engineering", desc: "Deep schema markup, automated open-graph rendering, and Lighthouse 100 optimization." }
    ],
    tech: ["Next.js 14", "TypeScript", "React", "Node.js", "GSAP", "Tailwind CSS", "GraphQL"],
    workflow: [
      "1. Discovery & Architecture Blueprint",
      "2. UI Prototype & Component Tokens",
      "3. Frontend & Microservice Engineering",
      "4. Automated QA & Edge Deployment"
    ],
    metrics: [
      { num: "< 80ms", lbl: "Edge Latency" },
      { num: "99.99%", lbl: "Uptime SLA" },
      { num: "100/100", lbl: "Lighthouse Score" }
    ]
  },
  "App Development": {
    badge: "SYNCO MOBILE SYSTEMS",
    title: "Native & Cross-Platform Mobile Engineering",
    tagline: "Hardware-Accelerated Mobile Applications for iOS & Android",
    overview: "Our mobile division engineers tactile mobile experiences that handle millions of daily interactions seamlessly. By combining React Native with native Swift/Kotlin bridges, we achieve near-instant UI responsiveness and biometric security.",
    pillars: [
      { title: "React Native & Swift Bridge", desc: "Native execution speed with maximum code reusability across iOS & Android." },
      { title: "Offline-First Data Sync", desc: "Asynchronous local queue synchronization under intermittent connectivity." },
      { title: "Hardware GPU Acceleration", desc: "Direct GPU rendering for charts, camera pipelines, and interactive maps." },
      { title: "Biometric & Keychain Security", desc: "Hardware keychain encryption, biometric auth, and token rotation." }
    ],
    tech: ["React Native", "Swift / Kotlin", "TypeScript", "Redux Toolkit", "WatermelonDB", "Firebase"],
    workflow: [
      "1. Ergonomic Mobile Blueprint",
      "2. Core Architecture & Offline State",
      "3. Native Bridge Integration",
      "4. App Store & Play Store Release"
    ],
    metrics: [
      { num: "60 FPS", lbl: "Frame Rate" },
      { num: "20M+", lbl: "Daily Requests" },
      { num: "100%", lbl: "Sync Reliability" }
    ]
  },
  "Graphic Design": {
    badge: "SYNCO VISUAL DESIGN",
    title: "Graphic Design & Brand Systems",
    tagline: "Minimalist Brand Assets, UI Tokens, and Visual Identity",
    overview: "We craft distinctive, modern visual identities and graphic systems customized for premium digital brands. From vector logo marks to full dark-mode component design systems, our artwork sets industry standards.",
    pillars: [
      { title: "Visual Brand Identity", desc: "Modular logo marks, typography scales, and brand style documentation." },
      { title: "Dark-Mode UI Tokens", desc: "Curated monochrome color tokens, depth elevation, and crisp contrast ratios." },
      { title: "Marketing & Social Assets", desc: "High-resolution graphic templates, banner suites, and presentation decks." },
      { title: "Design System Guidelines", desc: "Complete Figma token libraries and reusable component guidelines." }
    ],
    tech: ["Figma", "Illustrator", "Photoshop", "Design Tokens", "Vector Engine"],
    workflow: [
      "1. Brand DNA & Concept Workshop",
      "2. Logo & Visual Token Exploration",
      "3. Design System & Asset Suite Production",
      "4. Vector Handoff & Guidelines Release"
    ],
    metrics: [
      { num: "100%", lbl: "Vector Fidelity" },
      { num: "+310%", lbl: "Brand Perception" },
      { num: "0px", lbl: "Pixel Distortion" }
    ]
  },
  "Meta Ads": {
    badge: "SYNCO GROWTH MARKETING",
    title: "Meta & Instagram Paid Advertising",
    tagline: "Algorithmic Ad Scaling Engineered for High ROAS",
    overview: "We scale ad spend into profitable revenue through algorithmic Meta and Instagram audience targeting, server-side Conversions API (CAPI) tracking, and rapid creative A/B testing matrixes.",
    pillars: [
      { title: "Meta CAPI & First-Party Tracking", desc: "Server-side event routing bypassing iOS browser blocking." },
      { title: "Creative A/B Testing Matrix", desc: "Testing 20+ video and graphic variations weekly for optimal CPA." },
      { title: "Algorithmic Bid Scaling", desc: "Dynamic budget allocation favoring highest ROAS ad sets automatically." },
      { title: "High-Intent Retargeting", desc: "Sequential retargeting sequences turning cold traffic into clients." }
    ],
    tech: ["Meta Ads Manager", "Meta CAPI", "Google Tag Manager", "Analytics", "HubSpot"],
    workflow: [
      "1. Audience Audit & Funnel Setup",
      "2. Creative & Copy Asset Engine Launch",
      "3. Algorithmic Launch & Bid Tuning",
      "4. Weekly ROAS Optimization"
    ],
    metrics: [
      { num: "4.2x", lbl: "Average ROAS" },
      { num: "-38%", lbl: "Cost Per Lead" },
      { num: "+340%", lbl: "Inquiry Growth" }
    ]
  },
  "Video Editing": {
    badge: "SYNCO POST PRODUCTION",
    title: "Cinematic Video Editing & Motion FX",
    tagline: "High-Authority Video Editing & Hook Storytelling",
    overview: "Our video editing suite turns raw footage into cinematic brand showcases, high-converting social reels, and YouTube commercials featuring 4K color grading, kinetic typography, and motion graphics.",
    pillars: [
      { title: "Pattern-Interrupt Hooks", desc: "First 3-second hook edits designed to maximize view retention." },
      { title: "4K Color Grading & Audio", desc: "Hollywood-grade color LUTs, sound design, and audio normalization." },
      { title: "Kinetic Motion Graphics", desc: "2D/3D title overlays, cyber HUD elements, and seamless transitions." },
      { title: "Multi-Platform Ratios", desc: "Customized aspect ratio exports for 16:9, 9:16 reels, and feed ads." }
    ],
    tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Blender 3D"],
    workflow: [
      "1. Assembly Cut & Hook Pacing",
      "2. Motion Graphics & Sound Design",
      "3. 4K Color Grading & Master Mix",
      "4. Multi-Format Platform Export"
    ],
    metrics: [
      { num: "85%", lbl: "3-Sec Retention" },
      { num: "4.5x", lbl: "View Index" },
      { num: "4K HDR", lbl: "Output Quality" }
    ]
  },
  "Video Shooting": {
    badge: "SYNCO CINEMATOGRAPHY",
    title: "Professional 4K Video Production & Shooting",
    tagline: "High-Production Cinema Shoots & Brand Commercials",
    overview: "SYNCO provides full-service 4K video shooting, camera choreography, studio lighting, and drone aerial footage to film commercial reels and brand videos that establish domain authority.",
    pillars: [
      { title: "4K Cinema Camera Rigging", desc: "Professional cinema camera setups with prime lens sets and gimbals." },
      { title: "Studio & Location Lighting", desc: "3-point studio lighting, key lights, and ambient atmospheric haze." },
      { title: "Aerial Drone Shooting", desc: "Licensed 4K drone cinematography capturing exterior campus and scale visuals." },
      { title: "On-Set Sound Recording", desc: "Wireless lavalier and shotgun audio capture ensuring crystal voice clarity." }
    ],
    tech: ["RED / Sony FX Cinema", "DJI Drones", "Aputure Lights", "Sennheiser Audio"],
    workflow: [
      "1. Location Scouting & Shot List",
      "2. Studio & Lighting Setup",
      "3. Multi-Cam Cinema Shoot",
      "4. Raw Footage Media Transfer"
    ],
    metrics: [
      { num: "4K 60P", lbl: "Master Format" },
      { num: "100%", lbl: "Audio Clarity" },
      { num: "Pro", lbl: "Lighting Quality" }
    ]
  },
  "Scripting": {
    badge: "SYNCO COPY & CONCEPTS",
    title: "Video Scripting & Storytelling Psychology",
    tagline: "High-Converting Ad Scripts & Storyboard Blueprints",
    overview: "We write compelling, psychological video scripts for commercials, social reels, and brand videos. Our scripts combine strong hooks, clear value narrative, and friction-free call-to-actions.",
    pillars: [
      { title: "Psychological Hook Blueprints", desc: "Capturing instant user curiosity within the first 3 seconds of video." },
      { title: "Narrative Storyboarding", desc: "Structuring visual cues, spoken dialogue, and text overlays side-by-side." },
      { title: "Retention Pacing", desc: "Eliminating fluff and maintaining high viewer engagement throughout." },
      { title: "Direct-Response CTAs", desc: "Crafting clear, high-converting closing offers and landing page prompts." }
    ],
    tech: ["Storyboarding", "Hook Copywriting", "Script Analysis", "Conversion Psychology"],
    workflow: [
      "1. Brand Persona & Audience Research",
      "2. Hook & Core Angle Ideation",
      "3. Full Script & Storyboard Writing",
      "4. Director & Actor Review Revision"
    ],
    metrics: [
      { num: "3.5x", lbl: "Retention Index" },
      { num: "+280%", lbl: "Ad Hook Rate" },
      { num: "100%", lbl: "Script Precision" }
    ]
  },
  "Social Media Management": {
    badge: "SYNCO OMNICHANNEL GROWTH",
    title: "End-to-End Social Media Management",
    tagline: "Strategic Brand Channel Administration & Audience Growth",
    overview: "We manage and scale your brand across all major social media platforms. SYNCO handles content scheduling, graphic carousel releases, video reel distribution, community engagement, and growth metrics.",
    pillars: [
      { title: "Omnichannel Calendar Execution", desc: "Structured publishing schedules across Instagram, LinkedIn, YouTube, and X." },
      { title: "Community & Lead Routing", desc: "Active direct message handling and inbound qualified lead forwarding." },
      { title: "High-Authority Content Engine", desc: "Publishing graphics, video reels, and long-form posts systematically." },
      { title: "Growth & Analytics Audits", desc: "Monthly performance reports tracking reach, engagement, and click-through rates." }
    ],
    tech: ["Buffer / Hootsuite", "Meta Business Suite", "LinkedIn Creator", "Analytics Hub"],
    workflow: [
      "1. Social Audit & Content Strategy",
      "2. Monthly Content Calendar Creation",
      "3. Scheduled Publishing & Community Management",
      "4. Monthly Growth Analytics Audit"
    ],
    metrics: [
      { num: "1M+", lbl: "Monthly Impressions" },
      { num: "5.8x", lbl: "Growth Rate" },
      { num: "24/7", lbl: "Channel Vigilance" }
    ]
  }
};

// Portfolio Case Studies
const portfolioData = {
  "1": {
    cat: "WEB PLATFORM",
    title: "Aether Web3 Dashboard",
    client: "Aether Labs",
    spec: "Web Platform & Canvas",
    date: "Q2 2026",
    desc: "A multi-tenant Web3 dashboard built for high-throughput crypto asset tracking. Utilizes headless API nodes, real-time WebSockets, and customized HTML5 Canvas canvas data mapping for real-time visualization under sub-80ms edge latency.",
    stat1: "+340%",
    lbl1: "Conversion Increment",
    stat2: "< 80ms",
    lbl2: "Global Latency"
  },
  "2": {
    cat: "PERFORMANCE ACQUISITION",
    title: "Nova Launch Campaign",
    client: "Nova Corp",
    spec: "Paid Acquisition & Funnels",
    date: "Q1 2026",
    desc: "Engineered a multi-channel digital acquisition campaign bringing +340% inbound inquiries within 45 days. Built server-side Meta CAPI tracking and dynamic video ad creative split tests to maximize ROI.",
    stat1: "4.2x",
    lbl1: "Verified ROAS",
    stat2: "-38%",
    lbl2: "CPA Reduction"
  },
  "3": {
    cat: "MOBILE ARCHITECTURE",
    title: "Spectra Mobile System",
    client: "Spectra Logistics",
    spec: "iOS & Android Architecture",
    date: "Q2 2026",
    desc: "Tactile hardware-accelerated asset tracking app handling over 20M daily requests. Includes offline SQLite queue syncing, biometric security keychains, and instant hardware push notifications.",
    stat1: "60 FPS",
    lbl1: "Render Smoothness",
    stat2: "20M+",
    lbl2: "Daily Requests"
  }
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBentoModals();
  initPortfolioModals();
  initPortfolioTabs();
  initCalendarWidget();
});

// Navigation Highlight, Smooth Scroll & Mobile Menu Toggle
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (navLinks) navLinks.classList.remove('mobile-open');
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  function updateActiveNav() {
    let current = 'home';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      if (item.getAttribute('data-target') === current) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
}

// Bento Cards Learn More Modal
function initBentoModals() {
  const bentoCards = document.querySelectorAll('.bento-card');
  const modal = document.getElementById('service-modal');
  const closeBtn = document.getElementById('service-modal-close');
  const ctaBtn = document.getElementById('svc-modal-cta');

  bentoCards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceKey = card.getAttribute('data-service');
      const data = serviceData[serviceKey];
      if (!data) return;

      document.getElementById('svc-modal-badge').textContent = data.badge;
      document.getElementById('svc-modal-title').textContent = data.title;
      document.getElementById('svc-modal-tagline').textContent = data.tagline;
      document.getElementById('svc-modal-overview').textContent = data.overview;

      // Pillars
      const pillarsGrid = document.getElementById('svc-modal-pillars');
      pillarsGrid.innerHTML = data.pillars.map(p => `
        <div class="pillar-item">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
      `).join('');

      // Tech Stack
      const techBox = document.getElementById('svc-modal-tech');
      techBox.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');

      // Workflow
      const workflowList = document.getElementById('svc-modal-workflow');
      workflowList.innerHTML = data.workflow.map(w => `<li>${w}</li>`).join('');

      // Metrics
      const metricsGrid = document.getElementById('svc-modal-metrics');
      metricsGrid.innerHTML = data.metrics.map(m => `
        <div class="metric-box">
          <div class="num">${m.num}</div>
          <div class="lbl">${m.lbl}</div>
        </div>
      `).join('');

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Portfolio Modal
function initPortfolioModals() {
  const items = document.querySelectorAll('.portfolio-item');
  const modal = document.getElementById('portfolio-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      const data = portfolioData[id];
      if (!data) return;

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

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Portfolio Filtering
function initPortfolioTabs() {
  const tabs = document.querySelectorAll('.portfolio-tabs .tab-btn');
  const items = document.querySelectorAll('.portfolio-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Calendar Widget & Dynamic Date/Time Selection Engine
function initCalendarWidget() {
  const monthSelect = document.getElementById('cal-month-select');
  const yearSelect = document.getElementById('cal-year-select');
  const prevBtn = document.getElementById('cal-prev-month');
  const nextBtn = document.getElementById('cal-next-month');
  const gridEl = document.getElementById('cal-grid');
  const timeInput = document.getElementById('frm-time');
  const hiddenDateInput = document.getElementById('frm-selected-date');
  const summaryText = document.getElementById('cal-summary-text');
  const chips = document.querySelectorAll('.time-chip');

  if (!monthSelect || !yearSelect || !gridEl) return;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const shortDayNames = ["M", "T", "W", "T", "F", "S", "S"];

  const realToday = new Date();
  const currentYear = realToday.getFullYear();
  const currentMonth = realToday.getMonth(); // 0-indexed

  // State: selected date defaults to today
  let selectedDate = new Date(realToday.getFullYear(), realToday.getMonth(), realToday.getDate());
  let selectedTime = timeInput ? timeInput.value.trim() : "10:00 AM";

  // Populate Month select dropdown
  monthSelect.innerHTML = monthNames.map((m, idx) => 
    `<option value="${idx}" ${idx === currentMonth ? 'selected' : ''}>${m}</option>`
  ).join('');

  // Populate Year select dropdown (current year to +3 years)
  const startYear = currentYear;
  yearSelect.innerHTML = Array.from({ length: 4 }, (_, i) => startYear + i)
    .map(y => `<option value="${y}" ${y === currentYear ? 'selected' : ''}>${y}</option>`)
    .join('');

  // Function to render calendar grid for selected month & year
  function renderGrid() {
    gridEl.innerHTML = '';

    // Render day-of-week header labels (M T W T F S S)
    shortDayNames.forEach(name => {
      const label = document.createElement('span');
      label.className = 'cal-day-label';
      label.textContent = name;
      gridEl.appendChild(label);
    });

    const viewYear = parseInt(yearSelect.value, 10);
    const viewMonth = parseInt(monthSelect.value, 10);

    // Calculate month metrics (ISO week: Monday = 0, Sunday = 6)
    const firstDayObj = new Date(viewYear, viewMonth, 1);
    let startDayIndex = firstDayObj.getDay() - 1; // getDay(): 0=Sun, 1=Mon...
    if (startDayIndex < 0) startDayIndex = 6;

    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();

    // Render previous month trailing days (muted & disabled)
    for (let i = startDayIndex - 1; i >= 0; i--) {
      const dayEl = document.createElement('span');
      dayEl.className = 'cal-day muted past';
      dayEl.textContent = prevMonthDays - i;
      gridEl.appendChild(dayEl);
    }

    // Render current month days
    const checkToday = new Date(realToday.getFullYear(), realToday.getMonth(), realToday.getDate());

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEl = document.createElement('span');
      const thisDate = new Date(viewYear, viewMonth, day);
      const checkThis = new Date(viewYear, viewMonth, day);

      const classes = ['cal-day'];

      // Disable past dates in current month/year
      if (checkThis < checkToday) {
        classes.push('muted', 'past');
      } else {
        if (checkThis.getTime() === checkToday.getTime()) {
          classes.push('today');
        }
        if (selectedDate && checkThis.getTime() === selectedDate.getTime()) {
          classes.push('active');
        }

        // Add interactive click handler for valid upcoming dates
        dayEl.addEventListener('click', () => {
          selectedDate = thisDate;
          renderGrid();
          updateSummary();
        });
      }

      dayEl.className = classes.join(' ');
      dayEl.textContent = day;
      dayEl.setAttribute('data-day', day);
      gridEl.appendChild(dayEl);
    }

    // Render next month leading days to round out grid
    const totalCells = startDayIndex + daysInMonth;
    const remainingCells = (7 - (totalCells % 7)) % 7;
    for (let day = 1; day <= remainingCells; day++) {
      const dayEl = document.createElement('span');
      dayEl.className = 'cal-day muted';
      dayEl.textContent = day;
      gridEl.appendChild(dayEl);
    }

    // Disable prev button if already on real current month/year
    if (prevBtn) {
      const isAtOrBeforeCurrent = viewYear < realToday.getFullYear() || 
        (viewYear === realToday.getFullYear() && viewMonth <= realToday.getMonth());
      prevBtn.style.opacity = isAtOrBeforeCurrent ? '0.3' : '1';
      prevBtn.style.pointerEvents = isAtOrBeforeCurrent ? 'none' : 'auto';
    }

    // Trigger Lucide icons re-creation if available
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // Update live selection display and hidden input
  function updateSummary() {
    if (!selectedDate) return;
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const dateStr = selectedDate.toLocaleDateString('en-US', options);
    
    if (summaryText) {
      summaryText.textContent = `Selected: ${dateStr} @ ${selectedTime}`;
    }
    if (hiddenDateInput) {
      const isoFormatted = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
      hiddenDateInput.value = `${isoFormatted} ${selectedTime}`;
    }
  }

  // Dropdown change events
  monthSelect.addEventListener('change', renderGrid);
  yearSelect.addEventListener('change', renderGrid);

  // Month navigation arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let m = parseInt(monthSelect.value, 10);
      let y = parseInt(yearSelect.value, 10);
      if (m > 0) {
        m--;
      } else {
        m = 11;
        y--;
      }
      monthSelect.value = m;
      yearSelect.value = y;
      renderGrid();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let m = parseInt(monthSelect.value, 10);
      let y = parseInt(yearSelect.value, 10);
      if (m < 11) {
        m++;
      } else {
        m = 0;
        y++;
      }
      monthSelect.value = m;
      yearSelect.value = y;
      renderGrid();
    });
  }

  // Time Chip pill clicks
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedTime = chip.getAttribute('data-time') || chip.textContent.trim();
      if (timeInput) {
        timeInput.value = selectedTime;
      }
      updateSummary();
    });
  });

  // Manual time input change
  if (timeInput) {
    timeInput.addEventListener('input', (e) => {
      selectedTime = e.target.value.trim();
      chips.forEach(c => {
        if (c.getAttribute('data-time') === selectedTime) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });
      updateSummary();
    });
  }

  // Initial render
  renderGrid();
  updateSummary();
}

// ======================================================
// SYNCO — BMW M5 HIGH-RES IMAGE CINEMATIC SCROLL ANIMATION
// ======================================================

function initSyncoScrollCar() {
  const canvas = document.getElementById("synco-car-canvas");

  if (!canvas || typeof THREE === "undefined") {
    console.warn("Three.js or canvas not found");
    return;
  }

  // ----------------------------------------------------
  // SCENE & CAMERA
  // ----------------------------------------------------

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0.2, 6.5);

  // ----------------------------------------------------
  // RENDERER
  // ----------------------------------------------------

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
  );

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // ----------------------------------------------------
  // LIGHTING
  // ----------------------------------------------------

  const ambient = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(ambient);

  const frontSpotLeft = new THREE.PointLight(0x00bfff, 0, 15);
  frontSpotLeft.position.set(-1.2, 0.2, 2);
  scene.add(frontSpotLeft);

  const frontSpotRight = new THREE.PointLight(0x00bfff, 0, 15);
  frontSpotRight.position.set(1.2, 0.2, 2);
  scene.add(frontSpotRight);

  // ----------------------------------------------------
  // CAR GROUP & BMW M5 IMAGE TEXTURE
  // ----------------------------------------------------

  const carGroup = new THREE.Group();
  scene.add(carGroup);

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    './assets/images/bmw_m5.png',
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;

      const imageAspect = texture.image.width / texture.image.height;
      const planeHeight = 4.0;
      const planeWidth = planeHeight * imageAspect;

      const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const carMesh = new THREE.Mesh(geometry, material);
      carMesh.position.set(0, -0.1, 0);
      carGroup.add(carMesh);

      // ----------------------------------------------------
      // GLOWING LED HEADLIGHT OVERLAYS (Angel Eye Effect)
      // ----------------------------------------------------

      const canvasGlow = document.createElement('canvas');
      canvasGlow.width = 128;
      canvasGlow.height = 128;
      const ctx = canvasGlow.getContext('2d');
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(0, 190, 255, 0.85)');
      grad.addColorStop(0.7, 'rgba(0, 120, 255, 0.25)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);

      const glowTex = new THREE.CanvasTexture(canvasGlow);
      const glowMat = new THREE.MeshBasicMaterial({
        map: glowTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0,
        depthWrite: false
      });

      const glowGeo = new THREE.PlaneGeometry(0.85, 0.45);

      const headlightGlowLeft = new THREE.Mesh(glowGeo, glowMat);
      headlightGlowLeft.position.set(-0.75, -0.12, 0.05);
      carGroup.add(headlightGlowLeft);

      const headlightGlowRight = new THREE.Mesh(glowGeo, glowMat);
      headlightGlowRight.position.set(0.75, -0.12, 0.05);
      carGroup.add(headlightGlowRight);

      carGroup.userData = {
        glowMat,
        frontSpotLeft,
        frontSpotRight
      };

      updateAnimation();
    },
    undefined,
    (err) => {
      console.warn("Could not load BMW M5 texture:", err);
    }
  );

  // ----------------------------------------------------
  // HELPER FUNCTIONS
  // ----------------------------------------------------

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function range(progress, start, end) {
    return clamp((progress - start) / (end - start), 0, 1);
  }

  // ----------------------------------------------------
  // SCROLL ANIMATION LOGIC
  // ----------------------------------------------------

  function updateAnimation() {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? scrollTop / documentHeight : 0;

    // 0% → 25%: Car appearance, 3D tilt rotation & subtle sway
    const rotateProg = range(progress, 0.0, 0.25);
    carGroup.rotation.y = THREE.MathUtils.lerp(-0.16, 0.16, rotateProg);
    carGroup.rotation.z = Math.sin(rotateProg * Math.PI) * 0.03;
    carGroup.position.x = Math.sin(rotateProg * Math.PI) * 0.35;
    carGroup.position.y = THREE.MathUtils.lerp(-0.3, 0.0, rotateProg);

    // 25% → 60%: Parallax zoom & pitch angle
    const midProg = range(progress, 0.25, 0.60);
    carGroup.rotation.x = Math.sin(midProg * Math.PI) * -0.05;
    carGroup.scale.setScalar(THREE.MathUtils.lerp(1.0, 1.15, midProg));

    // 60% → 80%: Angel Eye LED Headlights ignition
    const lightProg = range(progress, 0.60, 0.80);
    const smoothLight = lightProg * lightProg;

    if (carGroup.userData.glowMat) {
      carGroup.userData.glowMat.opacity = smoothLight * 0.95;
      carGroup.userData.frontSpotLeft.intensity = smoothLight * 14;
      carGroup.userData.frontSpotRight.intensity = smoothLight * 14;
    }

    // 80% → 100%: Forward zoom acceleration towards camera
    const forwardProg = range(progress, 0.80, 1.0);
    carGroup.position.z = THREE.MathUtils.lerp(0, 2.5, forwardProg);
    carGroup.position.y = THREE.MathUtils.lerp(0.0, -0.5, forwardProg);
    carGroup.scale.setScalar(THREE.MathUtils.lerp(1.15, 1.55, forwardProg));
  }

  // ----------------------------------------------------
  // LISTENERS & RENDER LOOP
  // ----------------------------------------------------

  window.addEventListener("scroll", updateAnimation, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  render();
}

// START
document.addEventListener("DOMContentLoaded", () => {
  initSyncoScrollCar();
});




