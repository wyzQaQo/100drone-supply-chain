import { Hero } from "@/components/home/Hero";
import { WhyChina } from "@/components/home/WhyChina";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SupplyChainProcess } from "@/components/home/SupplyChainProcess";
import { ClientTypes } from "@/components/home/ClientTypes";
import { OneContactCTA } from "@/components/home/OneContactCTA";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChina />
      <ServicesSection />
      <SupplyChainProcess />
      <ClientTypes />
      <OneContactCTA />
      <ContactCTA />
    </>
  );
}
