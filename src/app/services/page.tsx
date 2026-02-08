import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import { CheckCircle2, Mic2, Users, Video } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Services | Rachel Preece",
    description: "Performance coaching, media training, and voice coaching services.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "Voice Coaching",
            price: "£150",
            duration: "per session",
            description: "Master your vocal instrument. Ideal for actors, public speakers, and executives wanting to improve projection and tone.",
            features: ["Breath Support", "Tone & Resonance", "Accent Softening", "Vocal Health"],
            icon: <Mic2 size={32} className="text-gold" />
        },
        {
            title: "Media Training",
            price: "£250",
            duration: "per session",
            description: "Prepare for the camera. Learn to handle interviews, press junkets, and on-camera presentations with confidence.",
            features: ["Interview Technique", "Camera Presence", "Messaging Strategy", "Mock Interviews"],
            icon: <Video size={32} className="text-gold" />
        },
        {
            title: "Corporate Workshops",
            price: "Custom",
            duration: "per workshop",
            description: "Group training for teams. Enhance communication skills, leadership presence, and public speaking abilities.",
            features: ["Team Communication", "Leadership Presence", "Presentation Skills", "Confidence Building"],
            icon: <Users size={32} className="text-gold" />
        }
    ];

    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="py-2 px-4 rounded-full border border-gold/30 text-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-8 inline-block">
                        Services
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal dark:text-white mb-8">
                        Unlock Your <span className="text-gold italic font-light">Potential</span>
                    </h1>
                    <p className="text-xl text-charcoal/60 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Expert coaching and training to help you find your voice, command the room, and deliver your message with impact.
                    </p>
                </div>
            </section>

            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white dark:bg-charcoal/50 backdrop-blur-sm border border-charcoal/5 dark:border-white/10 rounded-[2rem] p-10 hover:border-gold/30 transition-all duration-300 group flex flex-col">
                            <div className="w-16 h-16 bg-background-light dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-display font-bold text-charcoal dark:text-white mb-2">{service.title}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-bold text-gold">{service.price}</span>
                                <span className="text-sm text-charcoal/40 dark:text-white/40 uppercase tracking-widest font-medium">/ {service.duration}</span>
                            </div>

                            <p className="text-charcoal/60 dark:text-white/60 mb-8 leading-relaxed font-light">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-10 flex-1">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-charcoal/80 dark:text-white/80 font-medium">
                                        <CheckCircle2 size={18} className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className="w-full py-4 rounded-xl border border-charcoal/10 dark:border-white/10 text-charcoal dark:text-white font-bold uppercase tracking-widest text-xs hover:bg-gold hover:border-gold hover:text-white transition-all text-center">
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <ContactFooter />
        </main>
    );
}
