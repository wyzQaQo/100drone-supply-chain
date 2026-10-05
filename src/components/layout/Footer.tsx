"use client";

import { Link } from "@/i18n/routing";
import { Envelope, Phone, MapPin } from "@phosphor-icons/react";
import { SITE, NAV_ITEMS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0A]">
      {/* Hazard stripe */}
      <div className="hazard-line" />

      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-black text-2xl tracking-tighter">
                100
                <span className="text-[#00D4FF]">DRONE</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Connecting global UAV programs with China&apos;s complete manufacturing ecosystem.
              One contact. Thousands of suppliers.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#4AF626]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4AF626] mr-1.5 animate-terminal-blink" />
                OPERATIONAL
              </span>
              <span className="text-white/20 text-xs">|</span>
              <span className="font-mono text-[10px] text-white/30">
                EST. {SITE.foundingYear}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-white/50 text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white/50 text-sm hover:text-[#00D4FF] transition-colors flex items-center gap-2"
                >
                  <Envelope size={14} className="text-white/30" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 text-sm hover:text-[#00D4FF] transition-colors flex items-center gap-2"
                >
                  <Phone size={14} className="text-white/30" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-white/30 mt-0.5 shrink-0" />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.1em]">
            &copy; {new Date().getFullYear()} {SITE.name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-mono text-[10px] text-white/20 hover:text-white/40 transition-colors uppercase"
            >
              PRIVACY
            </Link>
            <Link
              href="/terms"
              className="font-mono text-[10px] text-white/20 hover:text-white/40 transition-colors uppercase"
            >
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
