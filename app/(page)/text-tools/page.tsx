import SiteConfig from "@/config";
import { pageItems } from "@/config/database";
import TextToolsView from "@/view/text-tools";

export async function generateMetadata() {
  const pageUrl = "text-tools";
  const textTools = pageItems.find((item) => item.url === pageUrl);

  return {
    title: textTools?.seoTitle,
    description: textTools?.seoDescription,
    keywords: textTools?.keywords,
    alternates: {
      canonical: `https://www.${SiteConfig.domain}/${pageUrl}`,
    }
  };
}

export default function Page() {
  return <TextToolsView />;
}
