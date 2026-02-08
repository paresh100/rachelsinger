"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories } from "@/lib/portfolio-data";
import { GlowingEffect } from "../ui/glowing-effect";

export default function PortfolioCategories() {
    return (
        <section id="portfolio" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
                            Selected Works
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {portfolioCategories.map((item, index) => (
                        <motion.div
                            key={item.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.colSpan} ring-1 ring-black/5`}
                        >
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <Link href={`/portfolio/${item.slug}`} className="block w-full h-full relative z-10">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-3xl font-display font-bold mb-2 flex items-center gap-2">
                                            {item.title}
                                            <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                                        </h3>
                                        <p className="text-white/70 uppercase tracking-widest text-sm font-medium">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

