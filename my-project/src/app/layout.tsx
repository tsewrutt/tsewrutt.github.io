// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar"; // <--- new file
import { StarryBackground } from "./animate"

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
      <body>
        <NavBar />

        <main className="relative">
          <StarryBackground />
          {children}
        </main>
      </body>
    </html>
  );
}
