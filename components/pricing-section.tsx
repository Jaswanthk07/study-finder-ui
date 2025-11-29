"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Limited recommendations",
      "Access to basic resources",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    description: "Best for serious learners",
    features: [
      "Full resource recommendations",
      "Personalized study plans",
      "Progress tracking",
      "Unlimited study searches",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$19",
    description: "For power users",
    features: [
      "All Pro Plan features",
      "Priority support",
      "Access to premium curated resources",
      "Advanced analytics",
    ],
    popular: false,
  },
];

export function PricingSection() {
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
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
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

  const handleChoosePlan = (planName: string) => {
    alert(
      `You selected the ${planName} plan! This would redirect to signup in production.`
    );
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-12 lg:py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={titleRef} className="mx-auto max-w-2xl text-center px-4">
          <span className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            Pricing
          </span>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Simple, transparent{" "}
            <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="mt-4 text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Choose the plan that fits your learning needs. Upgrade or cancel
            anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-3"
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-[1.25rem] border-2 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
                plan.popular
                  ? "border-sky-500 dark:border-sky-500 bg-linear-to-b from-sky-50 to-white dark:from-sky-900/30 dark:to-slate-800 shadow-none"
                  : "border-slate-400 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/60 shadow-none"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-sky-500 to-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    /month
                  </span>
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleChoosePlan(plan.name)}
                className={`mt-8 w-full rounded-full py-5 sm:py-6 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? "bg-linear-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30"
                    : "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600"
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
