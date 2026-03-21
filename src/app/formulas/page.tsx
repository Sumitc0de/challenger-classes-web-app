"use client";

import { useState } from "react";
import type { Metadata } from "next";

const categories = ["Physics", "Chemistry", "Maths"];

const formulas = [
  { 
    id: 1, 
    topic: "Laws of Motion", 
    items: [
      { id: 101, formula: "F = ma", title: "Newton's Second Law of Motion", description: "The fundamental principle of dynamics states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.", analysis: "Dynamics • Quant. Motion", color: "bg-orange-50" },
      { id: 102, formula: "p = mv", title: "Linear Momentum", description: "Quantifies the motion of an object as the product of its mass and instantaneous velocity.", analysis: "Momentum", color: "bg-white" },
      { id: 103, formula: "Δp = F · Δt", title: "Impulse - Momentum", description: "The change in momentum of an object equals the impulse applied to it over a duration.", analysis: "Dynamics", color: "bg-orange-50" },
    ]
  },
  { 
    topic: "Work & Energy", 
    items: [
      { id: 201, formula: "KE = ½mv²", title: "Kinetic Energy", description: "Energy possessed by an object due to its motion. This formula is fundamental to the Work-Energy theorem and conservation principles.", analysis: "Energy/Work Analysis", color: "bg-white" },
      { id: 202, formula: "W = F · d cos(θ)", title: "Work Done by a Constant Force", description: "The scalar product of force and displacement vectors. Crucial for understanding energy transfers in mechanical systems and conservative fields.", analysis: "Work/Energy Physics", color: "bg-[#0F172A] text-white" },
    ]
  }
];

const visualDerivations = [
  { id: 1, title: "Visualizing Projectile Motion", description: "Explore the parabolic trajectory of motion through interactive decomposition of horizontal and vertical velocity components. Includes air resistance variables.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop", badge: "KINETIC VISUALIZATION 4" },
  { id: 2, title: "The Geometry of Calculus", description: "Visualize the fundamental theorem of calculus. Understand integrals as the accumulation of areas and differentiation as instantaneous rates of change.", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop", badge: "GEOMETRIC ANALYSIS HUB", dark: true },
];

export default function FormulasPage() {
  const [activeCategory, setActiveCategory] = useState("Physics");

  return (
    <>
      <section className="pt-32 pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full bg-[#EEF2FF] text-[#6366F1] mb-6">
            KINETIC MODUM LIBRARY
          </span>
          <h1 
            className="text-[56px] md:text-[80px] font-extrabold leading-[0.9] mb-12 tracking-tighter text-primary" 
            style={{ fontFamily: "var(--font-display)" }}
          >
            Formula <span className="text-[#F97316] italic font-black text-shadow-orange">Quick-Reference</span> Hub
          </h1>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            The ultimate kinetic cheat sheet for high-velocity learning. Master complex derivations and quick-fire equations with dual-media visual infographics.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/20"
                    : "bg-[#EEF2FF] text-gray-500 hover:bg-[#E0E7FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto relative mb-20 group">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </div>
             <input 
               type="text" 
               placeholder="Search by chapters, formulas, or themes..." 
               className="w-full pl-14 pr-14 py-5 bg-white rounded-xl border border-gray-100 shadow-xl shadow-black/5 outline-none focus:ring-2 focus:ring-[#F97316] transition-all text-sm font-medium"
             />
             <div className="absolute right-6 inset-y-0 flex items-center">
               <button className="p-2 text-gray-400 hover:text-[#F97316]">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
               </button>
             </div>
          </div>

          {/* Formula Sections */}
          {formulas.map((section, idx) => (
            <div key={idx} className="mb-20 text-left">
               <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-3xl font-black tracking-tighter text-primary">{section.topic}</h2>
                  <div className="h-[1px] flex-1 bg-gray-100" />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.items.map((f) => (
                    <div 
                      key={f.id} 
                      className={`group p-10 rounded-[40px] border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${f.color}`}
                    >
                       <div>
                          <div className="flex items-center justify-between mb-8">
                             <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[8px] font-bold tracking-widest uppercase opacity-60">CRITICAL_USE</span>
                             <span className="text-xl rotate-45 group-hover:scale-125 transition-transform">🚀</span>
                          </div>
                          <h4 className="text-[40px] font-black leading-none mb-4 italic tracking-tighter">{f.formula}</h4>
                          <h5 className="text-lg font-bold mb-3">{f.title}</h5>
                          <p className={`text-sm leading-relaxed mb-8 font-medium ${f.color.includes('0F172A') ? 'text-gray-400' : 'text-gray-500'}`}>
                            {f.description}
                          </p>
                       </div>
                       <div className="flex items-center justify-between pt-6 border-t border-current/5">
                          <span className="text-[9px] font-bold tracking-widest uppercase opacity-40">{f.analysis}</span>
                          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest italic group/btn">
                             <span>Full Analysis</span>
                             <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          ))}

          {/* Visual Derivations Section */}
          <div className="mt-32 text-left">
             <div className="flex items-center gap-6 mb-12">
                <h2 className="text-4xl font-black tracking-tighter text-primary">Visual Derivations & Infographics</h2>
                <div className="h-[1px] flex-1 bg-gray-100" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {visualDerivations.map((v) => (
                  <div 
                    key={v.id} 
                    className={`group relative rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${v.dark ? 'bg-[#0F172A] text-white' : 'bg-white'}`}
                  >
                     <div className="relative h-[300px] overflow-hidden">
                        <img 
                          src={v.image} 
                          alt={v.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-current via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="px-6 py-2 border-2 border-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold tracking-widest uppercase text-white scale-90 group-hover:scale-100 transition-transform">
                             {v.badge}
                           </div>
                        </div>
                     </div>
                     <div className="p-10">
                        <div className="flex items-center gap-2 mb-4">
                           <div className={`h-[2px] w-8 rounded-full ${v.dark ? 'bg-orange-500' : 'bg-primary'}`} />
                           <span className="text-[10px] font-black tracking-widest uppercase opacity-60">PHYSICS FOCUS</span>
                        </div>
                        <h4 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-[#F97316] transition-colors">{v.title}</h4>
                        <p className={`text-sm leading-relaxed mb-8 opacity-60 ${v.dark ? 'text-gray-300' : 'text-gray-500'}`}>{v.description}</p>
                        <div className="flex items-center justify-between">
                           <div className="flex gap-1">
                              {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full border border-current opacity-40" />)}
                           </div>
                           <button className={`flex items-center gap-4 px-8 py-4 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${v.dark ? 'bg-[#F97316] text-white hover:bg-orange-600' : 'text-primary hover:text-orange-500 italic'}`}>
                              {v.dark ? 'Start Learning' : 'Open Interactive Infographic'} {v.dark ? '' : '→'}
                           </button>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
