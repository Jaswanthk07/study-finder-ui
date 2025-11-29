"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StudyFinderLogo } from "./studyfinder-logo";
import { Instagram, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#hero" },
      { label: "Features", href: "#features" },
      { label: "Highlights", href: "#highlights" },
      { label: "Pricing", href: "#pricing" },
      { label: "Connections", href: "#connections" },
      { label: "Globe", href: "#globe" },
      { label: "About", href: "#vision" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.querySelectorAll("div"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
            },
          }
        );
      }

      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current.querySelectorAll("a"),
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.3,
            stagger: 0.1,
            ease: "back.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
            },
          }
        );
      }

      gsap.fromTo(
        copyrightRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      ref={footerRef}
      className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4" ref={logoRef}>
              <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
                <StudyFinderLogo size="md" />
              </a>
            </div>
            <p
              ref={descRef}
              className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm text-pretty text-xs sm:text-sm"
            >
              Connecting students with the best study resources, courses, and
              personalized plans to achieve academic excellence.
            </p>
            <div className="flex gap-4" ref={socialRef}>
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 hover:-translate-y-1 flex items-center justify-center transition-all duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <Icon className="w-5 h-5 animate-float-icon" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Sections */}
          <div
            ref={linksRef}
            className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12"
          >
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-xs uppercase tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:translate-x-1 transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          ref={copyrightRef}
          className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400"
        >
          <p>© 2025 StudyFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
