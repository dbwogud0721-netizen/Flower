"use client";

import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { FadeUp, PressScale } from "@/components/animations";
import { flowerThumbnail } from "@/utils/assetPaths";
import type { RoomMeta } from "@/lib/rooms";
import { cn } from "@/utils/cn";

function RoomCard({ room, representativeFlowerId, index = 0 }: { room: RoomMeta; representativeFlowerId: string; index?: number }) {
  const full = room.span === "full";

  return (
    <FadeUp index={index} className={cn(full && "col-span-2")}>
      <PressScale lift>
        <Link
          href={room.href ?? `/exhibition/room/${room.id}`}
          className={cn(
            "relative block overflow-hidden rounded-[24px] border border-black/[0.03] bg-white shadow-[var(--shadow-soft-sm)]",
            full ? "aspect-[16/9]" : "aspect-square"
          )}
        >
          <Image src={flowerThumbnail(representativeFlowerId)} alt={room.title} fill variant="photo" wrapperClassName="rounded-none" />
          {room.badge && (
            <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
              {room.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-black/0 px-3.5 pb-3 pt-10">
            <Typography variant="title" className="text-white">
              {room.title}
            </Typography>
            <Typography variant="caption" className="text-white/75">
              {room.subtitle}
            </Typography>
          </div>
        </Link>
      </PressScale>
    </FadeUp>
  );
}

export { RoomCard };
