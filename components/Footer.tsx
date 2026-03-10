import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-14">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
