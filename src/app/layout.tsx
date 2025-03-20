import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Matt Vandersluys ~ Portfolio",
  description: "Portfolio | Matt Vandersluys - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          flex flex-col h-full overflow-hidden
          ${inter.className}
        `}
      >
        <Header/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
