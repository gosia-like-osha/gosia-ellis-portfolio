"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { archivoExpanded } from "../fonts";

const brandClassName = "flex w-[199px] flex-col items-start text-black";

/** Figma 5795:18216 — GOSIA + /GO-sha/ */
export function SiteBrand() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const brand = (
    <>
      <p
        className={`${archivoExpanded.className} -mb-2 w-full shrink-0 text-[48px] leading-[61.5px] tracking-[-0.07em]`}
      >
        GOSIA
      </p>
      <p className="w-full shrink-0 text-[16px] font-normal uppercase leading-[24px]">/GO-sha/</p>
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
    >
      {brand}
    </Link>
  );
}
