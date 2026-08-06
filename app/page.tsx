import Image from "next/image";

import { getPortfolioConfig } from "../lib/portfolio-config";
import { SiteHeader } from "./components/SiteHeader";

/** Figma 5795:17839 — highlight tile shell */
const HIGHLIGHT_CARD =
  "w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f7f6f4]";

/** Desktop tile heights — mobile overrides via max-lg: only */
const TILE_H = "h-[670px] max-lg:h-[395px]";
const TILE_H_SHORT = "h-[607px] max-lg:h-[358px]";

function HighlightSlot({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`${HIGHLIGHT_CARD} ${className} relative flex items-center justify-center`}>
      {children}
    </div>
  );
}

export default function Home() {
  const { homeIntro } = getPortfolioConfig();

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-[#15171c]">
      <SiteHeader />

      <main className="w-full">
        <section
          id="highlights"
          className="mx-auto max-w-[1440px] px-6 pb-16 pt-[41px] max-lg:px-4 max-lg:pt-6 lg:px-[100px]"
        >
          {/* Figma 5795:17839 — intro + 1240 grid */}
          <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-[24px] max-lg:gap-6">
            {/* Figma 5804:18284 */}
            <div className="flex w-full flex-col gap-6 text-[18px] font-normal leading-[26px] text-black sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <p className="max-w-[532px] shrink-0 max-lg:max-w-[361px]">{homeIntro}</p>
              <div className="flex w-full shrink-0 flex-col items-start gap-0 sm:w-[323px] sm:items-end max-lg:hidden">
                <p className="whitespace-nowrap">Selected work</p>
                <p className="text-[#838383] sm:text-right">2021-2026</p>
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
            {/* Row 1 — 612×670 + 612×670 */}
            <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
              <HighlightSlot className={TILE_H}>
                <Image
                  src="/images/highlights/row-1-left.jpg"
                  alt=""
                  width={1024}
                  height={374}
                  className="h-full w-full object-contain"
                  quality={100}
                  priority
                />
              </HighlightSlot>
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:17956 — 245×245, centered in tile */}
                <video
                  className="size-[245px] shrink-0 object-contain max-lg:size-[145px]"
                  width={245}
                  height={245}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781087792/holo-logo_zsqfdf.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781087792/holo-logo_zewfic.mp4"
                    type="video/mp4"
                  />
                </video>
              </HighlightSlot>
            </div>

            {/* Row 2 — 402×670 × 3 (was row 4) */}
            <div className="grid grid-cols-3 gap-[16px] max-lg:grid-cols-1">
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:17994 — flower icon 224×224, centered */}
                <Image
                  src="/images/highlights/row-4-left.png"
                  alt=""
                  width={672}
                  height={672}
                  className="size-[224px] shrink-0 object-contain max-lg:size-[201px]"
                  quality={100}
                />
              </HighlightSlot>
              <HighlightSlot className={`${TILE_H} max-lg:!items-end max-lg:!justify-end`}>
                {/* Figma 5814:21725 desktop; 5804:19027 mobile — phone flush bottom-right */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/highlights/row-4-middle.png"
                  alt=""
                  width={682}
                  height={1024}
                  className="absolute left-[70px] top-[62px] block h-auto w-auto max-lg:static max-lg:h-full max-lg:w-auto max-lg:max-w-none"
                  decoding="async"
                />
              </HighlightSlot>
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:18043 — cards, left 21px, vertically centered */}
                <Image
                  src="/images/highlights/row-4-right.png"
                  alt=""
                  width={937}
                  height={1024}
                  className="absolute left-[21px] top-[calc(50%-12px)] h-auto w-auto max-h-full max-w-[calc(100%-21px)] -translate-y-1/2 object-contain max-lg:static max-lg:max-h-[calc(100%-2rem)] max-lg:max-w-[calc(100%-2rem)] max-lg:translate-y-0"
                  quality={100}
                />
              </HighlightSlot>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:17975 — 258×297, centered */}
                <Image
                  src="/images/highlights/row-3-left.png"
                  alt=""
                  width={966}
                  height={1024}
                  className="h-[342px] w-[297px] shrink-0 object-contain max-lg:h-[210px] max-lg:w-[182px]"
                  quality={100}
                />
              </HighlightSlot>
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:17989 — +15% */}
                <video
                  className="h-[585px] w-[361px] shrink-0 object-contain max-lg:h-[300px] max-lg:w-[185px]"
                  width={361}
                  height={585}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781090751/watch-os_dirsxg.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781090750/watch-os_lwa75h.mp4"
                    type="video/mp4"
                  />
                </video>
              </HighlightSlot>
            </div>

            {/* Row 4 (was row 2) */}
            <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:17959 — 245×245, centered */}
                <Image
                  src="/images/highlights/row-2-left.png"
                  alt=""
                  width={991}
                  height={980}
                  className="size-[245px] shrink-0 object-contain max-lg:size-[145px]"
                  quality={100}
                />
              </HighlightSlot>
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:17968 — Frame 2147231770 at x:94 y:0, 529×670 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/highlights/row-2-right.png"
                  alt=""
                  width={1554}
                  height={2010}
                  className="absolute left-[94px] top-[-2%] block h-auto w-[529px] max-w-none max-lg:static max-lg:h-full max-lg:w-full max-lg:object-cover max-lg:object-center"
                  decoding="async"
                />
              </HighlightSlot>
            </div>

            {/* Row 5 — 612×607 + 612×607 */}
            <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
              <HighlightSlot className={TILE_H_SHORT}>
                {/* Figma 5795:18086 — 400×486 (20% smaller), phone flush to bottom */}
                <video
                  className="absolute bottom-0 left-1/2 block h-[535px] w-[440px] -translate-x-1/2 object-cover object-bottom max-lg:h-[293px] max-lg:w-[295px]"
                  width={440}
                  height={535}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781091044/thinking_jomvcr.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781091043/thinking_pryhgh.mp4"
                    type="video/mp4"
                  />
                </video>
              </HighlightSlot>
              <HighlightSlot className={`${TILE_H_SHORT} max-lg:hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/highlights/row-5-right.png"
                  alt=""
                  width={1836}
                  height={846}
                  className="block h-auto w-full"
                  decoding="async"
                />
              </HighlightSlot>
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
              <HighlightSlot className={TILE_H}>
                {/* Figma 5795:18094 — 479×588, centered */}
                <video
                  className="h-[588px] w-[479px] shrink-0 object-contain max-lg:h-[347px] max-lg:w-[282px]"
                  src="https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781091842/ai-scene_cdujgv.mp4"
                  width={479}
                  height={588}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </HighlightSlot>
              <HighlightSlot className={`${TILE_H} max-lg:hidden`}>
                {/* Figma 5795:18099 — Frame 2147231774, 50px from left (562×670 visible) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/highlights/row-6-right.png"
                  alt=""
                  width={1124}
                  height={1340}
                  className="absolute left-[50px] top-0 block h-auto w-[562px] max-w-none"
                  decoding="async"
                />
              </HighlightSlot>
            </div>

            {/* Row 7 — 1240×670 full width */}
            <HighlightSlot className={`${TILE_H} max-lg:hidden`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/highlights/row-7-full.png"
                alt=""
                width={2613}
                height={1710}
                className="absolute left-1/2 top-[100px] block h-auto w-[871px] max-w-none -translate-x-1/2"
                decoding="async"
              />
            </HighlightSlot>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
