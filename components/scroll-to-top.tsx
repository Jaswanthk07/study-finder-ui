"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/30 active:scale-95"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
