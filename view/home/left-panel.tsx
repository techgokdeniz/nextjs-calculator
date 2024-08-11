import BasicCardWrapper from "@/components/basic-card-wrapper";
import H3 from "@/components/typography/h3";
import P from "@/components/typography/p";
import Span from "@/components/typography/span";
import { leftPanelCategories } from "@/config/left-panel";
import { getRandomItemsFromAnyCategory } from "@/lib/get-data";
import Link from "next/link";

export default async function LeftPanel() {
  const randomTools = await getRandomItemsFromAnyCategory();

  return (
    <BasicCardWrapper className="flex gap-4 flex-col border-none p-0">
      <section
        id="random-tools-area"
        className=" border p-4 border-black border-opacity-30 rounded-lg bg-gray-100"
      >
        <H3>Random Tools or Calculator</H3>
        <P>
          We list the tools or calculators we have randomly selected for you and
          if there is a tool that works for you, you can visit it.
        </P>
        {randomTools.map((tool, index) => (
          <Link href={tool?.url} key={index}>
            <BasicCardWrapper
              key={tool.title}
              className="mt-4 border-black border-opacity-30 cursor-pointer hover:bg-white tramsition-all duration-200"
            >
              <Span className="text-lg font-medium">{tool.title}</Span>
              <P className="text-sm">{tool.description}</P>
            </BasicCardWrapper>
          </Link>
        ))}
      </section>
      <section
        id="categories-area"
        className=" border p-4 border-black border-opacity-30 rounded-lg bg-gray-100"
      >
        <H3>Categories</H3>
        <P>You can access all the categories we serve below.</P>
        <ul className="mt-2 list-disc p-4 font-semibold flex gap-2 flex-col">
          {leftPanelCategories.map((category) => (
            <li key={category.id} className="hover:underline">
              <Link href={category.url}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </BasicCardWrapper>
  );
}
