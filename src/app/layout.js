import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Grimross AOI",
  description: "An app for all of Grimross Brewing Corp.'s needs",
};

export default function RootLayout({ 
  children 
}) {
  return (
    <html lang="en">
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased", 
          inter.variable
        )}
      >{children}</body>
    </html>
  );
}
