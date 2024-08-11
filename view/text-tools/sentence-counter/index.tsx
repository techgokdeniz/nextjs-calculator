import FaqAreaComponent from "@/components/faq-area";
import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import { getFullData } from "@/lib/get-data";
import SentenceCounterComponent from "./counter";

export default async function SentenceCounterView() {
  const data = await getFullData({
    baseClass: "text-tools",
    pageUrl: "sentence-counter",
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
      component: SentenceCounterComponent,
    },
    {
      type: "H2",
      children: "What is a Sentence Counter?",
    },
    {
      type: "P",
      children:
        "A sentence counter is a tool that calculates the number of sentences in a given text. It’s particularly useful for writers, editors, and content creators who need to monitor sentence length and count to ensure that their content is well-structured and easy to read. Sentence counters are often used in academic writing, content creation, and even in editing software to help maintain a balanced writing style.",
    },
    {
      type: "H2",
      children: "How Does a Sentence Counter Work?",
    },
    {
      type: "P",
      children:
        "A sentence counter works by scanning the text and identifying sentence boundaries, typically marked by periods, question marks, or exclamation points. It then counts each sentence individually. Advanced sentence counters can also analyze the average sentence length, helping writers to adjust their sentence structure for better readability.",
    },
    {
      type: "P",
      children:
        "These tools are available in various formats, including built-in features in word processing software like Microsoft Word or Google Docs, as well as standalone online tools where users can paste their text to get an instant sentence count.",
    },
    {
      type: "H2",
      children: "Why is a Sentence Counter Important?",
    },
    {
      type: "P",
      children: (
        <>
          <strong>Improving Readability:</strong> Keeping track of sentence
          length and count helps in creating content that is easier to read and
          understand. Shorter sentences often enhance clarity, especially in
          digital content where brevity is key.
        </>
      ),
    },
    {
      type: "P",
      children: (
        <>
          <strong> Maintaining Balance in Writing:</strong> A sentence counter ensures that your writing is well-balanced, with a mix of short and long sentences. This variation can make the text more engaging and easier to follow.
        </>
      ),
    },
    {
      type: "P",
      children: (
        <>
          <strong>SEO Optimization:</strong> In SEO, readability is a significant factor. A sentence counter can help optimize content by ensuring that sentences are not too long, making the text more accessible to a wider audience.
        </>
      ),
    },
    {
      type: "FaqAreaComponent",
      title: "Frequently Asked Questions",
      data: [
        {
          question: "What is the primary function of a sentence counter?",
          answer:
            "The primary function of a sentence counter is to calculate the total number of sentences in a text, helping to maintain readability and balance in writing.",
        },
        {
          question: "How does a sentence counter differ from a word or character counter?",
          answer:
            "While a word counter counts individual words and a character counter counts all characters, a sentence counter focuses on counting complete sentences within a text.",
        },
        {
          question: "Can a sentence counter help with SEO?",
          answer:
            "Yes, sentence counters can assist in SEO by helping to create content that is more readable, which is a key factor in search engine rankings.",
        },
        {
          question: "Are online sentence counters accurate?",
          answer:
            "Yes, most online sentence counters are accurate, though the results can vary slightly depending on how the tool interprets sentence boundaries.",
        },
        {
          question: "Why is sentence length important in writing?",
          answer:
            "Sentence length is crucial because it affects readability. Shorter sentences are generally easier to understand, while a mix of short and long sentences can make the text more engaging.",
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
