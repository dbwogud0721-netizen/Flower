"use client";

import { useState } from "react";
import { Image } from "@/components/ui/image";
import { FadeUp, PressScale } from "@/components/animations";
import { flowerGalleryImage } from "@/utils/assetPaths";
import { FlowerLightbox } from "./FlowerLightbox";

export interface FlowerGalleryMasonryProps {
  flowerId: string;
  flowerName: string;
  count: number;
}

// Cycle through a few aspect ratios so the grid reads as a Pinterest-style
// masonry even before real photos (with their own varied dimensions) land.
const ASPECTS = ["4/5", "1/1", "3/4", "1/1", "4/5", "1/1", "3/4", "4/5"];

function FlowerGalleryMasonry({ flowerId, flowerName, count }: FlowerGalleryMasonryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <>
      <div className="columns-2 gap-3 px-5">
        {items.map((i) => (
          <FadeUp key={i} index={i} className="mb-3 break-inside-avoid">
            <PressScale>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="block w-full overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft-sm)]"
              >
                <div className="relative w-full" style={{ aspectRatio: ASPECTS[i % ASPECTS.length] }}>
                  <Image
                    src={flowerGalleryImage(flowerId, i + 1)}
                    alt={`${flowerName} ${i + 1}`}
                    fill
                    variant="photo"
                    wrapperClassName="rounded-none"
                  />
                </div>
              </button>
            </PressScale>
          </FadeUp>
        ))}
      </div>

      {openIndex !== null && (
        <FlowerLightbox
          flowerId={flowerId}
          flowerName={flowerName}
          count={count}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}

export { FlowerGalleryMasonry };
