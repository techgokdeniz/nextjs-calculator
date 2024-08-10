import { pageItems } from "@/config/database";
import TextToolsView from "@/view/text-tools";

export async function generateMetadata() {
  const textTools = pageItems.find((item) => item.url === "text-tools");

  return {
    title: textTools?.seoTitle,
    description: textTools?.seoDescription,
    keywords: textTools?.keywords,
  };
}

export default function Page() {
  return <TextToolsView />;
}
