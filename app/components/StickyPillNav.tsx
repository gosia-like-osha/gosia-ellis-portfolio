import { PillNav } from "./PillNav";

type ActiveTab = "highlights" | "case-studies" | "about";

export function StickyPillNav({ activeTab }: { activeTab: ActiveTab }) {
  return (
    <div className="fixed top-[28px] left-0 right-0 z-[200] pointer-events-none isolate">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] flex justify-end pointer-events-none">
        <div className="pointer-events-auto relative z-[1]">
          <PillNav
            items={[
              { label: "Highlights", href: "/", active: activeTab === "highlights" },
              {
                label: "Case studies",
                href: "/case-studies",
                active: activeTab === "case-studies",
              },
              { label: "About", href: "/about", active: activeTab === "about" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

