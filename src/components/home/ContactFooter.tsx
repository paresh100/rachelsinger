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
        <footer className="w-full bg-charcoal text-white pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">
                {/* Brand Column */}
                <div className="md:col-span-1">
                    <div className="mb-8">
                        <Logo variant="light" />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                        Empowering executives, actors, and leaders to find their authentic voice and command the room.
                    </p>
                    <div className="flex flex-col gap-2 mb-6 text-sm text-white/60">
                        <a href="mailto:info@rachelpreece.com" className="hover:text-gold transition-colors">info@rachelpreece.com</a>
                        <a href="tel:+447967358796" className="hover:text-gold transition-colors">07967 358 796</a>
                    </div>
                    <div className="flex gap-4 text-gold">
                        <Instagram size={20} className="hover:text-white cursor-pointer transition-colors" />
                        <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
                        <Twitter size={20} className="hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-display font-bold mb-6 text-lg">Menu</h3>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li><Link href="/about" className="hover:text-gold transition-colors">About Rachel</Link></li>
                        <li><Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
                        <li><Link href="/testimonials" className="hover:text-gold transition-colors">Success Stories</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-display font-bold mb-6 text-lg">Services</h3>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li><a href="https://www.rachelpreecevoicecoach.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Voice Coaching</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Public Speaking</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Media Training</a></li>
                        <li><a href="#" className="hover:text-gold transition-colors">Women's Confidence</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-display font-bold mb-6 text-lg">Newsletter</h3>
                    <p className="text-white/60 text-sm mb-4">
                        Join 2,000+ subscribers receiving weekly voice and performance insights.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/5 border border-white/10 p-3 rounded text-sm focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/30"
                            required
                        />
                        <button
                            disabled={status !== 'idle'}
                            className="bg-gold text-charcoal font-bold uppercase text-xs tracking-widest py-3 hover:bg-white transition-colors disabled:opacity-50"
                        >
                            {status === 'success' ? 'Subscribed' : 'Subscribe'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} Rachel Preece. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
