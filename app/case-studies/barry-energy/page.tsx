import Image from "next/image";

import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";
import { StickyPillNav } from "../../components/StickyPillNav";

const ICONS_BARRY_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781094685/icons-barry_xv4eap.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781094685/icons-barry_kfo7ag.mp4",
} as const;

/** Clip frame at exact Figma x/y/w/h inside a 612×670 tile */
function FigmaFrame({
  left,
  top,
  width,
  height,
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="pointer-events-none absolute overflow-hidden"
      style={{ left, top, width, height }}
    >
      {children}
    </div>
  );
}

/** Figma 5412:73966 — 1240×670 hero shell */
function HeroTile({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.1)] bg-[#fcfcfc]">
      {children}
    </div>
  );
}

/** Figma 5412:73932 — 612×670 tile shell */
function MockupTile({
  children,
  empty = false,
}: {
  children?: React.ReactNode;
  empty?: boolean;
}) {
  return (
    <div className="relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f7f6f4]">
      {empty ? null : children}
    </div>
  );
}

/** Figma 5412:73866 — NEW BARRY */
export default function BarryEnergyCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />
      <StickyPillNav activeTab="case-studies" />

      <main className="w-full pb-16 max-sm:pb-[calc(4rem+110px+env(safe-area-inset-bottom,0px))]">
        {/* Intro — Figma 5412:73924 + 5526:71212 */}
        <section className="mx-auto max-w-[1440px] px-6 pt-[80px] lg:px-[100px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[219px] gap-y-[48px] lg:grid-cols-[444px_577px] lg:items-start">
            <div className="flex flex-col gap-[24px] uppercase">
              <h1 className="text-[42px] font-medium leading-[50px]">Barry energy</h1>
              <div className="flex flex-col gap-[5px] text-[18px] font-normal leading-[27px]">
                <p>Role: LEAD UI DESIGNER</p>
                <p className="text-[#999]">vISUAL IDENTITY, UI DESIGN, ILLUSTRATION</p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[42px] font-medium uppercase leading-[50px] tracking-[0.042px]">
                Smarter EV charging
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Problem</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    Barry Energy already had a clear brand - bold, green, and futuristic. The challenge
                    was bringing that feeling into the product itself. Not just keeping things visually
                    consistent, but making colours, icons, and interaction feel like part of the same
                    story.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Approach</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    We introduced a functional color system across the interface to support faster
                    interpretation of key data. We mapped every interaction to this system, price
                    information used a green-to-red gradient, while EV charging was always shown in
                    blue. Usage graphs inherited these meanings. Suddenly, users could scan the screen
                    and understand the current state at a glance.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">RESULT</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    User testing post-launch showed a clear shift. In comprehension tests, 82% of users
                    could accurately explain what they were seeing and why it mattered, compared with 71%
                    before. We also saw a 27% increase in users actively using price-based controls to
                    adjust their consumption patterns, proving the design was not just clearer, but also
                    actionable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 5529:72098 */}
        <section className="mx-auto mt-[64px] max-w-[1440px] px-6 lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Row 1 — hero */}
            <HeroTile>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/barry/case-study/hero.png"
                alt="Barry Energy hero"
                width={1024}
                height={553}
                className="block h-auto w-full"
                decoding="async"
                fetchPriority="high"
              />
            </HeroTile>

            {/* Row 2 — Figma 5430:81471 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/barry/case-study/row-2-iphone-15.png"
                  alt="Barry Energy payments on iPhone"
                  width={935}
                  height={1024}
                  className="block h-auto w-full"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile empty />
            </div>

            {/* Row 3 — Figma 5671:13958 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* Figma 5671:13969: x:106 y:135 400×400 */}
                <video
                  className="absolute left-[106px] top-[135px] block h-[400px] w-[400px] max-w-none"
                  width={400}
                  height={400}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={ICONS_BARRY_VIDEO.webm} type="video/webm" />
                  <source src={ICONS_BARRY_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
              <MockupTile>
                {/* Figma 5818:21970: x:101 y:200 411×309 */}
                <FigmaFrame left={101} top={200} width={411} height={309}>
                  <Image
                    src="/images/barry/case-study/row-3-referral.png"
                    alt="Barry Energy referral UI"
                    width={1233}
                    height={927}
                    unoptimized
                    quality={100}
                    className="block h-auto w-[411px] max-w-none"
                    sizes="411px"
                  />
                </FigmaFrame>
              </MockupTile>
            </div>

            {/* Row 4 — Figma 5671:13999 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* Figma 5671:14113: x:130 y:220 352×229 */}
                <FigmaFrame left={130} top={220} width={352} height={229}>
                  <Image
                    src="/images/barry/case-study/row-4-icons.png"
                    alt="Barry Energy transaction icons"
                    width={1056}
                    height={688}
                    unoptimized
                    quality={100}
                    className="block h-auto w-[352px] max-w-none"
                    sizes="352px"
                  />
                </FigmaFrame>
              </MockupTile>
              <MockupTile>
                {/* Figma 5818:76403: x:81, 450px wide — flush to top, no crop offset */}
                <Image
                  src="/images/barry/case-study/row-4-payments.png"
                  alt="Barry Energy payments transactions screen"
                  width={836}
                  height={1024}
                  unoptimized
                  quality={100}
                  className="ml-[81px] block h-auto w-[450px] max-w-none"
                  sizes="450px"
                />
              </MockupTile>
            </div>

            {/* Row 5 — Figma 5671:14212 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/barry/case-study/row-5-tesla.png"
                  alt="Barry Energy Tesla connect screen in car"
                  width={935}
                  height={1024}
                  className="block h-auto w-full"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile>
                {/* Figma 5818:22023: x:61 y:181 514×227 */}
                <FigmaFrame left={61} top={181} width={514} height={227}>
                  <Image
                    src="/images/barry/case-study/row-5-notifications.png"
                    alt="Barry Energy charging notification"
                    width={1542}
                    height={681}
                    unoptimized
                    quality={100}
                    className="block h-auto w-[514px] max-w-none"
                    sizes="514px"
                  />
                </FigmaFrame>
              </MockupTile>
            </div>

            {/* Row 6 — Figma 5671:14341 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* Figma 5671:14382: x:95, 422px wide — flush to bottom */}
                <Image
                  src="/images/barry/case-study/row-6-preferences.png"
                  alt="Barry Energy charging preferences"
                  width={1266}
                  height={1800}
                  unoptimized
                  quality={100}
                  className="absolute bottom-0 left-[95px] block h-auto w-[422px] max-w-none"
                  sizes="422px"
                />
              </MockupTile>
              <MockupTile>
                {/* Figma 5671:14391: x:95, 422px wide — flush to bottom */}
                <Image
                  src="/images/barry/case-study/row-6-charging.png"
                  alt="Barry Energy schedule smart charging"
                  width={1266}
                  height={1800}
                  unoptimized
                  quality={100}
                  className="absolute bottom-0 left-[95px] block h-auto w-[422px] max-w-none"
                  sizes="422px"
                />
              </MockupTile>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
