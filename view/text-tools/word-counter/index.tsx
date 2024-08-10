import FaqAreaComponent from "@/components/faq-area";
import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import { getFullData } from "@/lib/get-data";
import WordCounterComponent from "./counter";

export default async function WordCounterView() {
  const data = await getFullData({
    baseClass: "text-tools",
    pageUrl: "word-counter",
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
      children: "What is a Word Counter?",
    },
    {
      type: "P",
      children:
        "A word counter is a tool that calculates the number of words in a given piece of text. It’s an essential feature in many word processing programs and is also available as standalone online tools. Word counters help writers stay within word limits, which is crucial for tasks like academic essays, articles, and social media posts, where word count guidelines are often strict.",
    },
    {
      type: "H2",
      children: "How Does a Word Counter Work?",
    },
    {
      type: "P",
      children:
        "A word counter works by scanning the text inputted into the tool and counting the number of words based on spaces and punctuation marks that separate each word. In more advanced tools, it can also count characters, paragraphs, and even estimate reading time. Most word counters are integrated into text editors like Microsoft Word or Google Docs, providing a real-time word count as you type. Online versions require you to paste your text into a designated field, and the word count is instantly displayed.",
    },
    {
      type: "FaqAreaComponent",
      title: "Frequently Asked Questions",
      data: [
        {
          question:
            "What is the difference between a word counter and a character counter?",
          answer:
            "A word counter counts the total number of words in a text, while a character counter counts all characters, including spaces, punctuation, and letters.",
        },
        {
          question: "How do online character and word counters work?",
          answer:
            "Online counters work by allowing you to input text into a field, which the tool then scans to provide an instant count of characters and words.",
        },
        {
          question: "Can character and word counters be used for SEO?",
          answer:
            "Yes, character and word counters are often used in SEO to ensure that content meets the optimal length for search engine visibility.",
        },
        {
          question: "Do character counters include spaces?",
          answer:
            "Most character counters provide two counts: one including spaces and one without. This allows for greater flexibility depending on the requirement.",
        },
        {
          question: "Are there any free character and word counters available?",
          answer:
            "Yes, many free tools are available online, and most word processing programs like Microsoft Word and Google Docs have built-in counters.",
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
