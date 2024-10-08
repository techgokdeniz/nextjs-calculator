import SiteConfig from "@/config";
import { PageItem, pageItems } from "@/config/database";

type DataProps = {
  baseClass: string;
  pageUrl: string;
};

export async function getSeoData(props: DataProps) {
  const { baseClass, pageUrl } = props;

  const pageData = pageItems.find((item) => item.url === baseClass);
  const itemData = pageData?.items.find((item) => item.url === pageUrl);

  return {
    title: itemData?.seoTitle,
    description: itemData?.seoDescription,
    keywords: itemData?.keywords,
    alternates: {
      canonical: `https://www.${SiteConfig.domain}/${pageUrl}`,
    }
  };
}

export async function getFullData (props: DataProps) {
  const { baseClass, pageUrl } = props;

  const pageData = pageItems.find((item) => item.url === baseClass);
  const itemData = pageData?.items.find((item) => item.url === pageUrl);

  return itemData
}

export function getRandomItemsFromAnyCategory(){
  const allItems = pageItems.flatMap(item => item.items);
  if (allItems.length < 2) {
    return [];
  }

  const shuffledItems = [...allItems].sort(() => 0.5 - Math.random());
  return shuffledItems.slice(0, 2);
}

