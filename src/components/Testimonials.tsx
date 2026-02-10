"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I have been coming to Coco from Los Angeles for years and haven't gotten any tattoos because I hadn't met an artist I liked (yet). During this trip, I met Josh (the owner of Nobori) and LOVED his tattoo style. I told him my idea and he was able to make something really beautiful. We have another session because it is such a big piece, but I already love it. His prices were extremely reasonable considering his skill level and he was very professional throughout the entire experience. I will be going back to finish this tattoo and to get more. Thanks Josh!",
    author: "Alix Breeden",
  },
  {
    quote:
      "I was slightly nervous. The experience was easy and I felt so comfortable. Cant wait to get my next tattoo! Thanks Josh. Xo",
    author: "Kiki Berg",
  },
  {
    quote:
      "Josh was a good host and great artist. If I'm in Costa Rica again, I'd definitely go back. Sus obras de arte están muy lindas y Josh fue muy profesional y atento. Muchas gracias para el tatuaje genial.",
    author: "Veronica Thomas",
  },
  {
    quote:
      "I had a great experience getting my first colored tattoo at Nobori. I'm a dive instructor and I asked him for a very difficult sea creature called Harlequin Shrimp, and he did a fantastic job. He really enjoys tattooing with color and he is not afraid of difficult projects and designs. He also sells very nice foam soaps and special moisturizers for your tattoos, he plays great music while tattooing and he has some very nice beach shorts in stock. This shop is in a very convenient location near mainstreet. Great experience overall. Thanks Joshua.",
    author: "David Berm",
  },
  {
    quote:
      "I cannot recommend Josh enough! He is an amazing tattoo artist and just generally a wonderful human. His shop is super cute and clean and he is so welcoming and kind. Definitely a great choice for a tattoo artist if you're ever in Costa Rica!!",
    author: "Chandel Thiemann",
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
        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
