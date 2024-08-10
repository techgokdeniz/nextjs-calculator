import { getSeoData } from "@/lib/get-data";
import WordCounterView from "@/view/text-tools/word-counter";

export async function generateMetadata() {
  return getSeoData({ baseClass: "text-tools", pageUrl: "word-counter" });
}

export default function Page() {
  return <WordCounterView />;
}
