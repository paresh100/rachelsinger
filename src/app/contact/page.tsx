
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import ContactSection from "@/components/home/ContactSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />
            <div className="pt-20 flex-grow">
                <ContactSection />
            </div>
            <ContactFooter />
        </main>
    );
}
