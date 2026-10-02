import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkGrid } from "@/components/work/WorkGrid";
import { workFormats, workItems } from "@/data/site";
import { getWorkImages } from "@/lib/work-images";

/**
 * Selected Work index — a filterable thumbnail grid of every project.
 * Each card links to that project's own case study page.
 */
export function SelectedWork() {
  const items = workItems.map((item) => ({
    ...item,
    cover: getWorkImages(item.id)[0] ?? null,
  }));

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

        <WorkGrid items={items} formats={workFormats} />
      </div>
    </section>
  );
}
