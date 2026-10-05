"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "@phosphor-icons/react";

export function OneContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={ref} className="relative py-24 md:py-36 border-t border-white/[0.04] overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.03)_0%,_transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* ASCII decoration */}
          <div className="font-mono text-[10px] text-[#00D4FF]/20 tracking-[0.3em] mb-8">
            + + + + + + + + + + + + +
          </div>

          <h2 className="font-black text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-0.03em] uppercase">
            One Contact.
            <br />
            <span className="text-[#00D4FF]">Thousands</span> of Chinese
            <br />
            UAV Suppliers.
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-white/30 text-lg leading-relaxed">
            Stop managing dozens of supplier relationships across different factories,
            cities, and languages. Let 100Drone be your single point of contact for
            China&apos;s entire UAV manufacturing ecosystem.
          </p>

          {/* Value props */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Your Engineering Office",
                desc: "Technical translation, design review, and engineering support on the ground in China.",
              },
              {
                title: "Your Quality Team",
                desc: "On-site audits, in-line inspections, and pre-shipment quality verification.",
              },
              {
                title: "Your Supply Chain Team",
                desc: "Supplier management, production tracking, consolidation, and logistics.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 border border-white/[0.05] bg-white/[0.01]">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/50 mb-2">
                  {item.title}
                </h4>
                <p className="text-white/25 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#00D4FF] text-[#0A0A0A] font-bold text-sm uppercase tracking-[0.15em] hover:bg-[#00D4FF]/90 transition-all"
            >
              Start Your RFQ
              <ArrowRight
                size={18}
                weight="bold"
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </Link>
          </div>

          <div className="font-mono text-[10px] text-[#00D4FF]/20 tracking-[0.3em] mt-10">
            + + + + + + + + + + + + +
          </div>
        </motion.div>
      </div>
    </section>
  );
}
