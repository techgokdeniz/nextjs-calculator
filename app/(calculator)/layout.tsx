import PageContainer from "@/components/page-container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageContainer gridMode={false}>{children}</PageContainer>;
}
