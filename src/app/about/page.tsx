import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import { CheckCircle2, Download, Award, Mic, Video } from "lucide-react";

export const metadata = {
    title: "About Rachel | Rachel Preece",
    description: "Learn about Rachel Preece's journey as an actress, director, and voice coach.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Image Column */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative h-[600px] w-full rounded-t-full rounded-b-[200px] overflow-hidden shadow-2xl border-[8px] border-white dark:border-charcoal">
                            <Image
                                src="/assets/rachel-profile-real.jpg"
                                alt="Rachel Preece"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                        {/* Decor removed */}

                        <div className="absolute bottom-10 right-0 bg-white dark:bg-charcoal/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gold/20 max-w-xs">
                            <div className="flex items-center gap-3">
                                <Award className="text-gold" size={32} />
                                <div>
                                    <p className="font-bold text-charcoal dark:text-white text-sm">Award Winning</p>
                                    <p className="text-xs text-charcoal/60 dark:text-white/60">Director & Performer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="order-1 lg:order-2">
                        <span className="py-2 px-4 rounded-full border border-gold/30 text-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-8 inline-block">
                            About Rachel
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal dark:text-white mb-8 leading-tight">
                            Storyteller. <br />
                            <span className="text-gold italic font-light">Performer.</span> <br />
                            Creator.
                        </h1>

                        <div className="space-y-6 text-lg text-charcoal/70 dark:text-white/70 leading-relaxed font-light mb-12">
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

                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                Work with Rachel
                            </Link>
                            <a href="#" className="flex items-center gap-2 px-8 py-4 border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:border-gold hover:text-gold transition-colors">
                                <Download size={16} />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Credentials Section */}
            <section className="py-20 bg-white dark:bg-charcoal/50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-display font-bold text-charcoal dark:text-white mb-6">
                            My Philosophy
                        </h2>
                        <p className="text-charcoal/60 dark:text-white/60 leading-relaxed">
                            I believe that true impact comes from authenticity. Whether on stage, in front of a camera, or leading a boardroom, the ability to connect with your audience starts with connecting with yourself.
                        </p>
                    </div>
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                        <div className="bg-background-light dark:bg-charcoal p-8 rounded-2xl border border-charcoal/5 dark:border-white/5">
                            <Mic className="text-gold mb-4" size={32} />
                            <h3 className="font-bold text-lg text-charcoal dark:text-white mb-2">Voice & Speech</h3>
                            <p className="text-sm text-charcoal/60 dark:text-white/60">Expert training in projection, resonance, and dialect work for actors and speakers.</p>
                        </div>
                        <div className="bg-background-light dark:bg-charcoal p-8 rounded-2xl border border-charcoal/5 dark:border-white/5">
                            <Video className="text-gold mb-4" size={32} />
                            <h3 className="font-bold text-lg text-charcoal dark:text-white mb-2">Screen Presence</h3>
                            <p className="text-sm text-charcoal/60 dark:text-white/60">Techniques for camera acting, interview skills, and media appearances.</p>
                        </div>
                        <div className="bg-background-light dark:bg-charcoal p-8 rounded-2xl border border-charcoal/5 dark:border-white/5">
                            <Award className="text-gold mb-4" size={32} />
                            <h3 className="font-bold text-lg text-charcoal dark:text-white mb-2">Direction</h3>
                            <p className="text-sm text-charcoal/60 dark:text-white/60">Award-winning direction for corporate films, commercials, and narrative projects.</p>
                        </div>
                        <div className="bg-background-light dark:bg-charcoal p-8 rounded-2xl border border-charcoal/5 dark:border-white/5">
                            <Users className="text-gold mb-4" size={32} />
                            <h3 className="font-bold text-lg text-charcoal dark:text-white mb-2">Leadership</h3>
                            <p className="text-sm text-charcoal/60 dark:text-white/60">Executive coaching for leadership presence and impactful communication.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFooter />
        </main>
    );
}

// Icon for the grid
function Users({ className, size }: { className?: string, size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    );
}
