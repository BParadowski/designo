import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Designo",
  description: "Custom design and digital branding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.className}>
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-white leading-relaxed text-neutral-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
