"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
};

export function AnimateIn({ children, className = "" }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 [&[data-visible=true]]:animate-in [&[data-visible=true]]:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}
