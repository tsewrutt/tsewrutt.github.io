// app/components/NavBar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, FolderOpen } from "lucide-react";
import { SlideUp } from "../animate"; 
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderOpen },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Simplified Glassmorphism Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border-color)]/50 shadow-lg' 
          : 'bg-transparent backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Profile Picture */}
            <Link 
              href="/" 
              className="text-[var(--foreground)] hover:text-[var(--accent-hover)] transition-colors duration-300 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-[var(--border-color)]">
                <Image
                  src="/pictures/profile.jpeg"
                  alt="Toushal Sewruttun"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 group ${
                      isActive
                        ? "text-[var(--accent-hover)] bg-[var(--accent)]/10"
                        : "text-[var(--foreground)] hover:text-[var(--accent-hover)] hover:bg-[var(--card)]/50"
                    }`}
                  >
                    <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{link.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-hover)] rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--accent-hover)] hover:bg-[var(--card)]/50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Simplified Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[var(--background)]/80 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <SlideUp
            keyProp="mobile-nav"
            className="absolute top-0 right-0 w-80 h-full bg-[var(--card)] border-l border-[var(--border-color)] shadow-2xl"
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-2 text-[var(--foreground)] hover:text-[var(--accent-hover)] hover:bg-[var(--background)]/50 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>

              {/* Profile Picture */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-[var(--border-color)]">
                  <Image
                    src="/pictures/profile.jpeg"
                    alt="Toushal Sewruttun"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--foreground)]">Toushal Sewruttun</h2>
                  <p className="text-sm text-[var(--text-color)]">Software Developer</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-[var(--accent-hover)] bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                          : "text-[var(--foreground)] hover:text-[var(--accent-hover)] hover:bg-[var(--background)]/50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </SlideUp>
        </div>
      )}
    </>
  );
}
