"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
    { id: 1, title: "ACTING", span: "col-span-1 md:col-span-2 row-span-2", img: "/assets/generated/acting.png" },
    { id: 2, title: "DIRECTING", span: "col-span-1 md:col-span-1 row-span-1", img: "/assets/generated/directing.png" },
    { id: 3, title: "VOICE", span: "col-span-1 md:col-span-1 row-span-1", img: "/assets/generated/voice.png" },
    { id: 4, title: "SINGING", span: "col-span-1 md:col-span-1 row-span-1", img: "/assets/generated/singing.png" },
    { id: 5, title: "PRESENTING", span: "col-span-1 md:col-span-2 row-span-1", img: "/assets/generated/presenting.png" },
    { id: 6, title: "WRITING", span: "col-span-1 md:col-span-1 row-span-1", img: "/assets/generated/writing.png" },
];

export default function PortfolioGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="min-h-screen bg-transparent py-20 px-4 md:px-12 flex flex-col items-center relative z-20">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-display text-gray-900 tracking-tight">
                    Creative Work
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-pink-300 to-purple-300 mt-6 mx-auto rounded-full" />
            </div>

            <div
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        className={cn(
                            "group relative overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-purple-900/5 cursor-pointer h-[400px]",
                            item.span
                        )}
                        whileHover={{ y: -10 }}
                    >
                        {/* Background Image */}
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay Gradient (Light Mode: White fade or colored tint) */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-3xl font-bold tracking-tight text-white font-display mb-2">
                                {item.title}
                            </h3>
                            <button className="flex items-center gap-2 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                View Projects <span className="text-pink-300">→</span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
