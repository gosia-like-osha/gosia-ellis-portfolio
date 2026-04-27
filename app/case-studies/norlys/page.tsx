import Image from "next/image";
import Link from "next/link";

import { CaseStudyBackNav } from "../../components/CaseStudyBackNav";
import norlys1st from "../../../public/images/norlys/norlys-1st.png";
import norlys2nd from "../../../public/images/norlys/norlys-2nd.png";
import norlys3rd from "../../../public/images/norlys/norlys-3rd.png";
import norlys4th from "../../../public/images/norlys/norlys-4th.png";
import norlysLastA from "../../../public/images/norlys/norlys-last-a.png";
import norlysLastB from "../../../public/images/norlys/norlys-last-b.png";
import norlysLastWide from "../../../public/images/norlys/norlys-last-wide.png";
import norlysRow3Left from "../../../public/images/norlys/norlys-3rd-row-left.png";
import norlysRow3Right from "../../../public/images/norlys/norlys-3rd-row-right.png";
import norlysMobile1 from "../../../public/images/norlys/mobile/norlys-mobile-1.png";
import norlysMobile2 from "../../../public/images/norlys/mobile/norlys-mobile-2.png";
import norlysMobile3 from "../../../public/images/norlys/mobile/norlys-mobile-3.png";
import norlysMobile4 from "../../../public/images/norlys/mobile/norlys-mobile-4.png";
import norlysMobile5 from "../../../public/images/norlys/mobile/norlys-mobile-5.png";

