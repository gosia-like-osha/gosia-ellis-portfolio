import type { Metadata } from "next";
import { geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gosia Ellis",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} min-h-screen bg-background antialiased`}>
      <body className="min-h-screen flex flex-col bg-background pb-[calc(112px+env(safe-area-inset-bottom,0px))] sm:pb-0">
        {children}
      </body>
    </html>
  );
}
