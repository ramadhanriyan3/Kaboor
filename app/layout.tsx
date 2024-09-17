import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaboor | Kemana saja lebih mudah",
  description: "Kaboor is web app for buy and flight ticket",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full w-full min-h-screen max-w-[1440px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
