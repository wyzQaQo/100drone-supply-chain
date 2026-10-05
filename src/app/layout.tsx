import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "100Drone — China UAV Supply Chain Partner",
  description:
    "Access China's complete UAV manufacturing ecosystem through a single partner. Components, engineering, sourcing, and quality control for global drone programs.",
  keywords: [
    "China UAV supply chain",
    "drone components sourcing",
    "UAV manufacturing partner China",
    "drone parts supplier",
  ].join(", "),
  openGraph: {
    title: "100Drone — China UAV Supply Chain Partner",
    description:
      "One Contact. Thousands of Chinese UAV Suppliers. Connecting global drone programs with China's manufacturing ecosystem.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#EAEAEA]">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
