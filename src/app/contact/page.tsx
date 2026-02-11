import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Tattoo Studio Playas del Coco, Guanacaste",
  description:
    "Contáctanos en Nobori Tattoo, Playas del Coco, Guanacaste, Costa Rica. Ubicación en Plaza Nino frente a THE GYM. Horario, dirección y cómo llegar. Contact our tattoo studio.",
  keywords: ["contacto tattoo", "tatuajes Playas del Coco", "tattoo Guanacaste", "estudio tatuajes Costa Rica"],
  openGraph: {
    title: "Contacto | Nobori Tattoo - Playas del Coco",
    description: "Visítanos en Playas del Coco, Guanacaste. Plaza Nino, Local 2.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 text-center">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
          CONTACT
        </h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        <p className="mt-6 text-muted max-w-2xl mx-auto px-4">
          Ready to start your tattoo journey? Get in touch with us.
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
                  Follow us on Instagram to see our latest work and reach out
                  via DM for inquiries.
                </p>
                <a
                  href="https://www.instagram.com/nobori.tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/30 hover:border-gold text-foreground hover:text-gold rounded-lg transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm tracking-[0.1em]">
                    @NOBORI.TATTOO
                  </span>
                </a>
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
            <Link
              href="/booking"
              className="inline-block px-8 py-4 bg-burgundy hover:bg-burgundy-dark border border-burgundy hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
