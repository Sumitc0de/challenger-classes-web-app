"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-300 ${
            openIndex === i
              ? "border-gradient-start/30 bg-white shadow-md"
              : "border-border bg-white hover:border-gray-300"
          }`}
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-sm md:text-base font-semibold text-primary pr-4">
              {item.question}
            </span>
            <span
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === i
                  ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white rotate-180"
                  : "bg-gray-100 text-text-muted"
              }`}
            >
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-5 text-sm text-text-muted leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
