"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.documentElement.classList.add("motion-ready");

    if (reduceMotion) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealTargets.forEach((target) => observer.observe(target));

    const intro = document.querySelector<HTMLElement>(".intro-section");
    const space = document.querySelector<HTMLElement>(".space-section");
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const scrollTop = window.scrollY;
      intro?.style.setProperty(
        "--cosmic-parallax",
        `${Math.min(scrollTop * 0.14, 260)}px`,
      );

      if (space) {
        const rect = space.getBoundingClientRect();
        const progress = Math.max(
          -260,
          Math.min(260, (window.innerHeight * 0.5 - rect.top) * 0.1),
        );
        space.style.setProperty("--cosmic-parallax", `${progress}px`);
      }
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
