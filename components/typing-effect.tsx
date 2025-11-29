"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Personalized notes.",
  "Curated video lessons.",
  "Top-rated online courses.",
  "Smart study plans.",
];

export function TypingEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) {
      setCurrentText("Personalized notes, videos, and courses.");
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }

    const typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === currentPhrase) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, reducedMotion]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
        {currentText}
      </span>
      {!reducedMotion && (
        <span className="ml-1 inline-block w-0.5 h-8 bg-sky-500 animate-pulse" />
      )}
    </span>
  );
}
