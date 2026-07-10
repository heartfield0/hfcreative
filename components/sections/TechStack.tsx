import { Marquee } from "@/components/ui/Marquee";
import { techStack } from "@/data/site";

/**
 * Tools & technology strip — an infinite marquee for visual rhythm,
 * paired with a screen-reader-only list so the content isn't lost
 * to assistive tech (the marquee itself is marked decorative).
 */
export function TechStack() {
  return (
    <section aria-label="Tools and technology" className="border-b border-border py-16">
      <Marquee>
        {techStack.map((tool) => (
          <span
            key={tool.name}
            className="flex items-baseline gap-3 font-display text-2xl text-muted md:text-4xl"
          >
            {tool.name}
            <span aria-hidden="true" className="text-sm">
              ✦
            </span>
          </span>
        ))}
      </Marquee>

      <ul className="sr-only">
        {techStack.map((tool) => (
          <li key={tool.name}>
            {tool.name} — {tool.category}
          </li>
        ))}
      </ul>
    </section>
  );
}
