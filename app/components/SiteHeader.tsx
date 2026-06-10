import Image from "next/image";

import { SiteBrand } from "./SiteBrand";
import { TextNav } from "./TextNav";

type ActiveTab = "case-studies" | "about";

const navItems = (activeTab?: ActiveTab) =>
  [
    {
      label: "Case studies",
      href: "/case-studies",
      active: activeTab === "case-studies",
    },
    { label: "About", href: "/about", active: activeTab === "about" },
  ] as const;

/** Figma 5795:17839 — brand left, globe center, nav right */
export function SiteHeader({ activeTab }: { activeTab?: ActiveTab }) {
  const items = navItems(activeTab);

  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1440px] px-6 pt-[28px] lg:px-[100px]">
        <div className="grid grid-cols-1 items-center sm:grid-cols-[1fr_auto_1fr]">
          <SiteBrand />
          <Image
            src="/images/header/globe-desktop.png"
            alt=""
            width={846}
            height={114}
            className="mx-auto hidden h-[38px] w-[282px] shrink-0 sm:block"
            priority
            quality={100}
          />
          <div className="hidden justify-end sm:flex">
            <TextNav items={[...items]} />
          </div>
        </div>
      </div>
    </header>
  );
}
