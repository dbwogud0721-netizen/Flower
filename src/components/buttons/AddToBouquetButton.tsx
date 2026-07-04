"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { icon } from "@/utils/assetPaths";
import { useBouquet } from "@/context/BouquetContext";

export interface AddToBouquetButtonProps {
  flowerId: string;
  className?: string;
}

function AddToBouquetButton({ flowerId, className }: AddToBouquetButtonProps) {
  const { addStem } = useBouquet();
  const [added, setAdded] = useState(false);

  return (
    <Button
      type="button"
      size="lg"
      className={className ?? "w-full"}
      onClick={() => {
        addStem(flowerId);
        setAdded(true);
        setTimeout(() => setAdded(false), 1400);
      }}
    >
      {added ? "꽃다발에 담았어요 ✓" : "꽃다발에 추가하기"}
      {!added && (
        <Image variant="icon" src={icon("plus")} alt="" width={16} height={16} className="ml-1 size-4 brightness-0 invert" />
      )}
    </Button>
  );
}

export { AddToBouquetButton };
