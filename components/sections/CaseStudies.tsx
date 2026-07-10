import { ArrowUpRight } from "lucide-react";
import { RevealLine, RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";
import { FrameGrid } from "@/components/ui/FrameGrid";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { caseStudies } from "@/data/site";
import type { CaseStudy } from "@/types";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-border py-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </h3>
      <div className="mt-4 max-w-[65ch] text-base leading-relaxed md:text-lg">
        {children}
      </div>
    </Reveal>
  );
}

function CaseStudyBlock({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article
      id={`case-${study.id}`}
      className="border-b border-border px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Case Study {String(index + 1).padStart(2, "0")} — {study.category}
        </p>

        <RevealText as="h2" className="mt-6 font-display font-medium tracking-tight">
          <RevealLine className="block text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05]">
            {study.title}
          </RevealLine>
        </RevealText>

        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-xs uppercase tracking-[0.15em] text-muted">
          <span>{study.client}</span>
          <span>{study.year}</span>
        </div>

        <div>
          <Field label="Challenge">{study.challenge}</Field>
          <Field label="Research">{study.research}</Field>
          <Field label="Strategy">{study.strategy}</Field>
          <Field label="Creative Direction">{study.creativeDirection}</Field>
          <Field label="Execution">{study.execution}</Field>

          <Reveal className="border-t border-border py-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Deliverables
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed md:text-lg">
              {study.deliverables.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true" className="text-muted">
                    —
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="border-t border-border py-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Results
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed md:text-lg">
              {study.results.map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden="true" className="text-muted">
                    —
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Field label="Lessons Learned">{study.lessonsLearned}</Field>

          <Reveal className="border-t border-border py-8">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Gallery
            </h3>
            <FrameGrid count={study.gallery} />
          </Reveal>
        </div>

        <Reveal className="mt-4 border-t border-border pt-10">
          <MagneticLink
            href="#contact"
            className="inline-flex items-center gap-3 text-lg font-medium md:text-2xl"
          >
            Start a project like this
            <ArrowUpRight aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" />
          </MagneticLink>
        </Reveal>
      </div>
    </article>
  );
}

/** Renders every full case study in sequence, each deep-linkable from Selected Work. */
export function CaseStudies() {
  return (
    <section aria-label="Case studies">
      {caseStudies.map((study, i) => (
        <CaseStudyBlock key={study.id} study={study} index={i} />
      ))}
    </section>
  );
}
