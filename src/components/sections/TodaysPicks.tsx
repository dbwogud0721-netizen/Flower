import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { FlowerPickCard, type FlowerPickCardProps } from "@/components/cards/FlowerPickCard";
import { flowerThumbnail } from "@/utils/assetPaths";

const defaultPicks: Omit<FlowerPickCardProps, "href">[] = [
  { imageSrc: flowerThumbnail("garden-rose"), name: "핑크 장미", caption: "사랑과 감사" },
  { imageSrc: flowerThumbnail("lisianthus"), name: "리시안서스", caption: "변치 않는 사랑" },
  { imageSrc: flowerThumbnail("pink-gerbera"), name: "핑크 거베라", caption: "행복, 긍정" },
  { imageSrc: flowerThumbnail("hydrangea"), name: "수국", caption: "진심, 감사" },
];

const defaultIds = ["garden-rose", "lisianthus", "pink-gerbera", "hydrangea"];

export interface TodaysPicksProps {
  title?: string;
  moreHref?: string;
  picks?: (Omit<FlowerPickCardProps, "href"> & { id: string })[];
}

function TodaysPicks({
  title = "오늘의 추천 꽃",
  moreHref = "/exhibition",
  picks = defaultPicks.map((p, i) => ({ ...p, id: defaultIds[i] })),
}: TodaysPicksProps) {
  return (
    <section>
      <div className="mb-3 flex items-end justify-between px-5">
        <Typography variant="h2" className="text-[17px]">
          {title}
        </Typography>
        <Link href={moreHref} className="text-[12px] text-muted-foreground">
          더보기 ›
        </Link>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-5 pb-1">
        {picks.map((pick) => (
          <FlowerPickCard key={pick.id} href={`/exhibition/${pick.id}`} {...pick} />
        ))}
      </div>
    </section>
  );
}

export { TodaysPicks };
