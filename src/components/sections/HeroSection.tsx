import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { icon, homeAsset } from "@/utils/assetPaths";

export interface HeroSectionProps {
  greeting?: string;
  title?: [string, string];
  subtitle?: [string, string];
  ctaLabel?: string;
  ctaHref?: string;
  notificationCount?: number;
  imageSrc?: string;
}

function HeroSection({
  greeting = "Good morning 🌸",
  title = ["Flower", "Museum"],
  subtitle = ["꽃과 함께하는", "아름다운 순간"],
  ctaLabel = "전시관 둘러보기",
  ctaHref = "/exhibition",
  notificationCount = 3,
  imageSrc = homeAsset("home_hero_02.png"),
}: HeroSectionProps) {
  return (
    <section className="relative h-[560px] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt="Flower Museum"
        fill
        variant="photo"
        wrapperClassName="rounded-none"
        className="object-left"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/5" />

      <div className="relative z-10 flex h-full flex-col px-6 pt-14">
        <div className="flex items-center justify-between">
          <Typography variant="body" className="text-white/95">
            {greeting}
          </Typography>
          <button
            type="button"
            aria-label="알림"
            className="relative flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
          >
            <Image
              variant="icon"
              src={icon("bell")}
              alt="알림"
              width={19}
              height={19}
              className="size-[19px] brightness-0 invert"
            />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                {notificationCount}
              </span>
            )}
          </button>
        </div>

        <div className="mt-10">
          <Typography variant="hero" className="text-white">
            {title[0]}
            <br />
            {title[1]}
          </Typography>
          <Typography variant="body" className="mt-4 leading-relaxed text-white/90">
            {subtitle[0]}
            <br />
            {subtitle[1]}
          </Typography>

          <div className="mt-5 h-6 w-0.5 bg-blush-300" />

          <Link
            href={ctaHref}
            className={cn(buttonVariants({ size: "default" }), "mt-6 bg-white text-ink hover:bg-white/90")}
          >
            {ctaLabel} ›
          </Link>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
