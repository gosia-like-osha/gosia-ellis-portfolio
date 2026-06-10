import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";
import { StickyPillNav } from "../../components/StickyPillNav";

/** Figma 5804:18279 — 1240×670 hero shell */
function HeroTile({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.1)] bg-[#fcfcfc]">
      {children}
    </div>
  );
}

/** Figma 5424:78029 — 612×670 tile shell */
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

/** Figma 5424:77963 — NEW NORLYS */
export default function NorlysCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />
      <StickyPillNav activeTab="case-studies" />

      <main className="w-full pb-16 max-sm:pb-[calc(4rem+110px+env(safe-area-inset-bottom,0px))]">
        {/* Intro — Figma 5804:18238 + 5804:18246 */}
        <section className="mx-auto max-w-[1440px] px-6 pt-[80px] lg:px-[100px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[219px] gap-y-[48px] lg:grid-cols-[444px_577px] lg:items-start">
            <div className="flex flex-col gap-[24px] uppercase">
              <h1 className="text-[42px] font-medium leading-[50px]">Norlys</h1>
              <div className="flex flex-col gap-[5px] text-[18px] font-normal leading-[27px]">
                <p>Role: LEAD pRODUCT DESIGNER</p>
                <p className="text-[#999]">UI Design, Interaction, UX design, mobile app</p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[42px] font-medium uppercase leading-[50px] tracking-[0.042px]">
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
                {/* Figma 5804:18627 */}
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

        {/* Mockups — Figma 5529:72105 */}
        <section className="mx-auto mt-[64px] max-w-[1440px] px-6 lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Row 1 — Figma 5804:18280 NORLYS2577 1 */}
            <HeroTile>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/norlys/case-study/hero.png"
                alt="Norlys monthly report lifestyle scene"
                width={1024}
                height={553}
                className="block h-auto w-full"
                decoding="async"
                fetchPriority="high"
              />
            </HeroTile>

            {/* Row 2 — Figma 5514:70778 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/norlys/case-study/row-2-wooden.png"
                  alt="Norlys monthly report on iPhone with wooden texture"
                  width={935}
                  height={1024}
                  className="block h-auto w-full"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile empty />
            </div>

            {/* Row 3 — Figma 5745:15137 (both tiles empty) */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile empty />
              <MockupTile empty />
            </div>

            {/* Row 4 — 1080px wide, centered, bottom-aligned */}
            <HeroTile>
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

            {/* Row 5 — Figma 5695:73110 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* Figma 5695:73115 */}
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
