import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play, Music, Mic2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import { portfolioCategories } from "@/lib/portfolio-data";

export function generateStaticParams() {
    return portfolioCategories.map((category) => ({
        slug: category.slug,
    }));
}

export default function PortfolioItem({ params }: { params: { slug: string } }) {
    const item = portfolioCategories.find((c) => c.slug === params.slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <header className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-charcoal/60 dark:text-white/60 uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-12 hover:text-gold transition-colors group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Content Column */}
                        <div className="order-2 lg:order-1">
                            <span className="py-2 px-4 rounded-full border border-gold/30 text-gold uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-8 inline-block">
                                {item.subtitle}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-charcoal dark:text-white mb-8 leading-tight">
                                {item.title}
                            </h1>
                            <p className="text-lg md:text-xl text-charcoal/60 dark:text-white/60 leading-relaxed font-light mb-12">
                                {item.description}
                            </p>

                            <div className="space-y-12">
                                {/* Credits */}
                                {item.details.credits && (
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 mb-6">
                                            Key Credits
                                        </h3>
                                        <ul className="space-y-4">
                                            {item.details.credits.map((credit, idx) => (
                                                <li key={idx} className="flex items-start gap-4 text-charcoal dark:text-white font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                                                    <span className="leading-relaxed">{credit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Clients */}
                                {item.details.clients && (
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 mb-6">
                                            Selected Clients
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {item.details.clients.map((client, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 bg-white dark:bg-charcoal/50 text-charcoal dark:text-white text-sm font-medium rounded-xl border border-charcoal/5 dark:border-white/10"
                                                >
                                                    {client}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Audio Tracks */}
                                {item.details.audioTracks && (
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 mb-6">
                                            Audio Samples
                                        </h3>
                                        <div className="space-y-4">
                                            {item.details.audioTracks.map((track, idx) => (
                                                <div key={idx} className="group bg-white dark:bg-charcoal/50 p-6 rounded-2xl border border-charcoal/5 dark:border-white/10 hover:border-gold/30 transition-colors">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                                                            <Music size={20} />
                                                        </div>
                                                        <div className="flex-grow min-w-0">
                                                            <h4 className="font-bold text-charcoal dark:text-white truncate">{track.title}</h4>
                                                            <span className="text-xs text-charcoal/40 dark:text-white/40 uppercase tracking-widest">Voice Sample</span>
                                                        </div>
                                                    </div>
                                                    {/* Embed SoundCloud Player */}
                                                    <div className="w-full h-20 rounded-xl overflow-hidden bg-background-light dark:bg-charcoal">
                                                        <iframe
                                                            width="100%"
                                                            height="166"
                                                            scrolling="no"
                                                            frameBorder="no"
                                                            allow="autoplay"
                                                            src={`https://w.soundcloud.com/player/?url=${track.url}&color=%23c6a87c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <div className="mt-16 pt-8 border-t border-charcoal/10 dark:border-white/10">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    Book This Artist
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="order-1 lg:order-2">
                            <div className="sticky top-32">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4] group">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none" />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-gold/20 rounded-[2.5rem]" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <ContactFooter />
        </main>
    );
}
