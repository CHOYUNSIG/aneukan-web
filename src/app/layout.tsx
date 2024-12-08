import type { Metadata } from "next";
import "reflect-metadata";
import "./globals.css";
import AuthProvider from "@/client/context/auth_provider";

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
      <body className="bg-[#F5F5F5]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
