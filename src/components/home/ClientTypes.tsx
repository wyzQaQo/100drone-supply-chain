"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CLIENT_TIERS } from "@/lib/constants";

export function ClientTypes() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Who We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-black text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] uppercase max-w-3xl"
          >
            Built for
            <br />
            <span className="text-[#00D4FF]">Drone Programs</span>
            at Every Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/40 max-w-xl text-lg"
          >
            From prototype-stage startups to government-scale programs — our supply chain
            services scale with you.
          </motion.p>
        </div>

        {/* Client tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CLIENT_TIERS.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-8 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00D4FF]/15 transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1 h-4 bg-[#00D4FF]/40 group-hover:bg-[#00D4FF] transition-colors" />
                <h3 className="font-bold text-lg text-white/70 group-hover:text-white transition-colors">
                  {tier.tier}
                </h3>
              </div>
              <p className="text-white/30 text-sm leading-relaxed mb-6">
                {tier.description}
              </p>
              <div className="border-t border-white/[0.04] pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20 mb-3">
                  Typical Clients
                </p>
                <ul className="space-y-2">
                  {tier.examples.map((ex) => (
                    <li key={ex} className="text-white/40 text-xs flex items-center gap-2">
                      <span className="text-[#00D4FF]/30">+</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
