import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-2xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          The page you&apos;re looking for may have been moved or removed.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
