"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nobori exceeded every expectation. The attention to detail and the calm, professional atmosphere made my first tattoo experience unforgettable. I've already booked my second session.",
    author: "Sarah M.",
    image: "/assets/1.jpeg",
  },
  {
    quote:
      "Joshua is an incredible artist. He took my vague idea and transformed it into something beyond what I imagined. The whole experience was comfortable and professional.",
    author: "Marcus T.",
    image: "/assets/2.jpeg",
  },
  {
    quote:
      "Best tattoo experience I've ever had. The studio is beautiful, the vibe is relaxed, and the artistry is top-notch. Worth traveling to Costa Rica for!",
    author: "Elena R.",
    image: "/assets/3.jpeg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
            TESTIMONIALS
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        {/* Testimonial Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Quote Card */}
          <div className="bg-burgundy/30 rounded-2xl p-8 lg:p-12 relative">
            {/* Quote Mark */}
            <div className="text-6xl text-burgundy font-serif absolute top-4 left-6">
              &ldquo;
            </div>

            <blockquote className="text-foreground/90 text-lg italic leading-relaxed mt-8 mb-8">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>

            <div className="flex items-end justify-between">
              <p className="text-gold font-medium">
                {testimonials[currentIndex].author}
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-foreground/30 rounded-full hover:border-gold hover:text-gold transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-foreground/30 rounded-full hover:border-gold hover:text-gold transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={testimonials[currentIndex].image}
              alt={`Tattoo by Nobori for ${testimonials[currentIndex].author}`}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
