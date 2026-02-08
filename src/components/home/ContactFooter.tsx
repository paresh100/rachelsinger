"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Logo from "../ui/Logo";

export default function ContactFooter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <footer className="w-full bg-charcoal text-white pt-32 pb-10 px-6 md:px-12 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 mb-24">

                {/* Brand Column */}
                <div className="md:col-span-4 space-y-8">
                    <Link href="/" className="group block w-fit">
                        <Logo className="text-3xl text-white" />
                    </Link>
                    <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm">
                        Empowering executives, actors, and leaders to find their authentic voice and command the room with confidence and grace.
                    </p>
                    <div className="flex gap-6 text-gold pt-4">
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={22} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={22} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={22} /></a>
                        <a href="mailto:info@rachelpreece.com" className="hover:text-white transition-colors"><Mail size={22} /></a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="md:col-span-2 md:col-start-6">
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Menu</h3>
                    <ul className="space-y-4 text-sm text-white/80 font-medium">
                        <li><Link href="/about" className="hover:text-gold transition-colors">About Rachel</Link></li>
                        <li><Link href="/portfolio" className="hover:text-gold transition-colors">Selected Works</Link></li>
                        <li><Link href="/#testimonials" className="hover:text-gold transition-colors">Acclaim</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="md:col-span-2">
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Services</h3>
                    <ul className="space-y-4 text-sm text-white/80 font-medium">
                        <li><a href="https://www.rachelpreecevoicecoach.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Voice Coaching</a></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">Public Speaking</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">Media Training</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">Workshops</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="md:col-span-3">
                    <h3 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Stay Connected</h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                        Join 2,000+ subscribers receiving weekly voice and performance insights.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-white placeholder:text-white/20"
                                required
                            />
                        </div>
                        <button
                            disabled={status !== 'idle'}
                            className="w-full bg-gold text-charcoal font-bold uppercase text-xs tracking-[0.2em] py-4 rounded-xl hover:bg-white transition-colors disabled:opacity-50"
                        >
                            {status === 'success' ? 'Subscribed' : 'Subscribe'}
                        </button>
                    </form>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.65rem] text-white/30 uppercase tracking-[0.2em] font-medium">
                <p>&copy; {new Date().getFullYear()} Rachel Preece. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
