"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
        role: "Casting Director, audiobooks.com",
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="testimonials" className="py-24 bg-rose-momm/5 relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">Acclaim</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
                        Industry Reviews
                    </h2>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col relative"
                        >
                            <Quote size={40} className="text-rose-momm/20 mb-6" />

                            <p className="text-charcoal/80 text-lg italic mb-8 flex-1 leading-relaxed">
                                "{item.quote}"
                            </p>

                            <div className="border-t border-stone-100 pt-6">
                                <p className="font-display font-bold text-charcoal text-lg">{item.author}</p>
                                <p className="text-sm text-charcoal/50 uppercase tracking-widest mb-2">{item.role}</p>
                                <span className="inline-block px-3 py-1 bg-cream text-gold text-xs font-bold rounded-full uppercase tracking-wider">
                                    {item.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
