"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Radar grid animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height * 0.45;

      // Concentric rings
      for (let r = 80; r < Math.max(canvas.width, canvas.height) * 0.7; r += 80) {
        const alpha = 0.04 + Math.sin(time * 0.001 + r * 0.001) * 0.02;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Radial lines
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 12) {
        const a = angle + time * 0.0003;
        const length = Math.max(canvas.width, canvas.height) * 0.7;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * length, cy + Math.sin(a) * length);
        ctx.strokeStyle = "rgba(0, 212, 255, 0.03)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Sweep line
      const sweepAngle = (time * 0.001) % (Math.PI * 2);
      const sweepLen = Math.PI / 6;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(sweepAngle) * canvas.width,
        cy + Math.sin(sweepAngle) * canvas.width
      );
      const gradient = ctx.createLinearGradient(cx, cy, cx + Math.cos(sweepAngle) * 200, cy + Math.sin(sweepAngle) * 200);
      gradient.addColorStop(0, "rgba(0, 212, 255, 0.15)");
      gradient.addColorStop(1, "rgba(0, 212, 255, 0)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Scattered dots (supplier nodes)
      const dotCount = 40;
      for (let i = 0; i < dotCount; i++) {
        const seed = i * 137.5;
        const dist = 100 + (seed % 400);
        const dotAngle = (seed * 0.1 + time * 0.0002) % (Math.PI * 2);
        const dx = cx + Math.cos(dotAngle) * dist + Math.sin(seed * 0.03 + time * 0.0005) * 30;
        const dy = cy + Math.sin(dotAngle) * dist + Math.cos(seed * 0.03 + time * 0.0005) * 30;

        const pulse = Math.sin(time * 0.002 + i) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(dx, dy, 2 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${0.2 + pulse * 0.3})`;
        ctx.fill();

        // Connection lines between nearby dots
        for (let j = i + 1; j < dotCount; j++) {
          const seedJ = j * 137.5;
          const distJ = 100 + (seedJ % 400);
          const dotAngleJ = (seedJ * 0.1 + time * 0.0002) % (Math.PI * 2);
          const dxJ = cx + Math.cos(dotAngleJ) * distJ + Math.sin(seedJ * 0.03 + time * 0.0005) * 30;
          const dyJ = cy + Math.sin(dotAngleJ) * distJ + Math.cos(seedJ * 0.03 + time * 0.0005) * 30;

          const distance = Math.sqrt((dx - dxJ) ** 2 + (dy - dyJ) ** 2);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(dx, dy);
            ctx.lineTo(dxJ, dyJ);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.04 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }
      }

      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Radar grid canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[1] bg-radial from-transparent via-transparent to-[#0A0A0A]/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-20 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
            <span className="w-1 h-1 rounded-full bg-[#00D4FF]" />
            China UAV Supply Chain Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-black text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.03em] uppercase max-w-5xl mx-auto"
        >
          Access China&apos;s
          <br />
          <span className="text-[#00D4FF]">UAV Manufacturing</span>
          <br />
          Ecosystem
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-white/40 text-base md:text-lg leading-relaxed"
        >
          Components, Connectors, Wiring Harnesses, Payload Integration,
          Ground Support Equipment and Engineering Support — all through a single partner.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#00D4FF] text-[#0A0A0A] font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#00D4FF]/90 transition-all"
          >
            Submit RFQ
            <ArrowRight
              size={16}
              weight="bold"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white/60 hover:text-white hover:border-white/30 font-mono text-[11px] uppercase tracking-[0.15em] transition-all"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 md:mt-20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/15">
            One Contact. Thousands of Chinese UAV Suppliers.
          </p>
          <div className="mt-4 accent-line max-w-xs mx-auto" />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-[1] pointer-events-none" />
    </section>
  );
}
