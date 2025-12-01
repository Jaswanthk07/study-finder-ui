"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Rocket, Globe2, Users, Sparkles } from "lucide-react";
import { AuthModal } from "./auth-modal";

gsap.registerPlugin(ScrollTrigger);

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCTA = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <section
        id="vision"
        ref={sectionRef}
        className="relative py-12 lg:py-16 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-sky-50/50 to-indigo-50/50 dark:via-sky-950/20 dark:to-indigo-950/20" />

        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <div
            ref={contentRef}
            className="relative rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-slate-400 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/60 p-4 sm:p-6 md:p-10 lg:p-16 shadow-none"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-linear-to-br from-sky-500/20 to-indigo-500/20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-linear-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl" />

            <div className="relative text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-100 to-indigo-100 dark:from-sky-900/40 dark:to-indigo-900/40 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                <Rocket className="h-4 w-4" />
                Our Vision
              </span>

              {/* Headline */}
              <h2 className="mt-3 sm:mt-4 md:mt-6 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Ready to Build Your{" "}
                <span className="bg-linear-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Best Study Routine?
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-3 sm:mt-4 md:mt-6 max-w-3xl text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                StudyFinder isn&apos;t just a project &mdash; it&apos;s the
                foundation for a future where every student can find trusted
                learning paths, eliminate wasted time searching for random
                resources, and gain the structure and motivation needed to truly
                succeed. Join us in building a global community of self-learners
                who achieve better results together.
              </p>

              {/* Stats/Benefits */}
              <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-3">
                {[
                  {
                    icon: Globe2,
                    label: "Global Access",
                    description: "Learn from anywhere",
                  },
                  {
                    icon: Users,
                    label: "Community Driven",
                    description: "Peer support network",
                  },
                  {
                    icon: Sparkles,
                    label: "AI-Powered",
                    description: "Smart recommendations",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700">
                        <Icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                      </div>
                      <p className="mt-3 font-semibold text-slate-900 dark:text-white">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center px-4 sm:px-6 md:px-0">
                <Button
                  size="lg"
                  onClick={handleCTA}
                  className="h-10 xs:h-11 sm:h-12 md:h-12 lg:h-14 rounded-full bg-linear-to-r from-sky-400 to-blue-900 px-4 xs:px-5 sm:px-8 md:px-10 text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 max-w-full sm:max-w-none"
                >
                  <Rocket className="mr-2 h-4 xs:h-4 sm:h-5 md:h-5 w-4 xs:w-4 sm:w-5 md:w-5 shrink-0" />
                  <span className="truncate">
                    Start Planning Your Study Journey
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
