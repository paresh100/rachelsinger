"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories } from "@/lib/portfolio-data";

export default function PortfolioCategories() {
    return (
        <section id="portfolio" className="py-24 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal dark:text-white leading-tight">
                            Selected Works
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[500px]">
                    {portfolioCategories.map((item, index) => (
                        <motion.div
                            key={item.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${item.colSpan} bg-gray-100 dark:bg-charcoal/50`}
                        >
                            <Link href={`/portfolio/${item.slug}`} className="block w-full h-full relative z-10">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Elegant Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white z-20">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {item.subtitle}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 flex items-center justify-between">
                                            {item.title}
                                            <span className="bg-white/10 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                                                <ArrowUpRight size={20} className="text-white" />
                                            </span>
                                        </h3>
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

