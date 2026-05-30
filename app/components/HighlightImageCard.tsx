import Image, { type StaticImageData } from "next/image";

export function HighlightImageCard({
  src,
  alt,
  heightClass,
  imageClassName = "",
  width,
  height,
  verticalAlign = "top",
}: {
  src: string | StaticImageData;
  alt: string;
  heightClass: string;
  imageClassName?: string;
  width: number;
  height: number;
  /** `top` — transcribe-style top offset. `center` — centered. `top-edge` — flush to top (Barry). */
  verticalAlign?: "top" | "center" | "top-edge";
}) {
  const containerAlignClass =
    verticalAlign === "center"
      ? "items-center justify-center"
      : verticalAlign === "top-edge"
        ? "items-start justify-center"
        : "items-start justify-center pt-[98px] sm:pt-[105px]";

  const defaultImageClass =
    verticalAlign === "center"
      ? "max-h-[calc(100%-2rem)] max-w-[calc(100%-3rem)]"
      : verticalAlign === "top-edge"
        ? "max-w-[calc(100%-3rem)]"
        : "max-h-[calc(100%-2rem)] max-w-[calc(100%-3rem)] sm:max-h-[calc(100%-4rem)] sm:max-w-[421px]";

  return (
    <div
      className={`flex w-full overflow-hidden rounded-[40px] border border-[rgba(21,23,28,0.1)] bg-background ${containerAlignClass} ${heightClass}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-auto object-contain ${defaultImageClass} ${imageClassName}`.trim()}
        priority
      />
    </div>
  );
}
