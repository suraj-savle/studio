import type { Metadata } from "next";
import Hero from "@/components/Landing/Hero";
import AgencyFAQ from "@/components/layout/AgencyFAQ";
import ServicesPage from "@/components/layout/ServicesPage";
import DeviceShowcase from "@/components/ui/frames/DeviceFrame";
import CtaSection from "@/components/layout/CtaSection";
import Testimonials from "@/components/layout/Testimonials";
import Features from "@/components/layout/Features";
import HowWework from "@/components/layout/HowWework";
import AgencyDashboardSection from "@/components/layout/AgencyDashboardWindow";

export const metadata: Metadata = {
  title: "UpgradeUX | Web Development, SEO & AI Automation Agency",
  description:
    "UpgradeUX builds high-performance websites, SEO strategies, and AI automation solutions for startups and growing businesses in India and worldwide.",
  alternates: {
    canonical: "https://www.upgradeux.in/",
  },
  keywords: [
    "web development agency",
    "SEO agency",
    "AI automation agency",
    "custom website development",
    "Mumbai web agency",
  ],
};

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Hero />
      <AgencyDashboardSection />
      <ServicesPage />
      <Features />
      <HowWework />
      <Testimonials />
      <AgencyFAQ />
      <CtaSection />
    </div>
  );
}
