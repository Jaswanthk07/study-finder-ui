"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: "/students-with-laptops-around-a-globe-illustration.jpg",
    caption: "Global Learning Community",
    description: "Connect with students worldwide",
  },
  {
    image: "/remote-study-groups-video-call-illustration.jpg",
    caption: "Remote Study Groups",
    description: "Collaborate across time zones",
  },
  {
    image: "/cross-country-project-teams-illustration.jpg",
    caption: "Cross-Country Project Teams",
    description: "Work on projects together",
  },
  {
    image: "/peer-mentoring-circles-illustration.jpg",
    caption: "Peer Mentoring Circles",
    description: "Learn from each other",
  },
];

export function ConnectionsGlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="connections"
      ref={sectionRef}
      className="relative py-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 px-4 py-1.5 text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-400">
            Global Connections
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Learn with Students from{" "}
            <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            StudyFinder connects learners globally, enabling collaboration and
            peer support across borders.
          </p>
        </div>

        {/* Image Glider */}
        <div ref={sliderRef} className="relative mt-16">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-full">
                  <div className="relative aspect-video overflow-hidden rounded-[1.25rem] border-2 border-slate-400 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/60 shadow-none">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.caption}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/80 to-transparent p-6">
                      <h3 className="text-xl font-bold text-white">
                        {slide.caption}
                      </h3>
                      <p className="mt-1 text-slate-200">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-linear-to-r from-sky-500 to-indigo-600"
                    : "w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
