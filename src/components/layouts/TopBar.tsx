"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { Image } from "@/components/ui/image";
import { Typography } from "@/components/ui/typography";
import { icon } from "@/utils/assetPaths";
import { cn } from "@/utils/cn";

export interface TopBarProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  right?: ReactNode;
  transparent?: boolean;
  className?: string;
}

function TopBar({ title, subtitle, showBack, right, transparent, className }: TopBarProps) {
  const router = useRouter();

  return (
    <header
      data-slot="top-bar"
      className={cn(
        "sticky top-0 z-20 flex items-center justify-between px-5 pb-4 pt-6",
        transparent ? "bg-transparent" : "bg-ivory/90 backdrop-blur-md",
        className
      )}
    >
      <div className="flex w-9 items-center">
        {showBack && (
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="뒤로가기"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 shadow-[var(--shadow-soft-sm)]"
          >
            <Image variant="icon" src={icon("back")} alt="뒤로가기" width={18} height={18} className="size-[18px]" />
          </button>
        )}
      </div>
      {title && (
        <div className="flex flex-1 flex-col items-center text-center">
          <Typography variant="h2" className="text-[18px]">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="caption" tone="muted" className="mt-0.5">
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      <div className="flex w-9 items-center justify-end">{right}</div>
    </header>
  );
}

export { TopBar };
