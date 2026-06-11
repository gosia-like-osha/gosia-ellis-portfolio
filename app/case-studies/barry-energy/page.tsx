import Image from "next/image";

import { CaseStudyPageHeader } from "../../components/CaseStudyPageHeader";

const ICONS_BARRY_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781094685/icons-barry_xv4eap.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781094685/icons-barry_kfo7ag.mp4",
} as const;

const BARBARBAR_VIDEO = {
  webm: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781171487/barbarbar_zcfrhx.webm",
  mp4: "https://res.cloudinary.com/dtl8ecgm2/video/upload/v1781171486/barbarbar_nfyqzv.mp4",
} as const;

/** Clip frame at exact Figma x/y/w/h inside a 612×670 tile; optional mobile clip (5804:19795) */
function FigmaFrame({
  left,
  top,
  width,
  height,
  mobile,
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  mobile?: {
    left?: number;
    top: number;
    width: number;
    height: number;
    center?: boolean;
  };
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute overflow-hidden max-lg:hidden"
        style={{ left, top, width, height }}
      >
        {children}
      </div>
      {mobile ? (
        <div
          className="pointer-events-none absolute overflow-hidden lg:hidden"
          style={{
            top: mobile.top,
            width: mobile.width,
            height: mobile.height,
            ...(mobile.center
              ? { left: "50%", transform: "translateX(-50%)" }
              : { left: mobile.left }),
          }}
        >
          {children}
        </div>
      ) : null}
    </>
  );
}

/** Figma 5412:73966 — 1240×670 hero shell */
function HeroTile({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.1)] bg-[#fcfcfc] max-lg:h-[395px] ${className}`}
    >
      {children}
    </div>
  );
}

/** Figma 5804:19869 — hero crop inside 361×395 mobile tile */
function BarryHeroImage({ mobile = false }: { mobile?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={
        mobile
          ? "/images/barry/case-study/hero.png"
          : "/images/barry/case-study/hero-desktop.png"
      }
      alt="Barry Energy hero"
      width={mobile ? 1024 : 3720}
      height={mobile ? 553 : 2010}
      className={
        mobile
          ? "block h-auto w-full max-lg:absolute max-lg:left-[calc(100%*-210/361)] max-lg:top-[-7px] max-lg:h-[410px] max-lg:w-[calc(100%*781/361)] max-lg:max-w-none max-lg:object-cover"
          : "block h-auto w-full"
      }
      decoding="async"
      fetchPriority="high"
    />
  );
}

