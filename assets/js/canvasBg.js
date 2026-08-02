class WarpGrid {
  constructor() {
    this.canvas = document.getElementById('canvas-bg');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    
    // Theme options
    this.currentTheme = 'it'; // 'it' or 'dm'
    this.themes = {
      it: {
        particleColor: 'rgba(0, 240, 255, 0.45)',
        lineColor: 'rgba(0, 82, 255, 0.12)',
        particleCount: 80,
        speedMultiplier: 1.0,
        shape: 'square'
      },
      dm: {
        particleColor: 'rgba(189, 0, 255, 0.45)',
        lineColor: 'rgba(255, 0, 127, 0.12)',
        particleCount: 60,
        speedMultiplier: 0.6,
        shape: 'circle'
      }
    };
    
    this.init();
    this.animate();
    this.bindEvents();
  }

  init() {
    this.resizeCanvas();
    this.createParticles();
  }

  resizeCanvas() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const settings = this.themes[this.currentTheme];
    const count = settings.particleCount;
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        originX: Math.random() * this.width,
        originY: Math.random() * this.height,
        vx: (Math.random() - 0.5) * settings.speedMultiplier,
        vy: (Math.random() - 0.5) * settings.speedMultiplier,
        size: Math.random() * 3 + 1.5,
        angle: Math.random() * Math.PI * 2
      });
    }
  }

  setTheme(themeName) {
    if (themeName === this.currentTheme) return;
    this.currentTheme = themeName;
    
    // Smooth transition: recreate particles with new properties
    this.createParticles();
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    const settings = this.themes[this.currentTheme];
    const particles = this.particles;
    
    // Draw lines between close particles (constellation grid)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.15;
          this.ctx.strokeStyle = settings.lineColor;
          this.ctx.lineWidth = 0.8;
          this.ctx.beginPath();
          this.ctx.moveTo(particles[i].x, particles[i].y);
          this.ctx.lineTo(particles[j].x, particles[j].y);
          this.ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach(p => {
      // Natural movement
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around screen boundaries
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse warping physics (distort grid)
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < this.mouse.radius) {
          // Calculate force pushing away
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Move particle slightly away based on force
          const pushX = Math.cos(angle) * force * 35;
          const pushY = Math.sin(angle) * force * 35;
          
          p.x += (p.x + pushX - p.x) * 0.1;
          p.y += (p.y + pushY - p.y) * 0.1;
        }
      }

      // Special movement wave behavior for Creative/DM mode
      if (this.currentTheme === 'dm') {
        p.angle += 0.01;
        p.y += Math.sin(p.angle) * 0.3;
      }

      // Draw particle
      this.ctx.fillStyle = settings.particleColor;
      this.ctx.beginPath();
      if (settings.shape === 'square') {
        this.ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
      } else {
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Instantiate on load
window.addEventListener('load', () => {
  window.warpBg = new WarpGrid();
});
