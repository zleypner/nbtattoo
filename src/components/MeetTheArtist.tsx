import Image from "next/image";
import Link from "next/link";

export default function MeetTheArtist() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
            MEET THE ARTIST
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="mt-6 text-muted max-w-xl mx-auto">
            The vision and hands behind Nobori Tattoo.
          </p>
        </div>

        {/* Artist Card */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Artist Image */}
          <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0">
            <Image
              src="/assets/josh.jpeg"
              alt="Joshua - Founder and Artist at Nobori Tattoo"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Artist Info */}
          <div>
            <p className="text-gold text-sm tracking-[0.2em] mb-2">
              FOUNDER & ARTIST
            </p>
            <h3 className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl text-foreground mb-4">
              Joshua
            </h3>
            <p className="text-gold text-sm mb-6">
              Color Illustrative &bull; Neo-Oriental &bull; Fine Line
            </p>
            <div className="text-foreground/80 leading-relaxed mb-6 space-y-4">
              <p>
                With six years of experience and a deep passion for painting and
                tattooing, Joshua believes tattoos are personal experiences —
                part of a ritual where a story is carefully placed onto the
                skin.
              </p>
              <p>
                Each piece is approached with intention, respect, and connection,
                honoring the meaning behind every design and enjoying what
                tattooing allows him to communicate through his art.
              </p>
              <p>
                He feels grateful to be trusted with these moments and happy to
                become part of each client&apos;s story.
              </p>
            </div>

            {/* Style Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-burgundy/50 text-foreground text-sm rounded-full">
                Color Illustrative
              </span>
              <span className="px-4 py-2 bg-burgundy/50 text-foreground text-sm rounded-full">
                Neo-Oriental
              </span>
              <span className="px-4 py-2 bg-burgundy/50 text-foreground text-sm rounded-full">
                Fine Line
              </span>
            </div>

            <Link
              href="/artists"
              className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors"
            >
              Learn More About Me &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
