import { notFound } from "next/navigation";
import { TopBar } from "@/components/layouts/TopBar";
import { Typography } from "@/components/ui/typography";
import { WishlistHeartButton } from "@/components/buttons/WishlistHeartButton";
import { AddToBouquetButton } from "@/components/buttons/AddToBouquetButton";
import { FlowerGalleryMasonry } from "@/components/sections/FlowerGalleryMasonry";
import { getFlower } from "@/data/flowers";
import { getFlowerGalleryCount } from "@/data/flowerGalleryCounts";

function FlowerDetailScreen({ id }: { id: string }) {
  const flower = getFlower(id);
  if (!flower) notFound();
  const galleryCount = getFlowerGalleryCount(flower.id);

  return (
    <div className="pb-8">
      <TopBar showBack right={<WishlistHeartButton />} />

      <div className="px-5 pb-5 pt-1 text-center">
        <Typography variant="h1">{flower.name}</Typography>
        <Typography variant="caption" tone="muted">
          {flower.nameEn}
        </Typography>
        <Typography variant="label" tone="brand" className="mt-1.5 block">
          {flower.tagline}
        </Typography>
      </div>

      <FlowerGalleryMasonry flowerId={flower.id} flowerName={flower.name} count={galleryCount} />

      <div className="mt-7 px-5">
        <AddToBouquetButton flowerId={flower.id} />
      </div>

      {/* Information — de-emphasized, below the gallery; this app is a photo
          gallery first, an encyclopedia only if you scroll for it. */}
      <div className="mt-10 border-t border-border px-5 pt-6">
        <Typography variant="overline" tone="muted" className="mb-4 block">
          Information
        </Typography>

        <Typography variant="body" className="text-ink/80">
          {flower.meaning}
        </Typography>

        <div className="mt-5 grid grid-cols-3 gap-2.5 rounded-2xl bg-white/70 p-4">
          <div className="text-center">
            <Typography variant="caption" tone="muted">
              피는 계절
            </Typography>
            <Typography variant="label" className="mt-1 block">
              {flower.seasons.join(", ")}
            </Typography>
          </div>
          <div className="border-x border-black/5 text-center">
            <Typography variant="caption" tone="muted">
              원산지
            </Typography>
            <Typography variant="label" className="mt-1 block">
              {flower.origin}
            </Typography>
          </div>
          <div className="text-center">
            <Typography variant="caption" tone="muted">
              향기
            </Typography>
            <Typography variant="label" className="mt-1 block">
              {flower.fragrance}
            </Typography>
          </div>
        </div>

        <div className="mt-5">
          <Typography variant="label" className="mb-2 block">
            색상별 의미
          </Typography>
          <div className="flex flex-wrap gap-2">
            {flower.colorMeanings.map((cm) => (
              <div
                key={cm.color}
                className="flex items-center gap-1.5 rounded-full border border-black/5 bg-white/70 py-1.5 pl-1.5 pr-3"
              >
                <span className="h-4 w-4 rounded-full border border-black/10" style={{ background: cm.hex }} />
                <Typography variant="caption">
                  {cm.color} · {cm.meaning}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-sage-50 p-4">
          <Typography variant="label">관리법</Typography>
          <Typography variant="bodySm" tone="muted" className="mt-1.5 block">
            {flower.care}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export { FlowerDetailScreen };
