import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import PortfolioCategories from "@/components/home/PortfolioCategories";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import ContactFooter from "@/components/home/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-cream font-sans selection:bg-rose-momm selection:text-white">
      <Navbar />
      <Hero />
      <PortfolioCategories />
      <AboutPreview />
      <Testimonials />
      <ContactSection />
      <ContactFooter />
    </main>
  );
}
