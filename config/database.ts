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
  "character-counter",
  "sentence-counter",
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
    seoTitle: "Text Tools - Free, Online Text Tools",
    seoDescription:
      "Discover top text tools designed to improve your writing efficiency, accuracy, and creativity. Perfect for professionals and students alike.",
    keywords: ["text tools","text tools online","text tools free","text tools for writers","text tools for students"],
    items: [
      {
        title: "Word Counter",
        description:
          "Use our word counter to easily track word and character counts, ensuring your writing meets any specific length requirements.",
        url: "word-counter",
        seoTitle: "Word Counter - Count Words and Characters",
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
      {
        title: "Character Counter",
        description:
          "Use our character counter to easily track character and word counts, ensuring your writing meets any specific length requirements.",
        url: "character-counter",
        seoTitle: "Character Counter - Count Characters and Words",
        seoDescription:
          "Use our character counter to easily track character and word counts, ensuring your writing meets any specific length requirements.",
        keywords: [
          "character counter",
          "word counter",
          "unique character counter",
          "character counter free",
          "character counter tools",
        ],
      },
      {
        title: "Sentence Counter",
        description: "Use our sentence counter to easily track sentence and word counts, ensuring your writing meets any specific length requirements.",
        url: "sentence-counter",
        seoTitle: "Sentence Counter - Count Sentences and Words",
        seoDescription:
          "Explore what a sentence counter is and how it works to enhance your writing accuracy and readability. ",
        keywords: [
          "sentence counter",
          "word counter",
          "unique sentence counter",
          "sentence counter free",
          "sentence counter tools",
        ]
      },
    ],
  },
];
