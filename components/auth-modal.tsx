"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StudyFinderLogo } from "./studyfinder-logo";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setName("");
      setEmail("");
      setPassword("");
    }, 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-4 rounded-[1.25rem] border-2 border-slate-400 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/60 p-8 shadow-sm animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <StudyFinderLogo size="md" showText={false} />
          <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {mode === "signup"
              ? "Start your learning journey today"
              : "Sign in to continue learning"}
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 p-4 text-center">
            <p className="font-medium text-emerald-700 dark:text-emerald-400">
              {mode === "signup"
                ? "Account created successfully!"
                : "Welcome back!"}
            </p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex rounded-lg bg-slate-100 dark:bg-slate-700 p-1 mb-6">
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-md py-2 text-sm font-medium transition-all ${
              mode === "signup"
                ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setMode("login")}
            className={`flex-1 rounded-md py-2 text-sm font-medium transition-all ${
              mode === "login"
                ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Log In
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <Label
                htmlFor="name"
                className="text-slate-700 dark:text-slate-200"
              >
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1.5 h-11 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700"
              />
            </div>
          )}
          <div>
            <Label
              htmlFor="email"
              className="text-slate-700 dark:text-slate-200"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1.5 h-11 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="text-slate-700 dark:text-slate-200"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="mt-1.5 h-11 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 rounded-full bg-linear-to-r from-sky-500 to-indigo-600 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : mode === "signup" ? (
              "Create Account"
            ) : (
              "Log In"
            )}
          </Button>
        </form>

        {/* Continue as guest */}
        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          Continue as guest
        </button>
      </div>
    </div>
  );
}
