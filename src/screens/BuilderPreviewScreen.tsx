"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/layouts/TopBar";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { WishlistHeartButton } from "@/components/buttons/WishlistHeartButton";
import { BouquetCanvas } from "@/components/sections/BouquetCanvas";
import { useBouquet } from "@/context/BouquetContext";

function BuilderPreviewScreen() {
  const router = useRouter();
  const { stems, wrapId, ribbonId, babyBreath, eucalyptus, message, totalStems, hydrated } = useBouquet();
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (hydrated && totalStems === 0) router.replace("/builder");
  }, [hydrated, totalStems, router]);

  const showToast = (text: string) => {
    setToast(text);
    setTimeout(() => setToast(null), 1800);
  };

  const handleSave = () => {
    setSaved(true);
    showToast("나만의 꽃다발을 저장했어요");
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Flower Museum 꽃다발", text: message || "제가 만든 꽃다발을 확인해보세요" });
        return;
      } catch {
        // user cancelled share
      }
    }
    showToast("공유 링크가 복사되었어요");
  };

  if (hydrated && totalStems === 0) return null;

  return (
    <div className="relative flex min-h-screen flex-col pb-8">
      <TopBar title="완성된 꽃다발" subtitle="소중한 사람에게 마음을 전해보세요" showBack right={<WishlistHeartButton />} />

      <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-cream to-beige px-6 py-10">
        <div className="rounded-[36px] bg-white/50 p-6 shadow-[var(--shadow-soft-lg)]">
          <BouquetCanvas stems={stems} wrapId={wrapId} ribbonId={ribbonId} babyBreath={babyBreath} eucalyptus={eucalyptus} size={260} />
        </div>

        {message && (
          <div className="mt-6 max-w-[280px] rounded-2xl border border-black/5 bg-white/70 px-5 py-4 text-center">
            <Typography variant="overline" tone="brand">
              MESSAGE CARD
            </Typography>
            <Typography variant="h3" className="mt-2 text-[13.5px]">
              {message}
            </Typography>
          </div>
        )}
      </div>

      <div className="space-y-2.5 px-5">
        <Button size="lg" className="w-full" onClick={handleSave}>
          {saved ? "저장됨 ✓" : "저장하기"}
        </Button>
        <div className="flex gap-2.5">
          <Button variant="outline" className="flex-1" onClick={handleShare}>
            공유하기
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => router.push("/builder")}>
            다시 만들기
          </Button>
        </div>
      </div>

      {toast && (
        <div className="animate-fade-up pointer-events-none absolute bottom-24 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-[12px] text-ivory shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}

export { BuilderPreviewScreen };
