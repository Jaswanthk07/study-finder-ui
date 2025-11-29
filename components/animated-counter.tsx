"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
  colorClass: string;
}

function Counter({
  end,
  suffix,
  label,
  duration = 2,
  colorClass,
}: CounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!countRef.current || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (countRef.current) {
        countRef.current.textContent =
          end >= 1000000 ? "1M" : end >= 1000 ? `${end / 1000}k` : String(end);
      }
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: countRef.current,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const counter = { value: 0 };
        gsap.to(counter, {
          value: end,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            if (countRef.current) {
              const val = Math.round(counter.value);
              if (end >= 1000000) {
                countRef.current.textContent = `${(val / 1000000).toFixed(
                  val < 1000000 ? 1 : 0
                )}M`;
              } else if (end >= 1000) {
                countRef.current.textContent = `${(val / 1000).toFixed(
                  val < 1000 ? 1 : 0
                )}k`;
              } else {
                countRef.current.textContent = String(val);
              }
            }
          },
        });
      },
    });

    return () => trigger.kill();
  }, [end, duration, hasAnimated]);

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${colorClass} outlined-text`}
      >
        <span ref={countRef} className="outlined-text">
          0
        </span>
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-200">
        {label}
      </p>
    </div>
  );
}

export function AnimatedStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      end: 150,
      suffix: "+",
      label: "Countries",
      colorClass:
        "bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent",
    },
    {
      end: 50000,
      suffix: "+",
      label: "Active Students",
      colorClass:
        "bg-linear-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent",
    },
    {
      end: 1000000,
      suffix: "+",
      label: "Study Sessions",
      colorClass: "text-cyan-400",
    },
    {
      end: 95,
      suffix: "%",
      label: "Success Rate",
      colorClass: "text-emerald-400",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-5xl rounded-2xl p-8 sm:p-10 lg:p-12"
    >
      <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
        {stats.map((stat, idx) => (
          <Counter
            key={idx}
            end={stat.end}
            suffix={stat.suffix}
            label={stat.label}
            colorClass={stat.colorClass}
            duration={2 + idx * 0.2}
          />
        ))}
      </div>
    </div>
  );
}
