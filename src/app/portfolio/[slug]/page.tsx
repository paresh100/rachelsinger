
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play, Download } from "lucide-react";
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
        <main className="min-h-screen bg-cream selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />

            <article className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Back Link */}
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold mb-8 hover:text-charcoal transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Image Column */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] lg:sticky lg:top-32">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Content Column */}
                        <div>
                            <header className="mb-10">
                                <span className="text-gold uppercase tracking-widest text-sm font-bold block mb-4">
                                    {item.subtitle}
                                </span>
                                <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-8">
                                    {item.title}
                                </h1>
                                <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </header>

                            <div className="space-y-12">
                                {/* Details / Credits */}
                                {item.details.credits && (
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                                        <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-gold" />
                                            Key Credits & Experience
                                        </h3>
                                        <ul className="space-y-4">
                                            {item.details.credits.map((credit, idx) => (
                                                <li key={idx} className="flex items-start gap-4 text-charcoal/80">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                                                    <span className="leading-relaxed">{credit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Clients */}
                                {item.details.clients && (
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                                        <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-gold" />
                                            Selected Clients
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {item.details.clients.map((client, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 bg-stone-50 text-charcoal/70 text-sm font-medium rounded-full border border-stone-100"
                                                >
                                                    {client}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Audio Tracks */}
                                {item.details.audioTracks && (
                                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                                        <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-gold" />
                                            Audio Samples
                                        </h3>
                                        <div className="space-y-4">
                                            {item.details.audioTracks.map((track, idx) => (
                                                <div key={idx} className="group">
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className="w-10 h-10 rounded-full bg-charcoal text-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                            <Play size={18} fill="currentColor" />
                                                        </div>
                                                        <div className="flex-grow min-w-0">
                                                            <h4 className="font-bold text-charcoal truncate">{track.title}</h4>
                                                            <a
                                                                href={track.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-xs text-gold uppercase tracking-wider hover:underline"
                                                            >
                                                                Listen on SoundCloud
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* Embed SoundCloud Player */}
                                                    <div className="w-full h-20 rounded overflow-hidden shadow-inner bg-stone-50">
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
                            <div className="mt-16 pt-8 border-t border-charcoal/10">
                                <h3 className="text-2xl font-display font-bold mb-6">Interested in working together?</h3>
                                <Link
                                    href="/contact"
                                    className="inline-flex px-8 py-4 bg-charcoal text-white rounded font-medium shadow-lg hover:bg-gold transition-all active:scale-95 uppercase tracking-widest text-sm"
                                >
                                    Book {item.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <ContactFooter />
        </main>
    );
}
