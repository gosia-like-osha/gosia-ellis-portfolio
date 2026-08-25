import type { Metadata } from "next";
import { JumpToTopButton } from "./components/JumpToTopButton";
import { geistSans } from "./fonts";
import "./globals.css";

const FAVICON_VERSION = "2";

export const metadata: Metadata = {
  title: "Gosia Ellis",
  description: "Portfolio",
  icons: {
    icon: [
      {
        url: `/icon.png?v=${FAVICON_VERSION}`,
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: `/favicon.ico?v=${FAVICON_VERSION}`,
        sizes: "any",
      },
    ],
    apple: [
      {
        url: `/apple-touch-icon.png?v=${FAVICON_VERSION}`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
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
