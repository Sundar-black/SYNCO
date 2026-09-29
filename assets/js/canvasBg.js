/**
 * SYNCO 3D Background Automotive Engine
 * High-Performance Procedural Futuristic Luxury Sedan
 * 60 FPS Scroll-Driven Interactive 3D Background Animation
 */

class SYNCOAutomotiveEngine {
  constructor() {
    this.canvas = document.getElementById('canvas-bg');
    if (!this.canvas) return;

    this.isLowPower = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    this.targetScroll = 0;
    this.currentScroll = 0;
    
    // Lighting & Speed States
    this.headlightIntensity = 0.2;
    this.interiorLightIntensity = 0.0;
    this.speedFactor = 0.0;

    this.initThree();
    this.createStudioEnvironment();
    this.createFuturisticSedan();
    this.createFloatingParticles();
    this.bindEvents();
    this.animate();
  }

  initThree() {
    this.scene = new THREE.Scene();
    this.scene.background = null;
    this.scene.fog = new THREE.FogExp2(0xffffff, 0.018);

    this.camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 1.2, 7.5);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !this.isLowPower,
      alpha: true,
      powerPreference: "high-performance"
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.isLowPower ? 1.25 : 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    
    this.bgImageEl = document.getElementById('car-bg-image');
  }

  createStudioEnvironment() {
    // Studio Ambient & Directional Lights
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    this.scene.add(this.ambientLight);

    // Key Light (Overhead Studio Light)
    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    this.keyLight.position.set(5, 10, 6);
    this.scene.add(this.keyLight);

    // Subtle Accent Light
    this.rimLight = new THREE.DirectionalLight(0x0055ff, 1.5);
    this.rimLight.position.set(-6, 4, -4);
    this.scene.add(this.rimLight);

    // Rear Fill Light
    this.rearLight = new THREE.DirectionalLight(0xffffff, 1.2);
    this.rearLight.position.set(0, 5, -8);
    this.scene.add(this.rearLight);

    // Reflective Studio Floor Plane
    const floorGeo = new THREE.PlaneGeometry(100, 100);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xe2e7f0,
      roughness: 0.25,
      metalness: 0.5,
    });
    this.floor = new THREE.Mesh(floorGeo, floorMat);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.position.y = -1.1;
    this.scene.add(this.floor);

    // Studio Floor Grid Lines
    const gridHelper = new THREE.GridHelper(80, 80, 0x94a3b8, 0xcbd5e1);
    gridHelper.position.y = -1.09;
    gridHelper.material.opacity = 0.35;
    gridHelper.material.transparent = true;
    this.scene.add(gridHelper);
  }

  createFuturisticSedan() {
    this.sedanGroup = new THREE.Group();
    this.sedanGroup.position.set(0, -0.6, 0);

    // Premium Materials
    this.bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0b0d13,
      metalness: 0.92,
      roughness: 0.12,
      envMapIntensity: 2.5
    });

    this.glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x111827,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.85,
      transparent: true,
      opacity: 0.65
    });

    this.ledOffMat = new THREE.MeshBasicMaterial({ color: 0x223344 });
    this.ledOnMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    // Headlight Spotlights
    this.headlightLeft = new THREE.SpotLight(0x00f0ff, 0, 25, Math.PI / 6, 0.4, 1);
    this.headlightLeft.position.set(-0.9, 0.1, 2.2);
    this.headlightLeft.target.position.set(-0.9, -0.5, 12);
    
    this.headlightRight = new THREE.SpotLight(0x00f0ff, 0, 25, Math.PI / 6, 0.4, 1);
    this.headlightRight.position.set(0.9, 0.1, 2.2);
    this.headlightRight.target.position.set(0.9, -0.5, 12);
    
    this.sedanGroup.add(this.headlightLeft);
    this.sedanGroup.add(this.headlightLeft.target);
    this.sedanGroup.add(this.headlightRight);
    this.sedanGroup.add(this.headlightRight.target);

    // 1. CHASSIS / MAIN BODY
    const chassisGeo = new THREE.BoxGeometry(2.1, 0.65, 4.6);
    const chassisMesh = new THREE.Mesh(chassisGeo, this.bodyMat);
    chassisMesh.position.y = 0.25;
    this.sedanGroup.add(chassisMesh);

    // Hood / Front Sloped Nose
    const hoodGeo = new THREE.BoxGeometry(2.0, 0.25, 1.6);
    const hoodMesh = new THREE.Mesh(hoodGeo, this.bodyMat);
    hoodMesh.position.set(0, 0.45, 1.4);
    hoodMesh.rotation.x = -0.08;
    this.sedanGroup.add(hoodMesh);

    // Aerodynamic Glass Cabin Structure
    const cabinGeo = new THREE.BoxGeometry(1.8, 0.7, 2.4);
    const cabinMesh = new THREE.Mesh(cabinGeo, this.glassMat);
    cabinMesh.position.set(0, 0.82, -0.1);
    this.sedanGroup.add(cabinMesh);

    const roofPillarGeo = new THREE.BoxGeometry(1.76, 0.08, 2.3);
    const roofPillarMesh = new THREE.Mesh(roofPillarGeo, this.bodyMat);
    roofPillarMesh.position.set(0, 1.18, -0.1);
    this.sedanGroup.add(roofPillarMesh);

    // 2. FUTURISTIC HEADLIGHTS & DRL LIGHTBAR
    const drlBarGeo = new THREE.BoxGeometry(1.95, 0.05, 0.1);
    this.drlMesh = new THREE.Mesh(drlBarGeo, this.ledOnMat);
    this.drlMesh.position.set(0, 0.4, 2.31);
    this.sedanGroup.add(this.drlMesh);

    const headlightLeftGeo = new THREE.BoxGeometry(0.4, 0.12, 0.1);
    this.headlightLeftMesh = new THREE.Mesh(headlightLeftGeo, this.ledOnMat);
    this.headlightLeftMesh.position.set(-0.75, 0.32, 2.31);
    this.sedanGroup.add(this.headlightLeftMesh);

    this.headlightRightMesh = new THREE.Mesh(headlightLeftGeo, this.ledOnMat);
    this.headlightRightMesh.position.set(0.75, 0.32, 2.31);
    this.sedanGroup.add(this.headlightRightMesh);

    // Rear Laser Taillight Bar
    const taillightMat = new THREE.MeshBasicMaterial({ color: 0xff0044 });
    const taillightGeo = new THREE.BoxGeometry(1.95, 0.06, 0.1);
    const taillightMesh = new THREE.Mesh(taillightGeo, taillightMat);
    taillightMesh.position.set(0, 0.52, -2.31);
    this.sedanGroup.add(taillightMesh);

    // 3. INTERIOR CABIN & AMBIENT LED LIGHTING
    this.interiorGroup = new THREE.Group();
    this.interiorGroup.position.set(0, 0.5, 0);

    const seatMat = new THREE.MeshStandardMaterial({ color: 0x1a202c, roughness: 0.4 });
    const seatGeo = new THREE.BoxGeometry(0.55, 0.6, 0.55);
    
    const seatFL = new THREE.Mesh(seatGeo, seatMat);
    seatFL.position.set(-0.45, 0.1, 0.3);
    const seatFR = new THREE.Mesh(seatGeo, seatMat);
    seatFR.position.set(0.45, 0.1, 0.3);
    const seatRear = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 0.55), seatMat);
    seatRear.position.set(0, 0.1, -0.6);

    this.interiorGroup.add(seatFL, seatFR, seatRear);

    // Dashboard HUD Glow
    const hudMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const hudMesh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.15, 0.2), hudMat);
    hudMesh.position.set(0, 0.35, 0.85);
    this.interiorGroup.add(hudMesh);

    // Interior Ambient Point Light
    this.interiorLight = new THREE.PointLight(0x00e5ff, 0, 4);
    this.interiorLight.position.set(0, 0.4, 0);
    this.interiorGroup.add(this.interiorLight);

    this.sedanGroup.add(this.interiorGroup);

    // 4. GULLWING / SCISSOR DOORS (PIVOTED GROUPS)
    this.doorFLPivot = new THREE.Group();
    this.doorFLPivot.position.set(-0.95, 1.1, 0.5); // Hinge at top roof edge
    const doorFLMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.65, 1.1), this.bodyMat);
    doorFLMesh.position.set(0, -0.32, 0);
    this.doorFLPivot.add(doorFLMesh);
    this.sedanGroup.add(this.doorFLPivot);

    this.doorFRPivot = new THREE.Group();
    this.doorFRPivot.position.set(0.95, 1.1, 0.5);
    const doorFRMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.65, 1.1), this.bodyMat);
    doorFRMesh.position.set(0, -0.32, 0);
    this.doorFRPivot.add(doorFRMesh);
    this.sedanGroup.add(this.doorFRPivot);

    this.doorRLPivot = new THREE.Group();
    this.doorRLPivot.position.set(-0.95, 1.1, -0.6);
    const doorRLMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.65, 1.0), this.bodyMat);
    doorRLMesh.position.set(0, -0.32, 0);
    this.doorRLPivot.add(doorRLMesh);
    this.sedanGroup.add(this.doorRLPivot);

    this.doorRRPivot = new THREE.Group();
    this.doorRRPivot.position.set(0.95, 1.1, -0.6);
    const doorRRMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.65, 1.0), this.bodyMat);
    doorRRMesh.position.set(0, -0.32, 0);
    this.doorRRPivot.add(doorRRMesh);
    this.sedanGroup.add(this.doorRRPivot);

    // 5. WHEELS & BRAKE CALIPERS
    this.wheels = [];
    const wheelPositions = [
      [-1.02, -0.15, 1.4],
      [1.02, -0.15, 1.4],
      [-1.02, -0.15, -1.4],
      [1.02, -0.15, -1.4]
    ];

    const wheelRimGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.26, 24);
    wheelRimGeo.rotateZ(Math.PI / 2);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x151820, roughness: 0.3, metalness: 0.9 });
    const caliperMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    wheelPositions.forEach(pos => {
      const wGroup = new THREE.Group();
      wGroup.position.set(...pos);

      const rimMesh = new THREE.Mesh(wheelRimGeo, wheelMat);
      const caliperMesh = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 0.15), caliperMat);
      caliperMesh.position.set(pos[0] < 0 ? 0.08 : -0.08, 0.1, 0);

      wGroup.add(rimMesh, caliperMesh);
      this.sedanGroup.add(wGroup);
      this.wheels.push(rimMesh);
    });

    this.scene.add(this.sedanGroup);
  }

  createFloatingParticles() {
    const particleCount = this.isLowPower ? 120 : 300;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 30;
      pos[i + 1] = Math.random() * 12 - 2;
      pos[i + 2] = (Math.random() - 0.5) * 30;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
      blending: THREE.NormalBlending
    });

    this.particleSystem = new THREE.Points(geo, mat);
    this.scene.add(this.particleSystem);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.targetScroll = totalHeight > 0 ? Math.min(Math.max(window.scrollY / totalHeight, 0), 1) : 0;
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Smooth scroll interpolation (60 FPS lerp)
    this.currentScroll += (this.targetScroll - this.currentScroll) * 0.06;
    const t = this.currentScroll;

    if (this.bgImageEl) {
      this.bgImageEl.style.transform = `scale(${1.0 + t * 0.08}) translateY(${-t * 35}px)`;
    }

    // --- STAGE ANIMATION INTERPOLATION ---
    let carRotY = -0.45;
    let carRotX = 0;
    let carPosZ = 0;
    let camY = 1.2;
    let camZ = 7.5;
    let camX = 0;
    
    let frontDoorAngle = 0;
    let rearDoorAngle = 0;
    let interiorGlow = 0;
    let headlightPower = 0.2;

    if (t < 0.2) {
      // Stage 1: Initial side 3/4 view
      const progress = t / 0.2;
      carRotY = -0.45 + progress * 0.1;
      camX = progress * 0.5;
    } else if (t < 0.4) {
      // Stage 2: Rotate right, Front doors open
      const progress = (t - 0.2) / 0.2;
      carRotY = -0.35 + progress * 0.7;
      frontDoorAngle = Math.sin(progress * Math.PI) * 1.1;
      interiorGlow = Math.sin(progress * Math.PI) * 3.5;
      camZ = 7.5 - progress * 1.2;
    } else if (t < 0.6) {
      // Stage 3: Rotate left, Rear doors open
      const progress = (t - 0.4) / 0.2;
      carRotY = 0.35 - progress * 1.1;
      rearDoorAngle = Math.sin(progress * Math.PI) * 1.0;
      interiorGlow = Math.sin(progress * Math.PI) * 3.0;
      camZ = 6.3 + progress * 0.8;
    } else if (t < 0.8) {
      // Stage 4: Front reveal & Headlight LED burst
      const progress = (t - 0.6) / 0.2;
      carRotY = -0.75 + progress * 0.75;
      carRotX = progress * 0.06;
      headlightPower = 0.2 + progress * 4.8;
      camZ = 7.1 - progress * 2.0;
      camY = 1.2 - progress * 0.45;
    } else {
      // Stage 5: Acceleration & Forward drive
      const progress = (t - 0.8) / 0.2;
      carRotY = 0;
      headlightPower = 5.0;
      carPosZ = -progress * 12.0;
      this.speedFactor = progress * 0.15;
      camZ = 5.1 - progress * 1.0;
    }

    // Apply Sedan Rotations & Position
    this.sedanGroup.rotation.y = carRotY;
    this.sedanGroup.rotation.x = carRotX;
    this.sedanGroup.position.z = carPosZ;

    // Apply Door Pivots
    this.doorFLPivot.rotation.z = -frontDoorAngle;
    this.doorFRPivot.rotation.z = frontDoorAngle;
    this.doorRLPivot.rotation.z = -rearDoorAngle;
    this.doorRRPivot.rotation.z = rearDoorAngle;

    // Apply Interior & Headlight Spotlights
    this.interiorLight.intensity = interiorGlow;
    this.headlightLeft.intensity = headlightPower * 2.5;
    this.headlightRight.intensity = headlightPower * 2.5;

    this.headlightLeftMesh.material.color.setHex(headlightPower > 1.0 ? 0xffffff : 0x00f0ff);
    this.headlightRightMesh.material.color.setHex(headlightPower > 1.0 ? 0xffffff : 0x00f0ff);
    this.drlMesh.material.color.setHex(headlightPower > 1.0 ? 0xffffff : 0x00e5ff);

    // Apply Camera Motion
    this.camera.position.x = camX;
    this.camera.position.y = camY;
    this.camera.position.z = camZ;
    this.camera.lookAt(0, -0.2, carPosZ);

    // Rotate Wheels during drive
    this.wheels.forEach(w => {
      w.rotation.x += 0.02 + this.speedFactor;
    });

    // Particle floating animation
    if (this.particleSystem) {
      this.particleSystem.rotation.y += 0.0005;
      const positions = this.particleSystem.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.005;
        if (positions[i] > 10) positions[i] = -2;
      }
      this.particleSystem.geometry.attributes.position.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Instantiate on window load
window.addEventListener('load', () => {
  window.syncoAutomotive = new SYNCOAutomotiveEngine();
});
