import { redirect } from "next/navigation";

import { isCaseStudyVisible } from "../../../lib/portfolio-config";
import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";

const NUMBERS_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781093938/numbers_eueivc.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781093938/numbers_o4vfsy.mp4",
} as const;

const SEARCH_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781108143/search_tzgzti.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781108146/search_x5zbaz.mp4",
} as const;

/** Clip frame at exact Figma x/y/w/h inside a tile; optional mobile clip (5804:20871) */
function FigmaFrame({
  left,
  top,
  width,
  height,
  mobile,
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  mobile?: {
    left?: number;
    top: number;
    width: number;
    height: number;
    center?: boolean;
  };
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute overflow-hidden max-lg:hidden"
        style={{ left, top, width, height }}
      >
        {children}
      </div>
      {mobile ? (
        <div
          className="pointer-events-none absolute overflow-hidden lg:hidden"
          style={{
            top: mobile.top,
            width: mobile.width,
            height: mobile.height,
            ...(mobile.center
              ? { left: "50%", transform: "translateX(-50%)" }
              : { left: mobile.left }),
          }}
        >
          {children}
        </div>
      ) : null}
    </>
  );
}

/** Figma 5430:81606 — 1240×670 hero shell */
function HeroTile({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#fcfcfc] max-lg:h-[395px] ${className}`}
    >
      {children}
    </div>
  );
}

/** Figma 5771:16657 — 1240×670 full-width mockup shell */
function FullWidthTile({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f7f6f4] max-lg:h-[395px] ${className}`}
    >
      {children}
    </div>
  );
}

/** Figma 5430:81613 — 612×670 tile shell */
function MockupTile({
  children,
  empty = false,
  className = "",
}: {
  children?: React.ReactNode;
  empty?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f7f6f4] max-lg:h-[395px] ${className}`}
    >
      {empty ? null : children}
    </div>
  );
}

/** Figma 5804:20960 — hero crop inside 361×395 mobile tile */
function UsisaatHeroImage({ mobile = false }: { mobile?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/usisaat/case-study/hero.png"
      alt="Usisaat harbor in Greenland"
      width={3720}
      height={2010}
      className={
        mobile
          ? "block h-auto w-full max-lg:absolute max-lg:left-1/2 max-lg:top-0 max-lg:h-[398px] max-lg:w-[calc(100%*806/361)] max-lg:max-w-none max-lg:-translate-x-1/2 max-lg:object-cover"
          : "block h-auto w-full"
      }
      decoding="async"
      fetchPriority="high"
    />
  );
}

