import FaqAreaComponent from "@/components/faq-area";
import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import { getFullData } from "@/lib/get-data";
import WordCounterComponent from "./counter";

export default async function CharacterCounterView() {
  const data = await getFullData({
    baseClass: "text-tools",
    pageUrl: "character-counter",
  });

  const PageData = [
    {
      type: "H1",
      children: data?.title,
    },
    {
      type: "P",
      children: data?.description,
    },
    {
      type: "component",
      component: WordCounterComponent,
    },
    {
      type: "H2",
      children: "What is a Character Counter?",
    },
    {
      type: "P",
      children:
        "A character counter is a tool designed to calculate the number of characters in a given text. Characters include letters, numbers, punctuation marks, and spaces. Character counters are especially important for tasks such as writing tweets, creating meta descriptions, or filling out online forms where character limits are strictly enforced.",
    },
    {
      type: "H2",
      children: "How Does a Character Counter Work?",
    },
    {
      type: "P",
      children:
        "A character counter works by scanning the text inputted into the tool and counting each character individually. Some advanced counters can distinguish between different types of characters, providing counts with and without spaces, and can even track the number of words and sentences.",
    },
    {
      type: "P",
      children:
        "Character counters are often integrated into text editors like Microsoft Word or Google Docs, where they provide real-time character counts as you type. Many online tools are also available, where you can paste your text into a field and instantly see the character count.",
    },
    {
      type: "FaqAreaComponent",
      title: "Frequently Asked Questions",
      data: [
        {
          question:
            "What is the main function of a character counter?",
          answer:
            "The main function of a character counter is to calculate the total number of characters in a text, helping users stay within specific character limits.",
        },
        {
          question: "How does a character counter differ from a word counter?",
          answer:
            "While a word counter counts the number of words in a text, a character counter counts all individual characters, including letters, numbers, punctuation, and spaces.",
        },
        {
          question: "Can a character counter include or exclude spaces?",
          answer:
            "Yes, most character counters offer options to count characters with or without spaces, depending on the user's needs.",
        },
        {
          question: "Why are character counters important in SEO?",
          answer:
            "Character counters are important in SEO because they help ensure that meta descriptions, title tags, and other elements meet the character limits required for optimal search engine display.",
        },
        {
          question: "Are online character counters reliable?",
          answer:
            "Yes, online character counters are generally reliable, offering accurate counts instantly. However, the exact count may vary slightly between different tools.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-3 max-w-screen-lg">
      {PageData.map((item, index) => {
        switch (item.type) {
          case "H1":
            return <H1 key={index}>{item.children}</H1>;
          case "H2":
            return <H2 key={index}>{item.children}</H2>;
          case "component":
            const Component = item.component;
            return Component ? <Component key={index} /> : null;
          case "FaqAreaComponent":
            return (
              <>
                <H2>{item.title}</H2>
                <FaqAreaComponent faqs={item?.data ?? []} key={index} />
              </>
            );
          case "P":
            return <P key={index}>{item.children}</P>;
          default:
            return null;
        }
      })}
    </div>
  );
}
