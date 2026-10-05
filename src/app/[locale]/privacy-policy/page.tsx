import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "100Drone privacy policy — how we collect, use, and protect your information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
          Legal
        </span>
        <h1 className="mt-4 font-black text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] uppercase mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-p:text-white/40 prose-li:text-white/40 max-w-none space-y-4">
          <p>
            100Drone (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This policy explains how we collect, use, and safeguard information when you use our website
            or submit inquiries.
          </p>
          <h2 className="font-bold text-lg text-white/70 mt-8">Information We Collect</h2>
          <p>
            We collect information you voluntarily provide through our RFQ forms and contact methods:
            name, email address, company name, phone number, and project details.
          </p>
          <h2 className="font-bold text-lg text-white/70 mt-8">How We Use Information</h2>
          <p>
            We use your information solely to respond to your inquiries, provide supply chain services,
            and communicate about your projects. We do not sell or share your information with third
            parties for marketing purposes.
          </p>
          <h2 className="font-bold text-lg text-white/70 mt-8">Contact</h2>
          <p>
            For questions about this policy, contact us at info@100drone.com.
          </p>
        </div>
      </div>
    </div>
  );
}
