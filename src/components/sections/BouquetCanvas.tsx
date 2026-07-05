import { Image } from "@/components/ui/image";
import { Typography } from "@/components/ui/typography";
import { wrapOptions, ribbonOptions } from "@/data/flowers";
import { bouquetPhoto } from "@/utils/assetPaths";
import { dominantColorKey } from "@/utils/bouquetMatch";
import type { BouquetStem } from "@/context/BouquetContext";

export interface BouquetCanvasProps {
  stems: BouquetStem[];
  wrapId: string;
  ribbonId: string;
  babyBreath: boolean;
  eucalyptus: boolean;
  size?: number;
}

/**
 * Shows the real flower-shop photo that best matches the current selection — dominant
 * flower color + wrap style — instead of compositing a picture from scratch. This is a
 * deliberate scope choice (matching, not generative AI or vector art): see the "사전 촬영
 * 조합 매칭" decision for the Bouquet Builder rebuild.
 */
function BouquetCanvas({ stems, wrapId, ribbonId, babyBreath, eucalyptus, size = 260 }: BouquetCanvasProps) {
  const wrap = wrapOptions.find((w) => w.id === wrapId) ?? wrapOptions[0];
  const ribbon = ribbonOptions.find((r) => r.id === ribbonId) ?? ribbonOptions[0];
  const isEmpty = stems.length === 0;
  const colorKey = dominantColorKey(stems);

  const width = size;
  const height = size * 1.25;

  if (isEmpty) {
    return (
      <div
        className="mx-auto flex flex-col items-center justify-center gap-2 rounded-[28px] border border-dashed border-blush-300/60 bg-white/40"
        style={{ width, height }}
      >
        <Typography variant="caption" tone="muted">
          꽃을 선택해주세요
        </Typography>
      </div>
    );
  }

  return (
    <div className="mx-auto" style={{ width }}>
      <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-soft-md)]" style={{ width, height }}>
        <Image
          src={bouquetPhoto(colorKey, wrap.id)}
          alt={`${wrap.name} 포장의 꽃다발`}
          fill
          variant="photo"
          wrapperClassName="rounded-none"
          className="object-cover"
        />
      </div>
      <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5">
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[11px] text-stone"
          aria-label={`리본: ${ribbon.name}`}
        >
          <span className="size-2.5 rounded-full" style={{ backgroundColor: ribbon.hex }} />
          {ribbon.name}
        </span>
        {babyBreath && (
          <span className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] text-stone">안개꽃 포함</span>
        )}
        {eucalyptus && (
          <span className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] text-stone">유칼립투스 포함</span>
        )}
      </div>
    </div>
  );
}

export { BouquetCanvas };
