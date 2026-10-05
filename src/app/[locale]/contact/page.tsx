import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us — Submit RFQ",
  description:
    "Contact 100Drone for UAV component sourcing, supply chain management, and engineering support. Send your RFQ and get a response within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <ContactClient />
    </div>
  );
}
