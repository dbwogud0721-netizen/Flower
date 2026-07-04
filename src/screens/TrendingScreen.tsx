import { TopBar } from "@/components/layouts/TopBar";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";
import { Typography } from "@/components/ui/typography";
import { FlowerListRow } from "@/components/cards/FlowerListRow";
import { trendingIds, getFlower } from "@/data/flowers";

function TrendingScreen() {
  const list = trendingIds.map(getFlower).filter(Boolean) as ReturnType<typeof getFlower>[];

  return (
    <div className="pb-28">
      <TopBar title="유행하는 꽃들" subtitle="요즘 가장 사랑받는 트렌디한 꽃들" showBack />

      <div className="px-5">
        <div className="relative mb-5 flex h-40 items-center justify-center overflow-hidden rounded-[26px] bg-gradient-to-br from-blush-200 via-blush-100 to-cream">
          <Typography variant="h3">이달의 트렌드 TOP 10</Typography>
        </div>

        <div className="flex flex-col divide-y divide-black/[0.04]">
          {list.map((f, i) =>
            f ? (
              <FlowerListRow key={f.id} id={f.id} name={f.name} nameEn={f.nameEn} tagline={f.tagline} rank={i + 1} index={i} />
            ) : null
          )}
        </div>
      </div>

      <BottomNavigation activeHref="/exhibition" />
    </div>
  );
}

export { TrendingScreen };
