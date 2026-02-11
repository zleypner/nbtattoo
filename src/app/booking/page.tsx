import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ExternalLink, ChevronRight, MessageCircle, Instagram } from "lucide-react";
import { socialLinks, getWhatsAppLink } from "@/lib/seo-config";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Book Your Tattoo | Consultation in Playas del Coco, Costa Rica",
  description:
    "Book your tattoo consultation at Nobori Tattoo in Playas del Coco, Guanacaste, Costa Rica. Contact us via WhatsApp or Instagram. Walk-ins welcome. Response within 24-48 hours.",
  keywords: [
    "book tattoo Costa Rica",
    "tattoo appointment Guanacaste",
    "tattoo consultation Playas del Coco",
    "walk-in tattoo Costa Rica",
    "tattoo booking Coco Beach",
    "schedule tattoo appointment",
  ],
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book Your Tattoo | Nobori Tattoo Costa Rica",
    description:
      "Schedule your tattoo consultation in Playas del Coco, Guanacaste. WhatsApp & walk-ins welcome.",
    url: "https://noboritattoo.com/booking",
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Booking", url: "/booking" },
]);

export default function BookingPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="pt-20 min-h-[calc(100vh-5rem)]">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ol className="flex items-center justify-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-gold">Booking</li>
          </ol>
        </nav>

        {/* Centered Content */}
        <section className="py-16 sm:py-20 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Header */}
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
              BOOK A CONSULTATION
            </h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />

            {/* Subtext */}
            <p className="mt-8 text-foreground/90 text-lg leading-relaxed max-w-xl mx-auto">
              Ready to get your tattoo in Playas del Coco? Reach out via WhatsApp
              for the fastest response, or connect with us on Instagram. We&apos;ll
              get back to you within 24–48 hours to discuss your design.
            </p>

            {/* Primary CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink("Hi! I'd like to book a tattoo consultation at Nobori Tattoo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white text-base tracking-[0.15em] rounded-lg transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                WHATSAPP US
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-burgundy hover:bg-burgundy-dark border border-gold/50 hover:border-gold text-foreground text-base tracking-[0.15em] rounded-lg transition-all duration-300 w-full sm:w-auto"
              >
                <Instagram className="w-5 h-5" />
                INSTAGRAM DM
              </a>
            </div>

            {/* Helper Text */}
            <p className="mt-6 text-muted text-sm">
              Send us your tattoo idea, size, and preferred placement. We&apos;ll
              provide a quote and schedule your session.
            </p>

            {/* What to Include */}
            <div className="mt-12 pt-8 border-t border-charcoal">
              <h2 className="text-gold text-sm tracking-wider mb-4">
                WHAT TO INCLUDE IN YOUR MESSAGE
              </h2>
              <ul className="text-foreground/80 text-sm space-y-2 max-w-md mx-auto text-left">
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Your tattoo idea or reference images
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Preferred size and body placement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Style preference (color, black & grey, fine line)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  Your availability for a session
                </li>
              </ul>
            </div>

            {/* Internal Links */}
            <div className="mt-10 pt-8 border-t border-charcoal">
              <p className="text-muted text-sm mb-4">
                Not sure what you want? Browse our work first:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  href="/gallery"
                  className="text-gold hover:text-foreground transition-colors"
                >
                  View Gallery &rarr;
                </Link>
                <Link
                  href="/artists"
                  className="text-gold hover:text-foreground transition-colors"
                >
                  Meet the Artist &rarr;
                </Link>
                <Link
                  href="/playas-del-coco"
                  className="text-gold hover:text-foreground transition-colors"
                >
                  Our Studio &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
