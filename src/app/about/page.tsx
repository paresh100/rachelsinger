
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />

            <section className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Column */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/rachel-profile-real.jpg"
                                    alt="Rachel Preece"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decor */}
                            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-gold/30 rounded-[40px] -z-10 hidden lg:block" />
                        </div>

                        {/* Text Column */}
                        <div className="order-1 lg:order-2">
                            <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">About Rachel</span>
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-8 leading-tight">
                                A Life in <span className="text-rose-momm">Performance</span>
                            </h1>

                            <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed font-light">
                                <p>
                                    Rachel Preece is a multidisciplinary artist with a career spanning over two decades in television, film, theatre, and voiceover. Her work is defined by precision, emotional depth, and a commanding presence that captivates audiences across mediums.
                                </p>
                                <p>
                                    From directing high-stakes corporate films for global brands like Arcadia Ltd to performing in classical theatre and voicing national ad campaigns, Rachel brings a wealth of experience to every project.
                                </p>
                                <p>
                                    As a coach, she leverages this extensive background to empower executives and leaders, helping them find their authentic voice and presence.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-4">
                                {[
                                    "Classical Acting Training",
                                    "Voice & Speech Expert",
                                    "Award-Winning Director",
                                    "Keynote Speaker"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
                                        <span className="text-charcoal/80 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 flex gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-charcoal text-white rounded font-medium shadow-lg hover:bg-gold transition-all uppercase tracking-widest text-sm">
                                    Work with Rachel
                                </Link>
                                <Link href="/portfolio" className="px-8 py-4 bg-white border border-stone-200 text-charcoal rounded font-medium hover:border-gold hover:text-gold transition-colors uppercase tracking-widest text-sm">
                                    View Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFooter />
        </main>
    );
}
