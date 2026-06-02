import Image from "next/image";

import { CaseStudyBackNav } from "../../components/CaseStudyBackNav";
import b1 from "../../../public/images/barry/desktop/b1.png";
import b2 from "../../../public/images/barry/desktop/b2.png";
import b3 from "../../../public/images/barry/desktop/b3.png";
import b4 from "../../../public/images/barry/desktop/b4.png";
import b5 from "../../../public/images/barry/desktop/b5.png";
import b6 from "../../../public/images/barry/desktop/b6.png";
import b7 from "../../../public/images/barry/desktop/b7.png";
import b8 from "../../../public/images/barry/desktop/b8.png";
import b9 from "../../../public/images/barry/desktop/b9.png";
import b10 from "../../../public/images/barry/desktop/b10.png";
import b11 from "../../../public/images/barry/desktop/b11.png";
import barryMobile1 from "../../../public/images/barry/mobile/barry-mobile-1.png";
import barryMobile2 from "../../../public/images/barry/mobile/barry-mobile-2.png";
import barryMobile3 from "../../../public/images/barry/mobile/barry-mobile-3.png";
import barryMobile4 from "../../../public/images/barry/mobile/barry-mobile-4.png";
import barryMobile5 from "../../../public/images/barry/mobile/barry-mobile-5.png";
import barryMobile6 from "../../../public/images/barry/mobile/barry-mobile-6.png";
import barryMobile7 from "../../../public/images/barry/mobile/barry-mobile-7.png";

export default function BarryEnergyCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-[#15171c]">
      <CaseStudyBackNav />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pb-24 max-sm:pb-[calc(6rem+110px+env(safe-area-inset-bottom,0px))]">
        <header className="pt-[62px]">
          <div className="font-semibold">
            <div className="text-[24px] opacity-50">Barry Energy</div>
            <h1 className="mt-[4px] text-[40px] lg:text-[64px] tracking-[-0.3px] leading-[1.05] text-black lg:leading-[80px]">
              From rebrand to better usability
            </h1>
          </div>
        </header>

        <section className="mt-[56px]">
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
            </div>

            {/* Right narrative */}
            <div className="flex flex-col gap-[32px] max-w-[600px]">
              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Problem</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  A rebrand gave Barry Energy a fresh visual identity, but user testing quickly revealed
                  the gap between aesthetics and usability. The interface contained information, but it
                  wasn&apos;t organised in a way that helped users understand it. Graphs competed for
                  attention, numbers lacked context, and there was no visual hierarchy to guide
                  decision-making.
                </p>
              </div>

              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Strategy: Color as meaning</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Instead of redesigning everything, we asked: what if we used color strategically to create
                  instant understanding? We developed a color system for quick recognition and decision-making.
                </p>
                <p className="mt-[20px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  We mapped every interaction to this system. Price information used a{" "}
                  <span className="font-semibold text-[#15171c]">green-to-red</span> gradient, while
                  renewable energy was always shown in{" "}
                  <span className="font-semibold text-[#15171c]">green</span>. Usage graphs inherited these
                  meanings. Suddenly, users could scan the screen and understand the current state at a glance.
                </p>
              </div>

              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Result</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  User testing post-launch showed a clear shift. In comprehension tests,{" "}
                  <span className="font-semibold text-[#15171c]">82%</span> of users could accurately
                  explain what they were seeing and why it mattered, compared with{" "}
                  <span className="font-semibold text-[#15171c]">71%</span> before. We also saw a{" "}
                  <span className="font-semibold text-[#15171c]">27%</span> increase in users actively using
                  price-based controls to adjust their consumption patterns, proving the design was not just
                  clearer, but also actionable.
                </p>
              </div>

              <div className="w-full">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Why it worked</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Through user interviews and testing, we learned that in data-heavy interfaces, users
                  don&apos;t read, they scan. A robust color system gives them a quick way to interpret the
                  data. Green means &quot;good,&quot; red means &quot;expensive&quot;, simple yet effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 4721:73601: rows 746+478, 746+478, 618+606 @ 510px; 16px gap; #f6f5f4 tray */}
        <section className="mt-[62px]">
          <div className="mx-auto w-full max-w-[1240px]">
            {/* Mobile-only mockups stack (exports already include styling) */}
            <div className="flex flex-col gap-[16px] lg:hidden">
              <Image alt="" src={barryMobile1} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={barryMobile2} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={barryMobile3} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={barryMobile4} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={barryMobile5} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={barryMobile6} className="h-auto w-full" sizes="100vw" quality={100} />
              <Image alt="" src={barryMobile7} className="h-auto w-full" sizes="100vw" quality={100} />
            </div>

            {/* Desktop mockups — Figma 4856:92401 */}
            <div className="hidden lg:block">
              <Image alt="" src={b1} className="h-auto w-full" sizes="1240px" quality={100} />

              <div className="mt-[16px] grid grid-cols-[478px_746px] gap-[16px]">
                <Image alt="" src={b2} className="h-auto w-full" sizes="478px" quality={100} />
                <Image alt="" src={b3} className="h-auto w-full" sizes="746px" quality={100} />
              </div>

              <div className="mt-[16px] grid grid-cols-[746px_478px] gap-[16px]">
                <Image alt="" src={b4} className="h-auto w-full" sizes="746px" quality={100} />
                <Image alt="" src={b5} className="h-auto w-full" sizes="478px" quality={100} />
              </div>

              <div className="mt-[16px] grid grid-cols-[618px_606px] gap-[16px]">
                <Image alt="" src={b6} className="h-auto w-full" sizes="618px" quality={100} />
                <Image alt="" src={b7} className="h-auto w-full" sizes="606px" quality={100} />
              </div>

              <div className="mt-[16px] grid grid-cols-[746px_480px] gap-[16px]">
                <Image alt="" src={b8} className="h-auto w-full" sizes="746px" quality={100} />
                <Image alt="" src={b9} className="h-auto w-full" sizes="480px" quality={100} />
              </div>

              <div className="mt-[16px] grid grid-cols-[480px_746px] gap-[16px]">
                <Image alt="" src={b10} className="h-auto w-full" sizes="480px" quality={100} />
                <Image alt="" src={b11} className="h-auto w-full" sizes="746px" quality={100} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
