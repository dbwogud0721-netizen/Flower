export interface RoomMeta {
  id: string;
  title: string;
  subtitle: string;
  hue: string;
  accentHue: string;
  badge?: string;
  span?: "full" | "half";
  href?: string;
}

export const rooms: RoomMeta[] = [
  {
    id: "pink",
    title: "핑크 계열 꽃",
    subtitle: "로맨틱한 설렘 가득",
    hue: "#eaa9bb",
    accentHue: "#f4c9d4",
  },
  {
    id: "white",
    title: "화이트 계열 꽃",
    subtitle: "깨끗하고 순수한 느낌",
    hue: "#fdf3f5",
    accentHue: "#e3ebd6",
  },
  {
    id: "orange",
    title: "오렌지 계열 꽃",
    subtitle: "따뜻한 에너지와 활력",
    hue: "#e8935f",
    accentHue: "#f9d8b4",
  },
  {
    id: "purple",
    title: "퍼플 계열 꽃",
    subtitle: "신비롭고 우아한 분위기",
    hue: "#b79ccb",
    accentHue: "#c7b6df",
  },
  {
    id: "season",
    title: "계절별 꽃 상",
    subtitle: "봄, 여름, 가을, 겨울의 선물",
    hue: "#a9c48c",
    accentHue: "#e3ebd6",
  },
  {
    id: "trending",
    title: "유행하는 꽃들",
    subtitle: "요즘 가장 사랑받는 꽃들",
    hue: "#dd88a3",
    accentHue: "#eab26a",
    badge: "NEW",
    href: "/trending",
  },
  {
    id: "garden",
    title: "플라워 가든",
    subtitle: "다양한 꽃들이 가득한 정원",
    hue: "#c9d6c0",
    accentHue: "#f4c9d4",
    span: "full",
  },
];

export const getRoom = (id: string) => rooms.find((r) => r.id === id);
