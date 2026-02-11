import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/seo-config";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Tattoo Gallery | Portfolio from Playas del Coco, Guanacaste",
  description:
    "Browse our tattoo gallery at Nobori Tattoo in Playas del Coco, Guanacaste, Costa Rica. See our color illustrative, neo-oriental, and fine line tattoo portfolio. Custom designs available.",
  keywords: [
    "tattoo gallery Costa Rica",
    "tattoo portfolio Guanacaste",
    "custom tattoo designs",
    "color tattoo examples",
    "tattoo photos Playas del Coco",
    "neo-oriental tattoo gallery",
    "fine line tattoo portfolio",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Tattoo Gallery | Nobori Tattoo Costa Rica",
    description:
      "View our tattoo portfolio from our studio in Playas del Coco, Guanacaste, Costa Rica. Color illustrative, neo-oriental & fine line tattoos.",
    url: "https://noboritattoo.com/gallery",
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Gallery", url: "/gallery" },
]);

export default function GalleryPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="pt-20">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-gold">Gallery</li>
          </ol>
        </nav>

        {/* Page Header */}
        <section className="py-16 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
            TATTOO GALLERY
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="mt-6 text-muted max-w-2xl mx-auto px-4">
            A collection of tattoo work from our studio in Playas del Coco, Guanacaste.
            Each piece tells a unique story.
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
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/nobori.tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-foreground/30 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                FOLLOW @NOBORI.TATTOO
              </a>
              <Link
                href="/booking"
                className="inline-block px-8 py-4 bg-burgundy hover:bg-burgundy-dark border border-burgundy hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                BOOK YOUR PIECE
              </Link>
              <Link
                href="/playas-del-coco"
                className="inline-block px-8 py-4 border border-gold/50 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
              >
                VISIT OUR STUDIO
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
