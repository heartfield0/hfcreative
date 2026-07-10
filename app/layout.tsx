import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://heartfieldlamadrid.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Performance Creative for DTC Brands`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Meta Ads creative",
    "performance creative",
    "DTC ad creatives",
    "UGC video ads",
    "TikTok ad creative",
    "AI creative production",
    "e-commerce ad design",
    "Heart Field Lamadrid",
  ],
  authors: [{ name: site.name, url: site.linkedinUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.name} — Performance Creative for DTC Brands`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Performance Creative for DTC Brands`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Performance Creative Strategist",
  worksFor: {
    "@type": "Organization",
    name: site.company,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cadiz",
    addressRegion: "Negros Occidental",
    addressCountry: "PH",
  },
  email: `mailto:${site.email}`,
  sameAs: [site.upworkUrl, site.linkedinUrl],
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full bg-bg text-fg antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <CustomCursor />
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
