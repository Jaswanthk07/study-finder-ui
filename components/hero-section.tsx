"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { BookOpen, Play } from "lucide-react";
import { TypingEffect } from "./typing-effect";
import { AuthModal } from "./auth-modal";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          headlineRef.current,
          typingRef.current,
          descriptionRef.current,
          buttonsRef.current,
          imageRef.current,
        ],
        {
          opacity: 1,
          y: 0,
        }
      );
      return;
    }

    gsap.set(
      [
        headlineRef.current,
        typingRef.current,
        descriptionRef.current,
        buttonsRef.current,
      ],
      {
        opacity: 0,
        y: 30,
      }
    );
    gsap.set(imageRef.current, {
      opacity: 0,
      scale: 0.95,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    })
      .to(
        typingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
        },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleGetStarted = () => {
    setIsAuthModalOpen(true);
  };

  const handleCardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5; // -0.5 .. 0.5
    const py = y / rect.height - 0.5;
    const rotateY = px * 12; // max 12deg
    const rotateX = -py * 10; // max 10deg
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    el.classList.add("hovering");
  };

  const handleCardPointerLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
    el.classList.remove("hovering");
  };

  const handleBrowseResources = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="hero"
        ref={heroRef}
        className="relative w-full overflow-hidden pt-20 sm:pt-24 md:pt-32"
      >
        <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-6 sm:gap-8 px-4 sm:px-6 py-6 sm:py-8 md:flex-row md:gap-12 md:py-12 lg:py-16 xl:py-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h1
              ref={headlineRef}
              className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white font-[family-name:var(--font-heading)]"
            >
              Find the Best Study Resources{" "}
              <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>

            <div
              ref={typingRef}
              className="mt-3 sm:mt-4 h-10 text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
            >
              <TypingEffect />
            </div>

            <p
              ref={descriptionRef}
              className="mt-4 sm:mt-6 max-w-xl text-pretty text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              StudyFinder recommends high-quality study materials, online
              courses, and personalized study plans tailored to your goals.
              Learn smarter, not harder.
            </p>

            <div
              ref={buttonsRef}
              className="mt-10 sm:mt-12 md:mt-14 w-full flex flex-col gap-4 sm:gap-4 sm:flex-row"
            >
              <Button
                onClick={handleGetStarted}
                className="w-full sm:w-auto rounded-full py-5 sm:py-6 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-linear-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 flex items-center justify-center gap-2"
              >
                <BookOpen className="h-5 sm:h-6 w-5 sm:w-6" />
                Get Started Free
              </Button>
              <Button
                variant="outline"
                onClick={handleBrowseResources}
                className="w-full sm:w-auto rounded-full py-5 sm:py-6 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-slate-300 dark:border-slate-600 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white hover:shadow-lg dark:hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Play className="h-5 sm:h-6 w-5 sm:w-6" />
                Browse Resources
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-800 bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  10k+ students
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  4.9/5 rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element (Dashboard Mockup) */}
          <div
            ref={imageRef}
            className="flex flex-1 items-center justify-center w-full"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Main dashboard card */}
              <div
                ref={cardRef}
                onPointerMove={handleCardPointerMove}
                onPointerLeave={handleCardPointerLeave}
                onPointerEnter={handleCardPointerMove}
                className="neon-card rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 p-6 backdrop-blur-sm"
              >
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-indigo-600">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Your Study Plan
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Week 3 of 8
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    On Track
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Progress
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      37%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                    <div className="h-full w-[37%] rounded-full bg-linear-to-r from-sky-500 to-indigo-600" />
                  </div>
                </div>

                {/* Resource cards */}
                <div className="space-y-3">
                  {[
                    {
                      title: "Calculus Fundamentals",
                      type: "Video Course",
                      progress: 85,
                      color: "sky",
                    },
                    {
                      title: "Linear Algebra Notes",
                      type: "Study Notes",
                      progress: 60,
                      color: "indigo",
                    },
                    {
                      title: "Practice Problems",
                      type: "Exercises",
                      progress: 40,
                      color: "fuchsia",
                    },
                  ].map((resource, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          resource.color === "sky"
                            ? "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400"
                            : resource.color === "indigo"
                            ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                            : "bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400"
                        }`}
                      >
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                          {resource.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {resource.type}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {resource.progress}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 md:-left-8 rounded-lg sm:rounded-xl border border-slate-200/60 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/90 p-2 sm:p-4 shadow-lg backdrop-blur-sm text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <svg
                      className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Topic Completed!
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Derivatives Mastered
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -right-2 sm:-right-4 md:-right-8 -top-2 sm:-top-4 rounded-lg sm:rounded-xl border border-slate-200/60 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/90 p-2 sm:p-4 shadow-lg backdrop-blur-sm text-xs sm:text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    12h
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Study Time This Week
                  </p>
                </div>
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
