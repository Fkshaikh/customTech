import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CustomTech - Software-Hardware Integration Experts",
  description: "CustomTech specializes in custom software-hardware integration, particularly with Suprema devices, offering enterprise-grade solutions and seamless integrations.",
  openGraph: {
    title: "CustomTech - Software-Hardware Integration Experts",
    description: "Seamless integration of software and hardware with Suprema devices",
    url: "https://customtech.com",
    siteName: "CustomTech",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CustomTech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
