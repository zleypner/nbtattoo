import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Joshua | Tattoo Artist in Playas del Coco, Costa Rica",
  description:
    "Meet Joshua, founder and artist at Nobori Tattoo in Playas del Coco, Guanacaste, Costa Rica. 6 years experience in color illustrative, neo-oriental, and fine line tattoos.",
  keywords: ["tattoo artist Costa Rica", "Joshua tattoo artist", "best tattoo artist Guanacaste", "professional tattoo Playas del Coco"],
  openGraph: {
    title: "Joshua | Tattoo Artist at Nobori Tattoo Costa Rica",
    description: "Professional tattoo artist in Playas del Coco, Guanacaste with 6 years of experience.",
  },
};

export default function ArtistsPage() {
  return (
    <div className="pt-20">
      {/* Artist Profile Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Artist Images */}
            <div className="space-y-6">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/assets/josh.jpeg"
                  alt="Joshua - Founder and Artist"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square">
                  <Image
                    src="/assets/josh1.jpeg"
                    alt="Joshua tattooing"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/assets/josh3.jpeg"
                    alt="Joshua at work"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/josh11.jpeg"
                  alt="Joshua in the studio"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Artist Info */}
            <div className="lg:pt-8">
              <p className="text-gold text-sm tracking-[0.2em] mb-3">
                FOUNDER & ARTIST
              </p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-6xl sm:text-7xl lg:text-8xl text-foreground mb-4">
                Joshua
              </h1>
              <p className="text-gold mb-8">
                Color Illustrative &bull; Neo-Oriental &bull; Fine Line
              </p>

              <div className="w-16 h-0.5 bg-gold mb-8" />

              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  I picked up my first tattoo machine six years ago, and from
                  that moment I knew this was my path. Born in Costa
                  Rica&apos;s Central Valley in May 1997, I&apos;ve dedicated
                  myself to mastering this craft and building genuine
                  connections with every person who sits in my chair.
                </p>
                <p>
                  For the past three years, I&apos;ve been tattooing in Playas
                  del Coco, working with both locals and travelers from all over
                  the world. What I value most isn&apos;t only the art itself,
                  but the relationships created along the way.
                </p>
                <p>
                  To me, a tattoo is much more than ink on skin. It&apos;s a
                  personal moment — a story, a memory, a piece of who you are.
                  That&apos;s why I focus on offering a respectful, comfortable,
                  and intentional experience from our first conversation to the
                  final result. I enjoy connecting beyond the tattoo itself,
                  whether through meaningful conversations, shared stories, or
                  recommending some of my favorite local food spots. And yes…
                  I do have a soft spot for cats — it usually comes up sooner or
                  later.
                </p>
                <p>
                  My work centers around color illustrative tattooing, influenced
                  by neo-oriental styles and refined fine-line techniques. Every
                  piece is approached with intention, balance, and attention to
                  detail, always considering how the tattoo will age and live
                  with you over time.
                </p>
                <p>
                  I named my studio Nobori inspired by the traditional Japanese
                  koinobori — windsocks shaped like koi fish that symbolize
                  strength, perseverance, and the courage to swim upstream. The
                  name reflects the spirit behind my work and my journey; moving
                  from a place of resilience and meaning. Always having fun (:
                </p>
                <p>
                  I offer a tattoo experience designed to feel different, where
                  art, comfort, and meaning come together. My goal is that you
                  leave not only with a tattoo you love, but with an experience
                  you&apos;ll always remember.
                </p>
              </div>

              {/* Style Tags */}
              <div className="flex flex-wrap gap-3 mt-10 mb-10">
                <span className="px-5 py-2 bg-burgundy text-foreground text-sm rounded-full">
                  Color Illustrative
                </span>
                <span className="px-5 py-2 bg-burgundy text-foreground text-sm rounded-full">
                  Neo-Oriental
                </span>
                <span className="px-5 py-2 bg-burgundy text-foreground text-sm rounded-full">
                  Fine Line
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/booking"
                className="inline-block px-8 py-4 bg-burgundy hover:bg-burgundy-dark border border-burgundy hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                BOOK WITH JOSHUA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
