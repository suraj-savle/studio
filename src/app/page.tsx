import Hero from "@/components/Landing/Hero";
import AgencyFAQ from "@/components/layout/AgencyFAQ";
import ServicesPage from "@/components/ui/ServicesPage";
import DeviceShowcase from "@/components/ui/frames/DeviceFrame";
import CtaSection from "@/components/ui/CtaSection";

export default function Home() {
  return (
    <div className="w-full min-h-screenoverflow-hidden">
      <Hero />
      <ServicesPage />
      <div className="min-h-screen">
        <DeviceShowcase
          mobileVideo="/vibe-toast.mp4"
          tabletVideo="/vibe-toast.mp4"
          laptopVideo="/vibe-toast.mp4"
        />
      </div>
      <AgencyFAQ />
      <CtaSection />
    </div>
  );
}
