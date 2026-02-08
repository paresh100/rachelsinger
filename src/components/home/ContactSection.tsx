"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Phone } from "lucide-react";
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
        <section id="contact" className="py-24 bg-rose-momm/10 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-momm/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
                        Start Your Transformation
                    </h2>
                    <p className="text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Ready to elevate your voice and presence? Inquire about media training and speaking engagements.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 text-charcoal/80 font-medium">
                        <a href="mailto:info@rachelpreece.com" className="hover:text-gold transition-colors">info@rachelpreece.com</a>
                        <span className="hidden md:block text-gold">•</span>
                        <a href="tel:+447967358796" className="hover:text-gold transition-colors">07967 358 796</a>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100">
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-charcoal mb-4">Message Sent!</h3>
                            <p className="text-charcoal/60">Thank you for reaching out. Rachel will get back to you shortly.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 text-gold font-bold hover:underline"
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
                            className="space-y-6"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-charcoal/80 uppercase tracking-wide">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-charcoal/80 uppercase tracking-wide">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-charcoal/80 uppercase tracking-wide">Phone Number <span className="text-stone-400 text-xs normal-case tracking-normal font-normal">(Optional)</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full bg-stone-50 border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-charcoal/80 uppercase tracking-wide">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-stone-50 border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-charcoal/80"
                                >
                                    <option value="Consultation">Consultation Inquiry</option>
                                    <option value="Media Training">Media Training Inquiry</option>
                                    <option value="Public Speaking">Public Speaking Request</option>
                                    <option value="Other">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-charcoal/80 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-stone-50 border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                                    placeholder="Tell me about your goals..."
                                />
                            </div>

                            <ShimmerButton
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-5 flex items-center justify-center gap-3 shadow-lg"
                                shimmerSize="0.15em"
                                shimmerDuration="2.5s"
                                background="#333333"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="uppercase tracking-widest font-bold">Send Message</span>
                                        <Send size={20} />
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
