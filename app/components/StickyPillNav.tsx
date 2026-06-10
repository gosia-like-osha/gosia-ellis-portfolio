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

/** Mobile bottom nav only — desktop nav lives in SiteHeader */
export function StickyPillNav({ activeTab }: { activeTab?: ActiveTab }) {
  const items = navItems(activeTab);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] pointer-events-none isolate sm:hidden">
      <div className="flex justify-center px-[31px] pt-2 pb-[calc(48px+env(safe-area-inset-bottom,0px))] pointer-events-auto">
        <TextNav items={[...items]} />
      </div>
    </div>
  );
}
