"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WorkFormat, WorkItem } from "@/types";

type GridItem = WorkItem & { cover: string | null };

/**
 * Filter tabs plus a thumbnail card per project. Filtering is purely
 * client-side; every card links to `/work/<id>`.
 */
export function WorkGrid({
  items,
  formats,
}: {
  items: GridItem[];
  formats: { id: WorkFormat; label: string }[];
}) {
  const [filter, setFilter] = useState<WorkFormat | "all">("all");
  const visible = filter === "all" ? items : items.filter((i) => i.format === filter);

  const tabs = [
    { id: "all" as const, label: "All", count: items.length },
    ...formats.map((f) => ({
      ...f,
      count: items.filter((i) => i.format === f.id).length,
    })),
  ].filter((t) => t.count > 0);

  return (
    <>
      <div
        role="group"
        aria-label="Filter work by type"
        className="mt-16 flex flex-wrap gap-2"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            data-cursor="link"
            aria-pressed={filter === tab.id}
            onClick={() => setFilter(tab.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors",
              filter === tab.id
                ? "border-fg bg-fg text-bg"
                : "border-border text-muted hover:border-fg hover:text-fg"
            )}
          >
            {tab.label}
            <span className="ml-2 opacity-60">{tab.count}</span>
          </button>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id}>
            <Link
              href={`/work/${item.id}`}
              data-cursor="link"
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-white/[0.03]">
                {item.cover ? (
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    No preview
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">
                    {item.category} · {item.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug transition-colors group-hover:text-muted md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
