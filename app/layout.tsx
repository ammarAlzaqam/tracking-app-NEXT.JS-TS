import type { Metadata } from "next";
import logo from "@/public/assets/tracker-logo.png";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description:
    "Expense Tracker is a tool designed to help track financial transactions",
  authors: [
    {
      name: "ammaralzaqam",
    },
  ],
  icons: [{ rel: "icon", url: logo.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
