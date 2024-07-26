import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/common/Header/Header';
import Footer from '@/common/Footer/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '주식 ai 분석 페이지',
  description: '해외 주식을 AI 분석해 드립니다! ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className={`${pretendard.className} bg-background w-full `}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
