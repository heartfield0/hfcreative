import { ArrowUpRight } from "lucide-react";
import { RevealLine, RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { site } from "@/data/site";

/** Primary contact CTA — the site's closing argument before the footer. */
export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Available now · Responds in 0–4 hours
        </p>

        <RevealText as="h2" className="font-display font-medium tracking-tight">
          <RevealLine className="block text-[clamp(2.5rem,8vw,6.5rem)] leading-[1]">
            Let&apos;s build creative
          </RevealLine>
          <RevealLine className="block text-[clamp(2.5rem,8vw,6.5rem)] leading-[1] text-muted">
            that performs.
          </RevealLine>
        </RevealText>

        <Reveal className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[46ch] text-base leading-relaxed text-muted md:text-lg">
            Send your brand, offer, and current creative — I&apos;ll review
            what&apos;s live and outline how a first batch or an ongoing
            weekly retainer would work.
          </p>

          <MagneticLink
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-4 self-start border-b border-fg pb-2 font-display text-2xl font-medium md:self-auto md:text-4xl"
          >
            {site.email}
            <ArrowUpRight
              aria-hidden="true"
              className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-8 md:w-8"
            />
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}
