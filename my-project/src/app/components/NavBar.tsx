// app/components/NavBar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SlideUp } from "../animate"; 
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  // { name: "Misc", href: "/themes" },
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Left Logo */}
        <Link href="/" className="text-lg sm:text-xl font-semibold text-[var(--foreground)] hover:text-[var(--accent-hover)] lg:xl:text-sm">
          Toushal Sewruttun
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6 text-sm sm:text-base">
          {navLinks.map((link) => (
            <Link
                key={link.name}
                href={link.href}
                className={`transition ${
                pathname === link.href
                    ? "text-[var(--accent-hover)] font-semibold"
                    : "text-[var(--foreground)] hover:text-[var(--accent-hover)]"
                }`}            >
                {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-[var(--foreground)] focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <SlideUp
            keyProp="mobile-nav"
            className="fixed inset-0 z-50 backdrop-blur-md flex flex-col items-center justify-center space-y-4 text-xl text-[var(--foreground)]"
        >
            {/* Close Button */}
            <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            >
            <X size={28} />
            </button>

            {/* Animated Menu Items */}
            {navLinks.map((link) => (
            <Link
                key={link.name}
                href={link.href}
                className={`transition ${
                pathname === link.href
                    ? "text-[var(--accent-hover)] font-semibold"
                    : "text-[var(--foreground)] hover:text-[var(--accent-hover)]"
                }`}
                onClick={() => setIsMenuOpen(false)}
                >
                {link.name}
            </Link>
          ))}
        </SlideUp>
        )}
    </>
  );
}
