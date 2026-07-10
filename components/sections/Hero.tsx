"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { RevealLine, RevealText } from "@/components/ui/RevealText";
import { MagneticLink } from "@/components/ui/MagneticLink";

/**
 * Full-viewport hero. Headline reveals through a mask on load,
 * a faint typographic grid drifts with subtle parallax on scroll,
 * and a scroll indicator invites the visitor further down the page.
 * Splits into a two-column layout on larger screens to make room for
 * a portrait; collapses to a single stacked column on mobile.
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-border px-6 pt-28 pb-20 md:px-10"
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

      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Meta &amp; TikTok Ad Creatives — DTC / E-Commerce
          </p>

          <RevealText as="h1" className="font-display font-medium tracking-tight">
            <RevealLine className="block text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.98]">
              Performance Creative
            </RevealLine>
            <RevealLine className="block text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.98] text-muted">
              for DTC Brands.
            </RevealLine>
          </RevealText>

          <div className="mt-10 flex flex-col gap-8 md:mt-14">
            <p className="max-w-[42ch] text-base leading-relaxed text-muted md:text-lg">
              Meta ad creatives, AI-powered production, and conversion-focused
              design built around customer psychology — not just visual polish.
            </p>

            <MagneticLink
              href="#work"
              className="inline-flex items-center gap-3 self-start rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:border-fg"
            >
              View Selected Work
            </MagneticLink>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:order-2 lg:mx-0 lg:max-w-none">
          <Image
            src="/heart-field-portrait.png"
            alt="Heart Field Lamadrid, founder of HF Creative, working on a laptop"
            width={530}
            height={790}
            priority
            sizes="(min-width: 1024px) 32vw, 60vw"
            className="h-auto w-full"
          />
        </div>
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
