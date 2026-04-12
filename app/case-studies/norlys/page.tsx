import Image from "next/image";
import Link from "next/link";

import { CaseStudyBackNav } from "../../components/CaseStudyBackNav";
import norlys1st from "../../../public/images/norlys/norlys-1st.png";
import norlys2nd from "../../../public/images/norlys/norlys-2nd.png";
import norlys3rd from "../../../public/images/norlys/norlys-3rd.png";
import norlys4th from "../../../public/images/norlys/norlys-4th.png";
import norlys5th from "../../../public/images/norlys/norlys-5th.png";

export default function NorlysCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#15171c]">
      <CaseStudyBackNav />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pb-24 max-sm:pb-[calc(6rem+110px+env(safe-area-inset-bottom,0px))]">
        <section className="pt-[62px]">
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
                <div className="mt-[12px] flex flex-col gap-[12px] text-[26px] tracking-[-0.26px] font-medium">
                  <div>UI Design</div>
                  <div>Prototyping</div>
                  <div>User research</div>
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
            <div className="flex flex-col gap-[44px]">
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Problem</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  In collaboration with the agency Framna and the energy company Norlys, we explored ways
                  to simplify how users understand their electricity consumption and bills. We challenged
                  ourselves to present complex concepts in a more human and educational way.
                </p>
              </div>
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Solution</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Introducing “Monthly Reports” in the app allows users to see their monthly electricity
                  consumption in a unique and user-friendly way. Each month, users receive a compilation
                  of data and visuals corresponding to their previous month’s usage. By using animation and
                  visual comparisons, we were able to translate complex numbers into a more tangible and
                  easier-to-comprehend format.
                </p>
              </div>
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Result</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  A unique feature like “Monthly Reports” improved users’ understanding of their electricity
                  consumption while also driving more traffic to the app. It led to a noticeable increase in
                  time spent in the app, with users returning regularly to view their reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups (exported from Figma) */}
        <section className="mt-[48px]">
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid grid-cols-1 lg:grid-cols-[722px_502px] gap-[16px]">
              <div className="relative w-full aspect-[722/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px]">
                <Image
                  alt=""
                  src={norlys1st}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 722px, 100vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full aspect-[502/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px]">
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
              <div className="relative w-full aspect-[588/575] lg:aspect-auto lg:h-[575px] overflow-hidden rounded-[40px]">
                <Image
                  alt=""
                  src={norlys3rd}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 588px, 100vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full aspect-[636/575] lg:aspect-auto lg:h-[575px] overflow-hidden rounded-[40px]">
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

            <div className="mt-[16px] relative w-full max-w-[1080px] mr-auto aspect-[3093/1437]">
              <Image
                alt=""
                src={norlys5th}
                fill
                className="object-contain"
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

