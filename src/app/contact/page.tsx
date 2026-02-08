import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
    title: "Contact | Rachel Preece",
    description: "Get in touch with Rachel Preece for coaching, speaking, or creative projects.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />



            <div className="flex-grow">
                <ContactSection />
            </div>

            <ContactFooter />
        </main>
    );
}
