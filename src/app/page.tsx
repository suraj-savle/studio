import Navbar from "@/components/layout/navbar";
import Hero from "@/components/Landing/Hero";
import Services from "@/components/layout/services";
import Footer from "@/components/layout/Footer";
import WillemLoadingAnimation from "@/components/ui/WillemLoadingAnimation";
import AgencyFAQ from "@/components/layout/AgencyFAQ";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WillemLoadingAnimation />
      <Services />
      <AgencyFAQ />
      <Footer />
    </div>
  );
}
