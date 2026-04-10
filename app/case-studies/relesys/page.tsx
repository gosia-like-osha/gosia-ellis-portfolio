import Image from "next/image";
import Link from "next/link";

import relesys1 from "../../../public/images/relesys/relesys-1.png";
import relesys2 from "../../../public/images/relesys/relesys-2.png";
import relesys3 from "../../../public/images/relesys/relesys-3.png";
import relesys4 from "../../../public/images/relesys/relesys-4.png";

export default function RelesysCaseStudyPage() {
  return (
    <div className="min-h-full bg-[#f2f2f2] text-[#15171c]">
      {/* Sticky Back */}
      <div className="sticky top-[35px] z-50">
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
            {/* Left info card */}
            <div className="relative rounded-[40px] bg-white border border-[rgba(21,23,28,0.1)] p-[35px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Role</div>
                <div className="text-[26px] tracking-[-0.26px] font-medium">Product Designer</div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Team</div>
                <div className="mt-[4px] grid grid-cols-[156px_1fr] gap-x-[24px] gap-y-[12px] text-[26px] tracking-[-0.26px] font-medium">
                  <div className="flex flex-col gap-[12px]">
                    <div>Design</div>
                    <div>iOS</div>
                    <div>Android</div>
                    <div>Backed</div>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <div>Project management</div>
                    <div>QA</div>
                  </div>
                </div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Scope</div>
                <div className="mt-[4px] grid grid-cols-[156px_1fr] gap-x-[24px] gap-y-[12px] text-[26px] tracking-[-0.26px] font-medium">
                  <div className="flex flex-col gap-[12px]">
                    <div>UI Design</div>
                    <div>Prototyping</div>
                    <div>User research</div>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <div>UX Design</div>
                  </div>
                </div>
              </div>

              <div className="mt-[20px] h-[2px] bg-[#15171c] opacity-10" />

              <div className="mt-[20px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Link</div>
                <a
                  href="https://www.relesys.ai/"
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
                  Retail managers need to understand employee satisfaction and trends, but survey data is
                  overwhelming, too many numbers and not enough insight. Survey platforms weren&apos;t
                  designed for retail and hospitality workers, they needed a mobile experience that worked
                  in fast-paced environments.
                </p>
              </div>
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Solution</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  Survey module designed for mobile scanning. Flows prioritized quick actions, and important
                  insights at a glance. A companion desktop dashboard for managers helps visualising survey
                  trends and employee sentiment in real-time.
                </p>
              </div>
              <div className="max-w-[597px]">
                <div className="text-[26px] tracking-[-0.26px] font-semibold">Result</div>
                <p className="mt-[10px] text-[20px] tracking-[-0.2px] text-[rgba(21,23,28,0.7)] font-medium leading-[1.3]">
                  The design was A/B tested with actual store managers to validate before implementation.
                  Adoption rates for the survey increased significantly, driving higher app engagement.
                  Managers gained clearer insights into workplace issues and employee feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 4721:72799: row1 502+722, row2 722+502 (exports include tray + stroke) */}
        <section className="mt-[48px]">
          <div className="mx-auto w-full max-w-[1240px]">
            <div className="grid grid-cols-1 lg:grid-cols-[502px_722px] gap-[16px]">
              <div className="relative w-full aspect-[502/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px]">
                <Image
                  alt=""
                  src={relesys1}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 502px, 100vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full aspect-[722/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px]">
                <Image
                  alt=""
                  src={relesys2}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 722px, 100vw"
                  quality={100}
                />
              </div>
            </div>

            <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-[722px_502px] gap-[16px]">
              <div className="relative w-full aspect-[722/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px]">
                <Image
                  alt=""
                  src={relesys3}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 722px, 100vw"
                  quality={100}
                />
              </div>
              <div className="relative w-full aspect-[502/510] lg:aspect-auto lg:h-[510px] overflow-hidden rounded-[40px]">
                <Image
                  alt=""
                  src={relesys4}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 502px, 100vw"
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