/** Figma 5430:81582 — NEW USISAAT */
export default function UsisaatCaseStudyPage() {
  if (!isCaseStudyVisible("usisaat")) redirect("/case-studies");

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />

      <main className="w-full pb-16">
        {/* Figma 5804:20883 — mobile hero first; 40px below header (y=110) */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-10 lg:hidden">
          <div className="mx-auto w-full max-w-[1240px]">
            <HeroTile className="max-lg:bg-[#f7f6f4]">
              <UsisaatHeroImage mobile />
            </HeroTile>
          </div>
        </section>

        {/* Intro — Figma 5804:20887 */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:pt-5 lg:px-[100px] lg:pt-[80px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[219px] gap-y-[48px] lg:grid-cols-[444px_577px] lg:items-start">
            <div className="flex flex-col gap-[24px] uppercase">
              <h1 className="text-[42px] font-medium leading-[50px]">USISAAT</h1>
              <div className="flex flex-col gap-[2px] text-[18px] font-medium leading-[27px]">
                <p>Role: LEAD pRODUCT DESIGNER</p>
                <p className="font-medium text-[#999]">vISUAL IDENTITY, product DESIGN, desktop</p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className="max-w-[574px] text-[42px] font-medium uppercase leading-[50px] tracking-[0.042px]">
                Simplifying logistics complexity
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Problem</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    People relocating to and from Greenland faced fragmented and time-consuming
                    logistics processes, with travel, shipping, and relocation services spread across
                    multiple systems and providers. USISAAT needed a centralised digital experience
                    that could streamline coordination, simplify communication, and make relocation
                    more accessible for workers and residents navigating the moving process.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">SOLUTION</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    The solution introduced a web-app platform that simplified relocation
                    coordination through one connected digital experience. By centralising
                    communication, tracking, and moving workflows, Usisaat users were given a more
                    intuitive and accessible process for users relocating to and from Greenland. The
                    platform enabled all stakeholders to follow relocation progress in real time,
                    reducing uncertainty and improving coordination across the entire moving journey
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">RESULT</p>
                  <div className="flex flex-col gap-0 text-[15px] font-normal leading-[22px]">
                    <p>
                      The introduction of the platform significantly enhanced the end-to-end
                      relocation experience by creating a more seamless, transparent, and
                      user-centered workflow.
                    </p>
                    <p>
                      For Nuuk Transport, the centralised web application resulted in up to a 40%
                      reduction in manual coordination tasks, while also improving workflow
                      efficiency, and cross-team collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 5804:18293 desktop / 5804:20871 mobile */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-4 lg:mt-[64px] lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Row 1 — desktop only; mobile hero lives above intro */}
            <HeroTile className="hidden lg:block">
              <UsisaatHeroImage />
            </HeroTile>

            {/* Row 2 — Figma 5804:20968 + 5830:78249; mobile orders 1–2 */}
            <div className="grid grid-cols-1 gap-[16px] max-lg:contents lg:grid-cols-2">
              <MockupTile className="max-lg:order-1">
                {/* r8euer8 — desktop row 2 left */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/usisaat/case-study/row-2-man-desktop.png"
                  alt="Usisaat platform on desktop"
                  width={1836}
                  height={2010}
                  className="block h-auto w-full max-lg:hidden"
                  decoding="async"
                />
                {/* Figma 5804:20970 — x:-58 y:-6, 563×422 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/usisaat/case-study/row-2-man.png"
                  alt="Usisaat platform on desktop"
                  width={1836}
                  height={2010}
                  className="absolute left-[calc(100%*-58.4/361-5%)] top-[-6px] hidden h-[422px] w-[calc(100%*563/361)] max-w-none object-cover max-lg:block lg:hidden"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile className="max-lg:order-2">
                {/* Figma 5531:73613 desktop / 5830:78251 mobile — x:-4 y:-4, 367×402 */}
                <video
                  className="absolute left-[-5px] top-[-6px] block h-auto w-[622px] max-w-none max-lg:left-[calc(100%*-3.54/361)] max-lg:top-0 max-lg:h-full max-lg:w-[calc(100%*367/361)] max-lg:object-cover"
                  width={622}
                  height={681}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={SEARCH_VIDEO.webm} type="video/webm" />
                  <source src={SEARCH_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
            </div>

            {/* Row 3 — Figma 5785:17388 desktop / 5804:21241 mobile order 6 */}
            <FullWidthTile className="max-lg:order-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/usisaat/case-study/row-3-monitor.png"
                alt="Usisaat cases dashboard"
                width={3207}
                height={1704}
                className="absolute bottom-0 left-1/2 block h-auto w-[1056px] max-w-none -translate-x-1/2 max-lg:hidden"
                decoding="async"
              />
              {/* Figma 5830:78265 Frame 2147231792 — x:-39 y:115, 440×280 in 361×395 tile */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/usisaat/case-study/mobile-row-monitor.png"
                alt="Usisaat cases dashboard on desktop"
                width={1320}
                height={840}
                className="hidden max-lg:absolute max-lg:left-[calc(100%*-39/361)] max-lg:top-[calc(100%*115/395)] max-lg:block max-lg:h-[calc(100%*280/395)] max-lg:w-[calc(100%*440/361)] max-lg:max-w-none"
                decoding="async"
              />
            </FullWidthTile>

            {/* Row 4 — Figma 5804:21033 + 5804:21098; mobile orders 3–4 */}
            <div className="grid grid-cols-1 gap-[16px] max-lg:contents lg:grid-cols-2">
              <MockupTile className="max-lg:order-3">
                {/* Figma 5823:77115 desktop */}
                <FigmaFrame left={87} top={81} width={438} height={471}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/usisaat/case-study/row-4-case-card.png"
                    alt="Usisaat case management card"
                    width={1314}
                    height={1413}
                    className="block h-auto w-[438px] max-w-none"
                    decoding="async"
                  />
                </FigmaFrame>
                {/* Figma 5830:78393 Frame 2147231793 — x:46 y:81, 268×233 in 361×395 tile */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/usisaat/case-study/mobile-row-case-card.png"
                  alt="Usisaat case management card"
                  width={804}
                  height={699}
                  className="hidden max-lg:absolute max-lg:left-[calc(100%*46/361)] max-lg:top-[calc(100%*81/395)] max-lg:block max-lg:h-[calc(100%*233/395)] max-lg:w-[calc(100%*268/361)] max-lg:max-w-none"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile className="max-lg:order-4">
                {/* Figma 5785:17183 desktop / 5804:21100 mobile — 274×274 centered */}
                <video
                  className="absolute left-[74px] top-[103px] block h-[464px] w-[464px] max-w-none max-lg:left-1/2 max-lg:top-1/2 max-lg:h-[274px] max-lg:w-[274px] max-lg:-translate-x-1/2 max-lg:-translate-y-1/2"
                  width={464}
                  height={464}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={NUMBERS_VIDEO.webm} type="video/webm" />
                  <source src={NUMBERS_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
            </div>

            {/* Row 5 — Figma 5804:21168 mobile order 5; left tile desktop only */}
            <div className="grid grid-cols-1 gap-[16px] max-lg:contents lg:grid-cols-2">
              <MockupTile className="max-lg:hidden">
                {/* Frame 2147231806 — desktop row 5 left */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/usisaat/case-study/row-5-left.png"
                  alt="Usisaat platform interface"
                  width={1836}
                  height={2010}
                  className="block h-auto w-full"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile className="max-lg:order-5">
                {/* Figma 5823:77385 desktop / 5804:21172 mobile — centered ~250px */}
                <FigmaFrame
                  left={87}
                  top={87}
                  width={438}
                  height={496}
                  mobile={{ top: 51, width: 250, height: 294, center: true }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/usisaat/case-study/row-5-upload.png"
                    alt="Usisaat upload file dialog"
                    width={1314}
                    height={1488}
                    className="block h-auto w-[438px] max-w-none max-lg:w-[250px]"
                    decoding="async"
                  />
                </FigmaFrame>
              </MockupTile>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
