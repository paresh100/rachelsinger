"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
    return (
        <section id="about" className="py-24 bg-soft">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Visual */}
                <div className="relative order-2 lg:order-1">
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/assets/rachel-profile-real.jpg"
                            alt="Rachel Preece Portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-momm/10 rounded-full blur-2xl" />
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">About Rachel</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight">
                        Storyteller. <span className="text-rose-momm">Performer.</span> Creator.
                    </h2>
                    <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                        From the West End stage to network television, I have dedicated my life to the art of performance.
                        My work spans acting, directing, and voice artistry, always driven by a pursuit of truth and connection.
                    </p>
                    <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                        Whether I am directing a new play, lending my voice to a global campaign, or stepping in front of the camera,
                        I bring 15+ years of rigorous training and professional experience to every project.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {["Equity Member", "LAMDA Trained", "TV & Film", "Award Winning"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-charcoal/80 font-medium">
                                <CheckCircle2 size={20} className="text-gold" />
                                {item}
                            </div>
                        ))}
                    </div>

                    <Link href="/about" className="inline-block px-8 py-3 bg-white border border-charcoal/10 text-charcoal rounded hover:bg-charcoal hover:text-white transition-colors uppercase tracking-widest text-xs font-bold shadow-sm">
                        Read Full Bio
                    </Link>
                </div>

            </div>
        </section>
    );
}
