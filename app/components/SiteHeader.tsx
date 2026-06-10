import Image from "next/image";

import { MobileMenu } from "./MobileMenu";
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

/** Figma 5795:17839 desktop / 5804:18659 + 5804:19439 mobile */
export function SiteHeader({ activeTab }: { activeTab?: ActiveTab }) {
  const items = navItems(activeTab);

  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 pt-[22px] lg:px-[100px] lg:pt-[28px]">
        {/* Mobile — Figma 5804:18659 */}
        <div className="flex items-center justify-between lg:hidden">
          <SiteBrand compact />
          <MobileMenu items={[...items]} />
        </div>

        {/* Desktop — Figma 5795:17839 */}
        <div className="hidden grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <SiteBrand />
          <Image
            src="/images/header/globe-desktop.png"
            alt=""
            width={846}
            height={114}
            className="mx-auto h-[38px] w-[282px] shrink-0"
            priority
            quality={100}
          />
          <div className="flex justify-end">
            <TextNav items={[...items]} />
          </div>
        </div>
      </div>
    </header>
  );
}
