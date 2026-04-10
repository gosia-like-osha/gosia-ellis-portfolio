import Link from "next/link";

type PillNavItem = {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export function PillNav({ items }: { items: PillNavItem[] }) {
  return (
    <nav
      aria-label="Primary"
      className="bg-white border border-[rgba(21,23,28,0.12)] shadow-[0px_22.696px_9px_0px_rgba(26,26,26,0.01),0px_12.913px_7.826px_0px_rgba(26,26,26,0.02),0px_5.87px_5.87px_0px_rgba(26,26,26,0.02),0px_1.565px_3.13px_0px_rgba(26,26,26,0.02)] rounded-[100px] p-[5px] overflow-hidden"
    >
      <ul className="flex items-center h-[44px]">
        {items.map((item) => {
          const isActive = item.active;
          const isDisabled = Boolean(item.disabled);
          const baseClassName = [
            "h-full inline-flex items-center justify-center rounded-[100px] pt-[12px] pb-[11px] px-[34px] text-[16px] tracking-[-0.16px] font-semibold transition-colors select-none",
            isActive ? "bg-[#f2f2f2] text-[#15171c]" : "text-[#999] hover:text-[#15171c]",
            isDisabled ? "opacity-50 cursor-not-allowed hover:text-[#999]" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={item.label} className="h-full">
              {item.href && !isDisabled ? (
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={baseClassName}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  aria-current={isActive ? "page" : undefined}
                  aria-disabled={isDisabled || undefined}
                  disabled={isDisabled}
                  className={baseClassName}
                  onClick={item.onClick}
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

