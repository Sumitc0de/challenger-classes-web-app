"use client";

import { useState } from "react";
import type { Metadata } from "next";

const categories = [
  "All Moments",
  "Classroom Life",
  "Seminars",
  "Annual Events",
  "Student Success",
];

const galleryImages = [
  { id: 1, category: "Classroom Life", label: "Interactive Learning", span: "col-span-2 row-span-1", color: "from-blue-400 to-indigo-500" },
  { id: 2, category: "Seminars", label: "Expert Seminars", span: "col-span-1 row-span-2", color: "from-violet-400 to-purple-500" },
  { id: 3, category: "Annual Events", label: "Celebrations", span: "col-span-1 row-span-2", color: "from-pink-400 to-rose-500" },
  { id: 4, category: "Classroom Life", label: "Deep Focus", span: "col-span-1 row-span-1", color: "from-emerald-400 to-teal-500" },
  { id: 5, category: "Student Success", label: "Graduation Day", span: "col-span-2 row-span-2", color: "from-orange-400 to-red-500" },
  { id: 6, category: "Seminars", label: "Group Seminar", span: "col-span-1 row-span-1", color: "from-cyan-400 to-blue-500" },
];

const stats = [
  { value: "500+", label: "SEMINARS COMPLETED" },
  { value: "12k+", label: "CAPTURED MOMENTS" },
  { value: "15", label: "AWARDS WON" },
  { value: "20+", label: "YEARS OF LEGACY" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Moments");

  const filteredImages = activeCategory === "All Moments" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full bg-[#FFF1F2] text-[#F97316] mb-6">
              VISUAL JOURNEY
            </span>
            <h1 
              className="text-[56px] md:text-[80px] font-extrabold leading-[0.9] mb-6 tracking-tighter text-primary" 
              style={{ fontFamily: "var(--font-display)" }}
            >
              Academic Velocity<br />
              <span className="text-[#F97316] italic font-black">Captured.</span>
            </h1>
            <p className="text-[#64748B] text-lg max-w-xl leading-relaxed">
              Explore the vibrant atmosphere of Challenger Classes. From focused classroom sessions to transformative seminars and celebratory events.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/20"
                    : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] mb-16">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className={`relative group overflow-hidden rounded-[40px] shadow-sm transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${img.span}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${img.color} opacity-80 group-hover:opacity-95 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-4xl mb-4 block">📸</span>
                    <p className="text-lg font-black tracking-tighter uppercase italic">{img.label}</p>
                    <p className="text-[10px] tracking-widest font-bold mt-1 text-white/70 uppercase">{img.category}</p>
                  </div>
                </div>
                {/* Decorative overlay for "Velocity" feel */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="h-[2px] w-12 bg-white/50 rounded-full" />
                   <span className="text-[8px] font-black tracking-widest text-white uppercase italic">CHALLENGER_MOMENT_00{img.id}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <button className="group flex items-center gap-4 px-10 py-5 rounded-full border-2 border-[#F1F5F9] hover:border-[#F97316] transition-all duration-500">
               <span className="text-xs font-black tracking-widest text-[#64748B] group-hover:text-[#F97316] uppercase italic">Load More Memories</span>
               <svg 
                  className="w-4 h-4 text-[#64748B] group-hover:text-[#F97316] group-hover:translate-y-1 transition-all" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  viewBox="0 0 24 24"
               >
                 <path d="M19 9l-7 7-7-7" />
               </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar (Orange) */}
      <section className="bg-[#F97316] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                   <span className="text-[56px] font-black leading-none tracking-tighter italic" style={{ fontFamily: "var(--font-display)" }}>
                     {stat.value}
                   </span>
                   <span className="text-[10px] font-black tracking-[0.2em] opacity-80 uppercase leading-snug">
                     {stat.label}
                   </span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
}
