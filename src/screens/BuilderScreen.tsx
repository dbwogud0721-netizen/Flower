"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/layouts/TopBar";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { BouquetCanvas } from "@/components/sections/BouquetCanvas";
import { flowers, wrapOptions, ribbonOptions } from "@/data/flowers";
import { flowerThumbnail, icon, wrapImage, ribbonImage } from "@/utils/assetPaths";
import { useBouquet } from "@/context/BouquetContext";
import { cn } from "@/utils/cn";

const tabs = [
  { id: "all", label: "전체" },
  { id: "rose", label: "장미" },
  { id: "gerbera", label: "거베라" },
  { id: "season", label: "계절꽃" },
  { id: "mini", label: "소국" },
  { id: "wrap", label: "포장지" },
  { id: "ribbon", label: "리본" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function ActionIconButton({
  label,
  iconName,
  onClick,
  disabled,
}: {
  label: string;
  iconName: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex flex-1 flex-col items-center gap-1 py-1.5 disabled:opacity-30"
    >
      <Image variant="icon" src={icon(iconName)} alt={label} width={19} height={19} className="size-[19px]" />
      <Typography variant="caption" tone="muted">
        {label}
      </Typography>
    </button>
  );
}

function ToggleRow({
  flowerId,
  label,
  checked,
  onChange,
}: {
  flowerId: string;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3">
      <div className="flex items-center gap-2.5">
        <div className="relative size-7 overflow-hidden rounded-full">
          <Image src={flowerThumbnail(flowerId)} alt={label} fill variant="photo" wrapperClassName="rounded-none" />
        </div>
        <Typography variant="label">{label}</Typography>
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={cn("h-6 w-11 rounded-full p-0.5 transition-colors", checked ? "bg-blush-400" : "bg-black/10")}
        aria-pressed={checked}
      >
        <span
          className={cn(
            "block h-5 w-5 rounded-full bg-white shadow transition-transform",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}

function BuilderScreen() {
  const router = useRouter();
  const {
    stems,
    wrapId,
    ribbonId,
    babyBreath,
    eucalyptus,
    message,
    addStem,
    removeStem,
    setWrapId,
    setRibbonId,
    setBabyBreath,
    setEucalyptus,
    setMessage,
    undo,
    redo,
    reset,
    totalStems,
    canUndo,
    canRedo,
  } = useBouquet();
  const [activeTab, setActiveTab] = useState<TabId>("all");

  const flowerTabFlowers = useMemo(() => {
    if (activeTab === "all") return flowers.filter((f) => f.builderGroup);
    return flowers.filter((f) => f.builderGroup === activeTab);
  }, [activeTab]);

  const isSwatchTab = activeTab === "wrap" || activeTab === "ribbon";

  return (
    <div className="pb-28">
      <TopBar title="나만의 꽃다발 만들기" subtitle="원하는 꽃을 선택해서 세상에 하나뿐인 꽃다발을 만들어보세요" showBack />

      <div className="flex justify-center px-5">
        <BouquetCanvas stems={stems} wrapId={wrapId} ribbonId={ribbonId} babyBreath={babyBreath} eucalyptus={eucalyptus} size={230} />
      </div>

      <Typography variant="caption" tone="muted" className="-mt-2 block text-center">
        총 {totalStems}송이 담았어요
      </Typography>

      <div className="mt-3 flex items-stretch gap-1 border-y border-border px-5 py-1">
        <ActionIconButton label="되돌리기" iconName="undo" onClick={undo} disabled={!canUndo} />
        <ActionIconButton label="다시하기" iconName="redo" onClick={redo} disabled={!canRedo} />
        <ActionIconButton label="초기화" iconName="reset" onClick={reset} />
        <ActionIconButton label="저장하기" iconName="save" onClick={() => router.push("/builder/preview")} disabled={totalStems === 0} />
      </div>

      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-5">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-[12.5px] transition-colors",
              activeTab === t.id ? "bg-ink text-ivory" : "bg-white/70 text-stone"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4 px-5">
        {!isSwatchTab && (
          <div className="grid grid-cols-4 gap-2.5">
            {flowerTabFlowers.map((f) => {
              const count = stems.find((s) => s.flowerId === f.id)?.count ?? 0;
              return (
                <div key={f.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => addStem(f.id)}
                    className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl transition-transform active:scale-95"
                    aria-label={`${f.name} 추가`}
                  >
                    <Image src={flowerThumbnail(f.id)} alt={f.name} fill variant="photo" wrapperClassName="rounded-none" />
                    {count > 0 && (
                      <span className="absolute right-1 top-1 z-10 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                        {count}
                      </span>
                    )}
                  </button>
                  <Typography variant="caption" className="mt-1 max-w-[64px] truncate text-center">
                    {f.name}
                  </Typography>
                  {count > 0 && (
                    <button type="button" onClick={() => removeStem(f.id)} className="text-[10px] text-stone underline underline-offset-2">
                      빼기
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "wrap" && (
          <div className="grid grid-cols-5 gap-3">
            {wrapOptions.map((w) => (
              <button key={w.id} onClick={() => setWrapId(w.id)} className="flex flex-col items-center gap-1.5" aria-label={w.name}>
                <span
                  className="relative size-11 overflow-hidden rounded-full border-2 transition-transform active:scale-95"
                  style={{ borderColor: wrapId === w.id ? "var(--color-blush-500)" : "transparent" }}
                >
                  <Image src={wrapImage(w.id)} alt={w.name} fill variant="photo" wrapperClassName="rounded-none" />
                </span>
                <Typography variant="caption" tone="muted" className="text-center leading-tight">
                  {w.name}
                </Typography>
              </button>
            ))}
          </div>
        )}

        {activeTab === "ribbon" && (
          <div className="grid grid-cols-5 gap-3">
            {ribbonOptions.map((r) => (
              <button key={r.id} onClick={() => setRibbonId(r.id)} className="flex flex-col items-center gap-1.5" aria-label={r.name}>
                <span
                  className="relative size-11 overflow-hidden rounded-full border-2 transition-transform active:scale-95"
                  style={{ borderColor: ribbonId === r.id ? "var(--color-blush-500)" : "transparent" }}
                >
                  <Image src={ribbonImage(r.id)} alt={r.name} fill variant="photo" wrapperClassName="rounded-none" />
                </span>
                <Typography variant="caption" tone="muted" className="text-center leading-tight">
                  {r.name}
                </Typography>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3 px-5">
        <ToggleRow flowerId="baby-breath" label="안개꽃 채우기" checked={babyBreath} onChange={setBabyBreath} />
        <ToggleRow flowerId="eucalyptus" label="유칼립투스 더하기" checked={eucalyptus} onChange={setEucalyptus} />

        <div className="rounded-2xl bg-white/70 px-4 py-3">
          <Typography variant="label" className="mb-1.5 block">
            카드 메시지
          </Typography>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="소중한 사람에게 전할 마음을 적어보세요"
            maxLength={80}
            rows={2}
            className="w-full resize-none bg-transparent text-[12.5px] text-ink placeholder:text-stone/70 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-6 px-5">
        <Button size="lg" className="w-full" disabled={totalStems === 0} onClick={() => router.push("/builder/preview")}>
          꽃다발 완성하기
        </Button>
      </div>

      <BottomNavigation activeHref="/builder" />
    </div>
  );
}

export { BuilderScreen };
