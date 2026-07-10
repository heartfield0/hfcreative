"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Reveals each child line through a clipped mask as it enters the
 * viewport, driven by GSAP ScrollTrigger. Pass one child per visual
 * line for the best effect. Degrades to a plain fade under
 * reduced-motion.
 */
export function RevealText({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  delay?: number;
  once?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (reducedMotion) return;
    registerGsap();
    const container = containerRef.current;
    if (!container) return;

    const lines = container.querySelectorAll<HTMLElement>(".reveal-line");

    const ctx = gsap.context(() => {
      gsap.set(lines, { yPercent: 110 });
      gsap.to(lines, {
        yPercent: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        delay,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [reducedMotion, delay, once]);

  return (
    <Tag ref={containerRef as never} className={cn(className)}>
      {children}
    </Tag>
  );
}

/** A single maskable line of text — use inside `RevealText`. */
export function RevealLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("reveal-mask", className)}>
      <span className="reveal-line">{children}</span>
    </span>
  );
}
