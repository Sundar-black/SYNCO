function initLoader() {
  const percentText = document.querySelector('.loader-percent');
  const barFill = document.querySelector('.loader-bar-fill');
  const preloader = document.getElementById('preloader');
  
  let progress = 0;
  let revealed = false;

  function revealWebsite() {
    if (revealed) return;
    revealed = true;

    if (preloader) {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }
    document.body.classList.remove('loading');

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // GSAP Entrance Animations
    if (typeof gsap !== 'undefined') {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('header', { y: -30, opacity: 0, duration: 0.8 }, 0.1)
        .from('.hero-title', { y: 30, opacity: 0, duration: 0.8 }, 0.3)
        .from('.hero-description', { y: 20, opacity: 0, duration: 0.6 }, 0.6)
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6 }, 0.7)
        .from('.hero-metrics', { y: 20, opacity: 0, duration: 0.8 }, 0.8);
    }
  }

  const duration = 800; // Fast loader
  const intervalTime = 20;
  const step = 100 / (duration / intervalTime);

  const loaderInterval = setInterval(() => {
    progress += step;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loaderInterval);
      setTimeout(revealWebsite, 150);
    }
    
    const displayProgress = Math.floor(progress);
    if (percentText) percentText.textContent = `${displayProgress}%`;
    if (barFill) barFill.style.width = `${displayProgress}%`;
  }, intervalTime);

  // Safety fallback: reveal after 1.5 seconds max no matter what
  setTimeout(revealWebsite, 1500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLoader);
} else {
  initLoader();
}
