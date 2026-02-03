import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists | Nobori Tattoo",
  description:
    "Meet Joshua, the founder and artist behind Nobori Tattoo. Specializing in color illustrative, neo-oriental, and fine line tattoos.",
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
                  I picked up my first tattoo machine eight years ago, and from
                  that moment, I knew this was my path. Born in Costa
                  Rica&apos;s Central Valley in May 1997, I&apos;ve dedicated
                  myself to mastering this craft and building genuine
                  connections with every person who sits in my chair.
                </p>
                <p>
                  For the last three years, I&apos;ve been working here in
                  Playas del Coco, where I&apos;ve had the privilege of
                  tattooing both locals and travelers from all over the world.
                  What I love most isn&apos;t just the art—it&apos;s the
                  relationships I build along the way.
                </p>
                <p>
                  To me, a tattoo is so much more than a design on skin.
                  It&apos;s a personal moment, a story, a piece of who you are.
                  That&apos;s why I focus on creating a respectful, comfortable,
                  and intentional experience from our very first conversation to
                  the final result. I genuinely enjoy connecting with people
                  beyond the tattoo itself—whether that&apos;s through shared
                  stories, great conversations, or recommending the best local
                  food spots (I&apos;ve got a few favorites). And yes, I have a
                  soft spot for cats, which usually comes up sooner or later.
                </p>
                <p>
                  My work centers on color illustrative tattooing, influenced by
                  neo-oriental styles and refined fine-line techniques. I&apos;m
                  intentional with every piece, paying close attention to
                  balance, detail, and how the tattoo will age over time.
                </p>
                <p>
                  I offer a tattoo experience that feels different by
                  design—where art, comfort, and meaning come together. My goal
                  is that you leave not only with a tattoo you love, but with an
                  experience you&apos;ll remember.
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
