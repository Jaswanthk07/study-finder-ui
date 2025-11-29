"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      isMobile ||
      isTouch ||
      prefersReducedMotion ||
      !glowRef.current ||
      !pointerRef.current
    ) {
      return;
    }

    const glow = glowRef.current;
    const pointer = pointerRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.set([glow, pointer], { x: mouseX, y: mouseY });

    const updatePosition = () => {
      // Glow follows with more delay for smooth effect
      gsap.to(glow, {
        x: mouseX,
        y: mouseY,
        duration: 0.8,
        ease: "power2.out",
      });
      // Pointer follows more closely
      gsap.to(pointer, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const interval = setInterval(updatePosition, 16);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-0 h-96 w-96 rounded-full bg-linear-to-r from-sky-300/20 to-indigo-300/20 dark:from-sky-500/10 dark:to-indigo-500/10 blur-3xl hidden md:block"
        style={{ top: 0, left: 0 }}
      />
      {/* Custom cursor pointer - hidden by default, shown on desktop with fine pointer */}
      <div
        ref={pointerRef}
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[9999] h-4 w-4 rounded-full bg-slate-800 dark:bg-sky-400 border-2 border-white dark:border-slate-900 shadow-lg hidden md:block"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
