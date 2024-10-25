import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import cn from "@/libs/cn";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marcus Shop",
  description: "A bike store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classList = cn(
    geistSans.variable,
    geistMono.variable,
    "antialiased",
    "flex flex-col justify-between min-h-screen bg-base-100 text-base-content"
  );
  return (
    <html lang="en" data-theme="light">
      <body className={classList}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
