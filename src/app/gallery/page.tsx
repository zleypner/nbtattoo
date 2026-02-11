import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Gallery | Portfolio from Guanacaste, Costa Rica",
  description:
    "Browse our tattoo gallery at Nobori Tattoo in Playas del Coco, Guanacaste. See our color illustrative, neo-oriental, and fine line tattoo work. Custom designs available.",
  keywords: ["tattoo gallery Costa Rica", "tattoo portfolio Guanacaste", "custom tattoo designs", "color tattoo examples"],
  openGraph: {
    title: "Tattoo Gallery | Nobori Tattoo Costa Rica",
    description: "View our tattoo portfolio from our studio in Playas del Coco, Guanacaste, Costa Rica.",
  },
};

const galleryImages = [
  {
    src: "/assets/1.jpeg",
    alt: "Tattoo artwork",
    category: "Color Illustrative",
  },
  {
    src: "/assets/2.jpeg",
    alt: "Tattoo artwork",
    category: "Neo-Oriental",
  },
  {
    src: "/assets/3.jpeg",
    alt: "Tattoo artwork",
    category: "Fine Line",
  },
  {
    src: "/assets/4.jpeg",
    alt: "Tattoo artwork",
    category: "Color Illustrative",
  },
  {
    src: "/assets/5.jpeg",
    alt: "Tattoo artwork",
    category: "Neo-Oriental",
  },
  {
    src: "/assets/6.jpeg",
    alt: "Tattoo artwork",
    category: "Fine Line",
  },
  {
    src: "/assets/11.jpeg",
    alt: "Tattoo artwork",
    category: "Color Illustrative",
  },
  {
    src: "/assets/12.jpeg",
    alt: "Tattoo artwork",
    category: "Neo-Oriental",
  },
  {
    src: "/assets/13.jpeg",
    alt: "Tattoo artwork",
    category: "Fine Line",
  },
  {
    src: "/assets/14.jpeg",
    alt: "Tattoo artwork",
    category: "Color Illustrative",
  },
  {
    src: "/assets/111.jpeg",
    alt: "Tattoo artwork",
    category: "Neo-Oriental",
  },
  {
    src: "/assets/1233.jpeg",
    alt: "Tattoo artwork",
    category: "Color Illustrative",
  },
  {
    src: "/assets/123411.jpeg",
    alt: "Tattoo artwork",
    category: "Fine Line",
  },
  {
    src: "/assets/345435.jpeg",
    alt: "Tattoo artwork",
    category: "Neo-Oriental",
  },
  {
    src: "/assets/PHOTO-2026-02-01-21-29-21.jpg",
    alt: "Tattoo artwork",
    category: "Color Illustrative",
  },
  {
    src: "/assets/WhatsApp Image 2026-02-01 at 21.29.28.jpeg",
    alt: "Tattoo artwork",
    category: "Fine Line",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 text-center">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
          GALLERY
        </h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        <p className="mt-6 text-muted max-w-2xl mx-auto px-4">
          A collection of our work. Each piece tells a unique story.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square group overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted mb-6">
              See more of our work on Instagram
            </p>
            <a
              href="https://www.instagram.com/nobori.tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-foreground/30 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300 mr-4"
            >
              FOLLOW @NOBORI.TATTOO
            </a>
            <Link
              href="/booking"
              className="inline-block px-8 py-4 bg-burgundy hover:bg-burgundy-dark border border-burgundy hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300 mt-4 sm:mt-0"
            >
              BOOK YOUR PIECE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
