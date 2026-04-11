import Link from "next/link";

type PillNavItem = {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const pillShadow =
  "shadow-[0px_22.696px_9px_0px_rgba(26,26,26,0.01),0px_12.913px_7.826px_0px_rgba(26,26,26,0.02),0px_5.87px_5.87px_0px_rgba(26,26,26,0.02),0px_1.565px_3.13px_0px_rgba(26,26,26,0.02)]";

/** Figma 4743:23782 / 23771 / 23793 — mobile bottom pill only */
const mobilePillShadow =
  "shadow-[0px_23.755px_9.42px_0px_rgba(26,26,26,0.01),0px_13.516px_8.191px_0px_rgba(26,26,26,0.02),0px_6.144px_6.144px_0px_rgba(26,26,26,0.02),0px_1.638px_3.277px_0px_rgba(26,26,26,0.02)]";

export function PillNav({
  items,
  variant = "desktop",
}: {
  items: PillNavItem[];
  /** Figma 4743:23782 / 23771 / 23793 — mobile bottom bar (&lt;640px). */
  variant?: "desktop" | "mobile";
}) {
  const mobile = variant === "mobile";

  return (
    <nav
      aria-label="Primary"
      className={
        mobile
          ? `bg-white border-[1.047px] border-[rgba(21,23,28,0.12)] ${mobilePillShadow} rounded-[100px] p-[5px] overflow-hidden w-full max-w-[331px]`
          : `bg-white border border-[rgba(21,23,28,0.12)] ${pillShadow} rounded-[100px] p-[5px] overflow-hidden`
      }
    >
      <ul
        className={
          mobile
            ? "flex h-[46px] w-full items-center justify-center gap-0"
            : "flex h-[44px] items-center"
        }
      >
        {items.map((item) => {
          const isActive = item.active;
          const isDisabled = Boolean(item.disabled);
          const baseClassName = [
            "inline-flex items-center justify-center rounded-[100px] font-semibold transition-colors select-none tracking-[-0.16px] text-[16px] leading-[1.3]",
            mobile
              ? "h-[46px] min-h-[46px] shrink-0 items-center pl-[17px] pr-[19px]"
              : "h-full px-[34px] pt-[12px] pb-[11px]",
            isActive ? "bg-[#f2f2f2] text-[#15171c]" : "text-[#999] hover:text-[#15171c]",
            isDisabled ? "opacity-50 cursor-not-allowed hover:text-[#999]" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={item.label} className={mobile ? "flex shrink-0" : "h-full"}>
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

