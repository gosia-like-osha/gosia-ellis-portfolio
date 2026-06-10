import type { Metadata } from "next";
import { JumpToTopButton } from "./components/JumpToTopButton";
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
      <body className="flex min-h-screen flex-col bg-background">
        {children}
        <JumpToTopButton />
      </body>
    </html>
  );
}
