
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Delay slightly for smoother entrance
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
        // Here you would typically trigger your analytics scripts
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-display font-bold text-charcoal mb-2">
                                We value your privacy
                            </h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                                By clicking "Accept All", you consent to our use of cookies.
                                Read our <Link href="/privacy-policy" className="text-gold underline hover:text-charcoal transition-colors">Privacy Policy</Link> to learn more.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[280px]">
                            <button
                                onClick={handleDecline}
                                className="px-6 py-3 border border-stone-200 rounded font-medium text-charcoal/70 hover:bg-stone-50 hover:text-charcoal transition-colors text-sm uppercase tracking-wide flex-1"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-3 bg-charcoal text-white rounded font-medium hover:bg-gold transition-colors text-sm uppercase tracking-wide flex-1 shadow-md"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
