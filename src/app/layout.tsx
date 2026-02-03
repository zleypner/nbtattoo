import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nobori Tattoo | Playas del Coco, Costa Rica",
  description:
    "Premium tattoo studio in Playas del Coco, Costa Rica. Specializing in color illustrative, neo-oriental, and fine line tattoos. Book your consultation today.",
  keywords: [
    "tattoo",
    "Costa Rica",
    "Playas del Coco",
    "tattoo artist",
    "color illustrative",
    "neo-oriental",
    "fine line",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