export default function NorlysCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#15171c]">
      <CaseStudyBackNav />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pb-24 max-sm:pb-[calc(6rem+110px+env(safe-area-inset-bottom,0px))]">
        <header className="pt-[62px]">
          <div className="font-semibold lg:pl-[5px]">
            <div className="text-[24px] opacity-50">Norlys</div>
            <h1 className="mt-[4px] text-[40px] lg:text-[64px] tracking-[-0.3px] leading-[1.05] text-black">
              From utility to usability - reimagining the electricity bill
            </h1>
          </div>
        </header>

        <section className="mt-[56px]">
          <div className="grid grid-cols-1 lg:grid-cols-[538px_1fr] gap-[48px] items-start">
            {/* Left info card */}
            <div className="relative rounded-[40px] bg-white border border-[rgba(21,23,28,0.1)] p-[35px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Role</div>
                <div className="text-[26px] tracking-[-0.26px] font-medium">UI/UX Designer</div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Team</div>
                <div className="mt-[4px] grid max-w-full grid-cols-[minmax(0,max-content)_minmax(0,1fr)] gap-x-2 gap-y-[12px] text-[26px] tracking-[-0.26px] font-medium lg:grid-cols-[156px_1fr] lg:gap-x-6">
                  <div className="flex min-w-0 flex-col gap-[12px]">
                    <div>Design</div>
                    <div>iOS</div>
                    <div>Android</div>
                    <div>Backend</div>
                  </div>
                  <div className="flex min-w-0 flex-col gap-[12px] break-words">
                    <div>QA</div>
                    <div>Commercial</div>
                  </div>
                </div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Scope</div>
                <div className="mt-[4px] grid max-w-full grid-cols-[minmax(0,max-content)_minmax(0,1fr)] gap-x-2 gap-y-[12px] text-[26px] tracking-[-0.26px] font-medium lg:grid-cols-[156px_1fr] lg:gap-x-6">
                  <div className="flex min-w-0 flex-col gap-[12px]">
                    <div>UI Design</div>
                    <div>Prototyping</div>
                    <div className="whitespace-nowrap">User research</div>
                  </div>
                  <div className="flex min-w-0 flex-col gap-[12px] break-words">
                    <div>UX Design</div>
                  </div>
                </div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Link</div>
                <a
                  href="https://norlys.dk/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[4px] inline-flex items-center gap-[6px] text-[26px] tracking-[-0.26px] font-medium"
                >
                  Website
                  <span className="text-[20px] leading-[1.3] font-medium translate-y-[1px] inline-block" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Right narrative */}
            <div className="flex flex-col gap-[32px] lg:w-[597px]">
              <div className="w-full lg:w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Problem</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Helping Norlys customers understand their energy use wasn’t about accessing more data - it
                  was about making the data meaningful. We created Monthly Reports, turning months of
                  abstract consumption into something tangible, personal, and even delightful.
                </p>
                <p className="mt-[20px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Customers received bills full of numbers but little context, how this month compared, what
                  drove usage, or where energy went. The data existed, but the presentation didn’t support
                  real understanding.
                </p>
              </div>
              <div className="w-full lg:w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Approach</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  We found that customers are most attentive when their bill arrives, and often most
                  frustrated. The Monthly Report was designed to meet them there, delivered in-app a couple
                  of days after billing.
                </p>
                <p className="mt-[20px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Monthly Reports became an in-app feature that gives users a clear snapshot of their{" "}
                  <span className="font-semibold text-[#15171c]">energy use</span>, with{" "}
                  <span className="font-semibold text-[#15171c]">simple comparisons</span>,{" "}
                  <span className="font-semibold text-[#15171c]">guided visuals</span>, and{" "}
                  <span className="font-semibold text-[#15171c]">subtle nudges</span> to help them
                  understand their consumption.
                </p>
              </div>
              <div className="w-full lg:w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Result</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  The Monthly Report brought users back into the app regularly. App engagement rose by{" "}
                  <span className="font-semibold text-[#15171c]">30%</span> as users returned to check
                  their report, to better understand their energy use.
                </p>
                <p className="mt-[20px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  What surprised us, was once users understood their patterns, they started asking better
                  questions. Engagement with energy-saving tools and features increased by{" "}
                  <span className="font-semibold text-[#15171c]">38%</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups (exported from Figma) */}
        <section className="mt-[62px]">
          <div className="mx-auto w-full max-w-[1240px]">
            {/* Mobile-only mockups stack (Figma 4865:99441) */}
            <div className="flex flex-col gap-[16px] lg:hidden">
              <Image alt="" src={norlysMobile1} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={norlysMobile2} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={norlysMobile3} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={norlysMobile4} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={norlysMobile5} className="h-auto w-full" sizes="100vw" quality={100} />
            </div>

            {/* Desktop mockups */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 lg:grid-cols-[722px_502px] gap-[16px]">
                <div className="relative w-full aspect-[722/510] lg:aspect-auto lg:h-[510px]">
                  <Image
                    alt=""
                    src={norlys1st}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 722px, 100vw"
                    quality={100}
                  />
                </div>
                <div className="relative w-full aspect-[502/510] lg:aspect-auto lg:h-[510px]">
                  <Image
                    alt=""
                    src={norlys2nd}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 502px, 100vw"
                    quality={100}
                  />
                </div>
              </div>

              <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[588px_636px] gap-[16px]">
                <div className="relative w-full aspect-[588/575] lg:aspect-auto lg:h-[575px]">
                  <Image
                    alt=""
                    src={norlys3rd}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 588px, 100vw"
                    quality={100}
                  />
                </div>
                <div className="relative w-full aspect-[636/575] lg:aspect-auto lg:h-[575px]">
                  <Image
                    alt=""
                    src={norlys4th}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 636px, 100vw"
                    quality={100}
                  />
                </div>
              </div>

              {/* Additional desktop exports (Figma 4851:90785) */}
              <div className="mt-[16px] grid grid-cols-1 gap-[16px] lg:grid-cols-[588px_636px]">
                <div className="relative h-[588px] w-full">
                  <Image alt="" src={norlysRow3Left} fill className="object-cover" sizes="(min-width: 1024px) 588px, 100vw" quality={100} />
                </div>
                <div className="relative h-[588px] w-full">
                  <Image alt="" src={norlysRow3Right} fill className="object-cover" sizes="(min-width: 1024px) 636px, 100vw" quality={100} />
                </div>
              </div>

              <Image
                alt=""
                src={norlysLastWide}
                className="mt-[16px] h-auto w-full"
                sizes="(min-width: 1024px) 1240px, 100vw"
                quality={100}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

