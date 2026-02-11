import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { MapPin, Clock, Shield, Palette, Star, ChevronRight } from "lucide-react";
import {
  businessInfo,
  socialLinks,
  tattooStyles,
  faqs,
  galleryImages,
  getWhatsAppLink,
} from "@/lib/seo-config";
import { getLocationPageSchemas, getFAQSchema, getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Tattoo Artist in Playas del Coco | Tatuajes Guanacaste Costa Rica",
  description:
    "Professional tattoo studio in Playas del Coco, Guanacaste. Specializing in color illustrative, neo-oriental & fine line tattoos. Walk-ins welcome. Near Liberia airport, Tamarindo & Papagayo. Book your Costa Rica vacation tattoo today!",
  keywords: [
    "tattoo Playas del Coco",
    "tattoo artist Playas del Coco",
    "tatuajes Playas del Coco",
    "tattoo studio Playas del Coco",
    "tattoo Guanacaste",
    "tattoo Costa Rica",
    "tatuajes Guanacaste",
    "Coco Beach tattoo",
    "best tattoo artist Costa Rica",
    "tattoo near Liberia airport",
    "vacation tattoo Costa Rica",
    "tattoo Tamarindo",
    "tattoo Papagayo",
  ],
  alternates: {
    canonical: "/playas-del-coco",
  },
  openGraph: {
    title: "Tattoo Artist in Playas del Coco | Nobori Tattoo Costa Rica",
    description:
      "Professional tattoo studio in Playas del Coco, Guanacaste. Color illustrative, neo-oriental & fine line tattoos. Walk-ins welcome.",
    url: "https://noboritattoo.com/playas-del-coco",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nobori Tattoo - Best Tattoo Studio in Playas del Coco, Guanacaste",
      },
    ],
  },
};

// Get schemas for this page
const pageSchemas = getLocationPageSchemas();
const faqSchema = getFAQSchema(faqs.slice(0, 8)); // Top 8 FAQs
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Playas del Coco", url: "/playas-del-coco" },
]);

// Featured gallery images (first 6)
const featuredImages = galleryImages.slice(0, 6);

