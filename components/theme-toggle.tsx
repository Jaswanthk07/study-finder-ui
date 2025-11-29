"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid using theme-dependent text during SSR — show a neutral label until mounted
  const ariaLabel = mounted
    ? `Switch to ${theme === "light" ? "dark" : "light"} mode`
    : "Toggle color scheme";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
      aria-label={ariaLabel}
    >
      <Sun className="h-5 w-5 text-amber-500 transition-all duration-300 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 text-sky-400 transition-all duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
