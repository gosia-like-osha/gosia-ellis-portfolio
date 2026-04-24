import { StickyPillNav } from "./components/StickyPillNav";
import { HighlightVideoCard } from "./components/HighlightVideoCard";

/** Square highlight clips — intrinsic 1080×1080, scaled/centered in card (Figma). */
const HIGHLIGHT_VIDEO_DIMS = { width: 1080, height: 1080 } as const;

/** Figma 4664:71153 — last tile on the right in the penultimate highlights row (701×506). */
const HIGHLIGHT_ROW4_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1777012423/barry-nr_qk79l2.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1777012423/barry-nr_r9gfxw.mp4",
} as const;

/** Figma 4640:71101 — row 1 left (466×532), AI image clip. */
const HIGHLIGHT_ROW1_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1776428392/imagechange_nsrmtb.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1776428392/imagechange_rmox78.mp4",
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
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1776157520/sport-widget_da2fw5.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1776157515/sport-widget_vlp5bg.mp4",
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
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW1_RIGHT.webm}
                mp4={HIGHLIGHT_ROW1_RIGHT.mp4}
                heightClass="h-[532px]"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>

            {/* Row 2 */}
            <div className="lg:col-span-8">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW2_LEFT.webm}
                mp4={HIGHLIGHT_ROW2_LEFT.mp4}
                heightClass="h-[643px]"
                videoClassName="translate-y-[5%] lg:scale-[0.945]"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>
            <div className="lg:col-span-4">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW2_RIGHT.webm}
                mp4={HIGHLIGHT_ROW2_RIGHT.mp4}
                heightClass="h-[643px]"
                verticalAlign="bottom"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>

            {/* Row 3 */}
            <div className="lg:col-span-7">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW3_LEFT.webm}
                mp4={HIGHLIGHT_ROW3_LEFT.mp4}
                heightClass="h-[506px]"
                fillContainerHeight
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>
            <div className="lg:col-span-5">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW3_RIGHT.webm}
                mp4={HIGHLIGHT_ROW3_RIGHT.mp4}
                heightClass="h-[506px]"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>

            {/* Row 4 */}
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW4_LEFT.webm}
                mp4={HIGHLIGHT_ROW4_LEFT.mp4}
                heightClass="h-[506px]"
                verticalAlign="top"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW4_RIGHT.webm}
                mp4={HIGHLIGHT_ROW4_RIGHT.mp4}
                heightClass="h-[506px]"
                videoScaleClass="scale-[1.2075]"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>

            {/* Row 5 — same column widths as row 4 (lg:col-span-6 + lg:col-span-6) */}
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW5_LEFT.webm}
                mp4={HIGHLIGHT_ROW5_LEFT.mp4}
                heightClass="h-[506px]"
                verticalAlign="bottom"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>
            <div className="lg:col-span-6">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW5_RIGHT.webm}
                mp4={HIGHLIGHT_ROW5_RIGHT.mp4}
                heightClass="h-[506px]"
                videoScaleClass="scale-[1.21]"
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
