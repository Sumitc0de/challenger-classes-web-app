"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/test-series", label: "Test Series" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const studyLinks = [
  { href: "/notes", label: "Notes" },
  { href: "/concepts", label: "Concepts" },
  { href: "/formulas", label: "Formulas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Challenger Classes Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <div className="flex flex-col -gap-1">
            <span className="text-lg md:text-xl font-black text-[#F97316] italic leading-tight uppercase font-[var(--font-display)]">
              Challenger
            </span>
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase opacity-70">
              Classes
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? "text-accent-orange font-bold uppercase"
                  : "text-text-muted hover:text-primary hover:bg-black/5 uppercase"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Study Hub Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 uppercase ${
                studyLinks.some(link => pathname === link.href)
                  ? "text-accent-orange font-bold"
                  : "text-text-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              Study Hub
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 w-48 pt-2 transition-all duration-300 ${
              dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              <div className="glass rounded-xl shadow-xl border border-white/20 p-2 overflow-hidden">
                {studyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                      pathname === link.href
                        ? "bg-accent-orange/10 text-accent-orange"
                        : "text-text-muted hover:text-primary hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? "text-accent-orange font-bold uppercase"
                  : "text-text-muted hover:text-primary hover:bg-black/5 uppercase"
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
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                pathname === link.href
                  ? "text-accent-orange bg-orange-50 font-bold uppercase"
                  : "text-text-muted hover:text-primary hover:bg-gray-50 uppercase"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Study Hub Section */}
          <div className="px-4 py-2 mt-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Study Hub</p>
            <div className="grid grid-cols-1 gap-1">
              {studyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    pathname === link.href
                      ? "text-accent-orange bg-orange-50"
                      : "text-text-muted hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                pathname === link.href
                  ? "text-accent-orange bg-orange-50 font-bold uppercase"
                  : "text-text-muted hover:text-primary hover:bg-gray-50 uppercase"
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
