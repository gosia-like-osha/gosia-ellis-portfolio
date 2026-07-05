import { CaseStudyListItem } from "../components/CaseStudyListItem";
import { SiteHeader } from "../components/SiteHeader";

/** Set true to restore Usisaat on the overview and case study route */
const SHOW_USISAAT = false;

/** Figma 6160:15871 — CASESs overview */
export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcfc] text-[#15171c]">
      <SiteHeader activeTab="case-studies" />

      <main className="w-full">
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-[41px] lg:px-[100px]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[16px] gap-y-[37px] lg:grid-cols-2">
            {/* Row 1 — Figma 6160:15894: KICKS + Norlys */}
            <CaseStudyListItem
              href="/case-studies/kicks"
              imageSrc="/images/case-studies/kicks-case.png"
              imageAlt="KICKS case study"
              imageWidth={1836}
              imageHeight={1596}
              imageClassName="block h-full w-full object-cover"
              tags="Digital DESIGN, e-commerce, web design"
              title="KICKS → Elevating Beauty E-commerce"
            />
            <CaseStudyListItem
              href="/case-studies/norlys"
              imageSrc="/images/case-studies/norlys-new.png"
              imageAlt="Norlys case study"
              tags="UI Design, Interaction, mobile app"
              title="Norlys → Rethinking the electricity bill"
            />

            {/* Row 2 — Figma 6160:15872: Plenti + Barry (Usisaat hidden) */}
            {SHOW_USISAAT ? (
              <CaseStudyListItem
                href="/case-studies/usisaat"
                imageSrc="/images/case-studies/usiseat-new.png"
                imageAlt="Usisaat case study"
                tags="Visual identity, product design, desktop"
                title="Usisaat → Navigating logistics complexity"
              />
            ) : (
              <CaseStudyListItem
                href="/case-studies/plenti"
                imageSrc="/images/case-studies/plenti.png"
                imageAlt="Plenti case study"
                imageWidth={1836}
                imageHeight={1596}
                imageClassName="block h-full w-full object-cover"
                tags="WEB DESIGN, branding, visual identity"
                title="Plenti → Shaping a New Way to Rent Tech"
              />
            )}
            <CaseStudyListItem
              href="/case-studies/barry-energy"
              imageSrc="/images/case-studies/barry-new.png"
              imageAlt="Barry Energy case study"
              tags="Visual identity, UI design, illustration"
              title="Barry Energy → EV charging made smarter"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
