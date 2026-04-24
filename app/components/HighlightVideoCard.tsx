"use client";

import { useEffect, useRef } from "react";

/** Larger video transform below `sm` (640px); from `sm` up matches existing desktop scale. */
function responsiveVideoScale(desktopScaleClass: string): string {
  switch (desktopScaleClass) {
    case "scale-105":
      return "scale-[1.26] sm:scale-105";
    case "scale-[1.15]":
      return "scale-[1.38] sm:scale-[1.15]";
    case "scale-[1.21]":
      return "scale-[1.45] sm:scale-[1.21]";
    /** Barry row — 105% × 115%. */
    case "scale-[1.2075]":
      return "scale-[1.449] sm:scale-[1.2075]";
    default:
      return `scale-[1.26] sm:${desktopScaleClass}`;
  }
}

export function HighlightVideoCard({
  webm,
  mp4,
  heightClass,
  verticalAlign = "center",
  videoClassName = "",
  videoScaleClass = "scale-105",
  /** Video scales to full card height; horizontally centered (wide clips crop evenly). */
  fillContainerHeight = false,
  dims = { width: 1080, height: 1080 },
}: {
  webm: string;
  mp4: string;
  heightClass: string;
  /** `bottom` / `top` = horizontal center, video flush to that edge of card (no padding on that edge). */
  verticalAlign?: "center" | "bottom" | "top";
  /** Extra classes on the `<video>` (e.g. positioning nudges). */
  videoClassName?: string;
  /** Tailwind scale on the `<video>` (default 105%). */
  videoScaleClass?: string;
  fillContainerHeight?: boolean;
  dims?: { width: number; height: number };
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const alignClass = fillContainerHeight
    ? "items-center justify-center"
    : verticalAlign === "bottom"
      ? "items-end justify-center"
      : verticalAlign === "top"
        ? "items-start justify-center"
        : "items-center justify-center";
  const originClass =
    verticalAlign === "bottom"
      ? "origin-bottom"
      : verticalAlign === "top"
        ? "origin-top"
        : "origin-center";
  const paddingClass = fillContainerHeight
    ? "p-0"
    : verticalAlign === "bottom"
      ? "px-10 pt-8 pb-0"
      : verticalAlign === "top"
        ? "px-10 pb-8 pt-0"
        : "px-10 py-8";

  const videoClass = fillContainerHeight
    ? `h-auto max-h-full w-auto max-w-full shrink-0 object-contain origin-center lg:h-full lg:w-auto lg:max-w-none ${videoClassName}`.trim()
    : `h-auto max-h-full w-auto max-w-full shrink-0 object-contain ${responsiveVideoScale(videoScaleClass)} ${originClass} ${videoClassName}`.trim();

  useEffect(() => {
    // Browsers can keep playing a previous source even if <source src> changes.
    // Force a reload when the incoming sources change.
    const el = videoRef.current;
    if (!el) return;
    el.load();
  }, [webm, mp4]);

  return (
    <div
      className={`flex w-full overflow-hidden rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-[#f7f7f9] ${paddingClass} ${alignClass} ${heightClass}`}
    >
      <video
        key={`${webm}|${mp4}`}
        ref={videoRef}
        width={dims.width}
        height={dims.height}
        className={videoClass}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source key={webm} src={webm} type="video/webm" />
        <source key={mp4} src={mp4} type="video/mp4" />
      </video>
    </div>
  );
}

