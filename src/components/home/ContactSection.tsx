"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });
            setStatus("success");
            form.reset();
        } catch (error) {
            console.error("Form submission error", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gold/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-rose-momm/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />


            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="py-2 px-4 rounded-full border border-gold/30 text-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-6 inline-block">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal dark:text-white mb-6 leading-tight">
                        Start Your <span className="text-gold italic font-light">Transformation</span>
                    </h2>
                    <p className="text-charcoal/70 dark:text-white/70 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                        Ready to elevate your voice and presence? Inquire about media training, speaking engagements, or creative collaborations.
                    </p>
                </div>

                <div className="bg-white dark:bg-charcoal/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-charcoal/5 dark:border-white/10">
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle2 size={48} className="text-green-500" />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-charcoal dark:text-white mb-4">Message Sent!</h3>
                            <p className="text-charcoal/60 dark:text-white/60 mb-8 max-w-md mx-auto">Thank you for reaching out. Rachel will get back to you shortly to discuss your goals.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="text-gold font-bold hover:text-rose-momm transition-colors uppercase tracking-widest text-xs"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-xs font-bold text-charcoal/60 dark:text-white/60 uppercase tracking-widest pl-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-background-light dark:bg-black/20 border border-charcoal/10 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/30"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-xs font-bold text-charcoal/60 dark:text-white/60 uppercase tracking-widest pl-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-background-light dark:bg-black/20 border border-charcoal/10 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/30"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="subject" className="text-xs font-bold text-charcoal/60 dark:text-white/60 uppercase tracking-widest pl-1">Subject</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full bg-background-light dark:bg-black/20 border border-charcoal/10 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-charcoal dark:text-white appearance-none"
                                    >
                                        <option value="Consultation">Consultation Inquiry</option>
                                        <option value="Media Training">Media Training Inquiry</option>
                                        <option value="Public Speaking">Public Speaking Request</option>
                                        <option value="Other">Other Inquiry</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/50 dark:text-white/50">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="message" className="text-xs font-bold text-charcoal/60 dark:text-white/60 uppercase tracking-widest pl-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-background-light dark:bg-black/20 border border-charcoal/10 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none text-charcoal dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-white/30"
                                    placeholder="Tell me about your voice or event goals..."
                                />
                            </div>

                            <ShimmerButton
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-5 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl"
                                shimmerSize="0.1em"
                                shimmerDuration="3s"
                                background="#C6A67A" // Gold color
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin text-white" />
                                        <span className="text-white font-bold tracking-widest uppercase text-sm">Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-white font-bold tracking-widest uppercase text-sm">Send Message</span>
                                        <Send size={18} className="text-white" />
                                    </>
                                )}
                            </ShimmerButton>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
