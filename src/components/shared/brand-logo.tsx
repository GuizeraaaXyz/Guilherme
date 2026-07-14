import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  preload?: boolean;
};

export function BrandLogo({ className = "", preload = false }: BrandLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative block aspect-[1035/289] shrink-0 overflow-hidden ${className}`}
    >
      <Image
        src="/brand/francheto-digital.png"
        alt=""
        width={1536}
        height={1024}
        preload={preload}
        sizes="(max-width: 640px) 160px, 210px"
        className="absolute h-auto max-w-none [filter:invert(1)_hue-rotate(180deg)]"
        style={{ width: "148.41%", left: "-23.57%", top: "-121.9%" }}
      />
    </span>
  );
}
