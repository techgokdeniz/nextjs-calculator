import BasicCardWrapper from "@/components/basic-card-wrapper";
import H1 from "@/components/typography/h1";
import P from "@/components/typography/p";
import SiteConfig from "@/config";

export default function RightPanel() {
  return (
    <BasicCardWrapper className="flex gap-2 flex-col">
      <H1>{SiteConfig?.title}</H1>
      <P>{SiteConfig?.description}</P>
    </BasicCardWrapper>
  );
}
