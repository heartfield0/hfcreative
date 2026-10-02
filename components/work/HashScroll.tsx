"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { scrollToTarget } from "@/lib/scroll";

/**
 * Homepage helper. Scrolls to `#section` when arriving from another page
 * (e.g. the nav on a case study page links to `/#contact`), and forwards
 * old `/#case-<id>` links to the case study's own page.
 */
export function HashScroll() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    if (hash.startsWith("#case-")) {
      router.replace(`/work/${hash.slice("#case-".length)}`);
      return;
    }

    const timer = window.setTimeout(() => {
      if (document.querySelector(hash)) scrollToTarget(hash, { immediate: true });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [router]);

  return null;
}
