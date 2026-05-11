import React, { useEffect, useRef } from "react";

export default function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      growing: boolean;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.25 + 0.05;
        this.fadeSpeed = Math.random() * 0.002 + 0.001;
        this.growing = Math.random() > 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas?.width || 0;
        if (this.x > (canvas?.width || 0)) this.x = 0;
        if (this.y < 0) this.y = canvas?.height || 0;
        if (this.y > (canvas?.height || 0)) this.y = 0;

        if (this.growing) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 0.3) this.growing = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0.05) this.growing = true;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        // Add a very faint glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(255, 255, 255, 0.2)";
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#060606]">
      {/* Fog & Smoke Layers */}
      <div className="absolute inset-0 opacity-40">
        {/* Deep Corner Fog */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-radial from-white/[0.03] via-transparent to-transparent blur-[120px] animate-drift-slow" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-radial from-blue-100/[0.02] via-transparent to-transparent blur-[150px] animate-drift-slower" />
        
        {/* Central Drifting Mist */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] rounded-full bg-radial from-white/[0.02] via-transparent to-transparent blur-[100px] animate-pulse-slow" />
      </div>

      {/* Static Glow Patches (30% L, 70% R, 50% T) */}
      <div className="absolute top-0 left-[30%] w-[40%] h-[30%] bg-radial from-white/[0.03] to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[70%] w-[35%] h-[40%] bg-radial from-blue-50/[0.02] to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[50%] h-[20%] bg-radial from-white/[0.04] to-transparent blur-[60px] pointer-events-none" />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-screen"
      />

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drift-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes drift-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 10px) scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-drift-slow { animation: drift-slow 20s ease-in-out infinite; }
        .animate-drift-slower { animation: drift-slower 30s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 15s ease-in-out infinite; }
      `}} />
    </div>
  );
}

