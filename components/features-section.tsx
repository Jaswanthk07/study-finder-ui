"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Calendar, Search, BarChart3, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description:
      "The platform suggests notes, videos, articles, and courses based on your goals and selected subject.",
    color: "sky",
  },
  {
    icon: Calendar,
    title: "Personalized Study Plans",
    description:
      "Generate a custom weekly study plan based on your subject, difficulty level, and available study time.",
    color: "indigo",
  },
  {
    icon: Search,
    title: "Course & Resource Finder",
    description:
      "Search for learning resources by subject and apply filters for difficulty, duration, rating, and format.",
    color: "fuchsia",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Mark topics and resources as completed and view progress statistics such as percentage completed.",
    color: "emerald",
  },
  {
    icon: Trophy,
    title: "Leaderboards & Achievements",
    description:
      "Compete on weekly and biweekly leaderboards. Earn trophies and badges as you reach your study goals.",
    color: "amber",
  },
];

function AnimatedProgressBar({
  progress,
  color,
  delay,
}: {
  progress: number;
  color: string;
  delay: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev >= progress) {
            clearInterval(interval);
            return progress;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [progress, delay]);

  const colorClasses: Record<string, string> = {
    sky: "bg-sky-500",
    indigo: "bg-indigo-500",
    fuchsia: "bg-fuchsia-500",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
  };

  return (
    <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
      <div
        ref={barRef}
        className={`h-full rounded-full transition-all duration-100 ${colorClasses[color]}`}
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
}

function FloatingCard({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !cardRef.current) return;

    gsap.to(cardRef.current, {
      y: -8,
      duration: 2 + Math.random(),
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: delay * 0.2,
    });
  }, [delay]);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}

function LeaderboardPreview() {
  const leaders = [
    { name: "Sarah K.", points: 2450, rank: 1 },
    { name: "Alex M.", points: 2380, rank: 2 },
    { name: "You", points: 2290, rank: 3, isUser: true },
  ];

  return (
    <div className="mt-4 space-y-2">
      {leaders.map((leader, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between rounded-lg p-2 text-xs ${
            leader.isUser
              ? "bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700"
              : "bg-slate-50 dark:bg-slate-700/50"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-bold ${
                leader.rank === 1
                  ? "text-amber-500"
                  : leader.rank === 2
                  ? "text-slate-400"
                  : "text-amber-700"
              }`}
            >
              #{leader.rank}
            </span>
            <span
              className={
                leader.isUser
                  ? "font-semibold text-amber-700 dark:text-amber-400"
                  : "text-slate-600 dark:text-slate-400"
              }
            >
              {leader.name}
            </span>
          </div>
          <span className="font-mono font-medium text-slate-900 dark:text-white">
            {leader.points.toLocaleString()} pts
          </span>
        </div>
      ))}
    </div>
  );
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
          { opacity: 0, y: 40, rotateX: -10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.12,
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
    <section id="features" ref={sectionRef} className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-sky-100 dark:bg-sky-900/30 px-4 py-1.5 text-sm font-semibold text-sky-700 dark:text-sky-400">
            Features
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Everything you need to{" "}
            <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              study smarter
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Powerful tools designed to help you find resources, plan your
            studies, and track your progress.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const colorClasses: Record<string, string> = {
              sky: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 dark:group-hover:bg-sky-500",
              indigo:
                "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500",
              fuchsia:
                "bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 group-hover:bg-fuchsia-500 dark:group-hover:bg-fuchsia-500",
              emerald:
                "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-500",
              amber:
                "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 dark:group-hover:bg-amber-500",
            };

            const isLeaderboard =
              feature.title === "Leaderboards & Achievements";
            const isProgress = feature.title === "Progress Tracking";

            // Randomized progress values for demo
            const progressValue = [78, 92, 45, 67, 85][idx];

            return (
              <FloatingCard
                key={idx}
                delay={idx}
                className={`${idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="group relative h-full rounded-[1.25rem] border-2 border-slate-400 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/60 p-8 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                  {/* Minimal accent on hover */}
                  <div className="absolute inset-0 rounded-[1.25rem] bg-linear-to-br from-sky-500/3 to-indigo-500/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                  <div className="relative">
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
                        colorClasses[feature.color]
                      } group-hover:text-white group-hover:scale-105`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-400">
                      {feature.description}
                    </p>

                    {isProgress && (
                      <AnimatedProgressBar
                        progress={progressValue}
                        color={feature.color}
                        delay={idx * 200}
                      />
                    )}

                    {isLeaderboard && <LeaderboardPreview />}
                  </div>
                </div>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
