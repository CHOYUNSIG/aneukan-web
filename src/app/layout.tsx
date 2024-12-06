import type { Metadata } from "next";
import "reflect-metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: "아늑한: 시니어 낙상 감지 홈캠 서비스",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#F5F5F5]">{children}</body>
    </html>
  );
}
