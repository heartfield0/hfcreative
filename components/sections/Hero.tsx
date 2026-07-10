"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { RevealLine, RevealText } from "@/components/ui/RevealText";
import { MagneticLink } from "@/components/ui/MagneticLink";

/**
 * Full-viewport hero. Headline reveals through a mask on load,
 * a faint typographic grid drifts with subtle parallax on scroll,
 * and a scroll indicator invites the visitor further down the page.
 */
export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    registerGsap();
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      gsap.to(grid, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border px-6 pt-28 md:px-10"
    >
      <div
        ref={gridRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        Meta &amp; TikTok Ad Creatives — DTC / E-Commerce
      </p>

      <RevealText as="h1" className="font-display font-medium tracking-tight">
        <RevealLine className="block text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.98]">
          Performance Creative
        </RevealLine>
        <RevealLine className="block text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.98] text-muted">
          for DTC Brands.
        </RevealLine>
      </RevealText>

      <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[42ch] text-base leading-relaxed text-muted md:text-lg">
          Meta ad creatives, AI-powered production, and conversion-focused
          design built around customer psychology — not just visual polish.
        </p>

        <MagneticLink
          href="#work"
          className="inline-flex items-center gap-3 self-start rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:border-fg md:self-auto"
        >
          View Selected Work
        </MagneticLink>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center" aria-hidden="true">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <span className="h-10 w-px animate-pulse bg-border" />
        </div>
      </div>
    </section>
  );
}
