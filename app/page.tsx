import { HighlightImageCard } from "./components/HighlightImageCard";
import { StickyPillNav } from "./components/StickyPillNav";
import { HighlightVideoCard } from "./components/HighlightVideoCard";

import plentiPageImage from "../public/images/highlights/plenti-page.png";
import mapImage from "../public/images/highlights/map.png";
import savedImage from "../public/images/highlights/saved.png";
import liveActivitiesImage from "../public/images/highlights/live-activities.png";
import bikerideImage from "../public/images/highlights/bikeride.png";
import colorPaletteImage from "../public/images/highlights/color-palette.png";
import barryIconImage from "../public/images/highlights/barry-icon.png";
import iconsImage from "../public/images/highlights/icons.png";
import invoicesImage from "../public/images/highlights/invoices.png";
import overviewImage from "../public/images/highlights/overview.png";
import row1RightImage from "../public/images/highlights/1strow-right.png";

/** Square highlight clips — intrinsic 1080×1080, scaled/centered in card (Figma). */
const HIGHLIGHT_VIDEO_DIMS = { width: 1080, height: 1080 } as const;

/** Row 1 left (758×532). */
const HIGHLIGHT_ROW1_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780158305/1st-left_gbabkm.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780158305/1st-left_kmayhz.mp4",
} as const;

/** Row 4 left (466×532). */
const HIGHLIGHT_ROW4_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780158881/image-ai-change_c2ysti.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780158881/image-ai-change_gt1vxi.mp4",
} as const;
/** Row 5 right (612×532). */
const HIGHLIGHT_ROW5_RIGHT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780158880/bike-widget_zljg1v.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780158880/bike-widget_zljg1v.mp4",
} as const;
/** Row 8 left (612×532). */
const HIGHLIGHT_ROW8_LEFT = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780160306/cph-live_akgxgy.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1780160306/cph-live_lvkl8t.mp4",
} as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-[#15171c]">
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
            {/* Row 1 — Figma 4640:71099: 758×532 + 466×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,758fr)_minmax(0,466fr)]">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW1_LEFT.webm}
                mp4={HIGHLIGHT_ROW1_LEFT.mp4}
                heightClass="h-[522px]"
                desktopScale={1.155}
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
              <HighlightImageCard
                src={row1RightImage}
                alt="Live Transcribe highlight"
                heightClass="h-[522px]"
                width={1263}
                height={960}
              />
            </div>

            {/* Row 2 — Figma 5285:83567: 612×532 + 612×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-2">
              <HighlightImageCard
                src={invoicesImage}
                alt="Invoices highlight"
                heightClass="h-[532px]"
                width={1362}
                height={675}
                verticalAlign="center"
                imageClassName="sm:max-w-[454px]"
              />
              <HighlightImageCard
                src={overviewImage}
                alt="Overview highlight"
                heightClass="h-[532px]"
                width={1148}
                height={1166}
                verticalAlign="center"
                imageClassName="sm:max-w-[320px]"
              />
            </div>

            {/* Row 3 — Figma 5264:65646: 612×532 + 612×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-2">
              <HighlightImageCard
                src={iconsImage}
                alt="App icons highlight"
                heightClass="h-[532px]"
                width={996}
                height={648}
                verticalAlign="center"
                imageClassName="sm:max-w-[332px]"
              />
              <HighlightImageCard
                src={barryIconImage}
                alt="Barry Energy app highlight"
                heightClass="h-[532px]"
                width={1500}
                height={1356}
                verticalAlign="top-edge"
                imageClassName="sm:max-w-[500px]"
              />
            </div>

            {/* Row 4 — Figma 5282:82009: 466×532 + 758×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,466fr)_minmax(0,758fr)]">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW4_LEFT.webm}
                mp4={HIGHLIGHT_ROW4_LEFT.mp4}
                heightClass="h-[532px]"
                desktopScale={1.242}
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
              <HighlightImageCard
                src={colorPaletteImage}
                alt="AI color palette interface highlight"
                heightClass="h-[532px]"
                width={2244}
                height={1497}
                verticalAlign="top-edge"
                imageClassName="sm:max-w-[748px]"
              />
            </div>

            {/* Row 5 — Figma 5285:83263: 612×532 + 612×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,612fr)_minmax(0,612fr)]">
              <HighlightImageCard
                src={bikerideImage}
                alt="Morning bike ride highlight"
                heightClass="h-[532px]"
                width={955}
                height={997}
                verticalAlign="center"
                imageClassName="sm:max-w-[304px]"
              />
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW5_RIGHT.webm}
                mp4={HIGHLIGHT_ROW5_RIGHT.mp4}
                heightClass="h-[532px]"
                desktopScale={1.05}
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
            </div>

            {/* Row 6 — Figma 5285:166310: 1240×636 full-width */}
            <div className="col-span-full">
              <HighlightImageCard
                src={plentiPageImage}
                alt="Plenti landing page highlight"
                heightClass="h-[636px]"
                width={2532}
                height={1489}
                verticalAlign="center"
                imageClassName="sm:max-w-[844px]"
              />
            </div>

            {/* Row 7 — Figma 5298:182458: 612×532 + 612×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,612fr)_minmax(0,612fr)]">
              <HighlightImageCard
                src={mapImage}
                alt="Ready for pickup map highlight"
                heightClass="h-[532px]"
                width={1299}
                height={842}
                verticalAlign="center"
                imageClassName="sm:max-w-[370px]"
              />
              <HighlightImageCard
                src={savedImage}
                alt="Saved folder highlight"
                heightClass="h-[532px]"
                width={855}
                height={885}
                verticalAlign="center"
                imageClassName="sm:max-w-[285px]"
              />
            </div>

            {/* Row 8 — 612×532 + 612×532 (gap 16) */}
            <div className="col-span-full grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,612fr)_minmax(0,612fr)]">
              <HighlightVideoCard
                webm={HIGHLIGHT_ROW8_LEFT.webm}
                mp4={HIGHLIGHT_ROW8_LEFT.mp4}
                heightClass="h-[532px]"
                verticalAlign="top"
                desktopScale={1.05}
                dims={HIGHLIGHT_VIDEO_DIMS}
              />
              <HighlightImageCard
                src={liveActivitiesImage}
                alt="Live Activities highlight"
                heightClass="h-[532px]"
                width={846}
                height={1280}
                verticalAlign="center"
                imageClassName="sm:max-w-[282px]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
