import BasicCardWrapper from "@/components/basic-card-wrapper";
import FaqAreaComponent from "@/components/faq-area";
import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import SiteConfig from "@/config";
import { faqsQuestion } from "@/config/right-panel";

export default function RightPanel() {
  return (
    <BasicCardWrapper className="flex gap-2 flex-col">
      <H1>Online Calculator ands Tools</H1>
      <P>{SiteConfig?.description}</P>
      <P>
        onlinecalculation.net provides a comprehensive range of online
        calculators and tools designed to meet various needs efficiently.
        Whether one requires a financial calculator, health metric tools, or
        mathematical computations, this platform delivers accurate results
        swiftly. With its user-friendly interface and reliable performance,
        onlinecalculation.net stands out as the go-to resource for anyone in
        need of quick, precise calculations.
      </P>
      <H2 className="mt-4">Frequently Asked Questions</H2>
      <FaqAreaComponent faqs={faqsQuestion} />
    </BasicCardWrapper>
  );
}
