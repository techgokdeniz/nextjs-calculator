"use client";

import Card from "@/components/card";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function SentenceCounterComponent() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  useEffect(() => {
    setWordCount(text.split(/\s+/).filter((word) => word).length);
    setSentenceCount(
      text.split(/[.!?]+/).filter((sentence) => sentence).length
    );
  }, [text]);

  return (
    <Card className="flex gap-2 flex-col">
      <div className="flex gap-2 text-center flex-col md:flex-row items-stretch">
        <Card className="bg-gray-200 flex flex-col">
          <span className="text-sm lg:text-lg font-bold">Sentence Count</span>
          <span className="text-sm lg:text-lg text-blue-700 font-bold">
            {sentenceCount}
          </span>
        </Card>
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
      </div>
      <Textarea
        placeholder="type or paste your text here"
        onChange={(e) => setText(e.target.value)}
      />
      <Alert variant={"destructive"}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Alert!</AlertTitle>
        <AlertDescription>
          The rule for calculating sentenceCount is to split the text by the
          characters . (period), ! (exclamation mark), or ? (question mark)
          using a regular expression. Each occurrence of these characters
          indicates the end of a sentence. The resulting segments are filtered
          to remove any empty strings, and the count of the remaining segments
          is considered as the sentence count.
        </AlertDescription>
      </Alert>
    </Card>
  );
}
