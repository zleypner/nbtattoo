import Image from "next/image";
import { Instagram } from "lucide-react";

const galleryImages = [
  { src: "/assets/1.jpeg", alt: "Tattoo artwork" },
  { src: "/assets/2.jpeg", alt: "Tattoo artwork" },
  { src: "/assets/3.jpeg", alt: "Tattoo artwork" },
  { src: "/assets/4.jpeg", alt: "Tattoo artwork" },
  { src: "/assets/5.jpeg", alt: "Tattoo artwork" },
  { src: "/assets/6.jpeg", alt: "Tattoo artwork" },
  { src: "/assets/11.jpeg", alt: "Tattoo artwork" },
  { src: "/assets/12.jpeg", alt: "Tattoo artwork" },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 border border-gold rounded-lg">
              <Instagram className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-foreground font-medium">@nobori.tattoo</p>
              <p className="text-muted text-sm">Follow for daily inspiration</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/nobori.tattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-foreground/30 hover:border-gold text-foreground hover:text-gold text-sm tracking-[0.1em] rounded-lg transition-all duration-300"
          >
            FOLLOW US
          </a>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/nobori.tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square group overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-foreground" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/nobori.tattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-burgundy hover:bg-burgundy-dark border border-burgundy hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300"
          >
            FOLLOW US ON INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
}
