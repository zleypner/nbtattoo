import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import { GA_MEASUREMENT_ID } from "@/lib/ga";

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
    "tattoo Costa Rica",
    "tattoo Guanacaste",
    "tattoo Playas del Coco",
    "best tattoo artist Costa Rica",
    "tattoo shop near me",
    "Costa Rica vacation tattoo",
    "beach tattoo",
    "Coco Beach tattoo",
    "tattoo studio Guanacaste",
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
    "ink Costa Rica",
    "tatuajes Costa Rica",
    "tatuajes Guanacaste",
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
    alternateLocale: "es_CR",
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
    google: "your-google-verification-code",
  },
  category: "Tattoo Studio",
};

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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "Nobori Tattoo",
              image: "https://noboritattoo.com/assets/og-image.jpg",
              "@id": "https://noboritattoo.com",
              url: "https://noboritattoo.com",
              telephone: "",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plaza Nino, Local 2, Frente a THE GYM",
                addressLocality: "Playas del Coco",
                addressRegion: "Guanacaste",
                postalCode: "50503",
                addressCountry: "CR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.5482,
                longitude: -85.7027,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "11:00",
                  closes: "18:00",
                },
              ],
              sameAs: ["https://www.instagram.com/nobori.tattoo/"],
              priceRange: "$$",
              description:
                "Professional tattoo studio in Playas del Coco, Guanacaste, Costa Rica. Specializing in color illustrative, neo-oriental and fine line tattoos. Walk-ins welcome.",
              areaServed: [
                "Playas del Coco",
                "Guanacaste",
                "Liberia",
                "Tamarindo",
                "Papagayo",
                "Costa Rica",
              ],
              knowsLanguage: ["es", "en"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <AnalyticsTracker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
