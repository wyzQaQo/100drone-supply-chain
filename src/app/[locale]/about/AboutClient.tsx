"use client";

import { motion } from "motion/react";
import { STATS } from "@/lib/constants";

export function AboutClient() {
  return (
    <div className="max-w-[1400px] mx-auto px-6">
      {/* Header */}
      <div className="mb-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
          About
        </span>
        <h1 className="mt-4 font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl">
          Connecting Global
          <br />
          <span className="text-[#00D4FF]">UAV Programs</span> With
          <br />
          China&apos;s Manufacturing
        </h1>
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-xl text-white/70 mb-4">Our Mission</h2>
          <p className="text-white/40 text-base leading-relaxed">
            100Drone was founded to solve a critical problem: global UAV companies need
            access to China&apos;s unmatched drone component manufacturing ecosystem, but
            managing dozens of supplier relationships across different cities, languages,
            and quality standards is impossible without local expertise.
          </p>
          <p className="text-white/40 text-base leading-relaxed mt-4">
            We are your engineering office, quality team, and supply chain management on
            the ground in China — giving you one point of contact for thousands of qualified
            suppliers across Shenzhen, Dongguan, Suzhou, and Changzhou.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-bold text-xl text-white/70 mb-4">What Sets Us Apart</h2>
          <ul className="space-y-4">
            {[
              "500+ qualified factories in our supply network",
              "On-the-ground team in all major manufacturing hubs",
              "Engineering expertise to translate your specs into production",
              "Rigorous quality control with on-site inspection",
              "Single point of contact — no language barrier, no timezone friction",
              "Multi-supplier consolidation for seamless logistics",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/40">
                <span className="text-[#00D4FF]/50 mt-1">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 border border-white/[0.06] bg-white/[0.01]"
          >
            <div className="font-black text-4xl text-[#00D4FF] tracking-tighter">
              {stat.value}
              <span className="text-white/30">{stat.suffix}</span>
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team note */}
      <div className="border border-white/[0.06] bg-white/[0.01] p-8 md:p-12">
        <h2 className="font-bold text-xl text-white/70 mb-4">Our Team</h2>
        <p className="text-white/40 text-base leading-relaxed max-w-3xl">
          Our team brings together professionals with experience in leading UAV,
          electronics, and supply chain companies. We combine deep manufacturing knowledge
          with international business expertise to bridge the gap between global drone
          programs and China&apos;s factory floor.
        </p>
      </div>
    </div>
  );
}
