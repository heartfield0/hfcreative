import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/site";

/** Grid of the eight core service offerings, typography-led rather than card-heavy. */
export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="border-b border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          kicker="Services"
          title="Where the work lives."
          description="From strategy to finished, ad-ready assets — everything a media buyer needs to keep testing."
        />

        <div className="mt-16 grid border-t border-border md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 2) * 0.08}
              className="group border-b border-border p-8 transition-colors hover:bg-white/[0.02] md:p-12"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-sm text-muted">
                  {service.index}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-medium tracking-tight md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs uppercase tracking-[0.15em] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
