"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/scroll";
import { cn } from "@/lib/utils";

/**
 * Wraps a link/button with a subtle magnetic-hover pull toward the
 * cursor, used for nav links and primary CTAs. No-ops on touch input.
 */
export function MagneticLink({
  children,
  className,
  href,
  onClick,
  as = "a",
  strength = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3, ease: "power3.out" });
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" });
  };

  const Component = as === "button" ? "button" : "a";
  const isHashLink = as === "a" && href?.startsWith("#");
  const isExternal = as === "a" && /^https?:\/\//.test(href ?? "");

  const handleClick = (e: React.MouseEvent) => {
    if (isHashLink && href) {
      e.preventDefault();
      scrollToTarget(href);
    }
    onClick?.();
  };

  return (
    <Component
      ref={ref as never}
      href={as === "a" ? href : undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      data-cursor="link"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("will-change-transform", className)}
    >
      {children}
    </Component>
  );
}
