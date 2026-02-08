
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import { portfolioCategories } from "@/lib/portfolio-data";

export default function PortfolioIndex() {
    return (
        <main className="min-h-screen bg-white selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />

            <section className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-gold uppercase tracking-widest text-sm font-bold mb-4 block">Portfolio</span>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
                                Selected Works
                            </h1>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                        {portfolioCategories.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/portfolio/${item.slug}`}
                                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.colSpan} block`}
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-3xl font-display font-bold mb-2 flex items-center gap-2">
                                            {item.title}
                                            <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                                        </h3>
                                        <p className="text-white/70 uppercase tracking-widest text-sm font-medium">
                                            {item.subtitle}
                                        </p>
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
