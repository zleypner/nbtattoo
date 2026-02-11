"use client";

import { useState } from "react";
import Script from "next/script";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials as testimonialData, getAggregateRating } from "@/lib/seo-config";
import { getReviewsSchema } from "@/lib/schemas";

// Use testimonials from centralized config
const testimonials = testimonialData;

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

  const aggregateRating = getAggregateRating();
  const reviewsSchema = getReviewsSchema();

  return (
    <section className="py-24 bg-background">
      {/* Reviews Structured Data */}
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
            TESTIMONIALS
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          {/* Aggregate Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(Number(aggregateRating.ratingValue))
                      ? "text-gold fill-gold"
                      : "text-gold/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-foreground font-medium">
              {aggregateRating.ratingValue}
            </span>
            <span className="text-muted">
              ({aggregateRating.reviewCount} reviews)
            </span>
          </div>
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
