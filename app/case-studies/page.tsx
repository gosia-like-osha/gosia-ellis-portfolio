import { StickyPillNav } from "../components/StickyPillNav";
import barryDynamicPricing from "../../public/images/barry-dynamic-pricing.png";
import aiExplorationsIllustration from "../../public/images/ai-explorations-illustration.png";
import norlysIllustration from "../../public/images/norlys-illustration.png";
import relesysIllustration from "../../public/images/relesys-illustration.png";
import { CaseStudyCard } from "../components/CaseStudyCard";

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#15171c]">
      <StickyPillNav activeTab="case-studies" />

      <header className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[28px] flex items-start justify-between gap-6">
          <div className="pt-[6px] text-[28px] tracking-[-0.28px] font-semibold leading-[1.3] whitespace-nowrap sm:text-[31px] sm:tracking-[-0.31px]">
            Gosia Ellis
          </div>
        </div>
      </header>

      <main className="w-full">
        <section className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[53px] pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            <CaseStudyCard
              title="Norlys"
              subtitle="Your monthly electricity bill, made easy"
              illustrationSrc={norlysIllustration}
              illustrationClassName="top-[36px] w-[262px] h-[158px] md:top-[53.07px] md:w-[345.856px] md:h-[264px]"
              illustrationImageClassName="object-contain object-top scale-[0.9] -translate-y-[10%]"
              hoverLiftPercent={5}
              href="/case-studies/norlys"
            />
            <CaseStudyCard
              title="Barry energy"
              subtitle="Designing a smarter energy experience"
              illustrationSrc={barryDynamicPricing}
              href="/case-studies/barry-energy"
            />
            <CaseStudyCard
              title="Relesys"
              subtitle="Designing a connected workforce platform"
              illustrationSrc={relesysIllustration}
              illustrationClassName="left-[calc(50%+0.46px)] top-[calc(50%-10.13px)] -translate-y-1/2 w-[336.494px] h-[187.526px]"
              illustrationImageClassName="object-contain"
              href="/case-studies/relesys"
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

