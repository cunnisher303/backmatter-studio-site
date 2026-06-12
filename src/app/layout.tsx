import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://backmatterstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "./" },
  title: {
    default: "Backmatter Studio — Author Websites & Reader Funnels",
    template: "%s — Backmatter Studio",
  },
  description:
    "Fixed-price author websites with email capture, reader-magnet funnels, and Discord communities — live in 5 days, built by a published author. Your book deserves more than a Linktree.",
  keywords: [
    "author website", "author website design", "reader funnel", "author email list",
    "ConvertKit for authors", "book marketing", "indie author services",
  ],
  openGraph: {
    title: "Backmatter Studio",
    description:
      "Author websites & reader funnels, built by a published author. Fixed price. Live in 5 days. You own everything.",
    type: "website",
    siteName: "Backmatter Studio",
  },
  twitter: {
    card: "summary",
    title: "Backmatter Studio — Author Websites & Reader Funnels",
    description: "Your book deserves more than a Linktree.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#studio`,
  name: "Backmatter Studio",
  url: siteUrl,
  description:
    "Fixed-price author websites and reader funnels for indie authors: website, email capture, link hub, and Discord community, delivered in 5 days.",
  founder: { "@type": "Person", name: "Pendrake Mallory", jobTitle: "Author & Founder" },
  priceRange: "$497–$2,500",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
