import { MagneticLink } from "@/components/ui/MagneticLink";
import { site } from "@/data/site";

/** Minimal closing footer: profile links, location, and copyright. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-10 text-xs uppercase tracking-[0.15em] text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {year} {site.name}. {site.company}.
        </p>

        <ul className="flex gap-6">
          <li>
            <MagneticLink href={site.upworkUrl} className="hover:text-fg">
              Upwork
            </MagneticLink>
          </li>
          <li>
            <MagneticLink href={site.linkedinUrl} className="hover:text-fg">
              LinkedIn
            </MagneticLink>
          </li>
          <li>
            <MagneticLink href={`mailto:${site.email}`} className="hover:text-fg">
              Email
            </MagneticLink>
          </li>
        </ul>

        <p>{site.location}</p>
      </div>
    </footer>
  );
}
