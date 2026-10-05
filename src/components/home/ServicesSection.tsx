"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "@/i18n/routing";
import { SERVICES } from "@/lib/constants";

const SERVICE_ICONS = {
  CircuitBoard: "M4 19h16M4 15h16M4 11h16M4 7h8",
  Gear: "M12 2l3 3M3 12h18M12 22l3-3M21 12l-3-3M3 12l3-3",
  Crosshair: "M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 100 8 4 4 0 000-8z",
  Wrench: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  Shield: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.06 1.06 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z",
};

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative py-24 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-black text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] uppercase max-w-3xl"
          >
            Your Engineering
            <br />
            <span className="text-[#00D4FF]">Office in China</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/40 max-w-xl text-lg"
          >
            We don&apos;t just source parts — we are your supply chain team, quality
            team, and engineering team on the ground in China.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* First row: 3 cards */}
          {SERVICES.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-8 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00D4FF]/15 transition-all duration-500 flex flex-col"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] mb-6 group-hover:border-[#00D4FF]/30 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#00D4FF]/60 group-hover:text-[#00D4FF] transition-colors"
                >
                  <path d={SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS]} />
                </svg>
              </div>

              <h3 className="font-bold text-lg tracking-tight text-white/80 group-hover:text-white transition-colors mb-1">
                {service.title}
              </h3>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#00D4FF]/30 mb-4">
                {service.subtitle}
              </p>
              <p className="text-white/30 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/40 text-xs">
                    <span className="text-[#00D4FF]/40 mt-0.5">+</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors group/link"
              >
                Inquire
                <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}

          {/* Second row: 2 cards centered */}
          {SERVICES.slice(3).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className="group p-6 md:p-8 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00D4FF]/15 transition-all duration-500 flex flex-col lg:col-span-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] mb-6 group-hover:border-[#00D4FF]/30 transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-[#00D4FF]/60 group-hover:text-[#00D4FF] transition-colors"
                    >
                      <path d={SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS]} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg tracking-tight text-white/80 group-hover:text-white transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#00D4FF]/30 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-white/30 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-white/40 text-sm">
                        <span className="text-[#00D4FF]/40 mt-0.5">+</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors group/link"
                  >
                    Inquire
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
