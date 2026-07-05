import { getFlower } from "@/data/flowers";
import type { BouquetStem } from "@/context/BouquetContext";
import type { BouquetColorKey } from "@/utils/assetPaths";

const COLOR_KEYS: BouquetColorKey[] = ["pink", "white", "purple", "orange"];

/**
 * Picks the dominant flower color across the current stems (weighted by count) so the
 * bouquet result can be matched to a real, pre-shot flower-shop photo in that color.
 * Falls back to "mixed" when no single color clearly leads, or nothing is selected yet.
 */
export function dominantColorKey(stems: BouquetStem[]): BouquetColorKey {
  const tally: Record<string, number> = {};
  for (const stem of stems) {
    const flower = getFlower(stem.flowerId);
    if (!flower) continue;
    for (const key of COLOR_KEYS) {
      if (flower.category.includes(key)) {
        tally[key] = (tally[key] ?? 0) + stem.count;
      }
    }
  }
  const entries = Object.entries(tally).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) return "mixed";
  const [topKey, topCount] = entries[0];
  const runnerUp = entries[1];
  // Two colors close in weight reads as a genuinely mixed bouquet rather than one dominant hue.
  if (runnerUp && runnerUp[1] >= topCount * 0.7) return "mixed";
  return topKey as BouquetColorKey;
}
