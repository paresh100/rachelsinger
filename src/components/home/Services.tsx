"use client";

import { motion } from "framer-motion";
import { Mic, Users, Sparkles, Video, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: Mic,
        title: "Voice Coaching",
        description: "Master your tone, pitch, and projection. Perfect for actors and professionals wanting to sound more authoritative.",
        image: "/assets/generated/voice.png"
    },
    {
        icon: Users,
        title: "Public Speaking",
        description: "Overcome stage fright and deliver compelling keynotes. Learn the structures that keep audiences engaged.",
        image: "/assets/generated/presenting.png"
    },
    {
        icon: Sparkles,
        title: "Women's Confidence",
        description: "Specialized coaching for women leaders to own the room, interrupt effectively, and lead with presence.",
        image: "/assets/generated/acting.png"
    },
    {
        icon: Video,
        title: "Media Training",
        description: "Prepare for TV, radio, and podcast appearances. Learn how to bridge to your key messages under pressure.",
        image: "/assets/generated/directing.png"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">What I Offer</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
                        Coaching Tailored to Your Goals
                    </h2>
                    <p className="text-charcoal/60 leading-relaxed text-lg">
                        Whether you&apos;re stepping onto a stage, into a boardroom, or in front of a camera,
                        my coaching gives you the tools to perform at your peak.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-cream rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-rose-momm/10 transition-all duration-500 border border-stone-100 flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="h-48 relative overflow-hidden w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-gold group-hover:bg-gold group-hover:text-white transition-colors relative -mt-14 z-10 border border-stone-100">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-display font-bold text-charcoal mb-4 group-hover:text-rose-momm transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-charcoal/60 text-sm leading-relaxed mb-6 flex-1">
                                    {service.description}
                                </p>
                                <button className="text-xs font-bold uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors flex items-center gap-2 mt-auto">
                                    Learn More <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
