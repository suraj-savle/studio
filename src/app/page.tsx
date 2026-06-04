import Navbar from "@/components/layout/navbar";
import Hero from "@/components/Landing/Hero";
import Services from "@/components/layout/services";
import Footer from "@/components/layout/Footer";
import BookServiceShowcase from "@/components/layout/BookServiceShowcase";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <BookServiceShowcase />
      <Footer />
    </div>
  );
}
