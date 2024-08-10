import Link from "next/link";
import H3 from "./typography/h3";
import P from "./typography/p";

type PropsToolsCard = {
  title: string;
  url: string;
  description: string;
};

export default function ToolsCard({ title, url, description }: PropsToolsCard) {
  return (
    <Link
      href={url}
      className="px-4 py-2 rounded-lg bg-gray-100 h-fit w-full border border-black border-opacity-30 cursor-pointer hover:bg-white tramsition-all duration-200"
    >
      <H3>{title}</H3>
      <P className="text-sm">{description}</P>
    </Link>
  );
}
