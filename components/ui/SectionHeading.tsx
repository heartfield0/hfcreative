import { cn } from "@/lib/utils";
import { RevealText, RevealLine } from "@/components/ui/RevealText";

/**
 * Standard section header: a small kicker label, an oversized
 * display headline, and an optional supporting line — used at the
 * top of every major section for editorial consistency.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {kicker && (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {kicker}
        </p>
      )}
      <RevealText as="h2" className="font-display text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[1.02] tracking-tight">
        <RevealLine>{title}</RevealLine>
      </RevealText>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-[38ch] text-base leading-relaxed text-muted md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
