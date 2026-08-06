export type PortfolioVariant = "main" | "alt";

export type CaseStudyId =
  | "kicks"
  | "norlys"
  | "plenti"
  | "barry-energy"
  | "usisaat";

type CaseStudyEntry = {
  id: CaseStudyId;
  href: `/case-studies/${CaseStudyId}`;
  imageSrc: string;
  imageAlt: string;
  tags: string;
  title: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
};

/** All case studies — edit variant lists below to choose which appear on each site. */
export const CASE_STUDY_CATALOG: Record<CaseStudyId, CaseStudyEntry> = {
  kicks: {
    id: "kicks",
    href: "/case-studies/kicks",
    imageSrc: "/images/case-studies/kicks-case.png",
    imageAlt: "KICKS case study",
    imageWidth: 1836,
    imageHeight: 1596,
    imageClassName: "block h-full w-full object-cover",
    tags: "Digital DESIGN, e-commerce, web design",
    title: "KICKS → Elevating Beauty E-commerce",
  },
  norlys: {
    id: "norlys",
    href: "/case-studies/norlys",
    imageSrc: "/images/case-studies/norlys-new.png",
    imageAlt: "Norlys case study",
    tags: "UI Design, Interaction, mobile app",
    title: "Norlys → Rethinking the electricity bill",
  },
  plenti: {
    id: "plenti",
    href: "/case-studies/plenti",
    imageSrc: "/images/case-studies/plenti.png",
    imageAlt: "Plenti case study",
    imageWidth: 1836,
    imageHeight: 1596,
    imageClassName: "block h-full w-full object-cover",
    tags: "WEB DESIGN, branding, visual identity",
    title: "Plenti → Shaping a New Way to Rent Tech",
  },
  "barry-energy": {
    id: "barry-energy",
    href: "/case-studies/barry-energy",
    imageSrc: "/images/case-studies/barry-new.png",
    imageAlt: "Barry Energy case study",
    tags: "Visual identity, UI design, illustration",
    title: "Barry Energy → EV charging made smarter",
  },
  usisaat: {
    id: "usisaat",
    href: "/case-studies/usisaat",
    imageSrc: "/images/case-studies/usiseat-new.png",
    imageAlt: "Usisaat case study",
    tags: "Visual identity, product design, desktop",
    title: "Usisaat → Navigating logistics complexity",
  },
};

type PortfolioVariantConfig = {
  /** Homepage intro — upper-left paragraph below the header */
  homeIntro: string;
  /** Case studies shown on /case-studies, in display order */
  caseStudyIds: CaseStudyId[];
  /** Optional per-site tweaks to catalog entries (tags, title, etc.) */
  caseStudyOverrides?: Partial<
    Record<
      CaseStudyId,
      Partial<Pick<CaseStudyEntry, "tags" | "title">> & {
        role?: string;
        subtitle?: string;
      }
    >
  >;
};

const VARIANTS: Record<PortfolioVariant, PortfolioVariantConfig> = {
  /** Default — gosiadesigns.com */
  main: {
    homeIntro:
      "A digital product designer based in Copenhagen, bridging the gap between brand and UX.",
    caseStudyIds: ["norlys", "barry-energy", "usisaat"],
    caseStudyOverrides: {
      norlys: {
        tags: "UI/UX Design, Interaction Design, mobile app",
        role: "LEAD PRODUCT DESIGNER",
        subtitle: "UI/UX DESIGN, INTERACTION DESIGN, MOBILE APP",
      },
      "barry-energy": {
        tags: "UI/UX design, Visual identity, illustration",
        role: "LEAD UI/UX DESIGNER",
        subtitle: "UI/UX DESIGN, VISUAL IDENTITY, ILLUSTRATION",
      },
      usisaat: {
        tags: "product design, desktop",
        subtitle: "product DESIGN, desktop",
      },
    },
  },
  /** Second portfolio — set NEXT_PUBLIC_PORTFOLIO_VARIANT=alt on its Vercel project */
  alt: {
    homeIntro:
      "A multidisciplinary designer based in Copenhagen, bridging the gap between brand and UX.",
    caseStudyIds: ["kicks", "norlys", "plenti", "barry-energy"],
  },
};

export function getPortfolioVariant(): PortfolioVariant {
  const value = process.env.NEXT_PUBLIC_PORTFOLIO_VARIANT;
  if (value === "alt") return "alt";
  return "main";
}

export function getPortfolioConfig() {
  const variant = getPortfolioVariant();
  const config = VARIANTS[variant];

  return {
    variant,
    homeIntro: config.homeIntro,
    caseStudies: config.caseStudyIds.map((id) => ({
      ...CASE_STUDY_CATALOG[id],
      ...config.caseStudyOverrides?.[id],
    })),
  };
}

export function getCaseStudyOverride(id: CaseStudyId) {
  const { caseStudyOverrides } = VARIANTS[getPortfolioVariant()];
  return caseStudyOverrides?.[id];
}

export function isCaseStudyVisible(id: string): boolean {
  const { caseStudyIds } = VARIANTS[getPortfolioVariant()];
  return caseStudyIds.includes(id as CaseStudyId);
}
