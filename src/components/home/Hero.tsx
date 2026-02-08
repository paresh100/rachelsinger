"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";
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
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
            })
                .from(imageRef.current, {
                    scale: 1.1,
                    opacity: 0,
                    duration: 1.5,
                    ease: "expo.out",
                }, "-=1")
                .from(".hero-cta", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                }, "-=0.5");

            gsap.to(imageRef.current, {
                yPercent: 15,
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
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sandshell/30 rounded-l-[100px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">

                {/* Text Content */}
                <div ref={textRef} className="max-w-2xl">
                    <div className="hero-line inline-block px-4 py-1.5 rounded-full bg-white border border-stone-200 text-sm font-medium text-charcoal/60 mb-8 uppercase tracking-widest shadow-sm">
                        Multidisciplinary Artist
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-8 leading-tight">
                        <div className="overflow-hidden py-3 -my-3"><span className="hero-line block pt-1">Rachel Preece</span></div>
                        <div className="overflow-hidden py-3 -my-3"><span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-rose-momm to-gold text-4xl md:text-6xl mt-2 pt-1">Acting | Directing | Voice</span></div>
                    </h1>

                    <p className="hero-line text-lg text-charcoal/70 mb-10 leading-relaxed max-w-lg">
                        Performance is about connection. From stage to screen, and voice booth to boardroom, I bring stories to life with authenticity and power.
                    </p>

                    <div className="hero-cta flex flex-wrap gap-4">

                        <Link href="/contact">
                            <ShimmerButton
                                className="shadow-2xl"
                                shimmerSize="0.15em"
                                shimmerDuration="2.5s"
                                background="#333333"
                            >
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg uppercase tracking-widest">
                                    Contact for Booking
                                </span>
                            </ShimmerButton>
                        </Link>
                    </div>
                </div>

                {/* Visual */}
                <div className="flex flex-col w-full h-full justify-center mt-12 lg:mt-0">
                    <div className="relative h-[600px] lg:h-[750px] w-full">
                        <div ref={imageRef} className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl shadow-rose-momm/20 ring-1 ring-black/5">
                            <GlowingEffect
                                spread={60}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={4}
                                variant="default"
                            />
                            <Image
                                src="/assets/rachel-profile-real.jpg"
                                alt="Rachel Preece - Multidisciplinary Artist"
                                fill
                                className="object-cover relative z-10"
                                priority
                            />
                        </div>
                    </div>

                    {/* Moved Text Below Image */}
                    <div className="mt-6 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-stone-100 shadow-sm">
                        <p className="font-display italic text-2xl text-charcoal mb-2 leading-relaxed">"A commanding presence both on and off screen."</p>
                        <p className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">— The Stage Review</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
