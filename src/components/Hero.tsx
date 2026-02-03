import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/111.jpeg"
          alt="Tattoo artist at work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        {/* Main Title */}
        <h1 className="font-[family-name:var(--font-cormorant)] font-light">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.3em] mb-2">
            NOBORI
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.3em]">
            TATTOO
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-sm sm:text-base tracking-[0.4em] text-muted">
          PLAYAS DEL COCO &bull; COSTA RICA
        </p>

        {/* Gold Line */}
        <div className="w-16 h-0.5 bg-gold mx-auto mt-8" />

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/booking"
            className="px-8 py-4 bg-burgundy hover:bg-burgundy-dark border border-burgundy hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300 min-w-[220px]"
          >
            BOOK A CONSULTATION
          </Link>
          <Link
            href="/artists"
            className="px-8 py-4 bg-transparent border border-foreground/30 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300 min-w-[220px]"
          >
            VIEW ARTISTS
          </Link>
        </div>
      </div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
