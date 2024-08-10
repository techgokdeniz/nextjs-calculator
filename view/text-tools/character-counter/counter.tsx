"use client";

import Card from "@/components/card";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

export default function WordCounterComponent() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charactersWithoutSpaces, setCharactersWithoutSpaces] = useState(0);

  useEffect(() => {
    setWordCount(text.split(/\s+/).filter((word) => word).length);
    setCharactersWithoutSpaces(text.replace(/\s/g, "").length);
  }, [text]);

  return (
    <Card className="flex gap-2 flex-col">
      <div className="flex gap-2 text-center flex-col md:flex-row items-stretch">
        <Card className="bg-gray-200 flex flex-col">
          <span className="text-sm lg:text-lg font-bold">Characters Count</span>
          <span className="text-sm lg:text-lg text-blue-700 font-bold">
            {text.length}
          </span>
        </Card>
        <Card className="bg-gray-200 flex flex-col">
          <span className="text-sm  lg:text-lg font-bold">Word Count</span>
          <span className="text-sm lg:text-lg text-blue-700 font-bold">
            {wordCount}
          </span>
        </Card>
        <Card className="bg-gray-200 flex flex-col h-full">
          <span className="text-sm lg:text-lg font-bold">
            Characters Without Spaces
          </span>
          <span className="text-sm lg:text-lg text-blue-700 font-bold">
            {charactersWithoutSpaces}
          </span>
        </Card>
      </div>
      <Textarea
        placeholder="type or paste your text here"
        onChange={(e) => setText(e.target.value)}
      />
    </Card>
  );
}
