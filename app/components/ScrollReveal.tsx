"use client";

import { useEffect } from "react";

export default function ScrollReveal({ selector }: { selector: string }) {
  useEffect(() => {
    const groups = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (groups.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      groups.forEach((group) => group.classList.add("is-in-view"));
      return;
    }

    groups.forEach((group) => group.classList.add("reveal-ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    groups.forEach((group) => observer.observe(group));
    return () => observer.disconnect();
  }, [selector]);

  return null;
}
