import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";

const SCENE_1_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1783253633/Scene-1_1_zyngoo.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1783253610/Scene-1_5_tzrbps.mp4",
} as const;

const HERO_SCENE_1_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1783254960/plentihero_a1rsxs.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1783254942/plentihero_apmrgi.mp4",
} as const;

/** Figma 5412:73932 — 612×670 tile shell */
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

/** Figma 6122:78642 — 1240×670 hero shell */
function HeroTile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f3f1ff] max-lg:h-[395px] ${className}`}
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
  className = "block h-auto w-full",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      decoding="async"
    />
  );
}

/** Figma 6117:74717 — PLENTI */
export default function PlentiCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />

      <main className="w-full pb-16">
        {/* Intro — Figma 6117:74722 / 6117:74727 */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:pt-5 lg:px-[100px] lg:pt-[80px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[219px] gap-y-[48px] lg:grid-cols-[444px_577px] lg:items-start">
            <div className="flex flex-col gap-[24px] uppercase">
              <h1 className="text-[42px] font-medium leading-[50px]">Plenti</h1>
              <div className="flex flex-col gap-[2px] text-[18px] font-medium leading-[27px]">
                <p>Role: DIGITAL DESIGNER</p>
                <p className="font-medium text-[#999]">BRANDING, vISUAL IDENTITY, WEB DESIGN</p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[42px] font-medium uppercase leading-[50px] tracking-[0.042px]">
                Shaping a New Way to Rent Tech
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Project</p>
                  <div className="flex flex-col gap-0 text-[15px] font-normal leading-[22px]">
                    <p>
                      Plenti is a circular tech rental platform that partners with leading tech retailers
                      to offer an alternative to buying. Through a monthly subscription, users can use
                      products for as long as they need, then either extend the rental or return them.
                    </p>
                    <p>
                      The goal of this project was to translate and expand Plenti&apos;s brand identity into
                      a clear and intuitive landing page that explains how the service works, what it
                      offers, and helps users quickly understand the benefits of renting tech over owning
                      it.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">strategy</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    Partnering with Plenti&apos;s team, I translated the brand identity into a clear and
                    informational landing page. The focus was on structuring complex ideas into a simple
                    and intuitive experience that quickly explains the service and its value proposition.
                    Each component was designed to create clarity and hierarchy, ensuring the page
                    communicates how Plenti works in a straightforward and accessible way while maintaining
                    consistency with the broader brand system.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">outcome</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    The result is a streamlined landing page that clearly explains Plenti&apos;s rental model
                    through a structured hierarchy of information. Users can quickly understand how the
                    service works, what is included, and how the subscription model replaces traditional
                    ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 6117:74717 */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-4 lg:mt-[64px] lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Hero — Figma 6122:78641 / 6565:20354 */}
            <HeroTile>
              <video
                className="pointer-events-none absolute bottom-0 left-1/2 h-[612px] w-[800px] max-w-full -translate-x-1/2 object-cover object-bottom max-lg:h-[361px] max-lg:w-full"
                width={800}
                height={612}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={HERO_SCENE_1_VIDEO.webm} type="video/webm" />
                <source src={HERO_SCENE_1_VIDEO.mp4} type="video/mp4" />
              </video>
            </HeroTile>

            {/* Row 1 — Figma 6446:16730 (2nd row: MacBook + How it works) */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile className="bg-white">
                <TileImage
                  src="/images/plenti/case-study/plenti-1.png"
                  alt="Plenti landing page on MacBook"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
              <MockupTile className="bg-white">
                {/* Figma 6477:17396 — 410×536 centered in 612×670 tile (6454:17071) */}
                <video
                  className="pointer-events-none absolute left-1/2 top-[55%] h-[536px] w-[410px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover max-lg:h-[316px] max-lg:w-[242px]"
                  width={410}
                  height={536}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={SCENE_1_VIDEO.webm} type="video/webm" />
                  <source src={SCENE_1_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
            </div>

            {/* Row 2 — Figma 6426:16068 (3rd row: carousel + headphones) */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile className="bg-white">
                {/* Figma 6572:20356 — 612×324 centered in 612×670 tile (6445:16711) */}
                <TileImage
                  src="/images/plenti/case-study/plenti-ui.png"
                  alt="Plenti product carousel UI"
                  width={1836}
                  height={972}
                  className="pointer-events-none absolute left-1/2 top-1/2 w-full max-w-[612px] -translate-x-1/2 -translate-y-1/2 object-contain max-lg:h-[191px] max-lg:max-w-none"
                />
              </MockupTile>
              <MockupTile className="bg-white">
                <TileImage
                  src="/images/plenti/case-study/plenti-headphones.png"
                  alt="Plenti lifestyle photography with headphones"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
            </div>

            {/* Row 3 — Figma 6175:73604 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                <TileImage
                  src="/images/plenti/case-study/plenti-5.png"
                  alt="Plenti mobile landing page on iPhone"
                  width={1836}
                  height={2010}
                />
              </MockupTile>
              <MockupTile className="bg-white">
                {/* Figma 6508:17968 — 498×504 centered in 612×670 tile (6426:15884) */}
                <TileImage
                  src="/images/plenti/case-study/plenti-colors.png"
                  alt="Plenti brand color palette"
                  width={1836}
                  height={1774}
                  className="pointer-events-none absolute left-1/2 top-[57%] h-[504px] w-[498px] -translate-x-1/2 -translate-y-1/2 object-contain max-lg:h-[297px] max-lg:w-[293px]"
                />
              </MockupTile>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
