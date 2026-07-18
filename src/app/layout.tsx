import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정진서 | 초원을 좋아하는 사람",
  description: "정진서의 취향과 생각을 소개하는 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
