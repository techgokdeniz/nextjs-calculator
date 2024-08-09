import PageContainer from "@/components/page-container";
import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import Link from "next/link";

const Paragraph = [
  'The information and tools available on this website are provided "as is," without any guarantees or warranties of any kind.',
  "OnlineCalculation.net and its publishers shall not be responsible for any damages or losses arising from the use or misuse of the content or tools offered on this site.",
  <>
    OnlineCalculation.net employs cookies in line with our
    <Link href="/privacy-policy" className="ml-1 underline">
      Privacy Policy
    </Link>
    .
  </>,
  <>
    This website is intended for informational purposes only. We make every
    reasonable effort to ensure that the information and tools are accurate,
    current, and that the website operates smoothly. However, we cannot
    guarantee the completeness or accuracy of the content provided. We apologize
    for any errors or inaccuracies that may occur. Should you discover any
    issues, please notify us via the
    <Link className="underline mx-1" href="/contact-us">
      contact page.
    </Link>
    We will address and correct the problem as swiftly as possible.
  </>,
  "By accessing or using this website, you acknowledge and agree to these Terms of Use.",
];

export default function TermsOfService() {
  return (
    <PageContainer gridMode={false}>
      <H1>Terms Of Service</H1>
      <div className="flex flex-col gap-6 max-w-4xl mt-4 border p-4 rounded-lg border-black border-opacity-30 bg-gray-100">
        {Paragraph.map((text, index) => (
          <P className="text-base" key={index}>
            {text}
          </P>
        ))}
      </div>
    </PageContainer>
  );
}
