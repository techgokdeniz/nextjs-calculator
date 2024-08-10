import PageContainer from "@/components/page-container";
import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import Link from "next/link";

const Paragraph = [
  "We're here to help! Whether you have a question, feedback, or need assistance, feel free to reach out to us. Your inquiries are important to us, and we strive to respond as quickly as possible.",
  'How to reach us:',
  'Email: For general inquiries, support, or any other questions, you can email us at contact@onlinecalculation.net. We typically respond within 24-48 hours.',
  'Support: If you need help with using our tools or have encountered an issue, please include as much detail as possible in your message to help us assist you better.',
  'Feedback: Your thoughts and suggestions are valuable to us. If you have ideas on how we can improve our website or services, don’t hesitate to share them.',
  'We look forward to hearing from you and will do our best to provide you with the assistance you need.',
  'Thank you for choosing OnlineCalculation.net!'
];

export default function ContactUs() {
  return (
    <PageContainer gridMode={false}>
      <H1>Contact Us</H1>
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
