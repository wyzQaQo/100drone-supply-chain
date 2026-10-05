import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = constructMetadata({
  title: "About 100Drone",
  description:
    "100Drone is a China-based UAV supply chain partner connecting global drone programs with China's manufacturing ecosystem. Engineering, sourcing, and quality control.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <AboutClient />
    </div>
  );
}
