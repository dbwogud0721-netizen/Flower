"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { WishlistHeartButton } from "@/components/buttons/WishlistHeartButton";
import { PressScale } from "@/components/animations";
import { FadeUp } from "@/components/animations";
import { flowerThumbnail } from "@/utils/assetPaths";

export interface FlowerGridCardProps {
  id: string;
  name: string;
  nameEn: string;
  index?: number;
  wishlistable?: boolean;
}

function FlowerGridCard({ id, name, nameEn, index = 0, wishlistable }: FlowerGridCardProps) {
  return (
    <FadeUp index={index}>
      <PressScale lift>
        <Link
          href={`/exhibition/${id}`}
          className="relative block aspect-[4/5] overflow-hidden rounded-[24px] border border-black/[0.03] bg-white shadow-[var(--shadow-soft-sm)]"
        >
          <Image src={flowerThumbnail(id)} alt={name} fill variant="photo" wrapperClassName="rounded-none" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-black/0 px-3 pb-3 pt-8">
            <Typography variant="label" className="text-white">
              {name}
            </Typography>
            <Typography variant="caption" className="text-white/75">
              {nameEn}
            </Typography>
          </div>
          {wishlistable && (
            <WishlistHeartButton size={15} className="absolute right-2.5 top-2.5" />
          )}
        </Link>
      </PressScale>
    </FadeUp>
  );
}

export { FlowerGridCard };
