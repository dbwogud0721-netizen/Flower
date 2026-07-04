"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { icon } from "@/utils/assetPaths";
import { Image } from "@/components/ui/image";
import { Typography } from "@/components/ui/typography";

export interface BottomNavItem {
  href: string;
  label: string;
  iconName: string;
}

export const defaultBottomNavItems: BottomNavItem[] = [
  { href: "/", label: "홈", iconName: "home" },
  { href: "/exhibition", label: "전시관", iconName: "gallery" },
  { href: "/builder", label: "꽃다발", iconName: "bouquet" },
  { href: "/search", label: "검색", iconName: "search" },
  { href: "/my", label: "마이", iconName: "user" },
];

export interface BottomNavigationProps {
  items?: BottomNavItem[];
  /** Override the active item; defaults to matching the current route. */
  activeHref?: string;
  className?: string;
}

function BottomNavigation({ items = defaultBottomNavItems, activeHref, className }: BottomNavigationProps) {
  const pathname = usePathname();
  const resolvedActive = activeHref ?? pathname;

  return (
    <div className={cn("fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-4", className)}>
      <nav
        data-slot="bottom-navigation"
        className="flex w-full max-w-[440px] items-stretch justify-between rounded-full bg-white px-3 py-2.5 shadow-[var(--shadow-soft-lg)]"
      >
        {items.map((item) => {
          const active = item.href === "/" ? resolvedActive === "/" : resolvedActive?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-0.5"
            >
              <Image
                variant="icon"
                src={icon(item.iconName)}
                alt={item.label}
                width={22}
                height={22}
                className={cn("size-[22px]", active ? "opacity-100" : "opacity-45")}
              />
              <Typography
                as="span"
                variant="caption"
                className={active ? "font-medium text-primary" : "text-muted-foreground"}
              >
                {item.label}
              </Typography>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export { BottomNavigation };
