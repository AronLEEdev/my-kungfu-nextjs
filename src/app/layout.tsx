import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import BreadcrumbBox from "@/components/BreadcrumbBox";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "My KungFu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SessionProviderWrapper>
          <NavBar />
          <BreadcrumbBox />
          <div className="flex-grow bg-gray-100 relative">{children}</div>
          <Footer />
        </SessionProviderWrapper>
      </body>
      <GoogleAnalytics gaId="G-SDBX5EQ3JL" />
    </html>
  );
}
