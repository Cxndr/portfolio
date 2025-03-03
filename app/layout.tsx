import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import Header from "@/components/Header";
import { ViewTransitions } from "next-view-transitions";

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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`
            flex flex-col h-svh 
            ${inter.className}
          `}
        >

          <Header/>

          <main className="grow overflow-hidden">
            {children}
          </main>

        </body>
      </html>
    </ViewTransitions>
  );
}
