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
<<<<<<< HEAD
    cat: "WEB PLATFORM",
    title: "Aether Web3 Dashboard",
=======
    prompt: "> [FEEDBACK_LOG_01]",
    tag: "SYNCO IT · WEB DEV",
    quote: "\"SYNCO didn't just rebuild our website; they re-engineered our digital footprint. The transition system between services and the performance speed is unparalleled.\"",
    author: "Alexander Mercer",
    role: "CEO, Aether Labs",
    avatar: "AM",
    color: "var(--accent-primary)",
    metric: "+280% Engagement Boost",
    details: "Aether Labs required a next-generation Web3 platform capable of rendering real-time network node analytics on interactive HTML5 canvases. SYNCO IT engineered a custom Next.js 14 solution integrated with GraphQL microservices, bringing server response latency down to <80ms and boosting platform engagement by +280% within 30 days of launch."
  },
  "2": {
    prompt: "> [FEEDBACK_LOG_02]",
    tag: "SYNCO DM · ADS",
    quote: "\"The performance marketing integrations created by their DM team returned a 4.2x ROAS inside of two months. Absolute masters of their craft.\"",
    author: "Sarah Kincaid",
    role: "Marketing Director, Nova Corp",
    avatar: "SK",
    color: "#8b5cf6",
    metric: "4.2x ROAS Scaling Multiple",
    details: "Nova Corp was struggling with rising acquisition costs across standard ad channels. SYNCO DM constructed a multi-channel Meta & Google acquisition funnel paired with server-side Conversions API tracking. Within 45 days, client cost per acquisition dropped by 38% while ROAS sustained a 4.2x multiple across $150k+ in ad spend."
  },
  "3": {
    prompt: "> [FEEDBACK_LOG_03]",
    tag: "SYNCO IT · MOBILE APP",
    quote: "\"Architected a native mobile system supporting offline queue sync and localized push syncs sustaining 100% uptime under extreme grid spikes.\"",
    author: "Marcus Vance",
    role: "CTO, Spectra Logistics",
    avatar: "MV",
    color: "var(--accent-primary)",
    metric: "100% System Uptime Score",
    details: "Spectra Logistics needed a robust fleet and package tracking application for 5,000+ mobile field agents operating in areas with unstable cellular service. SYNCO IT engineered an offline-first React Native architecture backed by SQLite queue caching. The application processes over 20M daily sync requests with 0% data drop."
  },
  "4": {
    prompt: "> [FEEDBACK_LOG_04]",
    tag: "SYNCO IT · CLOUD ARCH",
    quote: "\"The high-throughput node configuration and dynamic canvas rendering cut server latency down to <80ms for over 20M+ daily sync requests.\"",
    author: "Elena Rostova",
    role: "Product Lead, Quantum AI",
    avatar: "ER",
    color: "var(--accent-primary)",
    metric: "<80ms Edge Server Latency",
    details: "Quantum AI required an ultra-responsive UI capable of handling real-time data streaming from neural network models. SYNCO IT optimized the frontend rendering loop using WebGL shaders and edge-cached serverless API routes, ensuring silky 60fps canvas animations and instant user responsiveness."
  }
};

