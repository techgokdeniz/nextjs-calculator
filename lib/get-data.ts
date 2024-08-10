import { pageItems } from "@/config/database";

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
  };
}

export async function getFullData (props: DataProps) {
  const { baseClass, pageUrl } = props;

  const pageData = pageItems.find((item) => item.url === baseClass);
  const itemData = pageData?.items.find((item) => item.url === pageUrl);

  return itemData
}