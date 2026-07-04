"use client";

import Link from "next/link";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { icon } from "@/utils/assetPaths";

export interface FlowerPickCardProps {
  href: string;
  imageSrc: string;
  name: string;
  caption: string;
}

function FlowerPickCard({ href, imageSrc, name, caption }: FlowerPickCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={href} className="block w-[138px] shrink-0 overflow-hidden rounded-[22px] bg-white shadow-[var(--shadow-soft-sm)]">
      <div className="relative aspect-[3/4]">
        <Image src={imageSrc} alt={name} fill variant="photo" wrapperClassName="rounded-none" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setLiked((v) => !v);
          }}
          aria-label="찜하기"
          className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full bg-white/85"
        >
          <Image
            variant="icon"
            src={icon(liked ? "heart_filled" : "heart_outline")}
            alt=""
            width={15}
            height={15}
            className="size-[15px]"
          />
        </button>
      </div>
      <div className="px-3 py-2.5">
        <Typography variant="label">{name}</Typography>
        <Typography variant="caption" tone="muted" className="mt-0.5 block">
          {caption}
        </Typography>
      </div>
    </Link>
  );
}

export { FlowerPickCard };
