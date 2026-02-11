import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reservar Cita | Tatuajes en Playas del Coco, Guanacaste",
  description:
    "Agenda tu cita para tatuaje en Nobori Tattoo, Playas del Coco, Guanacaste, Costa Rica. Contáctanos por Instagram. Book your tattoo consultation today.",
  keywords: ["reservar tatuaje", "cita tattoo Costa Rica", "agendar tatuaje Guanacaste", "book tattoo Playas del Coco"],
  openGraph: {
    title: "Reservar Cita | Nobori Tattoo",
    description: "Agenda tu consulta para tatuaje en Playas del Coco, Guanacaste.",
  },
};

const INSTAGRAM_URL = "https://www.instagram.com/nobori.tattoo/";

export default function BookingPage() {
  return (
    <div className="pt-20 min-h-[calc(100vh-5rem)]">
      {/* Centered Content */}
      <section className="py-16 sm:py-24 lg:py-32 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
            BOOK A CONSULTATION
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />

          {/* Subtext */}
          <p className="mt-8 text-foreground/90 text-lg leading-relaxed max-w-xl mx-auto">
            Connect with us on Instagram to book your consultation. We&apos;ll get
            back to you within 24–48 hours to discuss your design and availability.
          </p>

          {/* Primary CTA */}
          <div className="mt-12">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-burgundy hover:bg-burgundy-dark border border-gold/50 hover:border-gold text-foreground text-base tracking-[0.15em] rounded-lg transition-all duration-300"
            >
              OPEN INSTAGRAM
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Helper Text */}
          <p className="mt-6 text-muted text-sm">
            Send us a DM with your tattoo idea and we&apos;ll get back to you soon.
          </p>

          {/* Secondary Link (Text) */}
          <div className="mt-10 pt-8 border-t border-charcoal">
            <p className="text-muted text-sm mb-3">
              Link not working? Open it directly:
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-foreground transition-colors text-sm underline underline-offset-4"
            >
              @nobori.tattoo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
