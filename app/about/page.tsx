import Image from "next/image";

import { SiteHeader } from "../components/SiteHeader";
import { StickyPillNav } from "../components/StickyPillNav";

/** Figma 5804:18627 — recognition row */
function RecognitionRow() {
  return (
    <div className="flex w-full flex-col gap-[7px]">
      <p className="text-[18px] font-medium uppercase leading-[27px] text-black">Recognition</p>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-[4px] text-[15px] font-normal leading-[22px]">
          <p className="text-black">Danish Digital Awards 2025</p>
          <p className="text-[#999]">Best in Digital Design (UI/UX) • Norlys Energy App</p>
        </div>
        <p className="shrink-0 text-[15px] font-normal leading-[22px] text-black">Silver</p>
      </div>
    </div>
  );
}

/** Figma 5804:18294 — NEW ABOUT */
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <SiteHeader activeTab="about" />
      <StickyPillNav activeTab="about" />

      <main className="w-full pb-16 max-sm:pb-[calc(4rem+110px+env(safe-area-inset-bottom,0px))]">
        <section className="mx-auto max-w-[1440px] px-6 pt-[80px] lg:px-[100px]">
          {/* Figma 5804:18657 — flex 430 + 577, gap 233 */}
          <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-10 lg:flex-row lg:gap-[233px]">
            {/* Figma 5804:18655 — image 514, 430px wide, no crop/scale */}
            <Image
              src="/images/about/about-portrait.png"
              alt="Portrait of Gosia Ellis"
              width={1024}
              height={854}
              unoptimized
              className="block w-[430px] max-w-full shrink-0 h-auto"
              sizes="430px"
              priority
              quality={100}
            />

            <div className="flex w-full shrink-0 flex-col gap-[24px] lg:w-[577px]">
              <div className="flex flex-col gap-[7px]">
                <p className="text-[18px] font-medium uppercase leading-[27px] text-black">
                  about me
                </p>
                <p className="text-[15px] font-normal leading-[22px] text-black">
                  I design digital products that are easy to use, visually beautiful, and just make
                  sense. Over the past 6+ years, I&apos;ve worked in both agency and in-house product
                  teams, teaming up with smart, kind people to turn ideas into real, usable
                  interfaces. I care about the small details - how things move, how they feel, and how
                  to make complex flows simple and a little bit delightful.
                </p>
              </div>

              <div className="flex flex-col gap-[7px]">
                <p className="text-[18px] font-medium uppercase leading-[27px] text-black">
                  What I&apos;m looking for
                </p>
                <p className="text-[15px] font-normal leading-[22px] text-black">
                  Work with purpose and impact in close collaboration with a team of thoughtful and
                  talented people.
                </p>
              </div>

              <div className="flex flex-col gap-[7px]">
                <p className="text-[18px] font-medium uppercase leading-[27px] text-black">
                  Let&apos;s connect
                </p>
                <p className="text-[15px] font-normal leading-[22px] text-black">
                  Find me on{" "}
                  <a
                    href="https://www.linkedin.com/in/gosia-ellis/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a href="mailto:itsgosiaa@gmail.com" className="underline underline-offset-4">
                    email me
                  </a>
                  .
                </p>
              </div>

              <RecognitionRow />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
