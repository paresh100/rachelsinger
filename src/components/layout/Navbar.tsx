"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Search } from "lucide-react";
import Logo from "../ui/Logo";
import SearchOverlay from "../ui/SearchOverlay";

const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Voice Coaching", href: "https://www.rachelpreecevoicecoach.com/", external: true },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-stone-100"
                        : "bg-transparent py-8 border-b border-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <div className="relative z-50">
                        <Link href="/" className="hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="group relative text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors font-sans uppercase tracking-widest py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-6 relative z-50">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-charcoal/80 hover:text-gold transition-colors focus:outline-none"
                            aria-label="Search"
                        >
                            <Search size={22} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-charcoal hover:text-gold transition-colors focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center md:hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex flex-col space-y-8 text-center relative z-10">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ delay: 0.1 + (index * 0.1), type: "spring", stiffness: 100 }}
                                >
                                    <Link
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-display font-medium text-4xl text-charcoal hover:text-gold transition-colors block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Overlay */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
