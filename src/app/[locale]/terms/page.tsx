import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description: "100Drone terms of service — conditions for using our website and services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
          Legal
        </span>
        <h1 className="mt-4 font-black text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] uppercase mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert prose-p:text-white/40 prose-li:text-white/40 max-w-none space-y-4">
          <p>
            By accessing and using the 100Drone website, you agree to these terms of service.
          </p>
          <h2 className="font-bold text-lg text-white/70 mt-8">Use of Website</h2>
          <p>
            This website provides information about our UAV supply chain services. All content
            is for informational purposes. We reserve the right to modify content at any time.
          </p>
          <h2 className="font-bold text-lg text-white/70 mt-8">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and design, is the property
            of 100Drone and protected by applicable intellectual property laws.
          </p>
          <h2 className="font-bold text-lg text-white/70 mt-8">Limitation of Liability</h2>
          <p>
            100Drone shall not be liable for any damages arising from the use or inability to
            use this website or our services.
          </p>
          <h2 className="font-bold text-lg text-white/70 mt-8">Contact</h2>
          <p>
            For questions about these terms, contact us at info@100drone.com.
          </p>
        </div>
      </div>
    </div>
  );
}
