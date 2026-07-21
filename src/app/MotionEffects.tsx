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
    const discoveries = document.querySelector<HTMLElement>(
      ".discoveries-section",
    );
    const tiltTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );
    const ambientTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".ambient-sculpture"),
    );
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

      if (discoveries) {
        const rect = discoveries.getBoundingClientRect();
        const progress = Math.max(
          -90,
          Math.min(90, (window.innerHeight * 0.5 - rect.top) * 0.035),
        );
        discoveries.style.setProperty("--discovery-scroll", `${progress}px`);
      }
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const tiltCleanups = tiltTargets.map((target) => {
      const handlePointerMove = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        target.style.setProperty("--tilt-x", `${y * -10}deg`);
        target.style.setProperty("--tilt-y", `${x * 12}deg`);
      };

      const resetTilt = () => {
        target.style.setProperty("--tilt-x", "0deg");
        target.style.setProperty("--tilt-y", "0deg");
      };

      target.addEventListener("pointermove", handlePointerMove);
      target.addEventListener("pointerleave", resetTilt);

      return () => {
        target.removeEventListener("pointermove", handlePointerMove);
        target.removeEventListener("pointerleave", resetTilt);
      };
    });

    const handleDiscoveryPointer = (event: PointerEvent) => {
      if (!discoveries) return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      const factors = [-34, 48, -58];

      ambientTargets.forEach((target, index) => {
        const factor = factors[index] ?? 32;
        target.style.setProperty("--depth-x", `${x * factor}px`);
        target.style.setProperty("--depth-y", `${y * Math.abs(factor) * 0.72}px`);
      });
    };

    const resetDiscoveryPointer = () => {
      ambientTargets.forEach((target) => {
        target.style.setProperty("--depth-x", "0px");
        target.style.setProperty("--depth-y", "0px");
      });
    };

    discoveries?.addEventListener("pointermove", handleDiscoveryPointer);
    discoveries?.addEventListener("pointerleave", resetDiscoveryPointer);

    return () => {
      observer.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      discoveries?.removeEventListener("pointermove", handleDiscoveryPointer);
      discoveries?.removeEventListener("pointerleave", resetDiscoveryPointer);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
