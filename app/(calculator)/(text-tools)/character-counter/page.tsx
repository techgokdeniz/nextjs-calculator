import { getSeoData } from "@/lib/get-data";
import CharacterCounterView from "@/view/text-tools/character-counter";

export async function generateMetadata() {
  return getSeoData({ baseClass: "text-tools", pageUrl: "character-counter" });
}

export default function Page() {
  return <CharacterCounterView />;
}
