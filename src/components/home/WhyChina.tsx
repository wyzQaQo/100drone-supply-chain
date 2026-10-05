"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MANUFACTURING_HUBS, STATS } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";

export function WhyChina() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60"
          >
            Why China
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-black text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl mx-auto"
          >
            The World&apos;s Most Complete
            <br />
            <span className="text-[#00D4FF]">Drone Manufacturing Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/40 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            China produces the majority of the world&apos;s commercial drone components and
            possesses one of the most complete UAV manufacturing ecosystems — from electronics
            and connectors to airframes and payload integration.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          style={{ opacity, y }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="font-black text-3xl md:text-4xl text-[#00D4FF] tracking-tighter">
                <CountUp to={stat.value} duration={2.5} delay={0.2} />
                <span className="text-white/40">{stat.suffix}</span>
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Manufacturing Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MANUFACTURING_HUBS.map((hub, i) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#00D4FF]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] group-hover:shadow-[0_0_10px_#00D4FF] transition-shadow" />
                <h3 className="font-bold text-lg tracking-tight text-white/80 group-hover:text-white transition-colors">
                  {hub.city}
                </h3>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#00D4FF]/40 mb-3">
                {hub.specialty}
              </p>
              <p className="text-white/30 text-sm leading-relaxed">
                {hub.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
