"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

// Import local image assets
import aodImg from "@/assets/concepts/12th_application_of_dericatives_concepts.png";
import binomialImg from "@/assets/concepts/12th_binomial_distribtuton_concepts.png";

import bioPart1 from "@/assets/concepts/12th_biology_unit_cell_part1.png";
import bioPart2 from "@/assets/concepts/12th_biology_unit_cell_part2.png";
import bioPart3 from "@/assets/concepts/12th_biology_unit_cell_part3.png";

import currentElecImg from "@/assets/concepts/12th_current_electricity_concepts.png";
import rotationalImg from "@/assets/concepts/12th_rotational_concepts.png";

import electrochemImg from "@/assets/concepts/12th_electrochemistry_concept.png";
import solutionsImg from "@/assets/concepts/12th_solutions_concepts.png";

const categories = ["All", "Physics", "Chemistry", "Mathematics", "Biology"];

type Concept = {
  title: string;
  category: string;
  description: string;
  color: string;
  icon?: string;
  images?: any[];
};

const concepts: Concept[] = [
  {
    title: "12th Biology Cell Unit Master",
    category: "Biology",
    images: [bioPart1, bioPart2, bioPart3],
    description: "Comprehensive 3-part guide to cell biology, structure, and functions.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/20"
  },
  {
    title: "12th Application of Derivatives",
    category: "Mathematics",
    images: [aodImg],
    description: "Visual formulas and concepts for tangents, normals, maxima, and minima.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Binomial Distribution",
    category: "Mathematics",
    images: [binomialImg],
    description: "Key concepts in probability distribution and binomial theorem.",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-500/20"
  },
  {
    title: "12th Current Electricity",
    category: "Physics",
    images: [currentElecImg],
    description: "Fundamental laws, drift velocity, resistance, and circuit concepts.",
    color: "bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400 hover:shadow-amber-500/20"
  },
  {
    title: "12th Rotational Dynamics",
    category: "Physics",
    images: [rotationalImg],
    description: "Core principles of torque, moment of inertia, and angular momentum.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Electrochemistry",
    category: "Chemistry",
    images: [electrochemImg],
    description: "Nernst equation, galvanic cells, and conductivity principles.",
    color: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400 hover:shadow-blue-500/20"
  },
  {
    title: "12th Solutions",
    category: "Chemistry",
    images: [solutionsImg],
    description: "Colligative properties, Raoult's law, and concentration terms.",
    color: "bg-sky-50 text-sky-700 border-sky-200 hover:border-sky-400 hover:shadow-sky-500/20"
  },
  {
    title: "Quantum Mechanics",
    category: "Physics",
    icon: "⚛️",
    description: "The branch of physics that deals with the behavior of matter and light on an atomic and subatomic scale.",
    color: "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400 hover:shadow-slate-500/20"
  }
];

