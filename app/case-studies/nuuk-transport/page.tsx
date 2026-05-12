import Image from "next/image";

import { CaseStudyBackNav } from "../../components/CaseStudyBackNav";

import nuuk1 from "../../../public/images/nuuk-transport/desktop/nuuk1.png";
import nuuk2 from "../../../public/images/nuuk-transport/desktop/nuuk2.png";
import nuuk3 from "../../../public/images/nuuk-transport/desktop/nuuk3.png";
import nuuk4 from "../../../public/images/nuuk-transport/desktop/nuuk4.png";
import nuuk5 from "../../../public/images/nuuk-transport/desktop/nuuk5.png";
import nuuk6 from "../../../public/images/nuuk-transport/desktop/nuuk6.png";
import nuuk7 from "../../../public/images/nuuk-transport/desktop/nuuk7.png";
import nuuk8 from "../../../public/images/nuuk-transport/desktop/nuuk8.png";

import nuuk1M from "../../../public/images/nuuk-transport/mobile/nuuk1M.png";
import nuuk2M from "../../../public/images/nuuk-transport/mobile/nuuk2M.png";
import nuuk3M from "../../../public/images/nuuk-transport/mobile/nuuk3M.png";
import nuuk4M from "../../../public/images/nuuk-transport/mobile/nuuk4M.png";
import nuuk5M from "../../../public/images/nuuk-transport/mobile/nuuk5M.png";
import nuuk6M from "../../../public/images/nuuk-transport/mobile/nuuk6M.png";
import nuuk7M from "../../../public/images/nuuk-transport/mobile/nuuk7M.png";

export default function NuukTransportCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#15171c]">
      <CaseStudyBackNav />

      <main className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-[100px] max-sm:pb-[calc(6rem+110px+env(safe-area-inset-bottom,0px))]">
        <header className="pt-[62px]">
          <div className="font-semibold lg:pl-[5px]">
            <div className="text-[24px] opacity-50">Nuuk Transport</div>
            <h1 className="mt-[4px] text-[40px] leading-[1.05] tracking-[-0.3px] text-black lg:text-[64px] lg:leading-[80px]">
              Creating seamless logistics solutions for moving to and from Greenland
            </h1>
          </div>
        </header>

        <section className="mt-[48px] lg:mt-[56px]">
          <div className="grid grid-cols-1 gap-[48px] items-start lg:grid-cols-[538px_1fr]">
            {/* Left info card — Figma 5084:92223 */}
            <div className="relative rounded-[40px] bg-white border border-[rgba(21,23,28,0.1)] p-[35px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Role</div>
                <div className="text-[26px] tracking-[-0.26px] font-medium">Product Designer</div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Team</div>
                <div className="mt-[4px] grid max-w-full grid-cols-[minmax(0,max-content)_minmax(0,1fr)] gap-x-2 gap-y-[12px] text-[26px] tracking-[-0.26px] font-medium lg:grid-cols-[156px_1fr] lg:gap-x-6">
                  <div className="flex min-w-0 flex-col gap-[12px]">
                    <div>Design</div>
                    <div>Frontend</div>
                    <div>Backend</div>
                  </div>
                  <div className="flex min-w-0 flex-col gap-[12px] break-words">
                    <div>Project management</div>
                    <div>QA</div>
                  </div>
                </div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Scope</div>
                <div className="mt-[4px] grid max-w-full grid-cols-[minmax(0,max-content)_minmax(0,1fr)] gap-x-2 gap-y-[12px] text-[26px] tracking-[-0.26px] font-medium lg:grid-cols-[156px_1fr] lg:gap-x-6">
                  <div className="flex min-w-0 flex-col gap-[12px]">
                    <div>Web design</div>
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
                  href="https://transport.gl/en/"
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

            {/* Right narrative — Figma 5084:92248 / 92256 / 92944 */}
            <div className="flex flex-col gap-[32px]">
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Problem</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  People relocating to and from Greenland faced fragmented and time-consuming logistics
                  processes, with travel, shipping, and relocation services spread across multiple systems and
                  providers. Nuuk Transport needed a{" "}
                  <span className="font-semibold text-[#15171c]">centralised digital experience</span> that could
                  streamline coordination, simplify communication, and make relocation more accessible for
                  workers and residents navigating the moving process.
                </p>
              </div>

              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Solution</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  The solution introduced a web-app platform that{" "}
                  <span className="font-semibold text-[#15171c]">simplified relocation</span> coordination through
                  one connected digital experience. By centralising communication, tracking, and moving
                  workflows, Usisaat users were given a more intuitive and accessible process for users
                  relocating to and from Greenland. The platform enabled all stakeholders to{" "}
                  <span className="font-semibold text-[#15171c]">follow relocation progress</span> in real time,{" "}
                  <span className="font-semibold text-[#15171c]">reducing uncertainty</span> and{" "}
                  <span className="font-semibold text-[#15171c]">improving coordination</span> across the entire
                  moving journey
                </p>
              </div>

              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Impact</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  The introduction of the platform significantly enhanced the end-to-end relocation
                  experience by creating a{" "}
                  <span className="font-semibold text-[#15171c]">more seamless</span>,{" "}
                  <span className="font-semibold text-[#15171c]">transparent</span>, and{" "}
                  <span className="font-semibold text-[#15171c]">user-centered</span> workflow.
                </p>
                <p className="mt-[20px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  For Nuuk Transport, the centralised web application resulted in up to a{" "}
                  <span className="font-semibold text-[#15171c]">40%</span> reduction in manual coordination tasks,
                  while also improving{" "}
                  <span className="font-semibold text-[#15171c]">accessibility</span>,{" "}
                  <span className="font-semibold text-[#15171c]">workflow efficiency</span>, and{" "}
                  <span className="font-semibold text-[#15171c]">cross-team collaboration</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — exports already include borders + corner radius */}
        <section className="mt-[62px]">
          <div className="mx-auto w-full max-w-[1240px]">
            {/* Mobile-only stack */}
            <div className="flex flex-col gap-[16px] lg:hidden">
              <Image alt="" src={nuuk1M} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={nuuk2M} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={nuuk3M} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={nuuk4M} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={nuuk5M} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={nuuk6M} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={nuuk7M} className="h-auto w-full" sizes="100vw" quality={100} />
            </div>

            {/* Desktop grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-[722px_502px] gap-[16px]">
                <Image alt="" src={nuuk1} className="h-auto w-full" sizes="722px" quality={100} />
                <Image alt="" src={nuuk2} className="h-auto w-full" sizes="502px" quality={100} />
              </div>

              <div className="mt-[16px] grid grid-cols-[722px_502px] gap-[16px]">
                <Image alt="" src={nuuk3} className="h-auto w-full" sizes="722px" quality={100} />
                <Image alt="" src={nuuk4} className="h-auto w-full" sizes="502px" quality={100} />
              </div>

              <div className="mt-[16px] grid grid-cols-[612px_612px] gap-[16px]">
                <Image alt="" src={nuuk5} className="h-auto w-full" sizes="612px" quality={100} />
                <Image alt="" src={nuuk6} className="h-auto w-full" sizes="612px" quality={100} />
              </div>

              <div className="mt-[16px] grid grid-cols-[464px_760px] gap-[16px]">
                <Image alt="" src={nuuk7} className="h-auto w-full" sizes="464px" quality={100} />
                <Image alt="" src={nuuk8} className="h-auto w-full" sizes="760px" quality={100} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
