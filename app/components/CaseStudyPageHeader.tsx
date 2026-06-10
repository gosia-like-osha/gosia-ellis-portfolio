import Image from "next/image";
import Link from "next/link";

/** Figma 5412:73907 — back pill + globe (case study pages) */
export function CaseStudyPageHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 pt-[22px] lg:px-[100px] lg:pt-[48px]">
        <div className="grid grid-cols-1 items-center sm:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/case-studies"
            className="inline-flex h-[39px] w-[139px] items-center justify-center gap-[10px] rounded-[89px] border border-black text-[18px] font-medium uppercase leading-[27px] text-black"
          >
            <img
              alt=""
              src="/images/icons/back-arrow.svg"
              className="h-[12px] w-[15px] invert"
              aria-hidden="true"
            />
            back
          </Link>
          <Image
            src="/images/header/globe-desktop.png"
            alt=""
            width={846}
            height={114}
            className="mx-auto hidden h-[38px] w-[282px] shrink-0 sm:block"
            quality={100}
          />
          <div className="hidden sm:block" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
