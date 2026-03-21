"use client";

import { useState } from "react";
import type { Metadata } from "next";

const categories = ["All Fields", "Physics", "Chemistry", "Maths", "Biology"];

const concepts = [
  { id: 1, category: "PHYSICS", title: "Electromagnetic Induction", description: "Understanding the generation of electric current by changing magnetic fields—the foundation of modern power.", image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=800&auto=format&fit=crop" },
  { id: 2, category: "CHEMISTRY", title: "Organic Mechanisms", description: "Step-by-step sequences of elementary reactions by which overall chemical change occurs in carbon compounds.", image: "https://images.unsplash.com/photo-1532187875460-1454f7300c02?w=800&auto=format&fit=crop" },
  { id: 3, category: "MATHS", title: "Calculus Fundamentals", description: "Mastering limits, derivatives, and integrals to solve problems involving rates of change and accumulation.", image: "https://images.unsplash.com/photo-1509228468518-180dd48a5791?w=800&auto=format&fit=crop" },
  { id: 4, category: "BIOLOGY", title: "Genetic Engineering", description: "Exploring CRISPR, recombinant DNA, and the future of biotechnology through gene manipulation.", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop" },
  { id: 5, category: "PHYSICS", title: "Quantum Mechanics", description: "A fundamental theory in physics that describes the physical properties of nature at the scale of atoms.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop" },
  { id: 6, category: "CHEMISTRY", title: "Thermodynamics", description: "Laws governing energy exchange, entropy, and the spontaneity of chemical reactions in closed systems.", image: "https://images.unsplash.com/photo-1517420704952-db60965d336d?w=800&auto=format&fit=crop" },
];

export default function ConceptsPage() {
  const [activeCategory, setActiveCategory] = useState("All Fields");

  const filteredConcepts = activeCategory === "All Fields"
    ? concepts
    : concepts.filter((c) => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <section className="pt-32 pb-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full bg-[#E2E8F0] text-[#6366F1] mb-6">
            DIGITAL ENCYCLOPEDIA
          </span>
          <h1 
            className="text-[56px] md:text-[80px] font-extrabold leading-[0.9] mb-12 tracking-tighter text-[#0F172A]" 
            style={{ fontFamily: "var(--font-display)" }}
          >
            Master Every <span className="text-[#F97316] italic font-black">Concept</span>
          </h1>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-12 group">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </div>
             <input 
               type="text" 
               placeholder="Search for physics, math, or biology concepts..." 
               className="w-full pl-14 pr-32 py-5 bg-white rounded-full shadow-xl shadow-black/5 outline-none focus:ring-2 focus:ring-[#F97316] transition-all text-sm font-medium"
             />
             <button className="absolute right-2 top-2 bottom-2 px-8 bg-[#F97316] hover:bg-orange-600 text-white font-bold rounded-full text-xs tracking-widest uppercase transition-all">
               Explore
             </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/20"
                    : "bg-[#E2E8F0] text-gray-500 hover:bg-[#CBD5E1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Concepts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConcepts.map((concept) => (
              <div 
                key={concept.id} 
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left"
              >
                {/* Image & Overlay */}
                <div className="relative h-[250px] overflow-hidden">
                   <img 
                     src={concept.image} 
                     alt={concept.title} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                   <span className="absolute top-6 right-6 px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold text-white tracking-widest rounded-full uppercase">
                     {concept.category}
                   </span>
                </div>

                {/* Content */}
                <div className="p-10 -mt-16 relative z-10">
                   <h3 className="text-2xl font-black tracking-tight text-primary mb-4 leading-tight group-hover:text-[#F97316] transition-colors">{concept.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">{concept.description}</p>
                   <button className="flex items-center gap-2 text-xs font-black tracking-widest uppercase italic group/btn">
                      <span>Explore Concept</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
