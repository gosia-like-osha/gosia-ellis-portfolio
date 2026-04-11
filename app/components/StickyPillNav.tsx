import { PillNav } from "./PillNav";

type ActiveTab = "highlights" | "case-studies" | "about";

const navItems = (activeTab: ActiveTab) =>
  [
    { label: "Highlights", href: "/", active: activeTab === "highlights" },
    {
      label: "Case studies",
      href: "/case-studies",
      active: activeTab === "case-studies",
    },
    { label: "About", href: "/about", active: activeTab === "about" },
  ] as const;

export function StickyPillNav({ activeTab }: { activeTab: ActiveTab }) {
  const items = navItems(activeTab);

  return (
    <>
      {/* Figma 4743:23782 — mobile bottom bar centered; desktop hidden */}
      <div className="fixed inset-x-0 bottom-0 z-[200] pointer-events-none isolate sm:hidden">
        <div className="flex justify-center px-[31px] pt-2 pb-[calc(48px+env(safe-area-inset-bottom,0px))] pointer-events-auto">
          <PillNav items={[...items]} variant="mobile" />
        </div>
      </div>

      {/* Desktop — unchanged: top-right fixed */}
      <div className="hidden sm:block fixed top-[28px] left-0 right-0 z-[200] pointer-events-none isolate">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] flex justify-end pointer-events-none">
          <div className="pointer-events-auto relative z-[1]">
            <PillNav items={[...items]} />
          </div>
        </div>
      </div>
    </>
  );
}
