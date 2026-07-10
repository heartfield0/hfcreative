import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Case study "gallery" grid. Renders a real image for any slot with
 * a matching entry in `images`, and falls back to a numbered
 * typographic placeholder tile for the rest — so a case study can
 * gain real creative over time without a code change.
 */
export function FrameGrid({
  count,
  images = [],
  className,
}: {
  count: number;
  images?: string[];
  className?: string;
}) {
  return (
    <div
      className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4", className)}
      role="group"
      aria-label={`Creative gallery, ${count} frames`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const src = images[i];

        if (src) {
          return (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden border border-border"
            >
              <Image
                src={src}
                alt={`Creative frame ${i + 1}`}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          );
        }

        return (
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
        );
      })}
    </div>
  );
}
