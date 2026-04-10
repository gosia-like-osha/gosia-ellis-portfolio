import Link from "next/link";

export default function BarryEnergyCaseStudyPage() {
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
            {/* Left info card — Figma 4721:73601 */}
            <div className="relative rounded-[40px] bg-white border border-[rgba(21,23,28,0.1)] p-[35px]">
              <div className="flex flex-col gap-[4px]">
                <div className="text-[16px] tracking-[-0.16px] opacity-50 font-medium">Role</div>
                <div className="text-[26px] tracking-[-0.26px] font-medium">UI Designer</div>
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

        {/* Mockups — add when exports are ready (Figma node 4721:73601+) */}
      </main>
    </div>
  );
}
