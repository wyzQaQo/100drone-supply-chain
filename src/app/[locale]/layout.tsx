import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const LOCALE_NAMES: Record<string, string> = {
  en: "en_US",
  ru: "ru_RU",
  ar: "ar_SA",
  es: "es_ES",
  fr: "fr_FR",
  pt: "pt_BR",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeName = LOCALE_NAMES[locale] || "en_US";

  return {
    alternates: {
      languages: {
        en: "/en",
        ru: "/ru",
        ar: "/ar",
        es: "/es",
        fr: "/fr",
        pt: "/pt",
      },
    },
    openGraph: {
      locale: localeName,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ru" | "ar" | "es" | "fr" | "pt")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
