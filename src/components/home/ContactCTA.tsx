"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import { ArrowRight, Envelope, WhatsappLogo } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative py-24 md:py-32 border-t border-white/[0.04] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,212,255,0.04)_0%,_transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60"
            >
              Let&apos;s Talk
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 font-black text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] uppercase"
            >
              Ready to Access
              <br />
              China&apos;s
              <br />
              <span className="text-[#00D4FF]">Drone Supply Chain?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-white/40 text-lg leading-relaxed max-w-md"
            >
              Send us your requirements. We&apos;ll respond within 24 hours with a
              preliminary supplier match and sourcing proposal.
            </motion.p>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/[0.08] hover:border-[#00D4FF]/30 hover:bg-white/[0.02] transition-all group"
              >
                <Envelope size={16} className="text-[#00D4FF]/50 group-hover:text-[#00D4FF] transition-colors" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 group-hover:text-white transition-colors">
                  {SITE.email}
                </span>
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/[0.08] hover:border-[#4AF626]/30 hover:bg-white/[0.02] transition-all group"
              >
                <WhatsappLogo size={16} className="text-white/30 group-hover:text-[#4AF626] transition-colors" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 group-hover:text-white transition-colors">
                  WhatsApp
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right: Quick form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-white/[0.06] bg-white/[0.01]"
          >
            <h3 className="font-bold text-lg tracking-tight text-white/70 mb-6">
              Quick RFQ
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/15"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/15"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                  What do you need?
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/15 resize-none"
                  placeholder="Describe your component, assembly, or project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00D4FF] text-[#0A0A0A] font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#00D4FF]/90 transition-all group"
              >
                Send Inquiry
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
