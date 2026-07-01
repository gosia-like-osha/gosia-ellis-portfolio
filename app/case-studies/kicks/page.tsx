import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";

/** Figma 6122:78438 / 5412:73932 — 612×670 tile shell */
function MockupTile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f7f6f4] max-lg:h-[395px] ${className}`}
    >
      {children}
    </div>
  );
}

/** Full-bleed tile export at 3× — scales to Figma 612×670 via w-full */
function TileImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="block h-auto w-full"
      decoding="async"
    />
  );
}

/** Figma 6122:78372 — KICKS */
export default function KicksCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />

      <main className="w-full pb-16">
        {/* Intro — Figma 6122:78377 / 6122:78382 */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:pt-5 lg:px-[100px] lg:pt-[80px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[219px] gap-y-[48px] lg:grid-cols-[444px_577px] lg:items-start">
            <div className="flex flex-col gap-[24px] uppercase">
              <h1 className="text-[42px] font-medium leading-[50px]">KICKS</h1>
              <div className="flex flex-col gap-[2px] text-[18px] font-medium leading-[27px]">
                <p>Role: DIGITAL DESIGNER</p>
                <p className="font-medium text-[#999]">Digital DESIGN, e-commerce, web design</p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[42px] font-medium uppercase leading-[50px] tracking-[0.042px]">
                Elevating beauty e-commerce
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Project</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    KICKS is one of Scandinavia&apos;s leading beauty retailers, with over 250 stores
                    across Sweden, Norway and Finland. As the brand underwent a bold visual refresh, the
                    challenge was to translate its new identity into a scalable digital design system
                    across e-commerce, app and editorial content.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">strategy</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    Working alongside KICKS&apos; internal team, I translated the refreshed brand into a
                    digital design language that could scale across products and platforms. Every
                    component was designed to capture the brand&apos;s energy while adapting to a wide range
                    of use cases, from product pages to campaign creatives.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">outcome</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    The result is a scalable design language that creates a consistent experience across
                    KICKS&apos; digital ecosystem. From e-commerce to the app and campaign content, every
                    touchpoint feels recognisably KICKS while allowing the brand&apos;s personality to shine
                    through.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 6150:17892 */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-4 lg:mt-[64px] lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Row 1 — Figma 6144:20538 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-1.png"
                  alt="KICKS e-commerce on laptop"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-2.png"
                  alt="KICKS Club membership design"
                  width={1838}
                  height={2010}
                />
              </MockupTile>
            </div>

            {/* Row 2 — Figma 6144:20611 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-3.png"
                  alt="KICKS app on iPhone"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-4.png"
                  alt="KICKS Community mobile UI"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
            </div>

            {/* Row 3 — Figma 6122:78534 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-5.png"
                  alt="KICKS Beauty Talks campaign"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-6.png"
                  alt="KICKS e-commerce on MacBook"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
            </div>

            {/* Row 4 — Figma 6150:17676 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-7.png"
                  alt="KICKS brand lifestyle photography"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-8.png"
                  alt="KICKS skincare promotional design"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
            </div>

            {/* Row 5 — Figma 6144:20038 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-9.png"
                  alt="KICKS app shown on iPhone in hand"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
              <MockupTile>
                <TileImage
                  src="/images/kicks/case-study/kicks-10.png"
                  alt="KICKS skincare editorial cards"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
