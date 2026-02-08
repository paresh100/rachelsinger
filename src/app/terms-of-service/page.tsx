
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import Link from "next/link";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 flex-grow">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-display font-bold text-charcoal mb-8">Terms of Service</h1>
                    <div className="prose prose-stone max-w-none text-charcoal/80 leading-relaxed">
                        <p className="mb-6 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">1. Agreement to Terms</h2>
                            <p className="mb-4">
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Rachel Preece (“we,” “us” or “our”),
                                concerning your access to and use of the rachelpreece.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                            </p>
                            <p className="mb-4">
                                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service.
                                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">2. Intellectual Property Rights</h2>
                            <p className="mb-4">
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”)
                                and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">3. User Representations</h2>
                            <p className="mb-4">
                                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service;
                                (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise;
                                (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">4. Prohibited Activities</h2>
                            <p className="mb-4">
                                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">5. Site Management</h2>
                            <p className="mb-4">
                                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service;
                                (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service;
                                (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">6. Indemnification</h2>
                            <p className="mb-4">
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">7. Contact Us</h2>
                            <p className="mb-4">
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:info@rachelpreece.com" className="text-gold hover:text-charcoal transition-colors underline">info@rachelpreece.com</a>
                            </p>
                        </section>

                        <div className="pt-8 border-t border-stone-200">
                            <Link href="/" className="text-sm font-bold uppercase tracking-widest text-charcoal hover:text-gold transition-colors">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </main>
    );
}
