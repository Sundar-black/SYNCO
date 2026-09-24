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

// Navigation Highlight & Scroll
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
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

// Calendar Widget & Time Selection
function initCalendarWidget() {
  const days = document.querySelectorAll('.cal-day:not(.muted)');
  const chips = document.querySelectorAll('.time-chip');
  const timeInput = document.getElementById('frm-time');

  days.forEach(day => {
    day.addEventListener('click', () => {
      days.forEach(d => d.classList.remove('active'));
      day.classList.add('active');
    });
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (timeInput) {
        timeInput.value = chip.getAttribute('data-time');
      }
    });
  });
}
