import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/** Registers the active Lenis instance so anchor navigation can drive it directly. */
export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

/**
 * Scrolls to a target selector/element through Lenis when it's active,
 * so in-page navigation never desyncs from Lenis's own scroll state.
 * Falls back to native smooth scrolling (e.g. under reduced motion).
 */
export function scrollToTarget(target: string | HTMLElement) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { duration: 1.2 });
    return;
  }
  const el =
    typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}
