export const dynamicParams = false;
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/constants";
import { ServiceDetailClient } from "./ServiceDetailClient";

export const metadata: Metadata = constructMetadata({
  title: "UAV Supply Chain Services",
  description:
    "Comprehensive UAV components sourcing, mechanical parts, payload integration, ground support equipment, and supplier qualification services from China.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
            Services
          </span>
          <h1 className="mt-4 font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl">
            China UAV
            <br />
            <span className="text-[#00D4FF]">Supply Chain Services</span>
          </h1>
          <p className="mt-6 text-white/40 max-w-2xl text-lg leading-relaxed">
            End-to-end supply chain services connecting global UAV programs with China&apos;s
            manufacturing ecosystem. From components to complete systems.
          </p>
        </div>

        {/* Service sections */}
        <div className="space-y-20">
          {SERVICES.map((service) => (
            <ServiceDetailClient key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
