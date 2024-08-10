import ToolsCard from "@/components/tools-card";
import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import { pageItems } from "@/config/database";

export default function TextToolsView() {
  const textTools = pageItems.find((item) => item.url === "text-tools");

  return (
    <main>
      <H1>{textTools?.title}</H1>
      <P className="mb-4">{textTools?.seoDescription}</P>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {textTools?.items.map((tool, index) => (
          <ToolsCard
            key={index}
            description={tool?.description}
            title={tool?.title}
            url={tool?.url}
          />
        ))}
      </div>
    </main>
  );
}
