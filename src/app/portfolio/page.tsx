import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import { portfolioCategories } from "@/lib/portfolio-data";

export const metadata = {
    title: "Portfolio | Rachel Preece",
    description: "Selected works in acting, directing, and voice artistry.",
};

export default function PortfolioIndex() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />

            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="py-2 px-4 rounded-full border border-gold/30 text-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-8 inline-block">
                                Portfolio
                            </span>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal dark:text-white mb-6">
                                Selected <span className="text-gold italic font-light">Works</span>
                            </h1>
                            <p className="text-charcoal/60 dark:text-white/60 text-lg max-w-xl leading-relaxed font-light">
                                A curation of performances, direction, and vocal projects spanning theatre, film, and media.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[500px]">
                        {portfolioCategories.map((item, index) => (
                            <Link
                                key={item.slug}
                                href={`/portfolio/${item.slug}`}
                                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${item.colSpan} block bg-gray-100 dark:bg-charcoal/50`}
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Elegant Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white z-20">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {item.subtitle}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 flex items-center justify-between">
                                            {item.title}
                                            <span className="bg-white/10 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                                                <ArrowUpRight size={20} className="text-white" />
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ContactFooter />
        </main>
    );
}
