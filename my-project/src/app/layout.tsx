import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Home | Toushal Sewruttun",
  description: "Created by Toushal Sewruttun",
  icons: "/pictures/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md flex justify-center items-center p-4">
          <Link href="/" className="mx-auto">
            <h1 className="text-1xl font-semibold text-[var(--foreground)] hover:text-[var(--accent-hover)]">
              Toushal Sewruttun
            </h1>
          </Link>
          <div className="mx-auto space-x-6">
            <Link href="/" className="hover:text-[var(--accent-hover)] transition">Home</Link>
            <Link href="/projects" className="hover:text-[var(--accent-hover)] transition">Projects</Link>
            {/* <Link href="/themes" className="hover:text-[var(--accent-hover)] transition">Misc</Link> */}
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
