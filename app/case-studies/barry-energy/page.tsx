import Image from "next/image";
import Link from "next/link";

import { StickyPillNav } from "../../components/StickyPillNav";
import barry1 from "../../../public/images/barry/barry1.png";
import barry2 from "../../../public/images/barry/barry2.png";
import barry3 from "../../../public/images/barry/barry3.png";
import barry4 from "../../../public/images/barry/barry4.png";
import barry5 from "../../../public/images/barry/barry5.png";
import barry6 from "../../../public/images/barry/barry6.png";

export default function BarryEnergyCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#15171c]">
      <StickyPillNav activeTab="case-studies" />

      {/* Sticky Back */}
      <div className="sticky top-[35px] z-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <Link
            href="/case-studies"
            className="relative inline-flex h-[54px] w-[116px] rounded-[100px] bg-white border border-[rgba(21,23,28,0.12)] shadow-[0px_22.696px_9px_0px_rgba(26,26,26,0.01),0px_12.913px_7.826px_0px_rgba(26,26,26,0.02),0px_5.87px_5.87px_0px_rgba(26,26,26,0.02),0px_1.565px_3.13px_0px_rgba(26,26,26,0.02)] overflow-hidden"
          >
            <span className="absolute left-[4px] top-[4px] box-border w-[106px] h-[44px] rounded-[100px] bg-[#15171c] inline-flex items-center justify-center gap-[10px] pt-[12px] pb-[11px] pl-[34px] pr-[35px] text-[16px] tracking-[-0.16px] text-white font-semibold">
              <img alt="" src="/images/icons/back-arrow.svg" className="w-[15px] h-[12px]" aria-hidden="true" />
              Back
            </span>
          </Link>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pb-24">
        <section className="pt-[62px]">
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
                <div className="mt-[12px] flex flex-col gap-[12px] text-[26px] tracking-[-0.26px] font-medium">
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
            <div className="flex flex-col gap-[44px]">
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Problem</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  After the company rebrand, the home screen needed redesign. User feedback revealed the real
                  problem: unclear price levels, confusing graphs, and unclear renewable energy messaging were
                  preventing users from making informed decisions.
                </p>
              </div>
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Solution</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Redesigned the home screen around a simple color system, with clearer visual hierarchy and
                  intuitive messaging, users could now make smart decisions about when to use appliances at a
                  glance.
                </p>
              </div>
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Result</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Validated design proved users now understand current electricity market and pricing strategy
                  at a single glance. Color system became the key differentiator in the interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 4721:73601: rows 746+478, 746+478, 618+606 @ 510px; 16px gap; #f6f5f4 tray */}
        <section className="mt-[48px]">
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid grid-cols-1 lg:grid-cols-[746px_478px] gap-[16px]">
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
              <div className="relative w-full aspect-[478/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px] bg-[#f6f5f4]">
                <Image
                  alt=""
                  src={barry2}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 478px, 100vw"
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
                  src={barry5}
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
