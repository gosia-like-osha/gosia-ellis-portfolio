import { StickyPillNav } from "../components/StickyPillNav";
import Image from "next/image";

import cardOverlay from "../../public/images/case-study-card-overlay.png";
import cardShadow from "../../public/images/case-study-card-shadow.png";
import barryDynamicPricing from "../../public/images/barry-dynamic-pricing.png";
import aiExplorationsIllustration from "../../public/images/ai-explorations-illustration.png";
import norlysIllustration from "../../public/images/norlys-illustration.png";

type CaseStudyCardProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  illustrationSrc?: typeof barryDynamicPricing;
  illustrationClassName?: string;
  illustrationImageClassName?: string;
  comingSoon?: boolean;
  interactive?: boolean;
  hoverLiftPercent?: 5 | 10;
};

function CaseStudyCard({
  title,
  subtitle,
  imageUrl,
  illustrationSrc,
  illustrationClassName,
  illustrationImageClassName,
  comingSoon,
  interactive = true,
  hoverLiftPercent = 10,
}: CaseStudyCardProps) {
  const hoverLiftClass = interactive
    ? hoverLiftPercent === 5
      ? "group-hover:-translate-y-[5%]"
      : "group-hover:-translate-y-[10%]"
    : "";
  return (
    <article
      className={[
        "relative overflow-hidden rounded-[37.236px] border border-[rgba(21,23,28,0.1)] bg-gradient-to-b from-[#f7f7f9] to-white h-[338.843px]",
        interactive ? "group cursor-pointer" : "",
      ].join(" ")}
    >
      {illustrationSrc ? (
        <div
          className={[
            "absolute z-10 left-1/2 top-[55.07px] -translate-x-1/2 w-[286.918px] h-[233.758px] transition-transform duration-300 ease-out",
            hoverLiftClass,
            illustrationClassName ?? "",
          ].join(" ")}
          aria-hidden="true"
        >
          <Image
            alt=""
            src={illustrationSrc}
            className={["w-full h-full", illustrationImageClassName ?? "object-contain"].join(" ")}
            priority={false}
          />
        </div>
      ) : (
        <div className="absolute z-10 left-0 top-[159.18px] w-full h-[224.344px]">
          {imageUrl ? (
            <img
              alt=""
              src={imageUrl}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: "scale(1.2)" }}
            />
          ) : null}
        </div>
      )}

      {/* Shadow overlay ABOVE the illustration (exported from Figma) */}
      <div
        className="absolute z-20 left-0 top-[159.18px] w-full h-[224.344px] pointer-events-none"
        style={{ transform: "translateY(-84px) scale(1.18)" }}
        aria-hidden="true"
      >
        <Image alt="" src={cardShadow} className="w-full h-full object-fill" priority={false} />
      </div>

      <div className="absolute z-30 inset-x-0 bottom-0 h-[139.943px]">
        <Image
          alt=""
          src={cardOverlay}
          className="w-full h-full object-fill"
          priority={false}
        />
      </div>

      <div className="absolute z-40 left-[21.41px] top-[252.27px] flex flex-col gap-[4.964px] text-[#15171c]">
        <div className="text-[25px] tracking-[-0.25px] leading-[1.3] font-medium">
          {title}
        </div>
        <div className="text-[16px] tracking-[-0.16px] leading-[1.3] opacity-50 font-medium">
          {subtitle}
        </div>
      </div>

      {comingSoon ? (
        <div className="absolute z-40 left-[259.18px] top-[22.9px] rounded-[209.861px] bg-[#aeaeb2] px-[12.906px] py-[5.957px] text-[15.885px] tracking-[-0.3177px] text-white font-medium">
          Coming soon
        </div>
      ) : null}
    </article>
  );
}

export default function CaseStudiesPage() {
  // Assets from Figma MCP (valid for ~7 days)
  const imgBarry = "https://www.figma.com/api/mcp/asset/a922a92c-3739-4d7d-936c-67a7db889323";
  const imgNorlys = "https://www.figma.com/api/mcp/asset/52c4496c-93b4-4d2e-8c6a-cdee2cb28eff";
  const imgRelesys = "https://www.figma.com/api/mcp/asset/a922a92c-3739-4d7d-936c-67a7db889323";
  const imgAi = "https://www.figma.com/api/mcp/asset/a922a92c-3739-4d7d-936c-67a7db889323";

  return (
    <div className="flex flex-col min-h-full bg-white text-[#15171c]">
      <StickyPillNav activeTab="case-studies" />

      <header className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[28px] flex items-start justify-between gap-6">
          <div className="pt-[6px] text-[31px] tracking-[-0.31px] font-semibold leading-[1.3] whitespace-nowrap">
            Gosia Ellis
          </div>
        </div>
      </header>

      <main className="w-full">
        <section className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[53px] pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            <CaseStudyCard
              title="Barry energy"
              subtitle="Designing a smarter energy experience"
              illustrationSrc={barryDynamicPricing}
            />
            <CaseStudyCard
              title="Norlys"
              subtitle="Your monthly electricity bill, made easy"
              illustrationSrc={norlysIllustration}
              illustrationClassName="top-[51.07px] w-[345.492px] h-[352.556px]"
              hoverLiftPercent={5}
            />
            <CaseStudyCard
              title="Relesys"
              subtitle="Designing a connected workforce platform"
              imageUrl={imgRelesys}
            />
            <CaseStudyCard
              title="AI explorations"
              subtitle="Case study coming soon"
              illustrationSrc={aiExplorationsIllustration}
              illustrationClassName="top-[40.57px] w-[285.503px] h-[310.55px]"
              comingSoon
              interactive={false}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

