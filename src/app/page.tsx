import Hero from "@/components/Landing/Hero";
import AgencyFAQ from "@/components/layout/AgencyFAQ";
import ServicesPage from "@/components/layout/ServicesPage";
import DeviceShowcase from "@/components/ui/frames/DeviceFrame";
import CtaSection from "@/components/layout/CtaSection";
import Testimonials from "@/components/layout/Testimonials";
import VisualMockFrame from "@/components/layout/Features";
import Steps from "@/components/layout/HowWework";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Hero />
      <ServicesPage />
      <div className="max-h-screen">
        <DeviceShowcase />
      </div>
      <VisualMockFrame />
      <Testimonials />
      <Steps />
      <AgencyFAQ />
      <CtaSection />
    </div>
  );
}
