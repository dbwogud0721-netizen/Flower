"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { WishlistHeartButton } from "@/components/buttons/WishlistHeartButton";
import { FadeUp } from "@/components/animations";
import { flowerThumbnail } from "@/utils/assetPaths";

export interface FlowerListRowProps {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  rank?: number;
  index?: number;
}

function FlowerListRow({ id, name, nameEn, tagline, rank, index = 0 }: FlowerListRowProps) {
  return (
    <FadeUp index={index}>
      <Link
        href={`/exhibition/${id}`}
        className="flex items-center gap-4 rounded-2xl px-2 py-2.5 transition-colors hover:bg-white/60"
      >
        {rank !== undefined && (
          <Typography variant="h3" tone="brand" className="w-4 shrink-0 text-[13px]">
            {rank}
          </Typography>
        )}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-cream">
          <Image src={flowerThumbnail(id)} alt={name} fill variant="photo" wrapperClassName="rounded-none" />
        </div>
        <div className="min-w-0 flex-1">
          <Typography variant="label" className="block truncate">
            {name}
          </Typography>
          <Typography variant="caption" tone="muted" className="block truncate">
            {nameEn}
          </Typography>
          <Typography variant="caption" tone="brand" className="mt-0.5 block truncate">
            {tagline}
          </Typography>
        </div>
        <WishlistHeartButton size={16} className="shrink-0 bg-transparent shadow-none" />
      </Link>
    </FadeUp>
  );
}

export { FlowerListRow };
