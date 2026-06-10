import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";

const NORNOR_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781099895/nornor_vqvbop.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781099895/nornor_xejizt.mp4",
} as const;

const NORNORNOR_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781105946/nornornor_rjoxs3.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781105946/nornornor_v4ftve.mp4",
} as const;

/** Figma 5804:18279 — 1240×670 hero shell */
function HeroTile({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.1)] bg-[#fcfcfc] max-lg:h-[395px] ${className}`}
    >
      {children}
    </div>
  );
}

/** Figma 5424:78029 — 612×670 tile shell */
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

/** Figma 5804:20706 — hero crop inside 361×395 mobile tile */
function NorlysHeroImage({ mobile = false }: { mobile?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/norlys/case-study/hero.png"
      alt="Norlys monthly report lifestyle scene"
      width={1024}
      height={553}
      className={
        mobile
          ? "block h-auto w-full max-lg:absolute max-lg:left-[calc(100%*-185/361)] max-lg:top-0 max-lg:h-full max-lg:w-[calc(100%*731/361)] max-lg:max-w-none max-lg:object-cover"
          : "block h-auto w-full"
      }
      decoding="async"
      fetchPriority="high"
    />
  );
}

/** Figma 5424:77963 — NEW NORLYS */
export default function NorlysCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />

      <main className="w-full pb-16">
        {/* Figma 5804:20484 — mobile hero first; 40px below header (y=110) */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-10 lg:hidden">
          <div className="mx-auto w-full max-w-[1240px]">
            <HeroTile>
              <NorlysHeroImage mobile />
            </HeroTile>
          </div>
        </section>

        {/* Intro — Figma 5804:20526 (follows hero on mobile) */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:pt-5 lg:px-[100px] lg:pt-[80px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[196px] gap-y-[48px] lg:grid-cols-[444px_600px] lg:items-start">
            <div className="flex flex-col gap-[24px] uppercase">
              <h1 className="text-[42px] font-medium leading-[50px]">Norlys</h1>
              <div className="flex flex-col gap-[2px] text-[18px] font-medium leading-[27px]">
                <p>Role: LEAD pRODUCT DESIGNER</p>
                <p className="whitespace-nowrap font-medium text-[#999] max-lg:whitespace-normal">
                  UI Design, Interaction, UX design, mobile app
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className="whitespace-nowrap text-[42px] font-medium uppercase leading-[50px] tracking-[0.042px] max-lg:whitespace-normal">
                From utility to usability
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Problem</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    Helping Norlys customers understand their energy use wasn&apos;t about accessing more
                    data - it was about making the data meaningful. We created Monthly Reports, turning
                    months of abstract consumption into something tangible, personal, and even delightful.
                    Customers received bills full of numbers but little context, how this month compared,
                    what drove usage, or where energy went. The data existed, but the presentation
                    didn&apos;t support real understanding.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Approach</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    We found that customers are most attentive when their bill arrives, and often most
                    frustrated. The Monthly Report was designed to meet them there, delivered in-app a
                    couple of days after billing. Monthly Reports became an in-app feature that gives users
                    a clear snapshot of their energy use, with simple comparisons, guided visuals, and
                    subtle nudges to help them understand their consumption.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">RESULT</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    The Monthly Report brought users back into the app regularly. App engagement rose by
                    30% as users returned to check their report, to better understand their energy use.
                    What surprised us, was once users understood their patterns, they started asking better
                    questions. Engagement with energy-saving tools and features increased by 38%.
                  </p>
                </div>
                {/* Figma 5804:20729 */}
                <div className="flex w-full flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px] text-black">
                    Recognition
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col gap-[4px] text-[15px] font-normal leading-[22px]">
                      <p className="text-black">Danish Digital Awards 2025</p>
                      <p className="text-[#999]">
                        Best in Digital Design (UI/UX) • Norlys Energy App
                      </p>
                    </div>
                    <p className="shrink-0 text-[15px] font-normal leading-[22px] text-black">
                      Silver
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 5529:72105 desktop / 5804:20472 mobile */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-4 lg:mt-[64px] lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Row 1 — desktop only; mobile hero lives above intro */}
            <HeroTile className="hidden lg:block">
              <NorlysHeroImage />
            </HeroTile>

            {/* Row 2 — Figma 5804:20748 + 5804:20756 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/norlys/case-study/row-2-wooden.png"
                  alt="Norlys monthly report on iPhone"
                  width={1836}
                  height={2010}
                  className="block h-auto w-full max-lg:absolute max-lg:left-[calc(100%*-73/361)] max-lg:top-0 max-lg:h-full max-lg:w-[calc(100%*531/361)] max-lg:max-w-none max-lg:object-cover"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile className="lg:hidden">
                <video
                  className="absolute bottom-0 left-1/2 block h-auto w-[349px] max-w-none -translate-x-1/2 object-contain object-bottom"
                  width={534}
                  height={649}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={NORNORNOR_VIDEO.webm} type="video/webm" />
                  <source src={NORNORNOR_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
              <MockupTile>
                <video
                  className="absolute left-1/2 top-0 block h-auto w-[534px] max-w-none -translate-x-1/2 max-lg:hidden"
                  width={534}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={NORNOR_VIDEO.webm} type="video/webm" />
                  <source src={NORNOR_VIDEO.mp4} type="video/mp4" />
                </video>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/norlys/case-study/mobile-row-3.png"
                  alt="Norlys monthly report ready notification"
                  width={1083}
                  height={1186}
                  className="hidden h-full w-full object-contain max-lg:block"
                  decoding="async"
                />
              </MockupTile>
            </div>

            {/* Row 3 — desktop video / mobile Frame 2147231594 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                <video
                  className="absolute bottom-0 left-1/2 block h-auto w-[534px] max-w-none -translate-x-1/2 max-lg:hidden"
                  width={534}
                  height={649}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={NORNORNOR_VIDEO.webm} type="video/webm" />
                  <source src={NORNORNOR_VIDEO.mp4} type="video/mp4" />
                </video>
                <video
                  className="absolute left-1/2 top-0 hidden h-[386px] w-[349px] max-w-none -translate-x-1/2 object-contain object-top max-lg:block"
                  width={534}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={NORNOR_VIDEO.webm} type="video/webm" />
                  <source src={NORNOR_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
              <MockupTile empty className="max-lg:hidden" />
            </div>

            {/* Row 4 — desktop: wide three phones / mobile Frames 2147231763 + 2147231765 */}
            <HeroTile className="hidden lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/norlys/case-study/row-4-three-phones.png"
                alt="Norlys monthly report screens"
                width={3240}
                height={1800}
                className="absolute bottom-0 left-1/2 block h-auto w-[1080px] max-w-full -translate-x-1/2"
                decoding="async"
              />
            </HeroTile>
            <div className="flex flex-col gap-[16px] lg:hidden">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/norlys/case-study/mobile-row-4.png"
                  alt="Norlys energy usage chart"
                  width={1083}
                  height={1186}
                  className="block h-full w-full object-contain"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/norlys/case-study/mobile-row-5.png"
                  alt="Norlys year-over-year usage comparison"
                  width={1083}
                  height={1186}
                  className="block h-full w-full object-contain"
                  decoding="async"
                />
              </MockupTile>
            </div>

            {/* Row 5 — desktop only; not in Figma mobile */}
            <div className="grid grid-cols-1 gap-[16px] max-lg:hidden lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/norlys/case-study/row-5-lifestyle.png"
                  alt="Norlys app in use at home"
                  width={935}
                  height={1024}
                  className="block h-auto w-full"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile empty />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
