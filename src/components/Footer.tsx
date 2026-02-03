import Link from "next/link";
import { Clock, MapPin, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="text-gold text-sm tracking-[0.2em] font-semibold">
                HOURS
              </h3>
            </div>
            <div className="space-y-2 text-foreground/90">
              <p>Monday - Friday: 10am - 7pm</p>
              <p>Saturday: 11am - 6pm</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="text-gold text-sm tracking-[0.2em] font-semibold">
                LOCATION
              </h3>
            </div>
            <div className="space-y-2 text-foreground/90">
              <p>Plaza Nino, Local 2</p>
              <p>Playas del Coco</p>
              <p>Guanacaste, Costa Rica</p>
            </div>
            <a
              href="https://maps.app.goo.gl/BpX3RNAoCWV7Fbok7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gold hover:text-foreground transition-colors text-sm"
            >
              Get Directions &rarr;
            </a>
          </div>

          {/* Connect */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-5 h-5 text-gold" />
              <h3 className="text-gold text-sm tracking-[0.2em] font-semibold">
                CONNECT
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/nobori.tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-fit p-3 border border-foreground/30 rounded-lg hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-6 py-3 border border-gold/50 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300 w-fit"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-muted">
            &copy; {new Date().getFullYear()} Nobori Tattoo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
