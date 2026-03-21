"use client";

import { useState } from "react";
import CTABanner from "@/components/CTABanner";

const categories = ["All", "Algebra", "Geometry", "Physics", "Chemistry"];

const formulas = [
  {
    title: "Quadratic Formula",
    category: "Algebra",
    latex: "x = [-b ± √(b² - 4ac)] / 2a",
    description: "Used to find the roots of a quadratic equation ax² + bx + c = 0.",
    color: "bg-blue-50 text-blue-700 border-blue-100"
  },
  {
    title: "Pythagorean Theorem",
    category: "Geometry",
    latex: "a² + b² = c²",
    description: "Relates the lengths of the sides of a right-angled triangle.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    title: "Newton's Second Law",
    category: "Physics",
    latex: "F = m · a",
    description: "The force acting on an object is equal to its mass times its acceleration.",
    color: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    title: "Einstein's Energy-Mass",
    category: "Physics",
    latex: "E = m · c²",
    description: "Mass and energy are proportional and can be converted into each other.",
    color: "bg-rose-50 text-rose-700 border-rose-100"
  },
  {
    title: "Ideal Gas Law",
    category: "Chemistry",
    latex: "P · V = n · R · T",
    description: "Relates pressure, volume, temperature, and number of moles for an ideal gas.",
    color: "bg-amber-50 text-amber-700 border-amber-100"
  },
  {
    title: "Logarithm Identity",
    category: "Algebra",
    latex: "log_b(xy) = log_b x + log_b y",
    description: "The logarithm of a product is the sum of the logarithms of the factors.",
    color: "bg-indigo-50 text-indigo-700 border-indigo-100"
  }
];

export default function FormulasPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFormulas = activeCategory === "All" 
    ? formulas 
    : formulas.filter(f => f.category === activeCategory);

  return (
    <main className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16">
           <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-sm mb-4">
              Cheat Sheets
           </span>
           <h1 className="text-5xl md:text-8xl font-black text-primary italic uppercase tracking-tighter mb-4 leading-none text-[#10192F]">
             Formula <span className="text-[#192F6B]">Hub.</span>
           </h1>
           <p className="text-gray-500 text-lg max-w-2xl leading-relaxed uppercase font-bold tracking-tight opacity-70">
             Quick access to essential mathematical and scientific equations for exam success.
           </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-[#192F6B] text-white shadow-lg shadow-[#192F6B]/30" 
                : "bg-white text-gray-500 hover:bg-gray-200 border-2 border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormulas.map((f, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2.5rem] p-8 border-2 border-border hover:border-[#192F6B] transition-all duration-500 relative flex flex-col"
            >
              <div className="mb-6">
                <span className="text-[10px] font-black text-[#192F6B] uppercase tracking-[0.2em] mb-2 block">
                  {f.category}
                </span>
                <h3 className="text-xl font-black text-[#10192F] uppercase italic tracking-tighter group-hover:text-[#192F6B] transition-colors">
                  {f.title}
                </h3>
              </div>

              <div className={`flex-1 p-6 rounded-2xl border-2 flex items-center justify-center mb-6 font-mono text-lg font-bold min-h-[120px] text-center ${f.color}`}>
                <div className="italic tracking-wider">
                  {f.latex}
                </div>
              </div>

              <p className="text-xs text-gray-400 font-bold uppercase tracking-tight opacity-80 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <CTABanner />
      </div>
    </main>
  );
}
