import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="py-14">
      <Container>
        <section className="py-10">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {site.name}
          </h1>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            {site.heroFunFacts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 border-t border-border py-10"
        >
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            About
          </h2>
          <div className="mt-3 max-w-2xl space-y-4 text-pretty leading-7 text-muted">
            {site.aboutIntro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-20 border-t border-border py-10"
        >
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mt-2 text-sm text-muted">
            Selected work and side projects
          </p>
          <div className="mt-6 grid gap-4">
            {site.projects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-card p-5 backdrop-blur transition-colors hover:bg-card/90"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium tracking-tight text-foreground">
                      {p.name}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {p.description}
                    </p>
                  </div>
                  <span className="text-sm text-muted transition-colors group-hover:text-foreground">
                    ↗
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
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
        </section>

        <section
          id="contact"
          className="scroll-mt-20 border-t border-border py-10"
        >
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-7 text-muted">
            The easiest way to reach me is by email at{" "}
            <a
              className="text-foreground underline underline-offset-4 hover:opacity-80"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            .
          </p>
        </section>
      </Container>
    </div>
  );
}
