import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-play",
});

export const metadata: Metadata = {
  title: "Bemol Digital | Venha ser BeDigital",
  description: "Por um Amazonas cada vez mais tecnológico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${play.className} font-sans`}>{children}</body>
    </html>
  );
}
