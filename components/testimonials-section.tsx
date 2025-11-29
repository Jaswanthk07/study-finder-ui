"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Engineering Student",
    feedback:
      "StudyFinder completely transformed how I prepare for exams. The personalized study plans are incredibly helpful!",
    avatar: "/asian-woman-student-portrait.jpg",
  },
  {
    name: "Michael Rodriguez",
    role: "Medical Student",
    feedback:
      "The smart recommendations saved me hours of searching for quality resources. Highly recommend for any serious student.",
    avatar: "/hispanic-man-student-portrait.jpg",
  },
  {
    name: "Emily Watson",
    role: "Working Professional",
    feedback:
      "Perfect for balancing work and learning. The progress tracking keeps me accountable and motivated every week.",
    avatar: "/professional-woman-portrait.jpg",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
            Testimonials
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Loved by{" "}
            <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              students worldwide
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            See what our community has to say about their learning journey with
            StudyFinder.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div ref={cardsRef} className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative rounded-[1.25rem] border-2 border-slate-400 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/60 p-8 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-sky-500/30 dark:text-sky-400/30" />
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {testimonial.feedback}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
