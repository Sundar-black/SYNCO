window.addEventListener('DOMContentLoaded', () => {
  const percentText = document.querySelector('.loader-percent');
  const barFill = document.querySelector('.loader-bar-fill');
  const preloader = document.getElementById('preloader');
  
  let progress = 0;
  
  // Animate SVG Logo outline paths with CSS or inline JS initial states
  const svgPaths = document.querySelectorAll('.loader-logo-svg path');
  svgPaths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  const duration = 2000; // 2 seconds loading simulation
  const intervalTime = 20;
  const step = 100 / (duration / intervalTime);

  const loaderInterval = setInterval(() => {
    progress += step;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loaderInterval);
      
      // Animate stroke dash offset to 0 as progress advances
      svgPaths.forEach(path => {
        path.style.transition = 'stroke-dashoffset 1s ease-in-out';
        path.style.strokeDashoffset = '0';
      });

      // Wait a brief moment to showcase the completed logo, then fade out
      setTimeout(() => {
        // Run GSAP intro animation once preloader is gone
        revealWebsite();
      }, 800);
    }
    
    const displayProgress = Math.floor(progress);
    percentText.textContent = `${displayProgress}%`;
    barFill.style.width = `${displayProgress}%`;
  }, intervalTime);

  function revealWebsite() {
    preloader.classList.add('fade-out');
    document.body.classList.remove('loading');

    // Trigger GSAP entrance animations for header and hero elements
    if (typeof gsap !== 'undefined') {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.to('header', { y: 0, opacity: 1, duration: 1.2 }, 0.2)
        .from('.hero-content > *', {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 1.0
        }, 0.4)
        .from('.switcher-widget-container', {
          scale: 0.85,
          opacity: 0,
          duration: 1.2
        }, 0.6)
        .from('.glow-blob', {
          opacity: 0,
          scale: 0.5,
          duration: 2.0,
          stagger: 0.2
        }, 0.2);
    }
  }
});
