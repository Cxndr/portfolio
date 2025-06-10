import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import Header from "@/components/Header";
import PageNavigator from "@/components/PageNavigator";
import ViewTransitionWrapper from "@/components/ViewTransitionWrapper";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin']})
const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: "Matt Vandersluys ~ Portfolio",
  description: "Portfolio | Matt Vandersluys - Web Developer",
  icons: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦥</text></svg>"
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
          flex flex-col h-full
          ${inter.className}
          ${caveat.variable}
          font-sans
          overflow-y-hidden
        `}
      >
        <Header/>
        <PageNavigator />
        <ViewTransitionWrapper>
          {children}
        </ViewTransitionWrapper>
        <Analytics />
      </body>
    </html>
  );
}

