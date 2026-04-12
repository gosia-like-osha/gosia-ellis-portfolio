import { StickyPillNav } from "./components/StickyPillNav";

/** Square highlight clips — intrinsic 1080×1080, scaled/centered in card (Figma). */
const HIGHLIGHT_VIDEO_DIMS = { width: 1080, height: 1080 } as const;

/** Figma 4664:71153 — last tile on the right in the penultimate highlights row (701×506). */
const HIGHLIGHT_ROW4_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758084/barry-web_qjyuvu.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758084/barry-mp_uhhnsz.mp4",
} as const;

/** Figma 4640:71101 — row 1 left (466×532), AI image clip. */
const HIGHLIGHT_ROW1_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775930943/ai-image_quelqp.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775930925/ai-image_zqymrw.mp4",
} as const;

/** Figma 4640:71113 — row 1 right (758×532). */
const HIGHLIGHT_ROW1_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758089/transcript-web_kn43jp.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758089/transcript-mp_mlxbxa.mp4",
} as const;

/** Figma 4664:71136 — row 2 left (803×643). */
const HIGHLIGHT_ROW2_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758085/ai-create-web_cj393k.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758084/ai-create-mp_ht3llk.mp4",
} as const;

/** Figma 4640:71124 — row 2 right (421×643). */
const HIGHLIGHT_ROW2_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758094/monthly-web_qobnwt.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758094/monthly-mp_ubaial.mp4",
} as const;

/** Row 3 left (lg:col-span-7) — AI invoice clip, full card height, centered. */
const HIGHLIGHT_ROW3_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775991852/ai-invoice_lni3cr.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775991852/ai-invoice_kzcgz5.mp4",
} as const;

/** Figma 4664:71141 — row 3 right (545×506), above Barry. */
const HIGHLIGHT_ROW3_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758089/widget-web_fmie0z.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758088/widget-mp_l76go4.mp4",
} as const;

/** Figma 4664:71150 — row 4 left (523×506), left of Barry. */
const HIGHLIGHT_ROW4_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758086/Live-Activities-web_uol1fe.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758086/Live-Activities-mp_mxwbii.mp4",
} as const;

/** Figma 4664:71163 — bottom row left, feed clip. */
const HIGHLIGHT_ROW5_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758085/feed-web_jj7wrx.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758087/feed-mp_nygr86.mp4",
} as const;

/** Bottom row right — data graphs clip. */
const HIGHLIGHT_ROW5_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775932100/data-graphs_yydbxr.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775932116/data-graphs_fy8dcf.mp4",
} as const;

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

function HighlightVideoCard({
  webm,
  mp4,
  heightClass,
  verticalAlign = "center",
  videoClassName = "",
  videoScaleClass = "scale-105",
  /** Video scales to full card height; horizontally centered (wide clips crop evenly). */
  fillContainerHeight = false,
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
}) {
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

  return (
    <div
      className={`flex w-full overflow-hidden rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-[#f7f7f9] ${paddingClass} ${alignClass} ${heightClass}`}
    >
      <video
        width={HIGHLIGHT_VIDEO_DIMS.width}
        height={HIGHLIGHT_VIDEO_DIMS.height}
        className={videoClass}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#15171c]">
      <StickyPillNav activeTab="highlights" />

      <header className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[28px] flex items-start justify-between gap-6">
          <div className="pt-[6px] text-[28px] tracking-[-0.28px] font-semibold leading-[1.3] whitespace-nowrap sm:text-[31px] sm:tracking-[-0.31px]">
            Gosia Ellis
          </div>
        </div>
      </header>

      <main className="w-full">
        <section
          id="highlights"
          className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[41px] pb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Row 1 — Figma 4640:71099: 466×532 + 758×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,466fr)_minmax(0,758fr)]">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW1_LEFT.webm}
                mp4={HIGHLIGHT_ROW1_LEFT.mp4}
                heightClass="h-[532px]"
                videoScaleClass="scale-[1.15]"
              />
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW1_RIGHT.webm}
                mp4={HIGHLIGHT_ROW1_RIGHT.mp4}
                heightClass="h-[532px]"
              />
            </div>

            {/* Row 2 */}
            <div className="lg:col-span-8">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW2_LEFT.webm}
                mp4={HIGHLIGHT_ROW2_LEFT.mp4}
                heightClass="h-[643px]"
                videoClassName="translate-y-[5%]"
              />
            </div>
            <div className="lg:col-span-4">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW2_RIGHT.webm}
                mp4={HIGHLIGHT_ROW2_RIGHT.mp4}
                heightClass="h-[643px]"
                verticalAlign="bottom"
              />
            </div>

            {/* Row 3 */}
            <div className="lg:col-span-7">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW3_LEFT.webm}
                mp4={HIGHLIGHT_ROW3_LEFT.mp4}
                heightClass="h-[506px]"
                fillContainerHeight
              />
            </div>
            <div className="lg:col-span-5">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW3_RIGHT.webm}
                mp4={HIGHLIGHT_ROW3_RIGHT.mp4}
                heightClass="h-[506px]"
              />
            </div>

            {/* Row 4 */}
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW4_LEFT.webm}
                mp4={HIGHLIGHT_ROW4_LEFT.mp4}
                heightClass="h-[506px]"
                verticalAlign="top"
              />
            </div>
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW4_RIGHT.webm}
                mp4={HIGHLIGHT_ROW4_RIGHT.mp4}
                heightClass="h-[506px]"
                videoScaleClass="scale-[1.2075]"
              />
            </div>

            {/* Row 5 — same column widths as row 4 (lg:col-span-6 + lg:col-span-6) */}
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW5_LEFT.webm}
                mp4={HIGHLIGHT_ROW5_LEFT.mp4}
                heightClass="h-[506px]"
                verticalAlign="bottom"
              />
            </div>
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW5_RIGHT.webm}
                mp4={HIGHLIGHT_ROW5_RIGHT.mp4}
                heightClass="h-[506px]"
                videoScaleClass="scale-[1.21]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
