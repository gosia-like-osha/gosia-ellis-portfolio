import Image from "next/image";
import Link from "next/link";

import { StickyPillNav } from "../../components/StickyPillNav";

import iphone16ProA from "../../../public/images/norlys/iphone-16-pro-a.png";
import iphone16ProB from "../../../public/images/norlys/iphone-16-pro-b.png";
import iphone17 from "../../../public/images/norlys/iphone-17.png";

import screen1 from "../../../public/images/norlys/screen-1.png";
import screen2 from "../../../public/images/norlys/screen-2.png";
import screen3 from "../../../public/images/norlys/screen-3.png";
import screen4 from "../../../public/images/norlys/screen-4.png";
import screen5 from "../../../public/images/norlys/screen-5.png";

function PhoneMock({
  deviceSrc,
  screenSrc,
  maskSvgSrc,
  maskShapeSvgSrc,
  maskPosition,
  maskSize,
  screenSize,
}: {
  deviceSrc: typeof iphone16ProA;
  screenSrc: typeof screen1;
  maskSvgSrc: string;
  maskShapeSvgSrc: string;
  maskPosition: string;
  maskSize: string;
  screenSize: { width: number; height: number };
}) {
  return (
    <div className="absolute inset-0">
      <Image alt="" src={deviceSrc} className="absolute inset-0 w-full h-full" priority={false} />
      <div className="absolute inset-0">
        <img alt="" src={maskSvgSrc} className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: `url(${maskShapeSvgSrc})`,
            maskImage: `url(${maskShapeSvgSrc})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: maskPosition,
            maskPosition,
            WebkitMaskSize: maskSize,
            maskSize,
          }}
        >
          <Image
            alt=""
            src={screenSrc}
            width={screenSize.width}
            height={screenSize.height}
            className="absolute inset-0 w-full h-full"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function NorlysCaseStudyPage() {
  return (
    <div className="min-h-full bg-[#f2f2f2] text-[#15171c]">
      <StickyPillNav activeTab="case-studies" />

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
                <div className="text-[26px] tracking-[-0.26px] font-medium">UI/UX Designer</div>
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
                  <img alt="" src="/images/icons/link.svg" className="w-[15px] h-[15px]" aria-hidden="true" />
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

        {/* Mockup grid */}
        <section className="mt-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-[722px_502px] gap-[18px]">
            <div className="relative overflow-hidden rounded-[40px] bg-[#e5e3f5] border-[10px] border-white h-[510px]">
              {/* Two phones */}
              <div className="absolute left-[97px] top-[137px] w-[294px] h-[519px]">
                <PhoneMock
                  deviceSrc={iphone16ProA}
                  screenSrc={screen1}
                  maskSvgSrc="/images/norlys/mask-1.svg"
                  maskShapeSvgSrc="/images/norlys/mask-shape-1.svg"
                  maskPosition="7.136px 4.615px"
                  maskSize="279.899px 507.568px"
                  screenSize={{ width: 294, height: 519 }}
                />
              </div>
              <div className="absolute left-[317px] top-[39px] w-[302px] h-[436px]">
                <PhoneMock
                  deviceSrc={iphone16ProB}
                  screenSrc={screen2}
                  maskSvgSrc="/images/norlys/mask-2.svg"
                  maskShapeSvgSrc="/images/norlys/mask-shape-2.svg"
                  maskPosition="7.798px 2.504px"
                  maskSize="287.065px 428.536px"
                  screenSize={{ width: 302, height: 436 }}
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] bg-[#e5e3f5] border-[10px] border-white h-[510px]">
              <div className="absolute left-[136px] top-[66px] w-[230px] h-[500px]">
                <PhoneMock
                  deviceSrc={iphone17}
                  screenSrc={screen3}
                  maskSvgSrc="/images/norlys/mask-3.svg"
                  maskShapeSvgSrc="/images/norlys/mask-shape-3.svg"
                  maskPosition="-0.014px 0.066px"
                  maskSize="229.999px 499.713px"
                  screenSize={{ width: 230, height: 500 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-[18px] grid grid-cols-1 lg:grid-cols-[588px_636px] gap-[18px]">
            <div className="relative overflow-hidden rounded-[40px] bg-[#e5e3f5] border-[10px] border-white h-[575px]">
              <div className="absolute left-[155px] top-[72px] w-[258px] h-[560px]">
                <PhoneMock
                  deviceSrc={iphone17}
                  screenSrc={screen4}
                  maskSvgSrc="/images/norlys/mask-4.svg"
                  maskShapeSvgSrc="/images/norlys/mask-shape-4.svg"
                  maskPosition="-0.016px 0.074px"
                  maskSize="257.71px 559.918px"
                  screenSize={{ width: 258, height: 560 }}
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[40px] bg-[#e5e3f5] border-[10px] border-white h-[575px]">
              <div className="absolute left-[80px] top-[-258px] w-[530px] h-[765px]">
                <PhoneMock
                  deviceSrc={iphone16ProB}
                  screenSrc={screen5}
                  maskSvgSrc="/images/norlys/mask-5.svg"
                  maskShapeSvgSrc="/images/norlys/mask-shape-5.svg"
                  maskPosition="13.678px 4.393px"
                  maskSize="503.499px 751.633px"
                  screenSize={{ width: 530, height: 765 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-[18px] relative overflow-hidden rounded-[40px] bg-[#e5e3f5] border-[10px] border-white h-[575px]">
            <div className="absolute left-1/2 -translate-x-1/2 top-[50px] w-[272px] h-[456px] rounded-[25px] bg-[#217d77] overflow-hidden">
              <img alt="" src="/images/norlys/subtract-a.svg" className="absolute right-[12px] top-[27px] w-[136px] h-[140px]" />
              <img alt="" src="/images/norlys/subtract-b.svg" className="absolute left-[10px] top-[28px] w-[134px] h-[140px]" />
              <img alt="" src="/images/norlys/rect-429.svg" className="absolute left-1/2 -translate-x-1/2 top-[71px] w-[183px] h-[191px]" />
              <div className="absolute left-[19px] top-[296px] w-[247px] text-white font-semibold text-[20px] leading-[1.15]">
                You have used 20% more energy than similar households
              </div>
            </div>

            <div className="absolute left-[474px] top-[50px] w-[272px] h-[456px] rounded-[25px] bg-[#096fdc] overflow-hidden">
              <div className="absolute left-[19px] top-[33px] w-[246px] text-white font-semibold text-[23px] leading-[1.07] tracking-[-0.25px]">
                On this day, you used the most energy
              </div>
              <img alt="" src="/images/norlys/vector-575.svg" className="absolute left-[-353px] top-[207px] w-[795px] h-[236px]" />
              <img alt="" src="/images/norlys/polygon-63.svg" className="absolute left-1/2 -translate-x-1/2 top-[200px] w-[13px] h-[7px]" />
            </div>

            <div className="absolute left-[809px] top-[50px] w-[272px] h-[456px] rounded-[25px] bg-[#217d77] overflow-hidden border border-[rgba(255,255,255,0.2)]">
              <img alt="" src="/images/norlys/ellipse-201.svg" className="absolute left-1/2 -translate-x-1/2 top-[120px] w-[465px] h-[454px]" />
              <img alt="" src="/images/norlys/ellipse-202.svg" className="absolute left-[-69px] top-[143px] w-[407px] h-[399px]" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[206px] w-[246px] text-white font-semibold text-[19px] leading-[29.5px] text-center">
                Here&apos;s how you can lower your electricity bill
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

