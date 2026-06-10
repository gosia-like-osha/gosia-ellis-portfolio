import Image from "next/image";
import Link from "next/link";

/** Figma 5795:18170 — case study list card */
export function CaseStudyListItem({
  href,
  imageSrc,
  imageAlt,
  tags,
  title,
  imageClassName = "h-full w-full object-cover",
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  tags: string;
  title: string;
  imageClassName?: string;
}) {
  return (
    <Link href={href} className="flex flex-col gap-[16px]">
      <div className="relative h-[532px] w-full overflow-hidden border border-[rgba(21,23,28,0.04)] bg-[#fcfcfc]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1024}
          height={890}
          className={imageClassName}
          quality={100}
        />
      </div>
      <div className="flex flex-col gap-[5px] text-[18px] font-normal uppercase leading-[27px]">
        <p className="text-[#999]">{tags}</p>
        <p className="text-black">{title}</p>
      </div>
    </Link>
  );
}
