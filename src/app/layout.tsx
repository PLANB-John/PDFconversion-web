import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDF Conversion Web",
  description: "Next.js App Router starter with TypeScript and Tailwind CSS",
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
