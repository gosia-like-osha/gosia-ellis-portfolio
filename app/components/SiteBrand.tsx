"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { archivoExpanded } from "../fonts";

/** Figma 5795:18216 desktop / 5804:19417 mobile */
export function SiteBrand({
  compact = false,
  onNavigate,
}: {
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const brandClassName = compact
    ? "flex w-[100px] flex-col items-start text-black"
    : "flex w-[199px] flex-col items-start text-black";

  const brand = (
    <>
      <p
        className={`${archivoExpanded.className} w-full shrink-0 ${
          compact
            ? "text-[24px] leading-[30px] tracking-[-0.07em]"
            : "-mb-2 text-[48px] leading-[61.5px] tracking-[-0.07em]"
        }`}
      >
        GOSIA
      </p>
      <p
        className={`w-full shrink-0 font-normal uppercase ${
          compact ? "text-[13px] leading-[18px]" : "text-[16px] leading-[24px]"
        }`}
      >
        /GO-sha/
      </p>
    </>
  );

  if (isHome) {
    return <div className={brandClassName}>{brand}</div>;
  }

  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={brandClassName}
      onClick={onNavigate}
    >
      {brand}
    </Link>
  );
}
