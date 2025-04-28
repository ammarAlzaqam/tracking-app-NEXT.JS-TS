import React from "react";
import type { Metadata } from "next";
import CacheProviderEmotion from "./utils/cacheProvider";
import "./globals.css";
import MuiThemeProvider from "./utils/themeProvider";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description:
    "Expense Tracker is a tool designed to help track financial transactions",
  authors: [
    {
      name: "ammaralzaqam",
    },
  ],
  icons: [{ rel: "icon", url: "assets/tracker-logo.png" }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CacheProviderEmotion><MuiThemeProvider>{children}</MuiThemeProvider></CacheProviderEmotion>
      </body>
    </html>
  );
}
