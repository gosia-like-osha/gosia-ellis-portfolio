import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    { path: "../public/fonts/geist/geist-sans-latin-400-normal.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-500-normal.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-600-normal.ttf", weight: "600", style: "normal" },
  ],
  display: "swap",
});

/** Figma 5795:18217 — GOSIA wordmark */
export const archivoExpanded = localFont({
  src: "../public/fonts/archivo-expanded/ArchivoExpanded-BlackItalic.ttf",
  weight: "900",
  style: "italic",
  display: "swap",
});
