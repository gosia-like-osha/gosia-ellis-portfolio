import { CaseStudyListItem } from "../components/CaseStudyListItem";
import { SiteHeader } from "../components/SiteHeader";
import { StickyPillNav } from "../components/StickyPillNav";

/** Figma 5795:18163 — NEW CASES */
export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-[#15171c]">
      <SiteHeader activeTab="case-studies" />
      <StickyPillNav activeTab="case-studies" />

      <main className="w-full">
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-[41px] lg:px-[100px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[16px] gap-y-[42px] lg:grid-cols-2">
            <CaseStudyListItem
              href="/case-studies/barry-energy"
              imageSrc="/images/case-studies/barry-new.png"
              imageAlt="Barry Energy case study"
              tags="Visual identity, UI design, illustration"
              title="Barry Energy → EV charging made smarter"
            />
            <CaseStudyListItem
              href="/case-studies/norlys"
              imageSrc="/images/case-studies/norlys-new.png"
              imageAlt="Norlys case study"
              tags="UI design, interaction, UX design, mobile app"
              title="Norlys → Rethinking the electricity bill"
            />
            <CaseStudyListItem
              href="/case-studies/usisaat"
              imageSrc="/images/case-studies/usiseat-new.png"
              imageAlt="Usisaat case study"
              tags="Visual identity, product design, desktop"
              title="Usisaat → Simplifying logistics complexity"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
