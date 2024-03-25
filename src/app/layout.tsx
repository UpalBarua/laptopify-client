import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laptopify",
  description: "A dynamic marketplace for laptops enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen !scroll-smooth bg-background text-foreground/90 antialiased",
        )}
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
      </body>
    </html>
  );
}
