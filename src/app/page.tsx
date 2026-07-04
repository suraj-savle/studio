import Hero from "@/components/Landing/Hero";
import AgencyFAQ from "@/components/layout/AgencyFAQ";
import ServicesPage from "@/components/layout/ServicesPage";
import DeviceShowcase from "@/components/ui/frames/DeviceFrame";
import CtaSection from "@/components/layout/CtaSection";
import Testimonials from "@/components/layout/Testimonials";
import Features from "@/components/layout/Features";
import HowWework from "@/components/layout/HowWework";
import AgencyDashboardSection from "@/components/layout/AgencyDashboardWindow";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Hero />
      <AgencyDashboardSection />
      <ServicesPage />
      <div className="max-h-screen">
        <DeviceShowcase />
      </div>
      <HowWework />
      <Features />
      <Testimonials />
      <AgencyFAQ />
      <CtaSection />
    </div>
  );
}