export default function PlayasDelCocoPage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="location-page-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchemas),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="pt-20">
        {/* Hero Section with H1 */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-burgundy/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <ChevronRight className="w-4 h-4" />
                <li className="text-gold">Playas del Coco</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl tracking-[0.1em] text-foreground leading-tight">
                  TATTOO ARTIST IN{" "}
                  <span className="text-gold">PLAYAS DEL COCO</span>
                </h1>
                <p className="mt-2 text-xl text-muted font-[family-name:var(--font-cormorant)] tracking-wide">
                  Tatuajes Profesionales en Guanacaste, Costa Rica
                </p>
                <p className="mt-6 text-foreground/90 text-lg leading-relaxed">
                  Welcome to <strong>Nobori Tattoo</strong>, the premier tattoo
                  studio in Playas del Coco. Whether you&apos;re a local resident or
                  visiting Costa Rica on vacation, our professional tattoo
                  artist creates stunning custom designs in color illustrative,
                  neo-oriental, and fine line styles.
                </p>
                <p className="mt-4 text-foreground/80">
                  Located just 30 minutes from Liberia International Airport
                  (LIR), we&apos;re perfectly situated for travelers exploring
                  Guanacaste&apos;s beautiful beaches including Tamarindo, Papagayo,
                  and Playa Hermosa.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={getWhatsAppLink("Hi! I'd like to book a tattoo consultation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
                  >
                    BOOK ON WHATSAPP
                  </a>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center px-8 py-4 border border-gold/50 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
                  >
                    VIEW GALLERY
                  </Link>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/assets/1.jpeg"
                  alt="Professional tattoo artist working at Nobori Tattoo studio in Playas del Coco, Guanacaste"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Location Info Bar */}
        <section className="py-8 bg-charcoal/50 border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">
                    {businessInfo.address.street}
                  </p>
                  <p className="text-muted text-sm">
                    {businessInfo.address.locality}, {businessInfo.address.region}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">
                    {businessInfo.hoursDisplay.weekdays}
                  </p>
                  <p className="text-muted text-sm">
                    {businessInfo.hoursDisplay.saturday}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end">
                <a
                  href={socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tattoo Styles Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground">
                TATTOO STYLES WE OFFER
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
              <p className="mt-6 text-muted max-w-2xl mx-auto">
                From bold color illustrative pieces to delicate fine line work,
                we create custom tattoos tailored to your vision.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tattooStyles.slice(0, 6).map((style, index) => (
                <div
                  key={index}
                  className="bg-charcoal/30 rounded-lg p-8 hover:bg-charcoal/50 transition-colors"
                >
                  <Palette className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {style.name}
                  </h3>
                  <p className="text-muted text-sm">{style.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors"
              >
                See examples in our gallery <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-charcoal/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground">
                OUR WORK
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
              <p className="mt-6 text-muted max-w-2xl mx-auto">
                A selection of tattoos created at our Playas del Coco studio.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {featuredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs text-gold tracking-wider">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-block px-8 py-4 border border-gold/50 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                VIEW FULL GALLERY
              </Link>
            </div>
          </div>
        </section>

        {/* Safety & Hygiene */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Shield className="w-12 h-12 text-gold mb-6" />
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground mb-6">
                  SAFETY & HYGIENE
                </h2>
                <p className="text-foreground/90 mb-6">
                  Your safety is our top priority. At Nobori Tattoo, we maintain
                  the highest standards of hygiene and sterilization:
                </p>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Single-use, sterile needles for every session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Hospital-grade sterilization equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Premium, safe tattoo inks from trusted brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Clean, comfortable studio environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Comprehensive aftercare instructions provided</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/5.jpeg"
                  alt="Clean and professional tattoo studio environment at Nobori Tattoo Playas del Coco"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-20 bg-burgundy/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground">
                HOW TO BOOK YOUR TATTOO
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Contact Us",
                  description:
                    "Reach out via WhatsApp or Instagram with your tattoo idea",
                },
                {
                  step: "02",
                  title: "Consultation",
                  description:
                    "Discuss design details, size, placement, and get a quote",
                },
                {
                  step: "03",
                  title: "Design Review",
                  description:
                    "Review and approve your custom design before the session",
                },
                {
                  step: "04",
                  title: "Get Inked",
                  description:
                    "Visit our studio for your tattoo session and aftercare info",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-[family-name:var(--font-cormorant)] text-gold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={getWhatsAppLink("Hi! I'd like to book a tattoo consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                START YOUR BOOKING
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground">
                SERVING GUANACASTE & BEYOND
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
              <p className="mt-6 text-muted max-w-2xl mx-auto">
                Conveniently located in Playas del Coco, we welcome clients from
                throughout Guanacaste and visitors from around the world.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessInfo.serviceAreas.slice(0, 8).map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-charcoal/30 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-muted">
              Just 30 minutes from Liberia International Airport (LIR)
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-charcoal/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
              <p className="mt-6 text-muted">
                Common questions about getting tattooed in Playas del Coco
              </p>
            </div>

            <div className="space-y-6">
              {faqs.slice(0, 8).map((faq, index) => (
                <details
                  key={index}
                  className="group bg-charcoal/30 rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-foreground font-medium pr-4">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gold transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-foreground/80">{faq.answer}</p>
                    {faq.answerEs && (
                      <p className="mt-4 text-muted text-sm italic">
                        {faq.answerEs}
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground mb-6">
                  VISIT OUR STUDIO
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-gold text-sm tracking-wider mb-2">
                      ADDRESS
                    </h3>
                    <p className="text-foreground">{businessInfo.address.street}</p>
                    <p className="text-foreground">
                      {businessInfo.address.locality}, {businessInfo.address.region}
                    </p>
                    <p className="text-foreground">{businessInfo.address.country}</p>
                  </div>
                  <div>
                    <h3 className="text-gold text-sm tracking-wider mb-2">
                      HOURS
                    </h3>
                    <p className="text-foreground">{businessInfo.hoursDisplay.weekdays}</p>
                    <p className="text-foreground">{businessInfo.hoursDisplay.saturday}</p>
                    <p className="text-foreground">{businessInfo.hoursDisplay.sunday}</p>
                  </div>
                  <div>
                    <h3 className="text-gold text-sm tracking-wider mb-2">
                      CONTACT
                    </h3>
                    <p className="text-foreground">WhatsApp: {businessInfo.phone}</p>
                    <p className="text-foreground">Instagram: {socialLinks.instagramHandle}</p>
                  </div>
                  <a
                    href={socialLinks.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1234567890123!2d-85.6789!3d10.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNobori%20Tattoo%20Shop!5e0!3m2!1sen!2scr!4v1234567890123!5m2!1sen!2scr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nobori Tattoo Location in Playas del Coco, Guanacaste"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-burgundy/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl tracking-[0.15em] text-foreground mb-6">
              READY FOR YOUR TATTOO IN PLAYAS DEL COCO?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Whether you&apos;re a local or visiting Costa Rica on vacation, we&apos;re
              here to create your perfect tattoo. Contact us today to start
              your tattoo journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppLink("Hi! I'm interested in getting a tattoo at Nobori Tattoo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                WHATSAPP US
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-gold/50 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                FOLLOW ON INSTAGRAM
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-burgundy hover:bg-burgundy-dark text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                CONTACT & DIRECTIONS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
