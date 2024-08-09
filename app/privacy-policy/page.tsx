import PageContainer from "@/components/page-container";
import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import Link from "next/link";

const Paragraph = [
  "We prioritize the privacy and security of your data, utilizing advanced security measures such as Secure Sockets Layer (SSL) encryption.",
  "1. OnlineCalculation.net uses cookies, which are small text files sent by a web server and stored in the user’s web browser.",
  "2. These cookies are employed for analytical purposes through tools like Google Analytics, to enhance user experience and optimize website performance.",
  "3. The data collected through cookies may include information such as IP address, browser type, language preferences, operating system, Internet service provider, time and date of access, and geographical location.",
  "4. Users have the ability to disable or re-enable cookies at any time by adjusting the settings in their web browser.",
  "5. Google utilizes cookies to serve more relevant ads on partner sites, such as those that display AdSense ads or belong to Google-certified ad networks. After visiting a partner's website, a cookie may be stored in the user's browser.",
  "6. Cookies enable Google and its partners to show specific ads to users based on their interaction with OnlineCalculation.net and other websites.",
  "7. The Google AdSense network operates as a third-party ad provider on the OnlineCalculation.net website.",
  "8. Users can opt out of personalized advertising by adjusting their preferences in Ads Settings.",
  "9. The data controller for OnlineCalculation.net is the website’s owner.",
  "10. For any inquiries, you can reach the website owner via email at: admin@onlinecalculation.net",
  <>
    OnlineCalculation.net reserves the right to update this privacy policy as
    required by applicable laws or due to changes in the website&apos;s
    technological infrastructure. The latest version of the privacy policy will
    always be available at:
    <Link href="/privacy-policy" className="ml-1 underline">
      Privacy Policy
    </Link>
  </>,
];

export default function PrivacyPolicy() {
  return (
    <PageContainer gridMode={false}>
      <H1>Privacy Policy</H1>
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
