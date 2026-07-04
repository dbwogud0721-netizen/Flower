import { FlowerDetailScreen } from "@/screens/FlowerDetailScreen";
import { flowers } from "@/data/flowers";

export function generateStaticParams() {
  return flowers.map((f) => ({ id: f.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <FlowerDetailScreen id={id} />;
}