// Project mock data for case studies
const projectData = {
  "1": {
    title: "Aether Platform",
    cat: "IT DIVISION · WEB DEV",
>>>>>>> e75b24d29ad9f2ce82cff3adde6aca608c46d4f6
    client: "Aether Labs",
    spec: "Web Platform & Canvas",
    date: "Q2 2026",
<<<<<<< HEAD
    desc: "A multi-tenant Web3 dashboard built for high-throughput crypto asset tracking. Utilizes headless API nodes, real-time WebSockets, and customized HTML5 Canvas canvas data mapping for real-time visualization under sub-80ms edge latency.",
    stat1: "+340%",
    lbl1: "Conversion Increment",
=======
    image: "assets/images/portfolio-aether.jpg",
    desc: "We engineered a clean-room modular dashboard displaying multi-tenant analytics. Backed by highly efficient GraphQL APIs and a React framework, it processes heavy datasets under 80ms while rendering live network charts on HTML5 canvases.",
    stat1: "+280%",
    lbl1: "Active Engagement",
>>>>>>> e75b24d29ad9f2ce82cff3adde6aca608c46d4f6
    stat2: "< 80ms",
    lbl2: "Global Latency"
  },
  "2": {
    cat: "PERFORMANCE ACQUISITION",
    title: "Nova Launch Campaign",
    client: "Nova Corp",
<<<<<<< HEAD
    spec: "Paid Acquisition & Funnels",
    date: "Q1 2026",
    desc: "Engineered a multi-channel digital acquisition campaign bringing +340% inbound inquiries within 45 days. Built server-side Meta CAPI tracking and dynamic video ad creative split tests to maximize ROI.",
    stat1: "4.2x",
    lbl1: "Verified ROAS",
    stat2: "-38%",
    lbl2: "CPA Reduction"
=======
    spec: "Performance Marketing",
    date: "Q2 2026",
    image: "assets/images/portfolio-nova.jpg",
    desc: "Nova required organic reach and paid conversions. Our DM team built structured landing environments and target routines on Google & Meta platforms. Using real-time bidding analytics, we scaled ROAS to 4.2x, acquiring over 50k qualified platform signups.",
    stat1: "+340%",
    lbl1: "Acquisition Index",
    stat2: "4.2x",
    lbl2: "Return on Ad Spend"
>>>>>>> e75b24d29ad9f2ce82cff3adde6aca608c46d4f6
  },
  "3": {
    cat: "MOBILE ARCHITECTURE",
    title: "Spectra Mobile System",
    client: "Spectra Logistics",
<<<<<<< HEAD
    spec: "iOS & Android Architecture",
    date: "Q2 2026",
    desc: "Tactile hardware-accelerated asset tracking app handling over 20M daily requests. Includes offline SQLite queue syncing, biometric security keychains, and instant hardware push notifications.",
    stat1: "60 FPS",
    lbl1: "Render Smoothness",
    stat2: "20M+",
    lbl2: "Daily Requests"
=======
    spec: "Native App Development",
    date: "Q1 2026",
    image: "assets/images/portfolio-spectra.jpg",
    desc: "Spectra coordinates real-time logistics. We architected a swift mobile system using React Native with native bridge expansions. It supports offline queue sync, local secure DB structures, and localized push syncs, sustaining 100% uptime under grid spikes.",
    stat1: "20M",
    lbl1: "Daily Sync Requests",
    stat2: "100%",
    lbl1: "Uptime Score"
>>>>>>> e75b24d29ad9f2ce82cff3adde6aca608c46d4f6
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

<<<<<<< HEAD
  bentoCards.forEach(card => {
=======
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

      // Populate Image Showcase
      const modalImg = document.getElementById('modal-project-img');
      if (modalImg && data.image) {
        modalImg.style.backgroundImage = `url('${data.image}')`;
      }
      
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

  // ==========================================
  // Interactive Service Learn More Modal Engine
  // ==========================================
  const serviceModal = document.getElementById('service-modal');
  const serviceModalClose = document.getElementById('service-modal-close');
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceCtaBtn = document.getElementById('svc-modal-cta');

  serviceCards.forEach(card => {
>>>>>>> e75b24d29ad9f2ce82cff3adde6aca608c46d4f6
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
<<<<<<< HEAD
  });
}
=======
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

  // Contact Form Submission Handler
  const contactForm = document.getElementById('main-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('frm-name');
      const name = nameInput && nameInput.value ? nameInput.value : 'Partner';
      const divisionInput = document.getElementById('frm-division');
      const division = divisionInput ? divisionInput.value : 'Full Ecosystem';
      
      // Fetch active slot info
      const activeDay = document.querySelector('.cal-day.active');
      const monthElem = document.getElementById('cal-month-select');
      const monthVal = monthElem ? monthElem.value.substring(0, 3) : 'Aug';
      const day = activeDay ? activeDay.getAttribute('data-day') : '1';
      const timeInput = document.getElementById('frm-time');
      const time = timeInput && timeInput.value ? timeInput.value : '10:00 AM';
      const dateStr = `${monthVal} ${day}, ${time}`;
      
      // Reset form
      contactForm.reset();
      
      // Show confirmation toast
      const alertBox = document.createElement('div');
      alertBox.className = 'form-success-toast glass-panel';
      alertBox.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: rgba(3, 3, 7, 0.95);
        border: 1px solid var(--accent-primary);
        box-shadow: 0 0 30px var(--accent-glow);
        border-radius: 14px;
        padding: 20px 24px;
        color: #fff;
        z-index: 100000;
        font-family: var(--font-heading);
        backdrop-filter: blur(16px);
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        align-items: center;
        gap: 15px;
      `;
      alertBox.innerHTML = `
        <div style="width:36px; height:36px; border-radius:50%; background:rgba(0,240,255,0.12); border:1px solid var(--accent-primary); display:flex; align-items:center; justify-content:center; color:var(--accent-primary); font-size:1.1rem; font-weight:700;">
          ✓
        </div>
        <div>
          <h4 style="font-size:0.95rem; margin:0 0 4px 0; font-weight:700; color:#fff;">Ecosystem Synced</h4>
          <p style="font-size:0.82rem; margin:0; color:var(--text-secondary); line-height:1.4;">Thank you, ${name}. Our ${division} team is locked for ${dateStr}.</p>
        </div>
      `;
      
      document.body.appendChild(alertBox);
      
      requestAnimationFrame(() => {
        alertBox.style.opacity = '1';
        alertBox.style.transform = 'translateY(0)';
      });
      
      setTimeout(() => {
        alertBox.style.opacity = '0';
        alertBox.style.transform = 'translateY(20px)';
        setTimeout(() => alertBox.remove(), 400);
      }, 5000);
    });
  }
});
>>>>>>> e75b24d29ad9f2ce82cff3adde6aca608c46d4f6
