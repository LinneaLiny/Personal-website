import Link from "next/link";

import { site } from "@/lib/site";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-foreground"
          >
            {site.name}
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
