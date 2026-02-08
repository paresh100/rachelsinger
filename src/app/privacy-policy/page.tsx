
import Navbar from "@/components/layout/Navbar";
import ContactFooter from "@/components/home/ContactFooter";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white selection:bg-rose-momm selection:text-white flex flex-col">
            <Navbar />
            <div className="pt-32 pb-20 flex-grow">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-display font-bold text-charcoal mb-8">Privacy Policy</h1>
                    <div className="prose prose-stone max-w-none text-charcoal/80 leading-relaxed">
                        <p className="mb-6 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">1. Introduction</h2>
                            <p className="mb-4">
                                Welcome to Rachel Preece's website ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">2. The Data We Collect</h2>
                            <p className="mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-gold">
                                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">3. How We Use Your Data</h2>
                            <p className="mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-gold">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">4. Cookies</h2>
                            <p className="mb-4">
                                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                                If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">5. Data Security</h2>
                            <p className="mb-4">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                                In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">6. Third-Party Links</h2>
                            <p className="mb-4">
                                This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you.
                                We do not control these third-party websites and are not responsible for their privacy statements.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold font-display text-charcoal mb-4">7. Contact Details</h2>
                            <p className="mb-4">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@rachelpreece.com" className="text-gold hover:text-charcoal transition-colors underline">info@rachelpreece.com</a>
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
