/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroProps {
  language: 'zh' | 'en';
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function Hero({ language, onHoverStart, onHoverEnd }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 65;
    let mouse = { x: 0, y: 0, active: false };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      originX: number;
      originY: number;
      friction: number;
      ease: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.originX = this.x;
        this.originY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.friction = 0.95;
        this.ease = 0.05;
      }
      update() {
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = (100 - distance) / 100;

          if (distance < 100) {
            this.speedX -= dx * force * 0.02;
            this.speedY -= dy * force * 0.02;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= this.friction;
        this.speedY *= this.friction;

        // Floating back or bouncing
        if (this.x > canvas!.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas!.height || this.y < 0) this.speedY *= -1;

        // Subtle return to origin
        this.speedX += (Math.random() - 0.5) * 0.01;
        this.speedY += (Math.random() - 0.5) * 0.01;
      }
      draw() {
        ctx!.fillStyle = 'rgba(204, 255, 0, 0.7)';
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(204, 255, 0, ${0.25 - dist / 150 * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 overflow-hidden px-6 md:px-16">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 self-start mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-zinc-300">
            {language === 'zh'
              ? '武汉 · 7年 UI/UX 经验 · 接受合作/全职'
              : 'WUHAN · 7 YEARS UI/UX · AVAILABLE FOR COLLABORATION'}
          </span>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[130px] font-display font-extrabold uppercase leading-[0.9] tracking-tighter">
            <span className="block text-stroke hover:text-zinc-100 transition-all duration-300" style={{ lineHeight: '130px' }}>
              {language === 'zh' ? 'UI/UX全链路设计' : 'CRAFTING'}
            </span>
            <span className="block text-zinc-100" style={{ lineHeight: '130px' }}>
              {language === 'zh' ? '驱动业务增长' : 'DRIVE BUSINESS GROWTH'}
            </span>
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-5 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            {language === 'zh'
              ? '我是张琦（Zhang Qi），一位具备产品思维的全链路资深UI/UX设计师。我擅长分析需求，致力于构建具有落地性和商业驱动力的数字产品。'
              : 'I am Zhang Qi, a Senior UI/UX Designer with a product mindset focused on end-to-end experiences. I excel in requirement analysis and am dedicated to building practical digital products that drive commercial value.'}
          </div>
          <div className="md:col-span-3 md:col-start-7 flex items-center space-x-6">
            <div className="text-left">
              <p className="text-3xl font-display font-bold text-accent">07+</p>
              <p className="text-xs text-zinc-500 tracking-wider uppercase">
                {language === 'zh' ? '年设计经验' : 'Years Experience'}
              </p>
            </div>
            <div className="h-8 w-[1px] bg-zinc-800" />
            <div className="text-left">
              <p className="text-3xl font-display font-bold text-accent">100%</p>
              <p className="text-xs text-zinc-500 tracking-wider uppercase">
                {language === 'zh' ? '还原度与落地率' : 'Handoff Precision'}
              </p>
            </div>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.1 }}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="group flex items-center justify-center w-24 h-24 rounded-full border border-zinc-800 hover:border-accent transition-all duration-500 bg-dark-card/40 hover:bg-accent hover:text-black"
            >
              <ArrowDown className="group-hover:translate-y-2 transition-transform duration-300" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
