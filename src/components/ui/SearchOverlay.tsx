
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SEARCH_ITEMS = [
    { title: "Home", href: "/", category: "Page" },
    { title: "About Rachel", href: "/about", category: "Page" },
    { title: "Portfolio", href: "/portfolio", category: "Page" },
    { title: "Contact", href: "/contact", category: "Page" },
    { title: "Testimonials", href: "/testimonials", category: "Page" },
    { title: "Acting Portfolio", href: "/portfolio/acting", category: "Portfolio" },
    { title: "Directing Portfolio", href: "/portfolio/directing", category: "Portfolio" },
    { title: "Presenting Portfolio", href: "/portfolio/presenting", category: "Portfolio" },
    { title: "Voice Overs", href: "/portfolio/voice-over", category: "Portfolio" },
    { title: "Singing", href: "/portfolio/singing", category: "Portfolio" },
    { title: "Writing", href: "/portfolio/writing", category: "Portfolio" },
    { title: "Privacy Policy", href: "/privacy-policy", category: "Legal" },
    { title: "Terms of Service", href: "/terms-of-service", category: "Legal" },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(SEARCH_ITEMS);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setQuery("");
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    useEffect(() => {
        const filtered = SEARCH_ITEMS.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query]);

    const handleNavigate = (href: string) => {
        onClose();
        router.push(href);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col pt-32 px-6 overflow-y-auto"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-2 text-charcoal/50 hover:text-charcoal transition-colors focus:outline-none"
                    >
                        <X size={32} />
                    </button>

                    <div className="max-w-3xl mx-auto w-full">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative mb-16"
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full text-5xl md:text-7xl font-display font-bold text-charcoal placeholder:text-stone-200 bg-transparent border-b border-stone-100 pb-4 focus:outline-none focus:border-gold transition-colors"
                                autoFocus
                            />
                            <SearchIcon className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal/20 pointer-events-none" size={48} />
                        </motion.div>

                        <div className="space-y-2">
                            {results.length > 0 ? (
                                results.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + (index * 0.05) }}
                                    >
                                        <button
                                            onClick={() => handleNavigate(item.href)}
                                            className="group w-full flex items-center justify-between p-4 hover:bg-stone-50 rounded-xl transition-colors text-left"
                                        >
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-gold mb-1 block">
                                                    {item.category}
                                                </span>
                                                <span className="text-2xl font-medium text-charcoal group-hover:text-charcoal/70 transition-colors">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <ArrowRight className="text-stone-200 group-hover:text-gold transition-colors transform group-hover:translate-x-2 duration-300" />
                                        </button>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center text-charcoal/40 text-lg py-12"
                                >
                                    No results found for "{query}"
                                </motion.p>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
