"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
    const credentials = [
        { label: "Equity Member", icon: "🎭" },
        { label: "LAMDA Trained", icon: "📜" },
        { label: "TV & Film", icon: "🎬" },
        { label: "Award Winning", icon: "🏆" }
    ];

    return (
        <section id="about" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Visual */}
                <div className="relative order-2 lg:order-1">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-charcoal/5 dark:border-white/5 shadow-2xl">
                            <Image
                                src="/assets/rachel-profile-real.jpg"
                                alt="Rachel Preece Portrait"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-white dark:bg-charcoal p-6 rounded-xl shadow-xl border border-gold/20 max-w-[200px] hidden md:block">
                            <p className="font-display font-bold text-4xl text-gold mb-1">15+</p>
                            <p className="text-xs uppercase tracking-widest text-charcoal/60 dark:text-white/60 font-bold">Years of Experience</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                    <span className="py-2 px-4 rounded-full border border-gold/30 text-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-8 inline-block">
                        About Rachel
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal dark:text-white mb-8 leading-[1.1]">
                        Storyteller. <br />
                        <span className="text-gold italic font-light">Performer.</span> <br />
                        Creator.
                    </h2>

                    <div className="space-y-6 text-lg text-charcoal/70 dark:text-white/70 font-light leading-relaxed mb-10">
                        <p>
                            From the West End stage to network television, I have dedicated my life to the art of performance.
                            My work spans acting, directing, and voice artistry, always driven by a pursuit of truth and connection.
                        </p>
                        <p>
                            Whether I am directing a new play, lending my voice to a global campaign, or stepping in front of the camera,
                            I bring rigorous training and professional excellence to every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                        {credentials.map((item) => (
                            <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl border border-charcoal/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-gold/30 transition-colors">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-sm font-bold uppercase tracking-wider text-charcoal/80 dark:text-white/80">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <Link href="/about" className="group inline-flex items-center gap-2 text-charcoal dark:text-white font-bold uppercase tracking-widest text-xs hover:text-gold transition-colors">
                        Read Full Bio
                        <span className="block h-[1px] w-8 bg-charcoal dark:bg-white group-hover:bg-gold transition-colors" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
