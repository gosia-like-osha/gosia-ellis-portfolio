import Image from "next/image";

import { StickyPillNav } from "../components/StickyPillNav";

import aboutPhoto from "../../public/images/about-photo.png";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#15171c]">
      <StickyPillNav activeTab="about" />

      <header className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[28px] flex items-start justify-between gap-6">
          <div className="pt-[6px] text-[28px] tracking-[-0.28px] font-semibold leading-[1.3] whitespace-nowrap sm:text-[31px] sm:tracking-[-0.31px]">
            Gosia Ellis
          </div>
        </div>
      </header>

      <main className="w-full">
        <section className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[60px] pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-[64px] items-start">
            <div className="relative w-[265px] h-[265px] mx-auto lg:mx-0">
              <div className="absolute left-0 top-0 w-[265px] h-[265px] flex items-center justify-center">
                <div className="rotate-[-2.75deg] skew-x-[0.83deg]">
                  <div className="w-[249.607px] h-[253.509px] rounded-[37.268px] border-[2.236px] border-[rgba(255,255,255,0.4)] shadow-[0px_189.32px_52.92px_rgba(0,0,0,0.01)] overflow-hidden">
                    <Image
                      alt="Portrait of Gosia Ellis"
                      src={aboutPhoto}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Pin */}
              <div className="absolute left-[126px] top-[-32px] w-[33.193px] h-[56.051px]">
                {/* SVG exported from Figma; served from /public */}
                <img alt="" src="/images/about-pin.svg" className="w-full h-full" aria-hidden="true" />
              </div>
            </div>

            <div className="flex flex-col gap-[24px] w-full lg:max-w-[798px]">
              <section className="relative w-full overflow-hidden rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-[#f7f7f9]">
                <div className="px-[30px] pt-[29px] pb-[30px]">
                  <div className="text-[26px] tracking-[-0.26px] leading-[1.3] font-medium">
                    About me
                  </div>
                  <div className="h-px bg-[#15171c] opacity-20 mt-[22px]" />
                  <p className="mt-[22px] w-full max-w-none text-[24px] tracking-[-0.24px] leading-[1.3] text-[rgba(21,23,28,0.6)] font-medium">
                    I design digital experiences that feel effortless, look great, and work flawlessly.
                    With 6+ years in product design, I’ve worked with a global agency as well as in-house
                    product teams, helping bring ideas to life alongside brilliant people and shaping
                    interfaces that are thoughtful, human, and a little bit delightful.
                  </p>
                </div>
              </section>

              <section className="relative w-full overflow-hidden rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-[#f7f7f9]">
                <div className="px-[30px] pt-[29px] pb-[30px]">
                  <div className="text-[26px] tracking-[-0.26px] leading-[1.3] font-medium">
                    What I’m looking for
                  </div>
                  <div className="h-px bg-[#15171c] opacity-20 mt-[22px]" />
                  <p className="mt-[21px] w-full max-w-none text-[24px] tracking-[-0.24px] leading-[1.3] text-[rgba(21,23,28,0.6)] font-medium">
                    Work with purpose and impact in close collaboration with a team of thoughtful and
                    talented people.
                  </p>
                </div>
              </section>

              <section className="relative w-full overflow-hidden rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-[#f7f7f9]">
                <div className="px-[30px] pt-[29px] pb-[30px]">
                  <div className="text-[26px] tracking-[-0.26px] leading-[1.3] font-medium">
                    Let’s connect
                  </div>
                  <div className="h-px bg-[#15171c] opacity-20 mt-[22px]" />

                  <div className="mt-[21px] flex flex-wrap items-center gap-x-[8px] gap-y-[12px] text-[24px] tracking-[-0.24px] leading-[1.3] text-[rgba(21,23,28,0.6)] font-medium">
                    <span>Find me on</span>
                    <a
                      href="https://www.linkedin.com/in/gosia-ellis/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-[rgba(21,23,28,0.6)] hover:text-[#15171c]"
                    >
                      LinkedIn
                    </a>
                    <span>or</span>
                    <a
                      href="mailto:itsgosiaa@gmail.com"
                      className="inline-flex items-center justify-center rounded-[211.384px] bg-[#15171c] px-[13px] py-[6px] text-[16px] tracking-[-0.32px] text-white font-medium"
                    >
                      Email me
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

