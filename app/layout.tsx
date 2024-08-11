import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/view/header";
import Footer from "@/view/footer";
import SiteConfig from "@/config";
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb";
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  keywords: SiteConfig.keywords,
  openGraph: {
    title: SiteConfig.title,
    description: SiteConfig.description,
    type: "website",
    locale: "en_US",
    url: `https://${SiteConfig.domain}`,
  },
  alternates: {
    canonical: `https://www.${SiteConfig.domain}`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning={true}>
        <Header />
        <DynamicBreadcrumb />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
