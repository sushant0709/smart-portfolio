import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Sushant Khattar",
    default: "Sushant Khattar",
  },
  description: "Checkout my smart portfolio website with a custom AI chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="max-w-3xl mx-auto py-10 px-3">
        {children}
      </main>
      </body>
    </html>
  );
}
