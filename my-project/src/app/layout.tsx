import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Toushal Sewruttun",
  description: "Created by Toushal Sewruttun",
  icons:"/pictures/aurora1edit.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/80 shadow-md flex justify-between items-center p-4">
            <h1 className="text-2xl font-semibold text-gray-200">Toushal Sewruttun</h1>
            <div className="space-x-6">
              <Link href ="/" className="hover:text-blue-400 transition">Home</Link>
              <Link href ="/projects" className="hover:text-blue-400 transition">Projects</Link>
            </div>
          </nav>
        {children}
      </body>
    </html>
  );
}
