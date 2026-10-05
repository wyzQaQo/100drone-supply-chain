"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

const ICONS = {
  CircuitBoard:
    "M4 19h16M4 15h16M4 11h16M4 7h8",
  Gear: "M12 2l3 3M3 12h18M12 22l3-3M21 12l-3-3M3 12l3-3",
  Crosshair: "M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 100 8 4 4 0 000-8z",
  Wrench:
    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  Shield:
    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.06 1.06 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z",
};

export function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <motion.section
      id={service.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border border-white/[0.06] bg-white/[0.01] p-8 md:p-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center border border-white/[0.08]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-[#00D4FF]/60"
              >
                <path d={ICONS[service.icon as keyof typeof ICONS]} />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-white/80">{service.title}</h2>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#00D4FF]/40 mt-1">
                {service.subtitle}
              </p>
            </div>
          </div>

          <p className="text-white/40 text-base leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 p-3 border border-white/[0.04] text-white/50 text-sm"
              >
                <span className="text-[#00D4FF]/40">+</span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex flex-col justify-center p-6 border border-[#00D4FF]/10 bg-[#00D4FF]/[0.02]">
          <h3 className="font-bold text-lg text-white/70 mb-2">Need this service?</h3>
          <p className="text-white/30 text-sm leading-relaxed mb-6">
            Send us your requirements and we&apos;ll match you with qualified suppliers
            within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A0A0A] font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#00D4FF]/90 transition-all group self-start"
          >
            Submit RFQ
            <ArrowRight
              size={14}
              weight="bold"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
