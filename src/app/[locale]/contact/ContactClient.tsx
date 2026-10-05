"use client";

import { motion } from "motion/react";
import { Envelope, WhatsappLogo, MapPin, ArrowRight } from "@phosphor-icons/react";
import { SITE } from "@/lib/constants";

export function ContactClient() {
  return (
    <div className="max-w-[1400px] mx-auto px-6">
      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
          Contact
        </span>
        <h1 className="mt-4 font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl">
          Start Your
          <br />
          <span className="text-[#00D4FF]">Supply Chain</span>
          <br />
          Journey
        </h1>
        <p className="mt-6 text-white/40 max-w-xl text-lg leading-relaxed">
          Send us your requirements. We&apos;ll respond within 24 hours with a preliminary
          supplier match and sourcing proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-3 p-8 md:p-10 border border-white/[0.06] bg-white/[0.01]"
        >
          <h2 className="font-bold text-xl text-white/70 mb-8">RFQ Form</h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/10"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/10"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/10"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/10"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                Service Needed
              </label>
              <select className="w-full bg-[#0A0A0A] border border-white/[0.08] px-4 py-3 text-sm text-white/50 focus:border-[#00D4FF]/40 focus:outline-none transition-colors">
                <option>Select a service...</option>
                <option>UAV Components Sourcing</option>
                <option>Mechanical Parts & Structures</option>
                <option>Payload Integration Systems</option>
                <option>Ground Support Equipment</option>
                <option>Supplier Qualification & Management</option>
                <option>Multiple Services / Other</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 block mb-2">
                Project Details *
              </label>
              <textarea
                rows={6}
                required
                className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-sm text-white/70 focus:border-[#00D4FF]/40 focus:outline-none transition-colors placeholder:text-white/10 resize-none"
                placeholder="Describe your component, assembly, or project requirements. Include quantities, specifications, and timeline if available."
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-3 px-8 py-4 bg-[#00D4FF] text-[#0A0A0A] font-bold text-sm uppercase tracking-[0.15em] hover:bg-[#00D4FF]/90 transition-all group"
            >
              Submit RFQ
              <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Contact info */}
          <div className="p-8 border border-white/[0.06] bg-white/[0.01] space-y-6">
            <h3 className="font-bold text-lg text-white/70 mb-2">Reach Us Directly</h3>

            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] group-hover:border-[#00D4FF]/30 transition-colors shrink-0">
                <Envelope size={18} className="text-white/30 group-hover:text-[#00D4FF] transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">Email</div>
                <div className="text-sm mt-0.5">{SITE.email}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] group-hover:border-[#4AF626]/30 transition-colors shrink-0">
                <WhatsappLogo size={18} className="text-white/30 group-hover:text-[#4AF626] transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">WhatsApp</div>
                <div className="text-sm mt-0.5">Chat with us</div>
              </div>
            </a>

            <div className="flex items-start gap-3 text-white/30">
              <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] shrink-0">
                <MapPin size={18} className="text-white/20" />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">Location</div>
                <div className="text-sm mt-0.5">{SITE.location}</div>
              </div>
            </div>
          </div>

          {/* Response time */}
          <div className="p-8 border border-[#00D4FF]/10 bg-[#00D4FF]/[0.02]">
            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#00D4FF]/40 mb-3">
              Response Time
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4AF626] animate-terminal-blink" />
              <span className="font-mono text-[10px] text-[#4AF626]/70 tracking-[0.1em] uppercase">
                Within 24 Hours
              </span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed">
              We review every inquiry and match it with suppliers in our network.
              Complex projects may require additional technical discussion.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