/** Figma 5412:73932 — 612×670 tile shell */
function MockupTile({
  children,
  empty = false,
  className = "",
}: {
  children?: React.ReactNode;
  empty?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[670px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#f7f6f4] max-lg:h-[395px] ${className}`}
    >
      {empty ? null : children}
    </div>
  );
}

/** Figma 5412:73866 — NEW BARRY */
export default function BarryEnergyCaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-black">
      <CaseStudyPageHeader />

      <main className="w-full pb-16">
        {/* Figma 5804:19808 — mobile hero first; 40px below header (y=110) */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-10 lg:hidden">
          <div className="mx-auto w-full max-w-[1240px]">
            <HeroTile>
              <BarryHeroImage mobile />
            </HeroTile>
          </div>
        </section>

        {/* Intro — Figma 5412:73924 / mobile 5804:19931 */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:pt-5 lg:px-[100px] lg:pt-[80px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[219px] gap-y-[48px] lg:grid-cols-[444px_577px] lg:items-start">
            <div className="flex flex-col gap-[24px] uppercase">
              <h1 className="text-[42px] font-medium leading-[50px]">Barry energy</h1>
              <div className="flex flex-col gap-[2px] text-[18px] font-medium leading-[27px]">
                <p>Role: LEAD UI DESIGNER</p>
                <p className="font-medium text-[#999]">vISUAL IDENTITY, UI DESIGN, ILLUSTRATION</p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[42px] font-medium uppercase leading-[50px] tracking-[0.042px]">
                Smarter EV charging
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Problem</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    Barry Energy already had a clear brand - bold, green, and futuristic. As an EV charging
                    app that helps drivers charge when electricity is cheapest, the product needed to feel
                    just as smart and effortless as the service itself. The challenge was bringing that
                    feeling into the experience - not just keeping things visually consistent, but making
                    colours, icons, and interactions feel like part of the same story.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">Approach</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    We introduced a functional color system across the interface to support faster
                    interpretation of key data. We mapped every interaction to this system, price
                    information used a green-to-red gradient, while EV charging was always shown in
                    blue. Usage graphs inherited these meanings. Suddenly, users could scan the screen
                    and understand the current state at a glance.
                  </p>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="text-[18px] font-medium uppercase leading-[27px]">RESULT</p>
                  <p className="text-[15px] font-normal leading-[22px]">
                    User testing post-launch showed a clear shift. In comprehension tests, 82% of users
                    could accurately explain what they were seeing and why it mattered, compared with 71%
                    before. We also saw a 27% increase in users actively using price-based controls to
                    adjust their consumption patterns, proving the design was not just clearer, but also
                    actionable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups — Figma 5529:72098 / mobile 5804:19795 */}
        <section className="mx-auto max-w-[1440px] px-4 max-lg:mt-4 lg:mt-[64px] lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-[16px]">
            {/* Row 1 — desktop only; mobile hero lives above intro */}
            <HeroTile className="hidden lg:block">
              <BarryHeroImage />
            </HeroTile>

            {/* Row 2 — Figma 5430:81471 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/barry/case-study/row-2-iphone-15-desktop.png"
                  alt="Barry Energy payments on iPhone"
                  width={1836}
                  height={2010}
                  className="block h-auto w-full max-lg:hidden"
                  decoding="async"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/barry/case-study/row-2-iphone-15.png"
                  alt="Barry Energy payments on iPhone"
                  width={935}
                  height={1024}
                  className="absolute left-[calc(100%*-118/361)] top-0 hidden h-full w-[calc(100%*556/361)] max-w-none object-cover max-lg:block lg:hidden"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile className="max-lg:hidden">
                {/* Same as homepage row 5 — phone flush to tile bottom */}
                <video
                  className="absolute bottom-0 left-1/2 block h-[541px] w-[412px] max-w-none -translate-x-1/2 object-cover object-bottom"
                  width={412}
                  height={541}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={BARBARBAR_VIDEO.webm} type="video/webm" />
                  <source src={BARBARBAR_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
            </div>

            {/* Row 3 — Figma 5671:13958 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* Figma 5671:13969: x:106 y:135 400×400 */}
                <video
                  className="absolute left-[106px] top-[135px] block h-[400px] w-[400px] max-w-none max-lg:left-1/2 max-lg:top-[80px] max-lg:h-[236px] max-lg:w-[236px] max-lg:-translate-x-1/2"
                  width={400}
                  height={400}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={ICONS_BARRY_VIDEO.webm} type="video/webm" />
                  <source src={ICONS_BARRY_VIDEO.mp4} type="video/mp4" />
                </video>
              </MockupTile>
              <MockupTile>
                {/* Figma 5818:21970: x:101 y:200 411×309 */}
                <FigmaFrame
                  left={101}
                  top={200}
                  width={411}
                  height={309}
                  mobile={{ top: 153, width: 236, height: 107, center: true }}
                >
                  <Image
                    src="/images/barry/case-study/row-3-referral.png"
                    alt="Barry Energy referral UI"
                    width={1233}
                    height={927}
                    unoptimized
                    quality={100}
                    className="block h-auto w-[411px] max-w-none max-lg:w-[236px]"
                    sizes="411px"
                  />
                </FigmaFrame>
              </MockupTile>
            </div>

            {/* Row 4 — Figma 5671:13999 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* Figma 5671:14113: x:130 y:220 352×229 */}
                <FigmaFrame
                  left={130}
                  top={220}
                  width={352}
                  height={229}
                  mobile={{ top: 130, width: 208, height: 135, center: true }}
                >
                  <Image
                    src="/images/barry/case-study/row-4-icons.png"
                    alt="Barry Energy transaction icons"
                    width={1056}
                    height={688}
                    unoptimized
                    quality={100}
                    className="block h-auto w-[352px] max-w-none max-lg:w-[208px]"
                    sizes="352px"
                  />
                </FigmaFrame>
              </MockupTile>
              <MockupTile>
                {/* Figma 5818:76403: x:81, 450px wide — flush to top, no crop offset */}
                <Image
                  src="/images/barry/case-study/row-4-payments.png"
                  alt="Barry Energy payments transactions screen"
                  width={836}
                  height={1024}
                  unoptimized
                  quality={100}
                  className="ml-[81px] block h-auto w-[450px] max-w-none max-lg:absolute max-lg:left-1/2 max-lg:top-0 max-lg:ml-0 max-lg:h-auto max-lg:w-[265px] max-lg:max-w-none max-lg:-translate-x-1/2"
                  sizes="450px"
                />
              </MockupTile>
            </div>

            {/* Row 5 — Figma 5671:14212 */}
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
              <MockupTile>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/barry/case-study/row-5-tesla.png"
                  alt="Barry Energy Tesla connect screen in car"
                  width={935}
                  height={1024}
                  className="block h-auto w-full max-lg:absolute max-lg:left-[calc(100%*-56/361)] max-lg:top-0 max-lg:h-full max-lg:w-[calc(100%*472/361)] max-lg:max-w-none max-lg:object-cover"
                  decoding="async"
                />
              </MockupTile>
              <MockupTile>
                {/* Figma 5818:22023: x:61 y:181 514×227 */}
                <FigmaFrame
                  left={61}
                  top={181}
                  width={514}
                  height={227}
                  mobile={{ top: 142, width: 269, height: 112, center: true }}
                >
                  <Image
                    src="/images/barry/case-study/row-5-notifications.png"
                    alt="Barry Energy charging notification"
                    width={1542}
                    height={681}
                    unoptimized
                    quality={100}
                    className="block h-auto w-[514px] max-w-none max-lg:w-[269px]"
                    sizes="514px"
                  />
                </FigmaFrame>
              </MockupTile>
            </div>

            {/* Row 6 — Figma 5671:14341 / 5838:83280 + 5838:83740 — 444×536, bottom flush, centered */}
            <div className="grid grid-cols-1 gap-[16px] max-lg:hidden lg:grid-cols-2">
              <MockupTile>
                <Image
                  src="/images/barry/case-study/row-6-left.png"
                  alt="Barry Energy charging preferences"
                  width={1332}
                  height={1608}
                  unoptimized
                  quality={100}
                  className="absolute bottom-0 left-1/2 block h-auto w-[444px] max-w-none -translate-x-1/2"
                  sizes="444px"
                />
              </MockupTile>
              <MockupTile>
                <Image
                  src="/images/barry/case-study/row-6-right.png"
                  alt="Barry Energy electricity prices widget"
                  width={1332}
                  height={1608}
                  unoptimized
                  quality={100}
                  className="absolute bottom-0 left-1/2 block h-auto w-[444px] max-w-none -translate-x-1/2"
                  sizes="444px"
                />
              </MockupTile>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
