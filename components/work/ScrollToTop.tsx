"use client";

import { useEffect } from "react";
import { scrollToTarget } from "@/lib/scroll";

/**
 * Jumps to the top when a case study page mounts. Lenis keeps its own
 * scroll target, so Next's default scroll reset isn't enough on its own.
 */
export function ScrollToTop() {
  useEffect(() => {
    scrollToTarget(0, { immediate: true });
  }, []);

  return null;
}
