import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Matt Vandersluys",
  description: "Portfolio | Matt Vandersluys - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          flex flex-col h-svh
          ${inter.className}
        `}
      >

        <Header/>

        <main className="flex-grow flex justify-center items-center">
          {children}
        </main>

      </body>
    </html>
  );
}
