import PageContainer from "@/components/page-container";
import LeftPanel from "@/view/home/left-panel";
import RightPanel from "@/view/home/right-panel";

export default function Home() {
  return (
    <PageContainer>
      <RightPanel />
      <LeftPanel />
    </PageContainer>
  );
}
