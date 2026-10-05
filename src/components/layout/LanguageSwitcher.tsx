"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe } from "@phosphor-icons/react";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ru: "RU",
  ar: "AR",
  es: "ES",
  fr: "FR",
  pt: "PT",
};

const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  ru: "Русский",
  ar: "العربية",
  es: "Español",
  fr: "Français",
  pt: "Português",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (newLocale: string) => {
    setOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 hover:text-[#00D4FF] transition-colors px-2 py-1"
        aria-label="Switch language"
      >
        <Globe size={14} weight="bold" />
        {LOCALE_LABELS[locale] || locale.toUpperCase()}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute right-0 top-full mt-2 py-1 border border-white/[0.08] bg-[#111111]/95 backdrop-blur-xl min-w-[140px]"
          >
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full text-left px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                  loc === locale
                    ? "text-[#00D4FF] bg-[#00D4FF]/5"
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                }`}
              >
                <span className="inline-block w-8">{LOCALE_LABELS[loc]}</span>
                <span className="text-white/25 normal-case">{LOCALE_NAMES[loc]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
