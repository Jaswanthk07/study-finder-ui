"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Route, CheckCircle2, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Tell Us Your Goal",
    description:
      "Select your subject and define your target - whether it's an exam, skill, or project you want to master.",
    color: "sky",
  },
  {
    icon: Route,
    number: "02",
    title: "Get a Smart Study Path",
    description:
      "StudyFinder generates a structured learning plan with curated resources organized by priority and timeline.",
    color: "indigo",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Stay on Track Anywhere",
    description:
      "Mark tasks as complete, track your progress, and access your materials from any device, anytime.",
    color: "emerald",
  },
  {
    icon: Users,
    number: "04",
    title: "Connect with Study Peers",
    description:
      "Find study partners with similar goals, join group sessions, and learn together with the global community.",
    color: "amber",
  },
];

export function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

      const stepCards = stepsRef.current?.children;
      if (stepCards) {
        gsap.fromTo(
          stepCards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepsRef.current,
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
      id="highlights"
      ref={sectionRef}
      className="relative py-12 lg:py-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-sky-500/5 dark:bg-sky-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div ref={titleRef} className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
            How It Works
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            How StudyFinder Guides{" "}
            <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Your Learning
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Turn your learning goals into a clear, actionable study plan in four
            simple steps.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const colorMap: Record<
              string,
              { bg: string; text: string; border: string; gradient: string }
            > = {
              sky: {
                bg: "bg-sky-100 dark:bg-sky-900/30",
                text: "text-sky-600 dark:text-sky-400",
                border: "border-sky-200 dark:border-sky-800",
                gradient: "from-sky-500 to-sky-600",
              },
              indigo: {
                bg: "bg-indigo-100 dark:bg-indigo-900/30",
                text: "text-indigo-600 dark:text-indigo-400",
                border: "border-indigo-200 dark:border-indigo-800",
                gradient: "from-indigo-500 to-indigo-600",
              },
              emerald: {
                bg: "bg-emerald-100 dark:bg-emerald-900/30",
                text: "text-emerald-600 dark:text-emerald-400",
                border: "border-emerald-200 dark:border-emerald-800",
                gradient: "from-emerald-500 to-emerald-600",
              },
              amber: {
                bg: "bg-amber-100 dark:bg-amber-900/30",
                text: "text-amber-600 dark:text-amber-400",
                border: "border-amber-200 dark:border-amber-800",
                gradient: "from-amber-500 to-orange-600",
              },
            };
            const colorClasses = colorMap[step.color] || colorMap.sky;

            return (
              <div key={idx} className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                    <ArrowRight
                      className="h-6 w-6 text-slate-500 dark:text-slate-300"
                      strokeWidth={2.5}
                    />
                  </div>
                )}

                <div
                  className={`group relative h-full rounded-[1.25rem] border-2 border-slate-400 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/60 p-8 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm`}
                >
                  <div
                    className={`absolute -top-3 -left-2 rounded-full bg-linear-to-r ${colorClasses.gradient} px-3 py-1 text-xs font-bold text-white shadow-lg`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colorClasses.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${colorClasses.text}`} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {step.color === "amber" && (
                    <div className="mt-4 flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-8 w-8 rounded-full border-2 border-white dark:border-slate-800 bg-linear-to-br ${
                            [
                              "from-sky-400 to-blue-500",
                              "from-emerald-400 to-green-500",
                              "from-amber-400 to-orange-500",
                              "from-pink-400 to-rose-500",
                            ][i]
                          }`}
                        />
                      ))}
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
                        +99
                      </div>
                    </div>
                  )}

                  {step.color === "emerald" && (
                    <div className="mt-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          Progress
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          72%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-600">
                        <div className="h-full w-[72%] rounded-full bg-linear-to-r from-emerald-500 to-emerald-600" />
                      </div>
                    </div>
                  )}

                  {step.color === "indigo" && (
                    <div className="mt-4 space-y-1.5">
                      {["Week 1: Fundamentals", "Week 2: Deep Dive"].map(
                        (item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                          >
                            <div className="h-1 w-1 rounded-full bg-indigo-500" />
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
