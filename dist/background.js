const canvas = document.getElementById("iot-network");
const ctx = canvas.getContext("2d");

let width, height;
let particles = [];

// Konfiguracja wyglądu sieci
const config = {
  particleCount: window.innerWidth < 768 ? 40 : 90,
  connectionDistance: window.innerWidth < 640 ? 115 : 150,
  particleColor: "rgba(16, 185, 129, 0.9)",
  lineColor: "148, 163, 184",
  speed: 0.3,
};

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * config.speed;
    this.vy = (Math.random() - 0.5) * config.speed;
    this.size = Math.random() * 2 + 3;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = config.particleColor;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < config.particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    let p1 = particles[i];
    p1.update();
    p1.draw();

    for (let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j];
      let distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

      if (distance < config.connectionDistance) {
        ctx.beginPath();
        let opacity = 1 - distance / config.connectionDistance;
        ctx.strokeStyle = `rgba(${config.lineColor}, ${opacity * 0.8})`;
        ctx.lineWidth = 2;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  resize();
  initParticles();
});
resize();
initParticles();
animate();
