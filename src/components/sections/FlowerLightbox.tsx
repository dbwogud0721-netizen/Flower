"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Typography } from "@/components/ui/typography";
import { flowerGalleryImage, icon } from "@/utils/assetPaths";

export interface FlowerLightboxProps {
  flowerId: string;
  flowerName: string;
  count: number;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

function FlowerLightbox({ flowerId, flowerName, count, index, onIndexChange, onClose }: FlowerLightboxProps) {
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [saved, setSaved] = useState<Set<number>>(new Set());

  const toggle = (set: Set<number>, setSet: (s: Set<number>) => void, i: number) => {
    const next = new Set(set);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setSet(next);
  };

  const goNext = () => onIndexChange(Math.min(index + 1, count - 1));
  const goPrev = () => onIndexChange(Math.max(index - 1, 0));

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black">
      <div className="relative z-10 flex items-center justify-between px-5 pt-6 pb-4">
        <span className="w-9" />
        <Typography variant="label" className="text-white">
          {flowerName}
        </Typography>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="flex size-9 items-center justify-center rounded-full bg-white/10"
        >
          <Image variant="icon" src={icon("close")} alt="" width={16} height={16} className="size-4" />
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) goNext();
              else if (info.offset.x > 60) goPrev();
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={flowerGalleryImage(flowerId, index + 1)}
                alt={`${flowerName} ${index + 1}`}
                fill
                variant="photo"
                wrapperClassName="rounded-none border-none bg-transparent"
                className="object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 pb-8 pt-4">
        <Typography variant="caption" className="text-white/70">
          {index + 1} / {count}
        </Typography>
        <div className="flex items-center gap-5">
          <button type="button" onClick={() => toggle(liked, setLiked, index)} aria-label="좋아요">
            <Image
              variant="icon"
              src={icon(liked.has(index) ? "heart_filled" : "heart_outline")}
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </button>
          <button type="button" onClick={() => toggle(saved, setSaved, index)} aria-label="저장">
            <Image
              variant="icon"
              src={icon(saved.has(index) ? "bookmark_filled" : "bookmark_outline")}
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export { FlowerLightbox };
