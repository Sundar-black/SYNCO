// Service mock data for Learn More modal
const serviceData = {
  "Web Development": {
    badge: "SYNCO IT DIVISION",
    title: "Web Development & Cloud Architecture",
    tagline: "High-Performance SPA/SSR Web Platforms Built for Scale",
    overview: "We build ultra-fast, resilient web applications that convert visitors into active ecosystem users. Leveraging Next.js 14 server components, TypeScript type safety, and customized HTML5 Canvas/WebGL shader pipelines, our web solutions eliminate loading latency while delivering a visual experience that dominates competition.",
    pillars: [
      { title: "Next.js & SSR Architecture", desc: "Sub-100ms LCP server rendering with hybrid static generation and edge cache routing." },
      { title: "Custom WebGL & GSAP Engine", desc: "Silky 60fps micro-animations and hardware-accelerated dynamic canvas backgrounds." },
      { title: "Headless CMS & API Integration", desc: "Seamless GraphQL/REST microservice integration with real-time data sync." },
      { title: "Automated Technical SEO", desc: "Deep schema markup, automated open-graph generators, and lighthouse 100 benchmark optimization." }
    ],
    tech: ["Next.js 14", "TypeScript", "React", "Node.js", "GSAP", "Tailwind CSS", "GraphQL", "Vercel Edge"],
    workflow: [
      "1. Discovery & Performance Audit",
      "2. System Architecture & UI Prototype",
      "3. Microservice & Frontend Engineering",
      "4. Automated QA & Edge Deployment"
    ],
    metrics: [
      { num: "< 80ms", lbl: "Global Edge Latency" },
      { num: "99.99%", lbl: "Uptime SLA" },
      { num: "100/100", lbl: "Lighthouse Score" }
    ],
    targetOption: "IT Solution"
  },
  "App Development": {
    badge: "SYNCO IT DIVISION",
    title: "Native & Cross-Platform Mobile Engineering",
    tagline: "Hardware-Accelerated Mobile Applications for iOS & Android",
    overview: "Our mobile division engineers tactile mobile experiences that handle millions of daily interactions seamlessly. By combining React Native with native Swift/Kotlin bridges, we achieve near-instant UI responsiveness, robust offline background synchronization, and biometric-grade client data security.",
    pillars: [
      { title: "React Native & Swift Bridge", desc: "Native execution speed with maximum code reusability across iOS & Android." },
      { title: "Offline-First Data Sync", desc: "Asynchronous SQLite local queue synchronization under intermittent network connectivity." },
      { title: "Hardware Acceleration", desc: "Direct GPU rendering for high-density charts, camera pipelines, and dynamic maps." },
      { title: "Biometric Security", desc: "Hardware keychain encryption, biometric auth, and secure token rotation." }
    ],
    tech: ["React Native", "Swift / Kotlin", "TypeScript", "Redux Toolkit", "WatermelonDB", "Firebase", "WebSockets"],
    workflow: [
      "1. Ergonomic Mobile Blueprint",
      "2. Core Architecture & Offline State",
      "3. Native Bridge Integration",
      "4. App Store & Play Store Distribution"
    ],
    metrics: [
      { num: "60 FPS", lbl: "Render Frame Rate" },
      { num: "20M+", lbl: "Daily API Requests" },
      { num: "100%", lbl: "Sync Reliability" }
    ],
    targetOption: "IT Solution"
  },
  "UI/UX Design": {
    badge: "SYNCO IT DIVISION",
    title: "Futuristic Glassmorphic UI/UX Engineering",
    tagline: "Ergonomic Visual Interfaces & Tactile Micro-Interactions",
    overview: "We elevate user perception by engineering sleek, glassmorphic design systems customized to human cognition. From interactive Figma component systems to production-ready design tokens, we craft interface layouts that delight users and eliminate conversion friction.",
    pillars: [
      { title: "Figma Design Systems", desc: "Modular, fully-documented component libraries with auto-layout variables." },
      { title: "Tactile Glassmorphism", desc: "Curated dark-mode color tokens, multi-layered depth elevation, and neon glow accents." },
      { title: "Micro-Interactions", desc: "Purposeful state feedback, hover effects, and spring physics transitions." },
      { title: "Usability Heatmap Testing", desc: "Data-backed click tracking and user flow optimization to maximize retention." }
    ],
    tech: ["Figma", "Design Tokens", "CSS3 / SVG", "ProtoPie", "Framer", "Lottie Animations", "Storybook"],
    workflow: [
      "1. User Persona & UX Wireframing",
      "2. Visual Design System Creation",
      "3. Interactive Prototype Testing",
      "4. Frontend Developer Handoff Tokens"
    ],
    metrics: [
      { num: "+310%", lbl: "User Retention" },
      { num: "-45%", lbl: "Bounce Rate Cut" },
      { num: "100%", lbl: "Design Token Fidelity" }
    ],
    targetOption: "IT Solution"
  },
  "Video Production & Editing": {
    badge: "SYNCO DM DIVISION",
    title: "Cinematic Commercial Video & Reel Engineering",
    tagline: "High-Authority Visual Storytelling & Conversion Showcases",
    overview: "SYNCO DM produces cinematic brand reels, product walk-throughs, and social ad variations engineered to capture instant user attention. We blend 4K footage with futuristic motion graphics, sound design, and psychological pacing built specifically for digital conversion funnels.",
    pillars: [
      { title: "4K Cinematic Production", desc: "High-production-value video shoots, drone choreography, and studio lighting setups." },
      { title: "Motion Graphics & FX", desc: "3D product rendering, cyber-styled HUD overlays, and kinetic typography." },
      { title: "Multi-Platform Ratios", desc: "Tailored aspect-ratio cuts for YouTube 16:9, Instagram 9:16 reels, and Meta feed ads." },
      { title: "Psychological Hook Pacing", desc: "Pattern-interrupt first 3 seconds designed to maximize view-through retention." }
    ],
    tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Blender 3D", "Audition", "Cinema 4D"],
    workflow: [
      "1. Scripting & Storyboard Concept",
      "2. Production Shoot & Footage Capture",
      "3. Color Grading & VFX Overlay",
      "4. Multi-Channel Export & Ad Placement"
    ],
    metrics: [
      { num: "85%", lbl: "3-Sec Hook Retention" },
      { num: "4.5x", lbl: "View-Through Index" },
      { num: "4K HDR", lbl: "Master Output Quality" }
    ],
    targetOption: "DM Campaign"
  },
  "Performance Marketing & Ads": {
    badge: "SYNCO DM DIVISION",
    title: "Algorithmic Growth & Paid Acquisition Campaigns",
    tagline: "Precision Meta/Google Ad Campaigns Engineered for High ROAS",
    overview: "We turn ad spend into high-margin revenue through algorithmic audience targeting, automated bidding strategies, and high-intent landing page integrations. Our growth team continuously runs A/B split tests on copy, creatives, and conversion hooks to lower client CPA while rapidly scaling campaign volume.",
    pillars: [
      { title: "Multi-Channel Ad Scaling", desc: "Integrated Google Search, Meta Video Ads, LinkedIn B2B targeting, and YouTube In-Stream." },
      { title: "Real-Time Attribution Tracking", desc: "Server-side Conversions API (CAPI) and Google Tag Manager first-party tracking." },
      { title: "Creative A/B Testing Matrix", desc: "Dynamic asset matrix testing 20+ creative combinations weekly for optimal CPA." },
      { title: "Retargeting Funnel Sequences", desc: "Multi-touch nurturing sequences converting cold traffic into verified client bookings." }
    ],
    tech: ["Meta Ads Manager", "Google Ads / GA4", "Meta CAPI", "Google Tag Manager", "HubSpot CRM", "Hotjar"],
    workflow: [
      "1. Audience Audit & Funnel Setup",
      "2. Creative & Copy Asset Engine",
      "3. Algorithmic Launch & Bid Tuning",
      "4. Scaling & Weekly ROAS Optimization"
    ],
    metrics: [
      { num: "4.2x", lbl: "Average Client ROAS" },
      { num: "-38%", lbl: "Cost Per Lead (CPA)" },
      { num: "+340%", lbl: "Inbound Inquiry Rate" }
    ],
    targetOption: "DM Campaign"
  },
  "Personal Branding & Creative": {
    badge: "SYNCO DM DIVISION",
    title: "Executive Personal Branding & Content Engine",
    tagline: "Founder Authority Engineering & Omnichannel Industry Dominance",
    overview: "We position founders, executives, and innovators as dominant authorities in their domain. SYNCO DM creates tailored thought-leadership content, executive media assets, graphic templates, and structured social distribution schedules that generate immense inbound trust and deal flow.",
    pillars: [
      { title: "Founder Authority Strategy", desc: "Defining core narrative pillars, visual aesthetics, and industry positioning." },
      { title: "Ghostwriting & Content Engine", desc: "High-impact LinkedIn posts, X threads, and long-form newsletters crafted weekly." },
      { title: "Custom Visual Tokens", desc: "Cyber-inspired carousel graphics, banner suites, and signature media templates." },
      { title: "Media & PR Distribution", desc: "Podcast guesting placements, feature article releases, and industry speaking positioning." }
    ],
    tech: ["LinkedIn Creator Studio", "Canva Pro", "Typefully", "Notion Content Hub", "Figma", "Descript"],
    workflow: [
      "1. Founder Persona Strategy Session",
      "2. Visual Asset & Template Suite Design",
      "3. Weekly Content Production Engine",
      "4. Audience Engagement & Lead Routing"
    ],
    metrics: [
      { num: "1M+", lbl: "Monthly Impressions" },
      { num: "5.8x", lbl: "Follower Growth Velocity" },
      { num: "High", lbl: "Inbound Deal Flow" }
    ],
    targetOption: "DM Campaign"
  }
};

