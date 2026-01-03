import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header/Header";
import "./globals.css";

// General Sans font
const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Coup Feeble iMessage Automation",
  description: "Coup Feeble iMessage Automation Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
