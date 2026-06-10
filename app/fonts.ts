import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    { path: "../public/fonts/geist/geist-sans-latin-100-normal.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-200-normal.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-300-normal.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-400-normal.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-500-normal.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-600-normal.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-700-normal.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-800-normal.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/geist/geist-sans-latin-900-normal.ttf", weight: "900", style: "normal" },
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
