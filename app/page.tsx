import Link from "next/link";

import { AnimateIn } from "@/components/AnimateIn";
import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="py-12 lg:py-16">
      <Container>
        {/* Hero — larger on desktop */}
        <section className="pb-12 pt-4 lg:pb-20 lg:pt-8">
          <AnimateIn>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-6xl">
              {site.name}
            </h1>
            <ul className="mt-6 flex flex-col gap-y-1 text-sm text-muted lg:mt-8 lg:text-base">
              {site.heroFunFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
            <div className="mt-8 lg:mt-10">
              <SocialLinks />
            </div>
          </AnimateIn>
        </section>

        {/* Horizontal scroll highlights — full-bleed inner, scroll-snap */}
        <section className="relative -mx-6 mb-16 lg:-mx-12 xl:-mx-16">
          <div className="overflow-x-auto overscroll-x-contain scroll-smooth px-6 lg:px-12 xl:px-16 [scroll-snap-type:x_mandatory]">
            <ul className="flex gap-4 pb-2 lg:gap-6">
              {site.highlights.map((item) => (
                <li
                  key={item.href}
                  className="min-w-[280px] shrink-0 [scroll-snap-align:start] lg:min-w-[320px]"
                >
                  <Link
                    href={item.href}
                    className="block rounded-2xl border border-border bg-card p-6 backdrop-blur transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="font-medium tracking-tight text-foreground">
                      {item.title}
                    </span>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-border py-12 lg:py-20"
        >
          <AnimateIn>
            <h2 className="text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
              About
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-pretty leading-7 text-muted lg:mt-10 lg:max-w-4xl lg:space-y-8 lg:leading-8 xl:max-w-none">
              {site.aboutIntro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 border-t border-border py-12 lg:py-20"
        >
          <AnimateIn>
            <h2 className="text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
              Projects
            </h2>
            <p className="mt-3 text-sm text-muted lg:mt-4">
              Selected work and side projects
            </p>
            <div className="mt-8 grid gap-5 lg:mt-10 lg:gap-6">
              {site.projects.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-border bg-card p-6 backdrop-blur transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-foreground/15"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium tracking-tight text-foreground">
                        {p.name}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted lg:mt-3">
                        {p.description}
                      </p>
                    </div>
                    <span className="text-muted transition-colors group-hover:text-foreground">
                      ↗
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-foreground/8 px-3 py-1 text-xs text-foreground/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-border py-12 lg:py-20"
        >
          <AnimateIn>
            <h2 className="text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
              Contact
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-7 text-muted lg:mt-8 lg:leading-8">
              The easiest way to reach me is by email at{" "}
              <a
                className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              .
            </p>
          </AnimateIn>
        </section>
      </Container>
    </div>
  );
}