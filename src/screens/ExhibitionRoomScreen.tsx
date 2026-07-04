import { notFound } from "next/navigation";
import { TopBar } from "@/components/layouts/TopBar";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";
import { Typography } from "@/components/ui/typography";
import { FlowerGridCard } from "@/components/cards/FlowerGridCard";
import { flowers } from "@/data/flowers";
import { getRoom } from "@/lib/rooms";

const seasonOrder = ["봄", "여름", "가을", "겨울"];

function ExhibitionRoomScreen({ roomId }: { roomId: string }) {
  const room = getRoom(roomId);
  if (!room) notFound();

  if (roomId === "garden") {
    return (
      <div className="pb-28">
        <TopBar title={room.title} subtitle={room.subtitle} showBack />
        <div className="grid grid-cols-2 gap-3.5 px-5">
          {flowers.map((f, i) => (
            <FlowerGridCard key={f.id} id={f.id} name={f.name} nameEn={f.nameEn} index={i} wishlistable />
          ))}
        </div>
        <BottomNavigation activeHref="/exhibition" />
      </div>
    );
  }

  if (roomId === "season") {
    return (
      <div className="pb-28">
        <TopBar title={room.title} subtitle={room.subtitle} showBack />
        {seasonOrder.map((season) => {
          const seasonFlowers = flowers.filter((f) => f.seasons.includes(season));
          if (!seasonFlowers.length) return null;
          return (
            <section key={season} className="mb-7">
              <Typography variant="h3" className="mb-3 px-5">
                {season}
              </Typography>
              <div className="grid grid-cols-2 gap-3.5 px-5">
                {seasonFlowers.map((f, i) => (
                  <FlowerGridCard key={f.id} id={f.id} name={f.name} nameEn={f.nameEn} index={i} wishlistable />
                ))}
              </div>
            </section>
          );
        })}
        <BottomNavigation activeHref="/exhibition" />
      </div>
    );
  }

  const roomFlowers = flowers.filter((f) => f.category.includes(roomId));

  return (
    <div className="pb-28">
      <TopBar title={room.title} subtitle={room.subtitle} showBack />
      <div className="grid grid-cols-2 gap-3.5 px-5">
        {roomFlowers.map((f, i) => (
          <FlowerGridCard key={f.id} id={f.id} name={f.name} nameEn={f.nameEn} index={i} wishlistable />
        ))}
      </div>
      {!roomFlowers.length && (
        <Typography variant="bodySm" tone="muted" className="px-5 text-center">
          준비 중인 전시예요.
        </Typography>
      )}
      <BottomNavigation activeHref="/exhibition" />
    </div>
  );
}

export { ExhibitionRoomScreen };
