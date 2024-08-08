import BasicCardWrapper from "@/components/basic-card-wrapper";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import Span from "@/components/typography/span";
import Link from "next/link";
import { title } from "process";

export default function LeftPanel() {
  const randomTools = [
    {
      id: 1,
      title: "Random Tool 1",
      description: "Description 1",
      link: "https://example.com",
    },
    {
      id: 1,
      title: "Random Tool 2",
      description: "Description 1",
      link: "https://example.com",
    },
  ];

  return (
    <BasicCardWrapper className="flex gap-2 flex-col bg-gray-100 border-black border-opacity-30">
      <H2>Random Tools or Calculator</H2>
      <P>
        We list the tools or calculators we have randomly selected for you and
        if there is a tool that works for you, you can visit it.
      </P>
      {randomTools.map((tool) => (
        <Link href={tool?.link} key={tool?.id}>
          <BasicCardWrapper
            key={tool.title}
            className="mt-4 border-black border-opacity-30 cursor-pointer hover:bg-white tramsition-all duration-200"
          >
            <Span className="text-lg font-medium">{tool.title}</Span>
            <P className="text-sm">{tool.description}</P>
          </BasicCardWrapper>
        </Link>
      ))}
    </BasicCardWrapper>
  );
}
