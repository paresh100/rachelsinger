"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-line", {
                y: 50,
                opacity: 0,
                duration: 1.0,
                stagger: 0.15,
                ease: "power3.out",
            })
                .from(imageRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                }, "-=0.8")
                .from(".quote-card", {
                    x: -50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.5");

            // Parallax effect for the image
            gsap.to(imageRef.current, {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Parallax for blob
            gsap.to(".parallax-blob", {
                y: 200,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background-light dark:bg-background-dark">

            {/* Parallax Blob Background */}
            <div className="parallax-blob absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-60 pointer-events-none mix-blend-multiply dark:mix-blend-soft-light" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

                {/* Text Content */}
                <div ref={textRef} className="max-w-2xl order-2 lg:order-1">
                    <div className="hero-line inline-block mb-6">
                        <span className="py-2 px-6 rounded-full border border-charcoal/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-xs font-bold uppercase tracking-[0.2em] text-charcoal/80 dark:text-white/80">
                            Multidisciplinary Artist
                        </span>
                    </div>

                    <h1 className="hero-line font-display font-bold text-5xl md:text-7xl lg:text-8xl text-charcoal dark:text-white leading-[0.9] mb-8 tracking-tighter">
                        Rachel <span className="italic font-light text-gold">Preece</span>
                    </h1>

                    <p className="hero-line text-lg md:text-xl text-charcoal/70 dark:text-white/70 mb-10 leading-relaxed max-w-lg font-light">
                        Acting. Directing. Voice. <br />
                        Creating work that resonates with authenticity and commands attention.
                    </p>

                    <div className="hero-line flex flex-wrap gap-4">
                        <Link href="/contact">
                            <ShimmerButton
                                className="shadow-xl"
                                shimmerSize="0.1em"
                                shimmerDuration="3s"
                                background="#D4AF37" // Gold
                            >
                                <span className="whitespace-pre-wrap text-center text-sm font-bold leading-none tracking-widest text-white uppercase px-6 py-2">
                                    Start Your Transformation
                                </span>
                            </ShimmerButton>
                        </Link>
                        <Link href="/portfolio" className="flex items-center gap-2 px-6 py-4 rounded-full border border-charcoal/20 dark:border-white/20 hover:bg-charcoal/5 dark:hover:bg-white/5 transition-colors text-sm font-bold uppercase tracking-widest text-charcoal dark:text-white">
                            <Play size={14} fill="currentColor" />
                            View Showreel
                        </Link>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative h-[600px] lg:h-[800px] w-full order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div ref={imageRef} className="relative w-full max-w-md h-full">
                        <div className="absolute inset-0 rounded-t-full rounded-b-[200px] overflow-hidden border-[8px] border-white dark:border-charcoal shadow-2xl">
                            <Image
                                src="/assets/rachel-profile-real.jpg"
                                alt="Rachel Preece"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Quote Card Overlay */}
                        <div className="quote-card absolute bottom-20 -left-10 lg:-left-20 bg-white dark:bg-charcoal/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-xs border border-gold/20">
                            <p className="font-display italic text-xl text-charcoal dark:text-white mb-4 leading-relaxed">
                                "A commanding presence both on and off screen."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-gold"></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-charcoal/60 dark:text-white/60">The Stage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
