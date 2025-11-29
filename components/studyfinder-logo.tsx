"use client";

import { Search, BookOpen } from "lucide-react";

interface StudyFinderLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function StudyFinderLogo({
  size = "md",
  showText = true,
  className = "",
}: StudyFinderLogoProps) {
  const sizeClasses = {
    sm: {
      icon: "h-8 w-8",
      searchIcon: "h-4 w-4",
      bookIcon: "h-2.5 w-2.5",
      text: "text-lg",
    },
    md: {
      icon: "h-10 w-10",
      searchIcon: "h-5 w-5",
      bookIcon: "h-3 w-3",
      text: "text-xl",
    },
    lg: {
      icon: "h-14 w-14",
      searchIcon: "h-7 w-7",
      bookIcon: "h-4 w-4",
      text: "text-2xl",
    },
  };

  const sizes = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon: Magnifying glass with book inside */}
      <div
        className={`relative flex ${sizes.icon} items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25`}
      >
        <Search
          className={`${sizes.searchIcon} text-white`}
          strokeWidth={2.5}
        />
        <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm">
          <BookOpen
            className={`${sizes.bookIcon} text-indigo-600 dark:text-indigo-400`}
          />
        </div>
      </div>
      {showText && (
        <span
          className={`${sizes.text} font-bold text-slate-900 dark:text-white`}
        >
          Study<span className="text-sky-600 dark:text-sky-400">Finder</span>
        </span>
      )}
    </div>
  );
}
