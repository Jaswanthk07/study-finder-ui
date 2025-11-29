"use client";

export function DynamicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base vertical gradient (hero): subtle purple -> teal -> background */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--primary) 5%, transparent) 0%, color-mix(in srgb, var(--secondary) 5%, transparent) 60%, var(--background) 100%)",
        }}
      />

      {/* Radial purple glow from center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 35%)",
          mixBlendMode: "screen",
          opacity: 0.9,
        }}
      />

      {/* Decorative floating blobs (kept subtle) */}
      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-linear-to-br from-sky-200/30 to-indigo-200/30 dark:from-sky-900/15 dark:to-indigo-900/15 blur-3xl animate-float-slow" />
      <div className="absolute -right-40 top-1/3 h-[350px] w-[350px] rounded-full bg-linear-to-br from-fuchsia-200/30 to-pink-200/30 dark:from-fuchsia-900/15 dark:to-pink-900/15 blur-3xl animate-float-medium" />
      <div className="absolute left-1/4 bottom-20 h-[300px] w-[300px] rounded-full bg-linear-to-br from-indigo-200/20 to-sky-200/20 dark:from-indigo-900/10 dark:to-sky-900/10 blur-3xl animate-float-fast" />

      {/* Grid pattern (subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* SVG film grain overlay (fractal noise) - 8% opacity, overlay blend */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "overlay", opacity: 0.08 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" fill="white" />
      </svg>
    </div>
  );
}
