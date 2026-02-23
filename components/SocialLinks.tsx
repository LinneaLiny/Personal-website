import { site } from "@/lib/site";

const items = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "X", href: site.links.x },
  { label: "Email", href: `mailto:${site.email}` },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      {items
        .filter((x) => x.href && !x.href.startsWith("https://example.com"))
        .map((item) => (
          <a
            key={item.label}
            className="text-muted transition-colors hover:text-foreground"
            href={
              item.href?.startsWith("http") ? item.href : `https://${item.href}`
            }
            target="_blank"
            rel="noreferrer"
          >
            {item.label}
          </a>
        ))}
    </div>
  );
}
