class WarpGrid {
  constructor() {
    this.canvas = document.getElementById('canvas-bg');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    
    this.particleColor = 'rgba(255, 255, 255, 0.25)';
    this.lineColor = 'rgba(255, 255, 255, 0.05)';
    this.particleCount = 80;
    this.speedMultiplier = 1.0;
    
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
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * this.speedMultiplier * 0.8,
        vy: (Math.random() - 0.5) * this.speedMultiplier * 0.8,
        size: Math.random() * 2 + 1
      });
    }
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
    
    const particles = this.particles;
    
    // Draw interconnecting subtle lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 160) {
          const alpha = (1 - dist / 160) * 0.08;
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          this.ctx.lineWidth = 0.7;
          this.ctx.beginPath();
          this.ctx.moveTo(particles[i].x, particles[i].y);
          this.ctx.lineTo(particles[j].x, particles[j].y);
          this.ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse displacement
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          p.x += Math.cos(angle) * force * 2;
          p.y += Math.sin(angle) * force * 2;
        }
      }

      this.ctx.fillStyle = this.particleColor;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

window.addEventListener('load', () => {
  window.warpBg = new WarpGrid();
});
