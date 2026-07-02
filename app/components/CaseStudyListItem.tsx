import Image from "next/image";
import Link from "next/link";

/** Figma 6160:15871 / 5795:18163 — case study overview card */
export function CaseStudyListItem({
  href,
  imageSrc,
  imageAlt,
  tags,
  title,
  imageClassName = "h-full w-full object-cover",
  imageWidth = 1024,
  imageHeight = 890,
}: {
  href?: string;
  imageSrc: string;
  imageAlt: string;
  tags: string;
  title: string;
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  const content = (
    <>
      <div className="relative h-[532px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#fcfcfc] max-lg:h-[395px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
          quality={100}
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-[5px] text-[18px] font-normal uppercase leading-[27px]">
        <p className="text-[#999]">{tags}</p>
        <p className="text-black">{title}</p>
      </div>
    </>
  );

  if (!href) {
    return <div className="flex flex-col gap-[16px]">{content}</div>;
  }

  return (
    <Link href={href} className="flex flex-col gap-[16px]">
      {content}
    </Link>
  );
}
