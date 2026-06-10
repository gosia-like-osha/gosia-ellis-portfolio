import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";
import { StickyPillNav } from "../../components/StickyPillNav";

const NUMBERS_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781093938/numbers_eueivc.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781093938/numbers_o4vfsy.mp4",
} as const;

const SEARCH_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781108143/search_tzgzti.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781108146/search_x5zbaz.mp4",
} as const;

/** Figma 5430:81606 — 1240×670 hero shell */
function HeroTile({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#fcfcfc]">
      {children}
    </div>
  );
}

/** Figma 5771:16657 — 1240×670 full-width mockup shell */
function FullWidthTile({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f7f6f4]">
      {children}
    </div>
  );
}

/** Figma 5430:81613 — 612×670 tile shell */
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

/** Figma 5430:81582 — NEW USISAAT */
export default function UsisaatCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />
      <StickyPillNav activeTab="case-studies" />

      <main className="w-full pb-16 max-sm:pb-[calc(4rem+110px+env(safe-area-inset-bottom,0px))]">
        {/* Intro — Figma 5804:18259 + 5804:18264 */}
        <section className="mx-auto max-w-[1440px] px-6 pt-[80px] lg:px-[100px]">
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

        {/* Mockups — Figma 5804:18293 */}
        <section className="mx-auto mt-[64px] max-w-[1440px] px-6 lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Row 1 — hero */}
            <HeroTile>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/usisaat/case-study/hero.png"
                alt="Usisaat harbor in Greenland"
                width={3720}
                height={2010}
                className="block h-auto w-full"
                decoding="async"
                fetchPriority="high"
              />
            </HeroTile>

            {/* Row 2 — Figma 5531:72438 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/usisaat/case-study/row-2-man.png"
                  alt="Usisaat platform on desktop"
                  width={1836}
                  height={2010}
                  className="block h-auto w-full"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile>
                {/* Figma 5531:73613 — Scene-1 at x:-5 y:-6, 622×681 */}
                <video
                  className="absolute left-[-5px] top-[-6px] block h-auto w-[622px] max-w-none"
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

            {/* Row 3 — Figma 5785:17388: 880px wide, bottom-aligned */}
            <FullWidthTile>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/usisaat/case-study/row-3-monitor.png"
                alt="Usisaat cases dashboard"
                width={3207}
                height={1704}
                className="absolute bottom-0 left-1/2 block h-auto w-[1056px] max-w-none -translate-x-1/2"
                decoding="async"
              />
            </FullWidthTile>

            {/* Row 4 — Figma 5708:15872 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* Figma 5823:77115 — difudo at x:87 y:81 438×471 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/usisaat/case-study/row-4-case-card.png"
                  alt="Usisaat case management card"
                  width={1314}
                  height={1413}
                  className="absolute left-[87px] top-[81px] block h-auto w-[438px] max-w-none"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile>
                {/* Figma 5785:17183: x:74 y:103 464×464 */}
                <video
                  className="absolute left-[74px] top-[103px] block h-[464px] w-[464px] max-w-none"
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

            {/* Row 5 — Figma 5679:14629 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile empty />
              <MockupTile>
                {/* Figma 5823:77385 — fiodif at x:87 y:87 438×496 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/usisaat/case-study/row-5-upload.png"
                  alt="Usisaat upload file dialog"
                  width={1314}
                  height={1488}
                  className="absolute left-[87px] top-[87px] block h-auto w-[438px] max-w-none"
                  decoding="async"
                />
              </MockupTile>
            </div>

            {/* Row 6 — Figma 5430:81630 (empty) */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile empty />
              <MockupTile empty />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
