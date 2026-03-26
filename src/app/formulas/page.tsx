"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import CTABanner from "@/components/CTABanner";
import OptimizedImage from "@/components/OptimizedImage";

const categories = ["All", "Maths", "Physics", "Chemistry"];

type Formula = {
  title: string;
  category: string;
  description: string;
  color: string;
  images?: string[];
};

const formulas: Formula[] = [
  {
    title: "12th Ac Formulas",
    category: "Physics",
    images: ["formulas/physics/ac-class-12-maharashtra.jpg"],
    description: "Complete and important ac formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Chemistry Chemical Kinetics Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/chemistry-chemical-kinetics-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important chemistry chemical kinetics formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Chemistry Chemical Thermodynamics Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/chemistry-chemical-thermodyanics-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important chemistry chemical thermodynamics formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Chemistry Electrochemistry Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/chemistry-electrochemistry-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important chemistry electrochemistry formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Chemistry Ionic Equilibrium Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/chemistry-ionic-equilibrium-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important chemistry ionic equilibrium formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Chemistry Solutions Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/chemistry-solutions-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important chemistry solutions formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Differentiation Formulas",
    category: "Maths",
    images: ["formulas/maths/differentiation-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important differentiation formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Electrostatics Formulas",
    category: "Physics",
    images: ["formulas/physics/electrostatics-class-12-maharashtra.jpg"],
    description: "Complete and important electrostatics formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Mathematical Logic Formulas",
    category: "Maths",
    images: ["formulas/maths/mathematical-logic-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important mathematical logic formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Application of Definite Integration Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-application-definite-integration-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important application of definite integration formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Application of Derivatives Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-application-of-derivatives-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important application of derivatives formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Binomial Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-binomial-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important binomial distribution formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Definite Integration Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-definite-integration-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important definite integration formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Differential Equation Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-differntial-equation-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important differential equation formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Indefinite Integration Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-indefinite-integration-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important indefinite integration formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths LPP Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-lpp-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important linear programming problem (LPP) formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Pair of Lines Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-pair-of-line-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important pair of straight lines formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Plane Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-plane-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important three-dimensional plane formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Probability Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-probability-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important probability distribution formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Vector 1 Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-vector-1-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important vector algebra part 1 formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Maths Vector 2 Formulas",
    category: "Maths",
    images: ["formulas/maths/maths-vector-2-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important vector algebra part 2 formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Matrices Formulas",
    category: "Maths",
    images: ["formulas/maths/matrices-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important matrices formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Organic Chemistry Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/organic-chemistry-class-12-maharashtra.jpg"],
    description: "Complete and important organic chemistry formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Physics Current Electricity Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-current-eletricity-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important current electricity formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Dual Nature of Matter Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-dualnature-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important dual nature of radiation and matter formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Electromagnetic Induction Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-eletromagnetic-induction-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important electromagnetic induction formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Fluids Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-fluids-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important mechanical properties of fluids formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics KTG Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-ktg-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important kinetic theory of gases (KTG) formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Magnetic Field Due to Current Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-magnetic-field-duetocurrent-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important magnetic field due to electric current formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Oscillations Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-osciillations-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important oscillations and SHM formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Rotational Dynamics Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-rotational-dynamics-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important rotational dynamics formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Structure of Atoms Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-structure-atoms'-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important structure of atoms formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Superposition of Waves Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-superposition-waves-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important superposition of waves formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Physics Thermodynamics Formulas",
    category: "Physics",
    images: ["formulas/physics/physics-thermodynaimics-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important thermodynamics formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400 hover:shadow-orange-500/20"
  },
  {
    title: "12th Polymer Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/polymer-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important polymer chemistry formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Solid State Formulas",
    category: "Chemistry",
    images: ["formulas/chemistry/solid-state-class-12-maharashtra.jpg"],
    description: "Complete and important solid state chemistry formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20"
  },
  {
    title: "12th Trigonometry Formulas",
    category: "Maths",
    images: ["formulas/maths/trigonometry-formulas-class-12-maharashtra.jpg"],
    description: "Complete and important trigonometry formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  },
  {
    title: "12th Trigonometry Unit Circle Formulas",
    category: "Maths",
    images: ["formulas/maths/trigonometry-unitcircle-class-12-maharashtra.jpg"],
    description: "Complete and important trigonometry unit circle formulas for Class 12 Maharashtra Board HSC students.",
    color: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20"
  }
];

export default function FormulasPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Challenger Classes Formula Hub — Class 12 Maharashtra Board",
    "description": "Complete collection of 38 important formula cheat sheets for Maths, Physics, and Chemistry — Class 12 Maharashtra Board HSC.",
    "url": "https://challengerclasses.com/formulas",
    "image": formulas.map(f => ({
      "@type": "ImageObject",
      "contentUrl": `https://ik.imagekit.io/akpxh7r76/${f.images?.[0]}`,
      "name": f.title,
      "description": f.description
    }))
  };

  return (
    <main className="min-h-screen bg-bg pt-24 pb-16 relative">
      <Script
        id="formulas-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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
              className={`group bg-white rounded-[2rem] p-6 border-2 transition-all duration-500 relative flex flex-col hover:-translate-y-2 hover:shadow-2xl ${f.color.split(' ').filter((c: string) => c.startsWith('hover:') || c.startsWith('border-')).join(' ')}`}
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

              <h3 className="text-xl font-black text-[#10192F] uppercase mb-4 pr-4">
                {f.title}
              </h3>

              {f.images && f.images.length > 0 ? (
                <div
                  className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 cursor-pointer border border-black/10 group/img shadow-inner bg-gray-100 flex items-center justify-center"
                  onClick={() => setSelectedImages(f.images || null)}
                >
                  <OptimizedImage
                    src={f.images[0]}
                    alt={f.title}
                    title={"Complete " + f.title + " Cheat Sheet"}
                    caption={"All Important " + f.title + " - Class 12"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
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
              ) : null}

              <div className="flex flex-col flex-grow justify-end">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed mt-auto mb-5">
                  {f.description}
                </p>

                <div className="pt-4 border-t border-black/5 flex justify-end">
                  {f.images && f.images.length > 0 ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        f.images!.forEach(async (img, idx) => {
                          try {
                            const response = await fetch(`https://ik.imagekit.io/akpxh7r76/${img}`);
                            const blob = await response.blob();
                            const url = window.URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            const ext = img.split('.').pop();
                            a.download = `${f.title.replace(/\s+/g, '_')}${f.images!.length > 1 ? `_part${idx + 1}` : ''}.${ext}`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            window.URL.revokeObjectURL(url);
                          } catch (error) {
                            console.error("Error downloading image:", error);
                          }
                        });
                      }}
                      className="flex z-10 items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-[#192F6B] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#10192F] hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download{f.images.length > 1 ? " All" : ""}
                    </button>
                  ) : null}
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
                  <OptimizedImage
                    src={img}
                    alt={`Formula Fullscreen Page ${i + 1}`}
                    width={1200}
                    height={1600}
                    className="w-full h-auto object-contain rounded-xl shadow-2xl bg-white"
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
