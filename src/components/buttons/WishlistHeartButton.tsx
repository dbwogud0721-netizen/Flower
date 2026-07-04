"use client";

import { useState } from "react";
import { Image } from "@/components/ui/image";
import { icon } from "@/utils/assetPaths";
import { cn } from "@/utils/cn";

export interface WishlistHeartButtonProps {
  size?: number;
  className?: string;
  defaultLiked?: boolean;
  onToggle?: (liked: boolean) => void;
}

function WishlistHeartButton({ size = 17, className, defaultLiked = false, onToggle }: WishlistHeartButtonProps) {
  const [liked, setLiked] = useState(defaultLiked);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setLiked((v) => {
          onToggle?.(!v);
          return !v;
        });
      }}
      aria-label="찜하기"
      aria-pressed={liked}
      className={cn("flex items-center justify-center rounded-full bg-white/85 shadow-[var(--shadow-soft-sm)]", className)}
      style={{ width: size + 18, height: size + 18 }}
    >
      <Image
        variant="icon"
        src={icon(liked ? "heart_filled" : "heart_outline")}
        alt=""
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
    </button>
  );
}

export { WishlistHeartButton };
