"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee for the technology strip. Duplicates
 * its children once so the loop is seamless. Pauses entirely under
 * reduced-motion.
 */
export function Marquee({
  children,
  className,
  speed = 40,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const track = trackRef.current;
    if (!track) return;

    const width = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: -width,
      duration: width / speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [reducedMotion, speed]);

  return (
    <div className={cn("overflow-hidden", className)} aria-hidden="true">
      <div ref={trackRef} className="flex w-max items-center gap-16 will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
