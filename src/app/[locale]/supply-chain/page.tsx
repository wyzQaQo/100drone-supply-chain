import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { MANUFACTURING_HUBS } from "@/lib/constants";

export const metadata: Metadata = constructMetadata({
  title: "China UAV Supply Chain Network",
  description:
    "Explore China's UAV manufacturing hubs: Shenzhen (electronics), Dongguan (CNC), Suzhou (carbon fiber), and Changzhou (wiring & batteries).",
  path: "/supply-chain",
});

export default function SupplyChainPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00D4FF]/60">
            Supply Chain
          </span>
          <h1 className="mt-4 font-black text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] uppercase max-w-4xl">
            China&apos;s UAV
            <br />
            <span className="text-[#00D4FF]">Manufacturing Hubs</span>
          </h1>
          <p className="mt-6 text-white/40 max-w-2xl text-lg leading-relaxed">
            Each city in China&apos;s drone manufacturing belt specializes in different
            capabilities. We know where to find the right factory for your requirements.
          </p>
        </div>

        {/* Hub cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {MANUFACTURING_HUBS.map((hub) => (
            <div
              key={hub.city}
              className="p-8 md:p-10 border border-white/[0.06] bg-white/[0.01] hover:border-[#00D4FF]/15 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]" />
                <h2 className="font-bold text-2xl text-white/80">{hub.city}</h2>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#00D4FF]/40 mb-4">
                {hub.specialty}
              </p>
              <p className="text-white/30 text-base leading-relaxed">
                {hub.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advantage summary */}
        <div className="border border-white/[0.06] bg-white/[0.01] p-8 md:p-12">
          <h2 className="font-bold text-xl text-white/70 mb-4">
            The China Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/50 mb-2">
                Cluster Effect
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                Manufacturers cluster geographically, creating dense networks of specialized
                suppliers. A Shenzhen drone startup can prototype a complete UAV within weeks
                using local suppliers alone.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/50 mb-2">
                Scale & Speed
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                Chinese factories can scale from prototype to mass production faster than
                anywhere else in the world. Tooling lead times, production ramp-up, and
                cost-efficiency are unmatched.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#00D4FF]/50 mb-2">
                Complete Ecosystem
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                From raw materials to finished assemblies — every step of the supply chain
                exists within a 200km radius. No other country offers this level of
                manufacturing integration for UAV components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
