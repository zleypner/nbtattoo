import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import { GA_MEASUREMENT_ID } from "@/lib/ga";
import { getHomePageSchemas } from "@/lib/schemas";
import { siteConfig, businessInfo } from "@/lib/seo-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nobori Tattoo | Best Tattoo Studio in Playas del Coco, Guanacaste, Costa Rica",
    template: "%s | Nobori Tattoo Costa Rica",
  },
  description:
    "Professional tattoo studio in Playas del Coco, Guanacaste, Costa Rica. Specializing in color illustrative, neo-oriental, and fine line tattoos. Get inked on your Costa Rica vacation. Walk-ins welcome.",
  keywords: [
    // English keywords
    "tattoo Costa Rica",
    "tattoo Guanacaste",
    "tattoo Playas del Coco",
    "tattoo artist Playas del Coco",
    "best tattoo artist Costa Rica",
    "tattoo shop near me",
    "Costa Rica vacation tattoo",
    "beach tattoo",
    "Coco Beach tattoo",
    "tattoo studio Guanacaste",
    "tattoo studio Playas del Coco",
    "color illustrative tattoo",
    "neo-oriental tattoo",
    "fine line tattoo",
    "Japanese style tattoo Costa Rica",
    "tattoo near Liberia airport",
    "tattoo Tamarindo",
    "tattoo Papagayo",
    "professional tattoo artist",
    "custom tattoo design",
    "tattoo while traveling",
    "tattoo shop Costa Rica",
    // Spanish keywords for local SEO
    "tatuajes Costa Rica",
    "tatuajes Guanacaste",
    "tatuajes Playas del Coco",
    "tatuador Playas del Coco",
    "estudio de tatuajes Costa Rica",
    "mejor tatuador Costa Rica",
  ],
  authors: [{ name: "Nobori Tattoo" }],
  creator: "Nobori Tattoo",
  publisher: "Nobori Tattoo",
  metadataBase: new URL("https://noboritattoo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    // Note: No alternateLocale since site is primarily English
    // Spanish keywords are included for local SEO but no Spanish pages exist
    url: "https://noboritattoo.com",
    siteName: "Nobori Tattoo",
    title: "Nobori Tattoo | Best Tattoo Studio in Guanacaste, Costa Rica",
    description:
      "Professional tattoo studio in Playas del Coco, Guanacaste. Specializing in color illustrative, neo-oriental, and fine line tattoos. Book your session today.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nobori Tattoo Studio - Playas del Coco, Guanacaste, Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobori Tattoo | Tattoo Studio in Costa Rica",
    description:
      "Professional tattoo studio in Playas del Coco, Guanacaste, Costa Rica. Color illustrative, neo-oriental & fine line tattoos.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Replace with actual Google Search Console verification code
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "your-google-verification-code",
  },
  category: "Tattoo Studio",
};

// Pre-generate schemas for SSR
const homePageSchemas = getHomePageSchemas();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* Structured Data - Multiple Schemas for Rich Results */}
        {homePageSchemas.map((schema, index) => (
          <Script
            key={`schema-${index}`}
            id={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <AnalyticsTracker />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
