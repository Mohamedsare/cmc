"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CourseCard } from "@/components/cards/CourseCard";
import type { Formation } from "@/types";
import { cn } from "@/lib/utils";

interface SimilarFormationsCarouselProps {
  formations: Formation[];
  className?: string;
}

export function SimilarFormationsCarousel({
  formations,
  className,
}: SimilarFormationsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -el.clientWidth * 0.85 : el.clientWidth * 0.85;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (formations.length === 0) return null;

  return (
    <section className={cn("bg-[#f0f4f1] py-14", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-foreground">
            Autres formations similaires
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
              aria-label="Formations précédentes"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
              aria-label="Formations suivantes"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {formations.map((f, i) => (
            <div key={f.slug} className="w-[min(100%,280px)] shrink-0 sm:w-[300px]">
              <CourseCard formation={f} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
