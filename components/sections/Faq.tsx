import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/site";

/**
 * Accessible FAQ accordion built on native <details>/<summary> so
 * keyboard and screen-reader support come for free.
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="border-b border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1000px]">
        <SectionHeading
          kicker="FAQ"
          title="Good to know."
          align="left"
        />

        <div className="mt-16 border-t border-border">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 4) * 0.04}>
              <details className="group border-b border-border py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium md:text-2xl">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-xl text-muted transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted md:text-lg">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
