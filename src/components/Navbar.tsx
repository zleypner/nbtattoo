"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Instagram, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/artists", label: "ARTISTS" },
  { href: "/booking", label: "BOOKING" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-charcoal"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl tracking-[0.3em] text-foreground hover:text-gold transition-colors"
          >
            NOBORI TATTOO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.2em] transition-colors relative pb-1 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* Instagram + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/nobori.tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="p-2 border border-foreground/30 rounded-lg hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-charcoal">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-3 text-sm tracking-[0.2em] transition-colors ${
                    pathname === link.href
                      ? "text-gold bg-charcoal/50"
                      : "text-foreground hover:text-gold hover:bg-charcoal/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
