import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const gotham = localFont({
  src: "./fonts/Gotham-Medium.woff2",
  variable: "--font-gotham-medium",
  weight: "100 900",
});
const poppins = localFont({
  src: "./fonts/Poppins-Medium.woff2",
  variable: "--font-poppins-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MJB Builders",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gotham.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