export default function ConceptsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImages, setSelectedImages] = useState<any[] | null>(null);
  const [scale, setScale] = useState(100);

  useEffect(() => {
    if (selectedImages) {
      setScale(window.innerWidth > 1024 ? 25 : 100);
    }
  }, [selectedImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImages(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredConcepts = activeCategory === "All" 
    ? concepts 
    : concepts.filter(c => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-bg pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
           <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-sm mb-4">
              Academic Encyclopedia
           </span>
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary italic uppercase tracking-tighter mb-4 leading-none text-[#10192F]">
             Core <span className="text-[#192F6B]">Concepts.</span>
           </h1>
           <p className="text-gray-500 text-lg max-w-2xl leading-relaxed uppercase font-bold tracking-tight opacity-70 mx-auto lg:mx-0">
             Deep dive into essential scientific and mathematical principles with our visual concept maps and diagrams.
           </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-[#192F6B] text-white shadow-lg shadow-[#192F6B]/30 scale-105" 
                : "bg-white text-gray-500 hover:bg-gray-200 border-2 border-border hover:shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConcepts.map((c, i) => (
            <div 
              key={i} 
              className={`group bg-white rounded-[2rem] p-6 border-2 transition-all duration-500 relative flex flex-col hover:-translate-y-2 hover:shadow-2xl ${c.color.split(' ').filter(cls => cls.startsWith('hover:') || cls.startsWith('border-')).join(' ')}`}
            >
              <div className="mb-5 flex justify-between items-start">
                <span className="px-3 py-1 bg-black/5 rounded-full text-[9px] font-black text-[#192F6B] uppercase tracking-[0.2em]">
                  {c.category}
                </span>
                {c.images && c.images.length > 1 && (
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[9px] font-black uppercase tracking-widest">
                    {c.images.length} Parts Included
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-black text-[#10192F] uppercase italic tracking-tighter mb-4 pr-4">
                {c.title}
              </h3>

              {c.images && c.images.length > 0 ? (
                <div 
                  className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 cursor-pointer border border-black/10 group/img shadow-inner bg-gray-100 flex items-center justify-center"
                  onClick={() => setSelectedImages(c.images || null)}
                >
                  <Image 
                    src={c.images[0]} 
                    alt={c.title} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm gap-2">
                    <span className="px-4 py-2 bg-white text-[#192F6B] rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                      View Fullscreen <span className="text-sm">⤢</span>
                    </span>
                    {c.images.length > 1 && (
                      <span className="text-[9px] text-emerald-300 font-bold uppercase tracking-widest transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300 delay-75">
                        +{c.images.length - 1} more parts inside
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`flex-1 p-6 rounded-2xl border flex flex-col items-center justify-center mb-6 min-h-[160px] text-center shadow-inner ${c.color.split(' ').filter(cls => !cls.startsWith('hover:') && !cls.startsWith('border-')).join(' ')}`}>
                  <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-sm">
                    {c.icon}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-[10px] font-black text-[#192F6B] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Read Module <span>→</span>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed mt-auto">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <CTABanner />
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImages && (
        <div className="fixed inset-0 z-[100] bg-[#0a1128]/95 backdrop-blur-xl">
          <button 
            onClick={() => setSelectedImages(null)}
            className="absolute top-6 right-6 z-[110] text-white hover:text-red-400 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors flex items-center justify-center shadow-xl backdrop-blur-md border border-white/10"
            title="Close (ESC)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-4 bg-black/60 backdrop-blur-lg px-6 py-3 rounded-full text-white shadow-2xl border border-white/10">
            <button onClick={() => setScale(s => Math.max(25, s - 25))} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors font-mono text-xl">-</button>
            <span className="text-xs font-black uppercase tracking-widest w-12 text-center">{scale}%</span>
            <button onClick={() => setScale(s => Math.min(300, s + 25))} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors font-mono text-xl">+</button>
            <div className="w-px h-4 bg-white/20 mx-2" />
            <button onClick={() => setScale(window.innerWidth > 1024 ? 25 : 100)} className="text-[9px] font-black uppercase tracking-widest hover:text-blue-400 transition-colors">Reset</button>
          </div>
          
          <div className="absolute inset-0 overflow-auto flex flex-col items-center justify-start z-0">
            <div className="relative flex flex-col items-center gap-12 py-12 md:py-20 transition-all duration-300 ease-out min-h-screen" style={{ width: `${scale}%` }}>
              {selectedImages.map((img, i) => (
                <div key={i} className="relative w-full px-2 md:px-8 flex justify-center">
                  {selectedImages.length > 1 && (
                     <div className="absolute top-4 left-8 md:left-12 z-20 bg-black/80 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm shadow-xl border border-white/10">
                       Part {i + 1} of {selectedImages.length}
                     </div>
                  )}
                  <Image 
                    src={img} 
                    alt={`Concept Fullscreen Page ${i+1}`} 
                    className="w-full h-auto object-contain rounded-xl shadow-2xl bg-white"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
