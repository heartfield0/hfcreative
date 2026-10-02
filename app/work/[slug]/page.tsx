import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { RevealLine, RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollToTop } from "@/components/work/ScrollToTop";
import { caseStudies, workItems } from "@/data/site";
import { getWorkImages } from "@/lib/work-images";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);
  if (!study) return {};
  const summary = workItems.find((w) => w.id === slug)?.summary ?? study.challenge;
  return { title: study.title, description: summary };
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-border py-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</h3>
      <div className="mt-4 text-base leading-relaxed md:text-lg">{children}</div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="text-muted">
            —
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((s) => s.id === slug);
  if (index === -1) notFound();

  const study = caseStudies[index];
  const summary = workItems.find((w) => w.id === slug)?.summary;
  const images = getWorkImages(study.id);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <ScrollToTop key={study.id} />

      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/#work"
          data-cursor="link"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          All work
        </Link>

        <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {study.category}
        </p>

        <RevealText as="h1" className="mt-6 font-display font-medium tracking-tight">
          <RevealLine className="block text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05]">
            {study.title}
          </RevealLine>
        </RevealText>

        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-xs uppercase tracking-[0.15em] text-muted">
          <span>{study.client}</span>
          <span>{study.year}</span>
          {study.role && <span>{study.role}</span>}
          {study.publishedOn && <span>Published {study.publishedOn}</span>}
        </div>

        {study.tools && study.tools.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {study.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.1em] text-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
        )}

        {summary && (
          <p className="mt-10 max-w-[55ch] text-lg leading-relaxed md:text-2xl">{summary}</p>
        )}

        {study.link && (
          <a
            href={study.link.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-fg px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-bg transition-opacity hover:opacity-80"
          >
            <Play aria-hidden="true" className="h-4 w-4" />
            {study.link.label}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}

        {images.length > 0 && (
          <div
            role="group"
            aria-label={`Creative gallery, ${images.length} frames`}
            className="mt-16 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((src, i) => (
              <div key={src} className="overflow-hidden border border-border">
                <Image
                  src={src}
                  alt={`${study.title}, frame ${i + 1}`}
                  width={1080}
                  height={1350}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  loading={i < 3 ? "eager" : "lazy"}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-20 grid gap-x-16 md:grid-cols-2">
          <Field label="Deliverables">
            <List items={study.deliverables} />
          </Field>
          <Field label="Results">
            <List items={study.results} />
          </Field>
        </div>

        <h2 className="mt-20 font-display text-2xl font-medium tracking-tight md:text-3xl">
          How it was made
        </h2>
        <div className="mt-8 grid gap-x-16 md:grid-cols-2">
          <Field label="Challenge">{study.challenge}</Field>
          <Field label="Research">{study.research}</Field>
          <Field label="Strategy">{study.strategy}</Field>
          <Field label="Creative Direction">{study.creativeDirection}</Field>
          <Field label="Execution">{study.execution}</Field>
          <Field label="Lessons Learned">{study.lessonsLearned}</Field>
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <Link
            href="/#contact"
            data-cursor="link"
            className="inline-flex items-center gap-3 text-lg font-medium transition-colors hover:text-muted md:text-2xl"
          >
            Start a project like this
            <ArrowUpRight aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
        </div>

        <nav
          aria-label="More projects"
          className="mt-16 grid gap-6 border-t border-border pt-10 sm:grid-cols-2"
        >
          <Link href={`/work/${prev.id}`} data-cursor="link" className="group block">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Previous project
            </span>
            <span className="mt-2 block font-display text-lg leading-snug transition-colors group-hover:text-muted md:text-xl">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/work/${next.id}`}
            data-cursor="link"
            className="group block sm:text-right"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted">
              Next project
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="mt-2 block font-display text-lg leading-snug transition-colors group-hover:text-muted md:text-xl">
              {next.title}
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
