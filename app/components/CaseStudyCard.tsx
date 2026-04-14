import Image from "next/image";
import Link from "next/link";

import cardOverlay from "../../public/images/case-study-card-overlay.png";
import cardShadow from "../../public/images/case-study-card-shadow.png";

export type CaseStudyCardProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  illustrationSrc?: Parameters<typeof Image>[0]["src"];
  illustrationClassName?: string;
  illustrationImageClassName?: string;
  comingSoon?: boolean;
  interactive?: boolean;
  hoverLiftPercent?: 5 | 10;
  href?: string;
};

export function CaseStudyCard({
  title,
  subtitle,
  imageUrl,
  illustrationSrc,
  illustrationClassName,
  illustrationImageClassName,
  comingSoon,
  interactive = true,
  hoverLiftPercent = 10,
  href,
}: CaseStudyCardProps) {
  const hoverLiftClass = interactive
    ? hoverLiftPercent === 5
      ? "group-hover:-translate-y-[5%]"
      : "group-hover:-translate-y-[10%]"
    : "";
  const card = (
    <article
      className={[
        "relative overflow-hidden rounded-[37.236px] border border-[rgba(21,23,28,0.1)] bg-gradient-to-b from-[#f7f7f9] to-white h-[338.843px]",
        interactive ? "group cursor-pointer" : "",
      ].join(" ")}
    >
      {illustrationSrc ? (
        <div
          className={[
            "absolute z-10 left-1/2 top-[55.07px] -translate-x-1/2 w-[286.918px] h-[233.758px]",
            illustrationClassName ?? "",
          ].join(" ")}
          aria-hidden="true"
        >
          <div
            className={[
              "w-full h-full transition-transform duration-300 ease-out",
              hoverLiftClass,
            ].join(" ")}
          >
            <Image
              alt=""
              src={illustrationSrc}
              className={["w-full h-full", illustrationImageClassName ?? "object-contain"].join(" ")}
              priority={false}
            />
          </div>
        </div>
      ) : (
        <div className="absolute z-10 left-0 top-[159.18px] w-full h-[224.344px]">
          {imageUrl ? (
            <img
              alt=""
              src={imageUrl}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: "scale(1.2)" }}
            />
          ) : null}
        </div>
      )}

      {/* Shadow overlay ABOVE the illustration (exported from Figma) */}
      <div
        className="absolute z-20 left-0 top-[159.18px] w-full h-[224.344px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-[-29.94%_-16.67%]">
          <Image alt="" src={cardShadow} fill className="object-cover" priority={false} />
        </div>
      </div>

      <div className="absolute z-30 inset-x-0 bottom-0 h-[139.943px]">
        <Image alt="" src={cardOverlay} className="w-full h-full object-fill" priority={false} />
      </div>

      <div className="absolute z-40 left-[21.41px] top-[252.27px] flex flex-col gap-[4.964px] text-[#15171c]">
        <div className="text-[25px] tracking-[-0.25px] leading-[1.3] font-medium">{title}</div>
        <div className="text-[16px] tracking-[-0.16px] leading-[1.3] opacity-50 font-medium">
          {subtitle}
        </div>
      </div>

      {comingSoon ? (
        <div className="absolute z-40 right-[22.9px] top-[23.07px] rounded-[209.861px] bg-[#aeaeb2] px-[12.906px] py-[5.957px] text-[15.885px] tracking-[-0.3177px] text-white font-medium flex items-center justify-center">
          Coming soon
        </div>
      ) : null}
    </article>
  );

  if (href && interactive) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}

