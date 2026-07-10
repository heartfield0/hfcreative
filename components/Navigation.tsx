"use client";

import { useEffect, useState } from "react";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { scrollToTarget } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const links = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/**
 * Fixed top navigation. Transparent over the hero, becomes a solid
 * bar once the user scrolls past it. Tracks the active section via
 * IntersectionObserver and exposes a minimal mobile menu.
 */
export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    scrollToTarget(`#${id}`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10"
      >
        <MagneticLink
          as="button"
          onClick={() => scrollTo("hero")}
          className="font-display text-sm font-medium uppercase tracking-[0.15em]"
        >
          {site.shortName}
        </MagneticLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <MagneticLink
                as="button"
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "text-xs uppercase tracking-[0.15em] transition-colors",
                  active === link.id ? "text-fg" : "text-muted hover:text-fg"
                )}
              >
                {link.label}
              </MagneticLink>
            </li>
          ))}
        </ul>

        <MagneticLink
          as="button"
          onClick={() => scrollTo("contact")}
          className="hidden rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors hover:border-fg md:inline-block"
        >
          Start a project
        </MagneticLink>

        <button
          type="button"
          className="text-xs uppercase tracking-[0.15em] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-bg px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "text-lg uppercase tracking-[0.1em]",
                    active === link.id ? "text-fg" : "text-muted"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
