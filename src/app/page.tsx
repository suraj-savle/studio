import Hero from "@/components/Landing/Hero";
import AgencyFAQ from "@/components/layout/AgencyFAQ";
import ServicesPage from "@/components/ui/ServicesPage";
import DeviceShowcase from "@/components/ui/frames/DeviceFrame";
import CtaSection from "@/components/ui/CtaSection";
import FeaturesMarquee from "@/components/ui/FeaturesMarquee";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Hero />
      <ServicesPage />
      <div className="min-h-screen">
        <DeviceShowcase />
      </div>
      <AgencyFAQ />
      <FeaturesMarquee />
      <CtaSection />
    </div>
  );
}
