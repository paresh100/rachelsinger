
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import Testimonials from "@/components/home/Testimonials";

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />
            <div className="pt-20 flex-grow">
                <Testimonials />
            </div>
            <ContactFooter />
        </main>
    );
}
