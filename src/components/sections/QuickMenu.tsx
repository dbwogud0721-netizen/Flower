import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { icon } from "@/utils/assetPaths";

export interface QuickMenuItem {
  href: string;
  label: string;
  caption: string;
  iconName: string;
}

const defaultItems: QuickMenuItem[] = [
  { href: "/exhibition", label: "전시관", caption: "꽃 전시 둘러보기", iconName: "menu-exhibition" },
  { href: "/builder", label: "꽃다발", caption: "나만의 꽃다발", iconName: "menu-bouquet" },
  { href: "/dictionary", label: "꽃말 사전", caption: "꽃말 알아보기", iconName: "menu-dictionary" },
  { href: "/favorites", label: "즐겨찾기", caption: "좋아하는 꽃", iconName: "heart_outline" },
];

function QuickMenu({ items = defaultItems, className }: { items?: QuickMenuItem[]; className?: string }) {
  return (
    <div className={`relative z-10 -mt-16 mx-5 grid grid-cols-4 gap-2 rounded-[28px] bg-white px-2 py-6 shadow-[var(--shadow-soft-md)] ${className ?? ""}`}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="flex flex-col items-center gap-2 px-1 text-center">
          <Image variant="icon" src={icon(item.iconName)} alt={item.label} width={34} height={34} className="size-[34px]" />
          <div>
            <Typography variant="label" className="block text-[15px] font-semibold">
              {item.label}
            </Typography>
            <Typography variant="caption" tone="muted" className="mt-0.5 block leading-tight">
              {item.caption}
            </Typography>
          </div>
        </Link>
      ))}
    </div>
  );
}

export { QuickMenu };
