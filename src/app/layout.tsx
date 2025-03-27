import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import Header from "@/components/Header";
import ScrollNavigator from "@/components/ScrollNavigator";
import ViewTransitionWrapper from "@/components/ViewTransitionWrapper";
import "./globals.css";

const inter = Inter({ subsets: ['latin']})
const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat',
});

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
          ${caveat.variable}
          font-sans
        `}
      >
        <Header/>
        <ScrollNavigator />
        <ViewTransitionWrapper>
          {children}
        </ViewTransitionWrapper>
      </body>
    </html>
  );
}

