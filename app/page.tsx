import { StickyPillNav } from "./components/StickyPillNav";

/** Square highlight clips — intrinsic 1080×1080, scaled/centered in card (Figma). */
const HIGHLIGHT_VIDEO_DIMS = { width: 1080, height: 1080 } as const;

/** Figma 4664:71153 — last tile on the right in the penultimate highlights row (701×506). */
const HIGHLIGHT_ROW4_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758084/barry-web_qjyuvu.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758084/barry-mp_uhhnsz.mp4",
} as const;

/** Figma 4640:71113 — row 1 right (791×532). */
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

/** Figma 4664:71163 — bottom row, left tile (625×506). */
const HIGHLIGHT_ROW5_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758085/feed-web_jj7wrx.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1775758087/feed-mp_nygr86.mp4",
} as const;

function HighlightVideoCard({
  webm,
  mp4,
  heightClass,
  verticalAlign = "center",
}: {
  webm: string;
  mp4: string;
  heightClass: string;
  /** `bottom` / `top` = horizontal center, video flush to that edge of card (no padding on that edge). */
  verticalAlign?: "center" | "bottom" | "top";
}) {
  const alignClass =
    verticalAlign === "bottom"
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
  const paddingClass =
    verticalAlign === "bottom"
      ? "px-10 pt-8 pb-0"
      : verticalAlign === "top"
        ? "px-10 pb-8 pt-0"
        : "px-10 py-8";

  return (
    <div
      className={`flex w-full overflow-hidden rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-[#f7f7f9] ${paddingClass} ${alignClass} ${heightClass}`}
    >
      <video
        width={HIGHLIGHT_VIDEO_DIMS.width}
        height={HIGHLIGHT_VIDEO_DIMS.height}
        className={`h-auto max-h-full w-auto max-w-full shrink-0 scale-105 object-contain ${originClass}`}
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
          <div className="pt-[6px] text-[31px] tracking-[-0.31px] font-semibold leading-[1.3] whitespace-nowrap">
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
            {/* Row 1 */}
            <div className="lg:col-span-4">
              <div className="h-[532px] w-full rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-[#f7f7f9]" />
            </div>
            <div className="lg:col-span-8">
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
              <div className="h-[506px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
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
              />
            </div>

            {/* Row 5 — Figma 4664:71163 (625×506) */}
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW5_LEFT.webm}
                mp4={HIGHLIGHT_ROW5_LEFT.mp4}
                heightClass="h-[506px]"
                verticalAlign="bottom"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
