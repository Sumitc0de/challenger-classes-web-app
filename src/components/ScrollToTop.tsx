"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-[#192F6B] text-white shadow-2xl hover:bg-[#10192F] hover:-translate-y-1 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
          className="mb-0.5"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
