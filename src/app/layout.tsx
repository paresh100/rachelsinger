import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rachel Preece | Voice & Performance Coaching",
  description: "Empowering executives, actors, and leaders to speak with authority and confidence. specialized voice coaching, public speaking, and media training.",
  openGraph: {
    title: "Rachel Preece | Voice & Performance Coaching",
    description: "Transform your voice, transform your life. Expert coaching for presence and performance.",
    url: "https://rachelpreece.com",
    siteName: "Rachel Preece Coaching",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
