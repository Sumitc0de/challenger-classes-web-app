"use client";

import { useState } from "react";
import CTABanner from "@/components/CTABanner";

const categories = ["All", "Physics", "Chemistry", "Mathematics", "Biology"];

const concepts = [
  {
    title: "Quantum Mechanics",
    category: "Physics",
    description: "The branch of physics that deals with the behavior of matter and light on an atomic and subatomic scale.",
    icon: "⚛️",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Organic Chemistry",
    category: "Chemistry",
    description: "The study of the structure, properties, composition, reactions, and preparation of carbon-containing compounds.",
    icon: "🧪",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Calculus",
    category: "Mathematics",
    description: "The mathematical study of continuous change, centered on limits, derivatives, and integrals.",
    icon: "📐",
    color: "from-purple-500 to-violet-600"
  },
  {
    title: "Cell Biology",
    category: "Biology",
    description: "The study of cell structure and function, revolving around the concept that the cell is the fundamental unit of life.",
    icon: "🌿",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Electromagnetism",
    category: "Physics",
    description: "The study of the electromagnetic force, which occurs between electrically charged particles.",
    icon: "⚡",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Thermodynamics",
    category: "Physics",
    description: "The branch of physics that deals with heat, work, and temperature, and their relation to energy.",
    icon: "🔥",
    color: "from-red-500 to-rose-600"
  }
];

export default function ConceptsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredConcepts = activeCategory === "All" 
    ? concepts 
    : concepts.filter(c => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16">
           <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-sm mb-4">
              Academic Encyclopedia
           </span>
           <h1 className="text-5xl md:text-8xl font-black text-primary italic uppercase tracking-tighter mb-4 leading-none text-[#10192F]">
             Core <span className="text-[#192F6B]">Concepts.</span>
           </h1>
           <p className="text-gray-500 text-lg max-w-2xl leading-relaxed uppercase font-bold tracking-tight opacity-70">
             Deep dive into essential scientific and mathematical principles curated for excellence.
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
                : "bg-white text-gray-500 hover:bg-gray-100 border-2 border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConcepts.map((concept, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2.5rem] p-8 border-2 border-border hover:border-[#192F6B] hover:shadow-2xl hover:shadow-[#192F6B]/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#192F6B]/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${concept.color} flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {concept.icon}
                </div>
                
                <span className="text-[10px] font-black text-[#192F6B] uppercase tracking-[0.2em] mb-2 block">
                  {concept.category}
                </span>
                <h3 className="text-2xl font-black text-[#10192F] uppercase italic tracking-tighter mb-4 group-hover:text-[#192F6B] transition-colors">
                  {concept.title}
                </h3>
                <p className="text-sm text-gray-500 font-bold leading-relaxed opacity-80">
                  {concept.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-[#192F6B] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Read Module <span>→</span>
                </div>
              </div>
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
