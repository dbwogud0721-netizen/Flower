import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { BouquetProvider } from "@/context/BouquetContext";
import { cn } from "@/utils/cn";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-kr",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flower Museum",
  description: "꽃을 감상하고, 나만의 꽃다발을 만드는 프리미엄 플라워 갤러리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn("font-sans", playfair.variable, notoSansKr.variable)}>
      <body className="antialiased">
        <BouquetProvider>
          <div className="mx-auto min-h-screen max-w-[480px] bg-ivory shadow-[0_0_60px_rgba(0,0,0,0.04)]">
            {children}
          </div>
        </BouquetProvider>
      </body>
    </html>
  );
}
