import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { homeAsset } from "@/utils/assetPaths";

export interface SeasonBannerProps {
  title?: string;
  description?: [string, string];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
}

function SeasonBanner({
  title = "계절의 꽃을 만나보세요",
  description = ["지금 가장 아름다운 계절 꽃을", "전시관에서 만나볼 수 있어요."],
  ctaLabel = "자세히 보기",
  ctaHref = "/exhibition/room/season",
  imageSrc = homeAsset("home_season_banner_02.png"),
}: SeasonBannerProps) {
  return (
    <div className="mx-5 flex h-[168px] overflow-hidden rounded-[28px] bg-[#ececef]">
      <div className="flex w-[54%] flex-col justify-center px-6">
        <Typography variant="title" className="text-[16px] font-semibold">
          {title}
        </Typography>
        <Typography variant="bodySm" tone="muted" className="mt-1.5 leading-relaxed">
          {description[0]}
          <br />
          {description[1]}
        </Typography>
        <Link href={ctaHref} className={cn(buttonVariants({ size: "sm" }), "mt-4 w-fit")}>
          {ctaLabel}
        </Link>
      </div>
      <div className="relative w-[46%]">
        <Image src={imageSrc} alt={title} fill variant="photo" wrapperClassName="rounded-none" />
      </div>
    </div>
  );
}

export { SeasonBanner };
