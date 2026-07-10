import { RevealLine, RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";

const questions = [
  "Who is this for?",
  "What does the customer currently believe?",
  "What belief needs to change?",
  "Which angle will move them?",
  "What's the fastest way to stop the scroll?",
];

/**
 * Editorial statement section — the creative philosophy, pulled
 * directly from the freelancer's own words, set in oversized type.
 */
export function Manifesto() {
  return (
    <section
      aria-label="Creative philosophy"
      className="border-b border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <RevealText as="h2" className="font-display font-medium tracking-tight">
          <RevealLine className="block text-[clamp(1.75rem,5vw,3.75rem)] leading-[1.1]">
            A beautiful ad with the wrong
          </RevealLine>
          <RevealLine className="block text-[clamp(1.75rem,5vw,3.75rem)] leading-[1.1] text-muted">
            message still loses.
          </RevealLine>
        </RevealText>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="max-w-[46ch] text-lg leading-relaxed text-muted md:text-xl">
              I don&apos;t just design ads — I approach every creative like a
              strategist. Before opening Canva or Figma, I ask five questions
              that decide whether the creative has a chance to work at all.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="flex flex-col gap-4 font-display text-xl md:text-2xl">
              {questions.map((q, i) => (
                <li key={q} className="flex items-baseline gap-4 border-b border-border pb-4">
                  <span className="font-mono text-sm text-muted">
                    0{i + 1}
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
