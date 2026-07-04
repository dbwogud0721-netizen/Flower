import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";
import { FadeUp, PressScale, StaggerGroup, StaggerItem, PetalPop } from "@/components/animations";
import { flowerThumbnail, icon } from "@/utils/assetPaths";

const colorGroups: { label: string; swatches: { name: string; className: string }[] }[] = [
  {
    label: "Base",
    swatches: [
      { name: "ivory", className: "bg-ivory" },
      { name: "cream", className: "bg-cream" },
      { name: "beige", className: "bg-beige" },
      { name: "ink", className: "bg-ink" },
      { name: "stone", className: "bg-stone" },
    ],
  },
  {
    label: "Blush",
    swatches: [
      { name: "blush-50", className: "bg-blush-50" },
      { name: "blush-100", className: "bg-blush-100" },
      { name: "blush-200", className: "bg-blush-200" },
      { name: "blush-300", className: "bg-blush-300" },
      { name: "blush-400", className: "bg-blush-400" },
      { name: "blush-500", className: "bg-blush-500" },
      { name: "blush-600", className: "bg-blush-600" },
    ],
  },
  {
    label: "Sage",
    swatches: [
      { name: "sage-50", className: "bg-sage-50" },
      { name: "sage-100", className: "bg-sage-100" },
      { name: "sage-200", className: "bg-sage-200" },
      { name: "sage-300", className: "bg-sage-300" },
    ],
  },
];

export default function DesignSystemPage() {
  return (
    <div className="pb-10">
      <div className="border-b border-border px-5 py-6">
        <Typography variant="overline" tone="brand">
          Design System — QA only
        </Typography>
        <Typography variant="display" className="mt-2">
          Flower Museum
        </Typography>
        <Typography variant="bodySm" tone="muted" className="mt-1">
          토큰/컴포넌트 확인용 임시 페이지. 실제 화면 아님 — 필요 없어지면 삭제 가능.
        </Typography>
      </div>

      {/* Colors */}
      <section className="space-y-6 border-b border-border px-5 py-6">
        <Typography variant="h2">Colors</Typography>
        {colorGroups.map((group) => (
          <div key={group.label}>
            <Typography variant="label" tone="muted" className="mb-2 block">
              {group.label}
            </Typography>
            <div className="flex flex-wrap gap-3">
              {group.swatches.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-1">
                  <div className={`size-12 rounded-2xl border border-black/5 shadow-[var(--shadow-soft-sm)] ${s.className}`} />
                  <Typography variant="caption" tone="muted">
                    {s.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Typography */}
      <section className="space-y-3 border-b border-border px-5 py-6">
        <Typography variant="h2">Typography</Typography>
        <Typography variant="display">Display / 28px serif</Typography>
        <Typography variant="h1">H1 / 22px serif</Typography>
        <Typography variant="h2">H2 / 18px serif</Typography>
        <Typography variant="h3">H3 / 15px serif</Typography>
        <Typography variant="title">Title / 14.5px medium</Typography>
        <Typography variant="body">Body / 13.5px — 기본 본문 텍스트입니다.</Typography>
        <Typography variant="bodySm" tone="muted">
          Body Small / 12.5px muted
        </Typography>
        <Typography variant="caption" tone="muted">
          Caption / 11.5px muted
        </Typography>
        <Typography variant="overline" tone="brand">
          Overline / brand
        </Typography>
        <Typography variant="label">Label / 13px medium</Typography>
      </section>

      {/* Radius + Shadow */}
      <section className="space-y-4 border-b border-border px-5 py-6">
        <Typography variant="h2">Radius &amp; Shadow</Typography>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "sm", className: "rounded-sm" },
            { label: "md", className: "rounded-md" },
            { label: "lg", className: "rounded-lg" },
            { label: "xl", className: "rounded-xl" },
            { label: "2xl", className: "rounded-2xl" },
            { label: "3xl", className: "rounded-3xl" },
          ].map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-1">
              <div className={`size-14 ${r.className} border border-black/5 bg-white shadow-[var(--shadow-soft-md)]`} />
              <Typography variant="caption" tone="muted">
                radius-{r.label}
              </Typography>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {(["sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="flex flex-col items-center gap-1">
              <div className="size-14 rounded-2xl bg-white" style={{ boxShadow: `var(--shadow-soft-${s})` }} />
              <Typography variant="caption" tone="muted">
                shadow-{s}
              </Typography>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4 border-b border-border px-5 py-6">
        <Typography variant="h2">Buttons</Typography>
        <div className="flex flex-wrap gap-2.5">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="icon button">
            +
          </Button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4 border-b border-border px-5 py-6">
        <Typography variant="h2">Cards</Typography>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>핑크 거베라</CardTitle>
            <CardDescription>사랑스러움과 행복의 상징</CardDescription>
          </CardHeader>
          <CardContent>
            <Typography variant="bodySm" tone="muted">
              카드 콘텐츠 영역 — 본문 텍스트가 들어갑니다.
            </Typography>
          </CardContent>
          <CardFooter>
            <Button size="sm">자세히 보기</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Image placeholder */}
      <section className="space-y-4 border-b border-border px-5 py-6">
        <Typography variant="h2">Image (placeholder)</Typography>
        <div className="flex flex-wrap items-end gap-4">
          <div className="relative h-32 w-24 overflow-hidden rounded-2xl">
            <Image src={flowerThumbnail("pink-gerbera")} alt="핑크 거베라" fill variant="photo" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image src={icon("home")} alt="home icon" variant="icon" width={28} height={28} />
            <Typography variant="caption" tone="muted">
              icon variant
            </Typography>
          </div>
        </div>
      </section>

      {/* Animations */}
      <section className="space-y-4 border-b border-border px-5 py-6">
        <Typography variant="h2">Animation</Typography>
        <StaggerGroup className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <StaggerItem key={i}>
              <div className="size-14 rounded-2xl bg-blush-200" />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <FadeUp>
          <Typography variant="bodySm">FadeUp — 새로고침해서 확인</Typography>
        </FadeUp>
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <PetalPop key={i} index={i}>
              <div className="size-10 rounded-full bg-sage-200" />
            </PetalPop>
          ))}
        </div>
        <PressScale lift className="inline-block w-fit rounded-2xl bg-white p-4 shadow-[var(--shadow-soft-sm)]">
          <Typography variant="bodySm">Press / Hover me</Typography>
        </PressScale>
      </section>

      {/* Bottom navigation */}
      <section className="px-5 py-6">
        <Typography variant="h2" className="mb-3">
          Bottom Navigation
        </Typography>
        <div className="overflow-hidden rounded-3xl border border-border">
          <BottomNavigation activeHref="/exhibition" />
        </div>
      </section>
    </div>
  );
}
