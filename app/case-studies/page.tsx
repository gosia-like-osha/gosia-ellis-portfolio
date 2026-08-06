import { CaseStudyListItem } from "../components/CaseStudyListItem";
import { SiteHeader } from "../components/SiteHeader";
import { getPortfolioConfig } from "../../lib/portfolio-config";

/** Figma 6160:15871 — CASESs overview */
export default function CaseStudiesPage() {
  const { caseStudies } = getPortfolioConfig();

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-[#15171c]">
      <SiteHeader activeTab="case-studies" />

      <main className="w-full">
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-[41px] lg:px-[100px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[16px] gap-y-[37px] lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyListItem
                key={study.id}
                href={study.href}
                imageSrc={study.imageSrc}
                imageAlt={study.imageAlt}
                imageWidth={study.imageWidth}
                imageHeight={study.imageHeight}
                imageClassName={study.imageClassName}
                tags={study.tags}
                title={study.title}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
