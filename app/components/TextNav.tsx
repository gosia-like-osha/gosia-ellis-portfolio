import Link from "next/link";

type TextNavItem = {
  label: string;
  href: string;
  active?: boolean;
};

/** Figma 5795:18213 — uppercase text links, Geist Regular 18/26, 54px gap */
export function TextNav({ items }: { items: TextNavItem[] }) {
  return (
    <nav aria-label="Primary">
      <ul className="flex items-center gap-[54px] text-[18px] font-normal uppercase leading-[26px] text-black">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`underline-offset-4 hover:underline${item.active ? " underline" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
