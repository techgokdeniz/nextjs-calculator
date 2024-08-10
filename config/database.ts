export const robotsTxtPath = [
  "contact-us",
  "terms-of-service",
  "privacy-policy",
  "financial-calculators",
  "math-calculators",
  "time-calculators",
  "construction-calculators",
  "sports-calculators",
  "other-calculators",
  "text-tools",
  "word-counter",
];

type ItemsType = {
  title: string;
  url: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords?: string[];
};

export type PageItem = {
  title: string;
  url: string;
  seoTitle: string;
  seoDescription: string;
  items: ItemsType[];
  keywords?: string[];
};

export const pageItems: PageItem[] = [
  {
    title: "Financial Calculators",
    url: "financial-calculators",
    seoTitle: "Financial Calculators - onlinecalculation.net",
    seoDescription: "",
    items: [],
  },
  {
    title: "Text Tools",
    url: "text-tools",
    seoTitle: "Text Tools - onlinecalculation.net",
    seoDescription:
      "Discover top text tools designed to improve your writing efficiency, accuracy, and creativity. Perfect for professionals and students alike.",
    keywords: ["text tools"],
    items: [
      {
        title: "Word Counter",
        description:
          "Use our word counter to easily track word and character counts, ensuring your writing meets any specific length requirements.",
        url: "word-counter",
        seoTitle: "Word Counter - onlinecalculation.net",
        seoDescription:
          "Use our word counter to easily track word and character counts, ensuring your writing meets any specific length requirements.",
        keywords: [
          "word counter",
          "character counter",
          "unique word counter",
          "word counter free",
          "word counter tools",
        ],
      },
    ],
  },
];
