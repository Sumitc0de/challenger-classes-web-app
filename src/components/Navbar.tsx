"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/notes", label: "Notes" },
  { href: "/test-series", label: "Test Series" },
  { href: "/results", label: "Results" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/5 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="text-xl lg:text-2xl font-bold font-[var(--font-display)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-accent-orange">Challenger</span>{" "}
            <span className="text-primary">Classes</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? "text-accent-orange"
                  : "text-text-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-accent-orange to-orange-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                pathname === link.href
                  ? "text-accent-orange bg-orange-50"
                  : "text-text-muted hover:text-primary hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 bg-gradient-to-r from-accent-orange to-orange-500 text-white text-sm font-semibold rounded-xl text-center"
          >
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
