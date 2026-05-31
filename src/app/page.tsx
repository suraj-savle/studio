import Navbar from "@/components/layout/navbar";
import Hero from "@/components/Landing/Hero";
import Services from "@/components/layout/services";
import HowWeWork from "@/components/layout/HowWeWork";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <Footer />
    </div>
  );
}
