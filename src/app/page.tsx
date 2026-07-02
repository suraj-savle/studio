import Hero from "@/components/Landing/Hero";
import AgencyFAQ from "@/components/layout/AgencyFAQ";
import ServicesPage from "@/components/ui/ServicesPage";
import DeviceShowcase from "@/components/ui/frames/DeviceFrame";
import CtaSection from "@/components/ui/CtaSection";
import Testimonials from "@/components/ui/Testimonials";
import VisualMockFrame from "@/components/ui/VisualMockFrame";
import WalletCards from "@/components/ui/WalletCards";
import Steps from "@/components/ui/Steps";

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
      <WalletCards />
      <CtaSection />
    </div>
  );
}
