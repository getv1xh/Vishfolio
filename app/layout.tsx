import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishfolio | Creative Developer",
  description:
    "A smooth, cinematic, developer-focused portfolio for modern interface work."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
