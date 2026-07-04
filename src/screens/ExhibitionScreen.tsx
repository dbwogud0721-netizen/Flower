import { TopBar } from "@/components/layouts/TopBar";
import { BottomNavigation } from "@/components/layouts/BottomNavigation";
import { RoomCard } from "@/components/cards/RoomCard";
import { rooms } from "@/lib/rooms";
import { flowers } from "@/data/flowers";

function representativeFlowerId(roomId: string) {
  if (roomId === "garden") return flowers[8]?.id ?? flowers[0].id;
  if (roomId === "season") return flowers.find((f) => f.id === "tulip")?.id ?? flowers[0].id;
  if (roomId === "trending") return flowers.find((f) => f.id === "garden-rose")?.id ?? flowers[0].id;
  return flowers.find((f) => f.category.includes(roomId))?.id ?? flowers[0].id;
}

function ExhibitionScreen() {
  return (
    <div className="pb-28">
      <TopBar title="전시관" subtitle="꽃의 아름다움을 감상해보세요" />

      <div className="grid grid-cols-2 gap-3.5 px-5">
        {rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} representativeFlowerId={representativeFlowerId(room.id)} index={i} />
        ))}
      </div>

      <BottomNavigation activeHref="/exhibition" />
    </div>
  );
}

export { ExhibitionScreen };
