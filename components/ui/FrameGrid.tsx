import { cn } from "@/lib/utils";

/**
 * Placeholder "gallery" grid rendered in pure typography and thin
 * borders — used instead of stock imagery to preview a case study's
 * deliverable frames while staying inside the black/white system.
 */
export function FrameGrid({ count, className }: { count: number; className?: string }) {
  return (
    <div
      className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4", className)}
      role="group"
      aria-label={`Creative gallery, ${count} frames`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex aspect-[4/5] flex-col justify-between border border-border p-4"
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Frame
          </span>
          <span className="font-display text-2xl text-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
}
