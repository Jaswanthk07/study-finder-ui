"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Calendar,
  Search,
  BarChart3,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { StudyFinderLogo } from "./studyfinder-logo";
import { AuthModal } from "./auth-modal";

const navLinks = [
  { label: "Home", href: "#hero" },
  {
    label: "Features",
    href: "#features",
    dropdown: [
      { label: "Smart Recommendations", icon: Sparkles, href: "#features" },
      { label: "Personalized Plans", icon: Calendar, href: "#features" },
      { label: "Resource Finder", icon: Search, href: "#features" },
      { label: "Progress Tracking", icon: BarChart3, href: "#features" },
    ],
  },
  { label: "Highlights", href: "#highlights" },
  { label: "Connections", href: "#connections" },
  { label: "Pricing", href: "#pricing" },
  { label: "Globe", href: "#globe" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-slate-900/5 dark:shadow-slate-950/20 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
            <StudyFinderLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <div ref={dropdownRef} className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Glassmorphism Dropdown */}
                    {activeDropdown === link.label && (
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-200/60 dark:border-slate-700/60 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-2 shadow-xl shadow-slate-900/10 dark:shadow-slate-950/30 animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        {link.dropdown.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700">
                                <Icon className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                              </div>
                              {item.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-sky-500 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAuthModalOpen(true)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              Log In
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-linear-to-r from-sky-500 to-indigo-600 px-6 font-semibold text-white shadow-md shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 dark:text-slate-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation - Full screen slide-down panel */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md lg:hidden">
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex w-full items-center justify-between py-3 text-base font-medium text-slate-700 dark:text-slate-300"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="ml-4 space-y-1 pb-2">
                          {link.dropdown.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                              >
                                <Icon className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                                {item.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3 text-base font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="mt-4 space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full text-sm rounded-full bg-transparent"
                >
                  Log In
                </Button>
                <Button
                  size="sm"
                  className="w-full rounded-full bg-linear-to-r from-sky-500 to-indigo-600 font-semibold text-sm text-white"
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
