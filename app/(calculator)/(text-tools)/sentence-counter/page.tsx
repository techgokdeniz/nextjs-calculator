import { getSeoData } from "@/lib/get-data";
import SentenceCounterView from "@/view/text-tools/sentence-counter";

export async function generateMetadata() {
  return getSeoData({ baseClass: "text-tools", pageUrl: "sentence-counter" });
}

export default function Page() {
  return <SentenceCounterView />;
}
