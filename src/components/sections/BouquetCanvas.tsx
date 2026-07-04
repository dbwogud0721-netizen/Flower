import { Image } from "@/components/ui/image";
import { PetalPop } from "@/components/animations";
import { Typography } from "@/components/ui/typography";
import { flowerThumbnail, wrapImage, ribbonImage } from "@/utils/assetPaths";
import { wrapOptions, ribbonOptions } from "@/data/flowers";
import type { BouquetStem } from "@/context/BouquetContext";

export interface BouquetCanvasProps {
  stems: BouquetStem[];
  wrapId: string;
  ribbonId: string;
  babyBreath: boolean;
  eucalyptus: boolean;
  size?: number;
}

function sunflowerPoints(n: number, radius: number) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const r = radius * Math.sqrt((i + 0.5) / n);
    const theta = i * golden;
    return { x: r * Math.cos(theta), y: r * Math.sin(theta) };
  });
}

function BouquetCanvas({ stems, wrapId, ribbonId, babyBreath, eucalyptus, size = 260 }: BouquetCanvasProps) {
  const wrap = wrapOptions.find((w) => w.id === wrapId) ?? wrapOptions[0];
  const ribbon = ribbonOptions.find((r) => r.id === ribbonId) ?? ribbonOptions[0];

  const instances = stems.flatMap((s) => Array.from({ length: Math.min(s.count, 6) }, () => s.flowerId));
  const filler = [
    ...(babyBreath ? ["baby-breath", "baby-breath", "baby-breath"] : []),
    ...(eucalyptus ? ["eucalyptus", "eucalyptus"] : []),
  ];
  const capped = [...instances, ...filler].slice(0, 26);
  const isEmpty = instances.length === 0;
  const points = sunflowerPoints(Math.max(capped.length, 1), size * 0.19);
  const clusterCy = size * 0.44;

  const height = size * 1.2;

  return (
    <div className="relative mx-auto" style={{ width: size, height }}>
      <div
        className="absolute inset-x-0 bottom-0 overflow-hidden"
        style={{
          height: height * 0.5,
          clipPath: "polygon(32% 0%, 68% 0%, 90% 100%, 10% 100%)",
        }}
      >
        <Image src={wrapImage(wrap.id)} alt={wrap.name} fill variant="photo" wrapperClassName="rounded-none" />
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-full"
        style={{ top: height * 0.46, width: size * 0.24, height: size * 0.16 }}
      >
        <Image src={ribbonImage(ribbon.id)} alt={ribbon.name} fill variant="photo" wrapperClassName="rounded-none" />
      </div>

      {isEmpty && (
        <div
          className="absolute flex items-center justify-center rounded-full border border-dashed border-blush-300/60"
          style={{
            left: size / 2 - size * 0.19,
            top: clusterCy - size * 0.19,
            width: size * 0.38,
            height: size * 0.38,
          }}
        >
          <Typography variant="caption" tone="muted">
            꽃을 선택해주세요
          </Typography>
        </div>
      )}

      {capped.map((flowerId, i) => {
        const p = points[i];
        const bloomSize = size * 0.16;
        return (
          <PetalPop
            key={`${flowerId}-${i}`}
            index={i}
            className="absolute overflow-hidden rounded-full shadow-[var(--shadow-soft-sm)]"
            style={{
              left: size / 2 + p.x - bloomSize / 2,
              top: clusterCy + p.y - bloomSize / 2,
              width: bloomSize,
              height: bloomSize,
            }}
          >
            <Image src={flowerThumbnail(flowerId)} alt="" fill variant="photo" wrapperClassName="rounded-none" />
          </PetalPop>
        );
      })}
    </div>
  );
}

export { BouquetCanvas };
