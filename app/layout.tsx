import type { Metadata } from "next";
import { Cinzel, DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "./components/ui/Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beaconhouse School System | Seek the Light",
  description: "Official 2026 Concept Website for Beaconhouse School System - Pakistan's leading education network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          cinzel.variable,
          dmSans.variable,
          "antialiased"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
