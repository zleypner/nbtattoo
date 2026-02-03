import { MapPin } from "lucide-react";

export default function VisitUs() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
            VISIT US
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="mt-6 text-muted">
            Located in the heart of Playas del Coco
          </p>
        </div>

        {/* Map and Address */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Google Maps Embed */}
          <div className="md:col-span-2 aspect-video md:aspect-auto md:h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1234567890123!2d-85.6789!3d10.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNobori%20Tattoo%20Shop!5e0!3m2!1sen!2scr!4v1234567890123!5m2!1sen!2scr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nobori Tattoo Location"
            />
          </div>

          {/* Address Card */}
          <div className="bg-burgundy/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="text-gold text-lg">Address</h3>
            </div>
            <div className="space-y-2 text-foreground/90 mb-8">
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
        </div>
      </div>
    </section>
  );
}
