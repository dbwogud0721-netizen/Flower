import { TopBar } from "@/components/layouts/TopBar";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";
import { Typography } from "@/components/ui/typography";
import { Image } from "@/components/ui/image";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { icon } from "@/utils/assetPaths";

function MyScreen() {
  return (
    <div className="flex min-h-screen flex-col pb-28">
      <TopBar title="마이" subtitle="나의 플라워 뮤지엄" />

      <div className="flex flex-col items-center px-5 pt-6">
        <div className="relative size-[72px] overflow-hidden rounded-full bg-blush-100">
          <Image src={icon("user-avatar")} alt="프로필" fill variant="photo" wrapperClassName="rounded-none" />
        </div>
        <Typography variant="h3" className="mt-3">
          Flower Museum 방문객
        </Typography>
        <Typography variant="caption" tone="muted">
          꽃과 함께한 순간들을 모아보세요
        </Typography>
      </div>

      <div className="mt-8 flex-1 space-y-3 px-5">
        <Card size="sm">
          <CardHeader>
            <CardTitle>찜한 꽃</CardTitle>
            <CardDescription>마음에 든 꽃을 하트로 찜해보세요</CardDescription>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardTitle>저장한 꽃다발</CardTitle>
            <CardDescription>꽃다발 만들기에서 완성한 작품이 이곳에 모여요</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <BottomNavigation activeHref="/my" />
    </div>
  );
}

export { MyScreen };
