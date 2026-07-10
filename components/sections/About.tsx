import { RevealLine, RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { site, stats, testimonials, employment } from "@/data/site";

/**
 * About section — personal identity is introduced here, after the
 * work has spoken for itself. Bio, verified track record, education,
 * and short client feedback pulled from completed engagements.
 */
export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-b border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          About
        </p>
        <RevealText as="h2" className="font-display font-medium tracking-tight">
          <RevealLine className="block text-[clamp(2.25rem,6vw,5rem)] leading-[1.02]">
            {site.name}
          </RevealLine>
        </RevealText>

        <div className="mt-14 grid gap-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-20">
          <Reveal>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I help DTC and e-commerce brands create high-converting ad
                creatives that drive clicks, engagement, and sales — with a
                focus on Meta Ads creative strategy, direct response video
                editing, UGC-style content, static ad design, and
                AI-powered creative production.
              </p>
              <p>
                As a Top Rated freelancer on Upwork with a 100% Job Success
                Score, I&apos;ve partnered with clients across eCommerce,
                DTC, lead generation, beauty, wellness, home services,
                fashion, and B2B — combining creative strategy, consumer
                psychology, and performance marketing principles with
                modern AI tools to produce ad assets efficiently, without
                cutting corners on strategy.
              </p>
              <p>
                Founder of {site.company}, based in {site.location}. Open
                to freelance projects, creative collaborations, and
                long-term client partnerships.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticLink
                href={site.upworkUrl}
                className="inline-block rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:border-fg"
              >
                View Upwork Profile
              </MagneticLink>
              <MagneticLink
                href={site.linkedinUrl}
                className="inline-block rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors hover:border-fg"
              >
                View LinkedIn
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-medium md:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="mt-24 border-t border-border pt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Experience
          </h3>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
            {employment.map((job) => (
              <div key={job.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-display text-xl font-medium">
                    {job.title} · {job.org}
                  </h4>
                  <span className="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-muted">
                  {job.description}
                </p>
              </div>
            ))}
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-display text-xl font-medium">
                  BS Computer Science · North Negros College
                </h4>
                <span className="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-muted">
                  2022 — 2026
                </span>
              </div>
              <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-muted">
                Focused on app development — a technical foundation that
                shapes how AI tools and creative systems get used in
                production, not just how the ads look.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-24 border-t border-border pt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Client Feedback
          </h3>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {testimonials.map((t) => (
              <blockquote key={t.quote} className="border-t border-border pt-6">
                <p className="text-lg leading-relaxed md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.15em] text-muted">
                  {t.project}
                </footer>
              </blockquote>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
