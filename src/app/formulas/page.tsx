"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

// Import local image assets
import diffImg from "@/assets/notes/12th_differentiation_formulas.png";
import intImg from "@/assets/notes/12th_integration_formulas.png";
import logicImg from "@/assets/notes/12th_mathematical_logic_formulas.png";
import matricesImg from "@/assets/notes/12th_matrices_formulas.png";
import trigFormulasImg from "@/assets/notes/12th_trigonometry_formulas.png";
import trigUnitCircleImg from "@/assets/notes/12th_trigonometry_unitcircle.png";

import acImg from "@/assets/notes/12th_ac.png";
import electrostaticsImg from "@/assets/notes/12th_electrostatics.png";

import organicImg from "@/assets/notes/12th_organic_chemistry.png";
import polymerImg from "@/assets/notes/12th_polymer_formulas.png";
import solidStateImg from "@/assets/notes/12th_solid_state.png";

const categories = ["All", "Maths", "Physics", "Chemistry", "Algebra", "Geometry"];

type Formula = {
  title: string;
  category: string;
  description: string;
  color: string;
  latex?: string;
  images?: any[];
};

const formulas: Formula[] = [
  {
    title: "12th Trigonometry Master Sheet",
    category: "Maths",
    images: [trigFormulasImg, trigUnitCircleImg],
    description: "Complete set of trigonometric identities, formulas, and the unit circle.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Differentiation Rules",
    category: "Maths",
    images: [diffImg],
    description: "Complete list of differentiation formulas and derivatives for 12th standard.",
    color: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400 hover:shadow-blue-500/20"
  },
  {
    title: "12th Integration Formulas",
    category: "Maths",
    images: [intImg],
    description: "All integration formulas, standard forms, and application rules.",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-500/20"
  },
  {
    title: "12th Mathematical Logic",
    category: "Maths",
    images: [logicImg],
    description: "Truth tables, logical equivalences, and boolean algebra rules.",
    color: "bg-sky-50 text-sky-700 border-sky-200 hover:border-sky-400 hover:shadow-sky-500/20"
  },
  {
    title: "12th Matrices properties",
    category: "Maths",
    images: [matricesImg],
    description: "Types of matrices, operations, determinants, and properties.",
    color: "bg-teal-50 text-teal-700 border-teal-200 hover:border-teal-400 hover:shadow-teal-500/20"
  },
  {
    title: "12th Alternating Current",
    category: "Physics",
    images: [acImg],
    description: "Formulas and phasor diagrams for AC circuits and resonance.",
    color: "bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400 hover:shadow-amber-500/20"
  },
  {
    title: "12th Electrostatics",
    category: "Physics",
    images: [electrostaticsImg],
    description: "Electric field, potential, Gauss's law, and capacitance formulas.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Organic Chemistry",
    category: "Chemistry",
    images: [organicImg],
    description: "Reaction mechanisms, nomenclature rules, and key reagents.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Polymer Chemistry",
    category: "Chemistry",
    images: [polymerImg],
    description: "Types of polymers, monomers, classification, and uses.",
    color: "bg-pink-50 text-pink-700 border-pink-200 hover:border-pink-400 hover:shadow-pink-500/20"
  },
  {
    title: "12th Solid State",
    category: "Chemistry",
    images: [solidStateImg],
    description: "Crystal structures, unit cell dimensions, and defects in solids.",
    color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 hover:border-fuchsia-400 hover:shadow-fuchsia-500/20"
  },

];

export default function FormulasPage() {
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

  const filteredFormulas = activeCategory === "All"
    ? formulas
    : formulas.filter(f => f.category === activeCategory);

  return (
    <main className="min-h-screen bg-bg pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-sm mb-4">
            Cheat Sheets &amp; Assets
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary italic uppercase tracking-tighter mb-4 leading-none text-[#10192F]">
            Formula <span className="text-[#192F6B]">Hub.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed uppercase font-bold tracking-tight opacity-70 mx-auto lg:mx-0">
            Quick access to essential mathematical equations, theorems, and visual cheat sheets for exam success.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
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
          {filteredFormulas.map((f, i) => (
            <div
              key={i}
              className={`group bg-white rounded-[2rem] p-6 border-2 transition-all duration-500 relative flex flex-col hover:-translate-y-2 hover:shadow-2xl ${f.color.split(' ').filter(c => c.startsWith('hover:') || c.startsWith('border-')).join(' ')}`}
            >
              <div className="mb-5 flex justify-between items-start">
                <span className="px-3 py-1 bg-black/5 rounded-full text-[9px] font-black text-[#192F6B] uppercase tracking-[0.2em]">
                  {f.category}
                </span>
                {f.images && f.images.length > 1 && (
                  <span className="px-3 py-1 bg-white/50 border border-black/10 rounded-full text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    {f.images.length} Pages
                  </span>
                )}
              </div>

              <h3 className="text-xl font-black text-[#10192F] uppercase italic tracking-tighter mb-4 pr-4">
                {f.title}
              </h3>

              {f.images && f.images.length > 0 ? (
                <div
                  className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 cursor-pointer border border-black/10 group/img shadow-inner bg-gray-100 flex items-center justify-center"
                  onClick={() => setSelectedImages(f.images || null)}
                >
                  <Image
                    src={f.images[0]}
                    alt={f.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm gap-2">
                    <span className="px-4 py-2 bg-white text-[#192F6B] rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                      View Fullscreen <span className="text-sm">⤢</span>
                    </span>
                    {f.images.length > 1 && (
                      <span className="text-[9px] text-white/90 font-bold uppercase tracking-widest transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300 delay-75">
                        +{f.images.length - 1} more sheets inside
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`flex-1 p-6 rounded-2xl border flex items-center justify-center mb-6 font-mono text-lg font-bold min-h-[160px] text-center shadow-inner ${f.color.split(' ').filter(c => !c.startsWith('hover:') && !c.startsWith('border-')).join(' ')}`}>
                  <div className="italic tracking-wider px-2">
                    {f.latex}
                  </div>
                </div>
              )}

              <div className="flex flex-col flex-grow justify-end">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed mt-auto mb-5">
                  {f.description}
                </p>

                <div className="pt-4 border-t border-black/5 flex justify-end">
                  {f.images && f.images.length > 0 ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        f.images!.forEach((img, idx) => {
                          setTimeout(() => {
                            const a = document.createElement("a");
                            a.href = img.src || img;
                            a.download = `${f.title.replace(/\s+/g, '_')}${f.images!.length > 1 ? `_part${idx + 1}` : ''}.png`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                          }, idx * 200);
                        });
                      }}
                      className="flex z-10 items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-[#192F6B] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#10192F] hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download{f.images.length > 1 ? " All" : ""}
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(f.latex || "");
                        alert("Equation copied to clipboard!");
                      }}
                      className="flex z-10 items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Formula
                    </button>
                  )}
                </div>
              </div>
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
                      Page {i + 1} of {selectedImages.length}
                    </div>
                  )}
                  <Image
                    src={img}
                    alt={`Formula Fullscreen Page ${i + 1}`}
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
