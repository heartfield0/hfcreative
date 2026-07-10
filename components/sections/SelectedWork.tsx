"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { scrollToTarget } from "@/lib/scroll";
import { workItems } from "@/data/site";

/**
 * Selected Work index — an oversized, typography-led list of
 * flagship projects. Each row links down to its full case study.
 */
export function SelectedWork() {
  const scrollToCaseStudy = (id: string) => {
    scrollToTarget(`#case-${id}`);
  };

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="border-b border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          kicker="Selected Work"
          title="Creative that carries a strategy."
          description="A sample of recent Meta and TikTok ad creative work across e-commerce, DTC, and beauty brands."
        />

        <div className="mt-16 border-t border-border">
          {workItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <button
                type="button"
                data-cursor="link"
                onClick={() => scrollToCaseStudy(item.id)}
                className="group flex w-full flex-col gap-4 border-b border-border py-8 text-left transition-colors md:flex-row md:items-center md:justify-between md:gap-8 md:py-10"
              >
                <div className="flex items-baseline gap-6 md:w-1/2">
                  <span className="font-mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl transition-colors group-hover:text-muted md:text-4xl">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6 pl-11 md:w-1/2 md:justify-end md:pl-0">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted md:w-1/3">
                    {item.category}
                  </span>
                  <span className="hidden text-xs uppercase tracking-[0.15em] text-muted md:inline-block md:w-1/6 md:text-right">
                    {item.year}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
