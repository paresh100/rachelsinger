"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Rachel is a chameleon. Her ability to embody such diverse characters with depth and nuance is truly rare.",
        author: "James Cameron",
        role: "Director",
        tag: "Film"
    },
    {
        quote: "A consummate professional in the booth. Rachel nails the tone on the first take, every time.",
        author: "Sarah Miller",
        role: "Casting Director",
        tag: "Voice Over"
    },
    {
        quote: "Her stage presence is magnetic. She commands the audience's attention from the moment she steps into the light.",
        author: "The Guardian",
        role: "Theatre Review",
        tag: "Theatre"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-24">
                    <span className="py-2 px-4 rounded-full border border-gold/20 text-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-6 inline-block">
                        Acclaim
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Industry Reviews
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                        Trusted by casting directors, producers, and critics across the industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 flex flex-col relative"
                        >
                            <Quote size={40} className="text-gold/20 mb-8 group-hover:text-gold/40 transition-colors" />

                            <p className="text-white/90 text-lg md:text-xl font-display italic mb-10 flex-1 leading-relaxed">
                                "{item.quote}"
                            </p>

                            <div className="border-t border-white/10 pt-8 mt-auto">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="font-bold text-white text-lg tracking-wide mb-1">{item.author}</p>
                                        <p className="text-xs text-gold uppercase tracking-[0.15em] font-medium">{item.role}</p>
                                    </div>
                                    <span className="text-white/40 text-xs font-medium uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                                        {item.tag}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
