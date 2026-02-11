import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { MapPin, Clock, Instagram, MessageCircle, ChevronRight, Phone } from "lucide-react";
import { businessInfo, socialLinks, getWhatsAppLink, getPhoneLink } from "@/lib/seo-config";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact & Location | Tattoo Studio Playas del Coco, Guanacaste",
  description:
    "Visit Nobori Tattoo in Playas del Coco, Guanacaste, Costa Rica. Located at Plaza Nino across from THE GYM. Open Mon-Sat. 30 min from Liberia airport, Tamarindo, and Papagayo.",
  keywords: [
    "tattoo location Guanacaste",
    "tattoo shop Playas del Coco",
    "Costa Rica tattoo address",
    "tattoo near Liberia airport",
    "Nobori Tattoo location",
    "tattoo studio hours Costa Rica",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Nobori Tattoo - Playas del Coco, Costa Rica",
    description:
      "Visit us in Playas del Coco, Guanacaste. Plaza Nino, Local 2. Walk-ins welcome.",
    url: "https://noboritattoo.com/contact",
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
]);
const localBusinessSchema = getLocalBusinessSchema();

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="pt-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-gold">Contact</li>
          </ol>
        </nav>

        {/* Page Header */}
        <section className="py-16 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
            CONTACT & LOCATION
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="mt-6 text-muted max-w-2xl mx-auto px-4">
            Visit our tattoo studio in Playas del Coco, Guanacaste, Costa Rica.
          </p>
        </section>

      {/* Contact Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              {/* Location Card */}
              <div className="bg-charcoal/50 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-gold" />
                  <h2 className="text-gold text-lg tracking-[0.1em]">
                    LOCATION
                  </h2>
                </div>
                <div className="space-y-2 text-foreground/90 mb-6">
                  <p>Plaza Nino, Local 2</p>
                  <p>Playas del Coco</p>
                  <p>Frente a THE GYM</p>
                  <p>Guanacaste, Costa Rica</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/BpX3RNAoCWV7Fbok7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-charcoal/50 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-gold" />
                  <h2 className="text-gold text-lg tracking-[0.1em]">HOURS</h2>
                </div>
                <div className="space-y-3 text-foreground/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>11am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Connect Card */}
              <div className="bg-charcoal/50 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-gold" />
                  <h2 className="text-gold text-lg tracking-[0.1em]">
                    CONNECT
                  </h2>
                </div>
                <p className="text-foreground/90 mb-6">
                  Reach us on WhatsApp for the fastest response, or connect via Instagram.
                </p>
                <div className="space-y-3">
                  <a
                    href={getWhatsAppLink("Hi! I'm interested in getting a tattoo at Nobori Tattoo.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm tracking-[0.1em]">
                      WHATSAPP US
                    </span>
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 border border-foreground/30 hover:border-gold text-foreground hover:text-gold rounded-lg transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm tracking-[0.1em]">
                      {socialLinks.instagramHandle}
                    </span>
                  </a>
                  <a
                    href={getPhoneLink()}
                    className="flex items-center gap-3 px-6 py-3 border border-foreground/30 hover:border-gold text-foreground hover:text-gold rounded-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm tracking-[0.1em]">
                      {businessInfo.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div className="aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1234567890123!2d-85.6789!3d10.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNobori%20Tattoo%20Shop!5e0!3m2!1sen!2scr!4v1234567890123!5m2!1sen!2scr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nobori Tattoo Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-12 bg-burgundy/20 rounded-lg">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl tracking-[0.15em] text-foreground mb-4">
              READY TO GET INKED?
            </h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Book your consultation today and let&apos;s bring your vision to
              life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="inline-block px-8 py-4 bg-burgundy hover:bg-burgundy-dark border border-burgundy hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                BOOK A CONSULTATION
              </Link>
              <Link
                href="/playas-del-coco"
                className="inline-block px-8 py-4 border border-gold/50 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>

          {/* Internal Links */}
          <div className="text-center mt-12">
            <p className="text-muted text-sm mb-4">Explore more:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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
                Tattoo in Playas del Coco &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
