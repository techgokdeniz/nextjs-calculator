import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqSchema from "./faq-schema";

type Faq = {
  question: string;
  answer: string;
};

type FaqAreaProps = {
  faqs: Faq[];
};

export default function FaqAreaComponent({ faqs }: FaqAreaProps) {
  if (!faqs) return null;

  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {faqs?.map((faq, index) => (
          <AccordionItem value={`value-${index}`} key={index} className="text-start">
            <AccordionTrigger className="text-start">{faq?.question}</AccordionTrigger>
            <AccordionContent>{faq?.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <FaqSchema faqs={faqs} />
    </>
  );
}
