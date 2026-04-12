import Link from "next/link";

export function CaseStudyBackNav() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] pointer-events-none isolate sm:pointer-events-auto sm:sticky sm:top-[35px] sm:bottom-auto sm:z-40">
      <div className="max-w-[1440px] mx-auto pl-[31px] pt-2 pb-[calc(48px+env(safe-area-inset-bottom,0px))] pointer-events-auto sm:pl-0 sm:pt-0 sm:pb-0 sm:px-6 lg:px-[100px]">
        <Link
          href="/case-studies"
          className="relative inline-flex h-[54px] w-[116px] rounded-[100px] bg-white border border-[rgba(21,23,28,0.12)] shadow-[0px_22.696px_9px_0px_rgba(26,26,26,0.01),0px_12.913px_7.826px_0px_rgba(26,26,26,0.02),0px_5.87px_5.87px_0px_rgba(26,26,26,0.02),0px_1.565px_3.13px_0px_rgba(26,26,26,0.02)] overflow-hidden"
        >
          <span className="absolute left-[4px] top-[4px] box-border w-[106px] h-[44px] rounded-[100px] bg-[#15171c] inline-flex items-center justify-center gap-[10px] pt-[12px] pb-[11px] pl-[34px] pr-[35px] text-[16px] tracking-[-0.16px] text-white font-semibold">
            <img alt="" src="/images/icons/back-arrow.svg" className="w-[15px] h-[12px]" aria-hidden="true" />
            Back
          </span>
        </Link>
      </div>
    </div>
  );
}