const testimonialData = {
  "1": {
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
    color: "#bd00ff",
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
    lbl1: "Uptime Score"
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

  // ==========================================
  // Interactive Service Learn More Modal Engine
  // ==========================================
  const serviceModal = document.getElementById('service-modal');
  const serviceModalClose = document.getElementById('service-modal-close');
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceCtaBtn = document.getElementById('svc-modal-cta');

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const svcName = card.getAttribute('data-service');
      const data = serviceData[svcName];

      if (!data) return;

      // Populate Header
      document.getElementById('svc-modal-badge').textContent = data.badge;
      document.getElementById('svc-modal-title').textContent = data.title;
      document.getElementById('svc-modal-tagline').textContent = data.tagline;

      // Overview
      document.getElementById('svc-modal-overview').textContent = data.overview;

      // Pillars
      const pillarsGrid = document.getElementById('svc-modal-pillars');
      pillarsGrid.innerHTML = data.pillars.map(p => `
        <div class="svc-pillar-card">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
      `).join('');

      // Tech Stack
      const techTags = document.getElementById('svc-modal-tech');
      techTags.innerHTML = data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

      // Workflow
      const workflowList = document.getElementById('svc-modal-workflow');
      workflowList.innerHTML = data.workflow.map(w => `<li class="svc-workflow-item">${w}</li>`).join('');

      // Metrics
      const metricsGrid = document.getElementById('svc-modal-metrics');
      metricsGrid.innerHTML = data.metrics.map(m => `
        <div class="svc-metric-card">
          <div class="num">${m.num}</div>
          <div class="lbl">${m.lbl}</div>
        </div>
      `).join('');

      // Re-create icons if Lucide is loaded
      if (typeof lucide !== 'undefined') lucide.createIcons();

      // Setup CTA button
      if (serviceCtaBtn) {
        serviceCtaBtn.onclick = () => {
          // Close modal
          serviceModalClose.click();
          // Scroll to contact
          const contactSec = document.getElementById('contact');
          if (contactSec) {
            window.scrollTo({
              top: contactSec.offsetTop - 80,
              behavior: 'smooth'
            });
          }
          // Select division in form
          const divSelect = document.getElementById('frm-division');
          if (divSelect && data.targetOption) {
            divSelect.value = data.targetOption;
          }
          // Focus name input
          setTimeout(() => {
            const nameInput = document.getElementById('frm-name');
            if (nameInput) nameInput.focus();
          }, 600);
        };
      }

      // Open Modal with GSAP
      serviceModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      gsap.fromTo('#service-modal .modal-content', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' });
    });
  });

  if (serviceModalClose) {
    serviceModalClose.addEventListener('click', () => {
      gsap.to('#service-modal .modal-content', { scale: 0.85, opacity: 0, duration: 0.3, onComplete: () => {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
      }});
    });
  }

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) serviceModalClose.click();
    });
  }

  // ==========================================
  // Testimonial Verification Audit Modal Engine
  // ==========================================
  const testimonialModal = document.getElementById('testimonial-modal');
  const testimonialModalClose = document.getElementById('testimonial-modal-close');
  const feedbackCards = document.querySelectorAll('.feedback-log-card');

  feedbackCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const data = testimonialData[id];

      if (!data) return;

      document.getElementById('tst-modal-prompt').textContent = data.prompt;
      document.getElementById('tst-modal-tag').textContent = data.tag;
      document.getElementById('tst-modal-quote').textContent = data.quote;

      const avatar = document.getElementById('tst-modal-avatar');
      avatar.textContent = data.avatar;
      avatar.style.borderColor = data.color;
      avatar.style.color = data.color;

      document.getElementById('tst-modal-author').textContent = data.author;
      document.getElementById('tst-modal-role').textContent = data.role;
      document.getElementById('tst-modal-details').textContent = data.details;

      const metric = document.getElementById('tst-modal-metric');
      if (metric) {
        metric.textContent = data.metric;
        metric.style.color = data.color;
      }

      if (typeof lucide !== 'undefined') lucide.createIcons();

      testimonialModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      gsap.fromTo('#testimonial-modal .modal-content', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' });
    });
  });

  if (testimonialModalClose) {
    testimonialModalClose.addEventListener('click', () => {
      gsap.to('#testimonial-modal .modal-content', { scale: 0.85, opacity: 0, duration: 0.3, onComplete: () => {
        testimonialModal.classList.remove('active');
        document.body.style.overflow = '';
      }});
    });
  }

  if (testimonialModal) {
    testimonialModal.addEventListener('click', (e) => {
      if (e.target === testimonialModal) testimonialModalClose.click();
    });
  }

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
