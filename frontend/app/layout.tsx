import type { Metadata } from "next";
import "./globals.css";
import Providers from "./_providers/rainbowkit";
import ConvexClientProviders from "@/providers/ConvexClientProviders";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Ruins of Rome",
  description: "Fight for Blessings",
  icons: {
    icon: "/favrem.png",
    shortcut: "/favrem.png",
    apple: "/favrem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/image.png" />
      </head>
      <body className={`antialiased bg-[#000]`}>
        <ConvexClientProviders>
          <Providers>{children}</Providers>
        </ConvexClientProviders>
      </body>
    </html>
  );
}
