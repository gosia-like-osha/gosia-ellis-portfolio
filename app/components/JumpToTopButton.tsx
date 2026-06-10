"use client";

import { useEffect, useState } from "react";

export function JumpToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollable > 0 && window.scrollY > scrollable * 0.2);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Jump to top"
      onClick={scrollToTop}
      className={`fixed bottom-10 right-4 z-[100] size-[44px] transition-opacity duration-200 lg:[right:max(116px,calc((100vw-1440px)/2+116px))] ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/jump-to-top.svg"
        alt=""
        width={44}
        height={44}
        className="block size-[44px]"
        decoding="async"
      />
    </button>
  );
}
