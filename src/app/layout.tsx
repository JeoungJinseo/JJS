import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정진서 | Designer Portfolio",
  description: "정진서의 디자인과 생각을 담은 포트폴리오 웹사이트입니다.",
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
