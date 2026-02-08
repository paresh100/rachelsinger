"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Search } from "lucide-react";
import SearchOverlay from "../ui/SearchOverlay";
import Logo from "../ui/Logo";

const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Voice Coaching", href: "https://www.rachelpreecevoicecoach.com/", external: true },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

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
                        ? "bg-background-light/90 backdrop-blur-md py-4 shadow-sm border-b border-gold/10"
                        : "bg-transparent py-6 border-b border-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo - Google Stitch Stacked Style */}
                    <div className="relative z-50">
                        <Link href="/" className="group block" onClick={() => setIsMobileMenuOpen(false)}>
                            <Logo className="text-2xl text-charcoal dark:text-white" />
                        </Link>
                    </div>

                    {/* Desktop Menu - Kept for UX, styled specifically */}
                    <div className="hidden md:flex items-center gap-12">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className={cn(
                                        "group relative text-xs font-medium transition-colors font-sans uppercase tracking-[0.15em] py-2",
                                        isActive ? "text-gold" : "text-charcoal/70 dark:text-white/70 hover:text-gold"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-transform duration-300 origin-left ease-out",
                                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    )} />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-6 relative z-50">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-charcoal/70 dark:text-white/70 hover:text-gold transition-colors focus:outline-none"
                            aria-label="Search"
                        >
                            <Search size={20} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-charcoal/70 dark:text-white/70 hover:text-gold transition-colors focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
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
