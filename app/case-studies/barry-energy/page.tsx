import Image from "next/image";

import { CaseStudyBackNav } from "../../components/CaseStudyBackNav";
import barry1 from "../../../public/images/barry/barry1.png";
import barryAfter from "../../../public/images/barry/barry-after.png";
import barry3 from "../../../public/images/barry/barry3.png";
import barry4 from "../../../public/images/barry/barry4.png";
import widgetLarge from "../../../public/images/barry/widget-large.png";
import barry6 from "../../../public/images/barry/barry6.png";
import barryHeroNew from "../../../public/images/barry/barry-hero-new.png";

export default function BarryEnergyCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#15171c]">
      <CaseStudyBackNav />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pb-24 max-sm:pb-[calc(6rem+110px+env(safe-area-inset-bottom,0px))]">
        <header className="pt-[62px]">
          <div className="font-semibold">
            <div className="text-[24px] opacity-50">Barry Energy</div>
            <h1 className="mt-[4px] text-[40px] lg:text-[64px] tracking-[-0.3px] leading-[1.05] text-black">
              From rebrand to better usability
            </h1>
          </div>
        </header>

        <section className="mt-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-[538px_1fr] gap-[48px] items-start">
            {/* Left info card — Figma 4721:73601 */}
            <div className="relative rounded-[40px] bg-white border border-[rgba(21,23,28,0.1)] p-[35px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Role</div>
                <div className="text-[26px] tracking-[-0.26px] font-medium">UI Designer</div>
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
                    <div>Project management</div>
                    <div>QA</div>
                  </div>
                </div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Scope</div>
                <div className="mt-[4px] flex flex-col gap-[12px] text-[26px] tracking-[-0.26px] font-medium">
                  <div>UI Design</div>
                  <div>Prototyping</div>
                  <div>User research</div>
                </div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Link</div>
                <p className="mt-[4px] text-[26px] tracking-[-0.26px] font-medium leading-[1.3]">
                  The company closed down in 2021
                </p>
              </div>
            </div>

            {/* Right narrative */}
            <div className="flex flex-col gap-[32px] max-w-[600px]">
              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Problem</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  A rebrand gave Barry Energy a fresh visual identity. But user testing quickly exposed the
                  gap between aesthetics and usability. The interface had information, but it wasn&apos;t
                  organized in a way that helped users understand it.
                </p>
                <p className="mt-[20px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Graphs competed with each other, numbers lacked context, and there was no visual hierarchy
                  to guide decision-making.
                </p>
              </div>

              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Strategy: Color as meaning</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Instead of redesigning everything, we asked: what if we used color strategically to create
                  instant understanding? We developed a color system for quick recognition and decision-making
                </p>
                <p className="mt-[20px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  We mapped every interaction to this system. Price information used the{" "}
                  <span className="font-semibold text-[#15171c]">green-to-red</span> gradient. Renewable
                  energy was always <span className="font-semibold text-[#15171c]">green</span>. Usage graphs
                  inherited these meanings. Suddenly, users could scan the screen and understand the current
                  state at a single glance.
                </p>
              </div>

              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Result</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  User testing post-launch showed a clear shift. In comprehension tests,{" "}
                  <span className="font-semibold text-[#15171c]">82%</span> of users could now accurately
                  explain what they were seeing and why it mattered, compared to{" "}
                  <span className="font-semibold text-[#15171c]">71%</span> before. We also saw a{" "}
                  <span className="font-semibold text-[#15171c]">27%</span>{" "}
                  increase in users actively using
                  price-based controls to shift their consumption patterns, proving the design wasn&apos;t just
                  clearer, but actionable.
                </p>
              </div>

              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Why it worked</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Through user interviews and testing, we learned that in a data-heavy interface users
                  don&apos;t read, they scan. A robust color system gives them a quick way to familiarize
                  themselves with the data. Green means &quot;good,&quot; red means &quot;expensive” simple,
                  yet effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 4721:73601: rows 746+478, 746+478, 618+606 @ 510px; 16px gap; #f6f5f4 tray */}
        <section className="mt-[62px]">
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="relative w-full overflow-hidden rounded-[40px] aspect-[337/454] lg:aspect-[1240/510]">
              <Image
                alt=""
                src={barryHeroNew}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1240px, 100vw"
                quality={100}
              />
            </div>

            <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[478px_746px] gap-[16px]">
              <div className="relative w-full aspect-[478/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px] bg-[#f6f5f4]">
                <Image
                  alt=""
                  src={barryAfter}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 478px, 100vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full aspect-[746/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px] bg-[#f6f5f4]">
                <Image
                  alt=""
                  src={barry1}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 746px, 100vw"
                  quality={100}
                />
              </div>
            </div>

            <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[746px_478px] gap-[16px]">
              <div className="relative w-full aspect-[746/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px] bg-[#f6f5f4]">
                <Image
                  alt=""
                  src={barry3}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 746px, 100vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full aspect-[478/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px] bg-[#f6f5f4]">
                <Image
                  alt=""
                  src={barry4}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 478px, 100vw"
                  quality={100}
                />
              </div>
            </div>

            <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[618px_606px] gap-[16px]">
              <div className="relative w-full aspect-[618/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px] bg-[#f6f5f4]">
                <Image
                  alt=""
                  src={widgetLarge}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 618px, 100vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full aspect-[606/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px] bg-[#f6f5f4]">
                <Image
                  alt=""
                  src={barry6}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 606px, 100vw"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
