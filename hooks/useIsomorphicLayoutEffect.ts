import { useEffect, useLayoutEffect } from "react";

/** `useLayoutEffect` on the client, falls back to `useEffect` during SSR. */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
