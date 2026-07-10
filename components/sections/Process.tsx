import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/site";

/**
 * Creative workflow, sticky-left / scrolling-right layout — the
 * eight-step process from research through to scaling what works.
 */
export function Process() {
  return (
    <section
      id="process"
      aria-label="Creative process"
      className="border-b border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
        <div className="md:sticky md:top-32 md:h-fit">
          <SectionHeading
            kicker="Creative Process"
            title="Research first. Design second."
            description="A repeatable workflow that turns customer psychology into creative that's built to be tested, not just admired."
          />
        </div>

        <ol className="border-t border-border">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 0.05}>
              <li className="flex flex-col gap-4 border-b border-border py-8 md:flex-row md:items-baseline md:gap-10">
                <span className="font-mono text-sm text-muted md:w-12">
                  {step.index}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
