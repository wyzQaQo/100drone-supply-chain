"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "Define Requirements",
    description:
      "Tell us what you need — components, assemblies, or complete systems. We translate your specifications into a sourcing brief.",
    details: ["Technical specifications review", "Target cost analysis", "Timeline planning"],
  },
  {
    number: "02",
    title: "Match Suppliers",
    description:
      "We tap into our network of 500+ qualified factories across Shenzhen, Dongguan, Suzhou, and Changzhou to find the right partners.",
    details: ["Capability matching", "Supplier shortlisting", "RFQ distribution"],
  },
  {
    number: "03",
    title: "Audit & Qualify",
    description:
      "On-site factory audits, quality system reviews, and capability verification. We ensure suppliers meet your standards before production.",
    details: ["ISO / AS9100 audit", "Production line inspection", "Sample validation"],
  },
  {
    number: "04",
    title: "Production & QC",
    description:
      "We manage production milestones, conduct in-line and pre-shipment inspections, and ensure quality documentation.",
    details: ["Milestone tracking", "In-line inspection", "Pre-shipment QC"],
  },
  {
    number: "05",
    title: "Consolidate & Ship",
    description:
      "We consolidate shipments from multiple suppliers, handle export documentation, and manage logistics to your destination.",
    details: ["Multi-supplier consolidation", "Export documentation", "Global logistics"],
  },
];

export function SupplyChainProcess() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="relative py-24 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-black text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] uppercase max-w-3xl"
          >
            From Inquiry to
            <br />
            <span className="text-[#00D4FF]">Delivery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/40 max-w-xl text-lg"
          >
            Five steps. One point of contact. Zero supply chain headaches.
          </motion.p>
        </div>

        {/* Process steps - vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2" />

          <div className="space-y-16">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-[#00D4FF]/40 -translate-x-1/2 z-10" />

      {/* Content */}
      <div className={`md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
        <span className="font-mono text-[11px] text-[#00D4FF]/40 tracking-[0.2em]">
          {step.number}
        </span>
        <h3 className="mt-2 font-bold text-xl text-white/80">{step.title}</h3>
        <p className="mt-3 text-white/40 text-sm leading-relaxed max-w-sm md:ml-auto">
          {step.description}
        </p>
        <ul className={`mt-4 space-y-1.5 ${isEven ? "md:flex md:flex-col md:items-end" : ""}`}>
          {step.details.map((d) => (
            <li key={d} className="flex items-center gap-2 text-white/25 text-xs">
              {!isEven && <span className="text-[#00D4FF]/30">+</span>}
              {d}
              {isEven && <span className="text-[#00D4FF]/30">+</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2" />
    </motion.div>
  );
}
