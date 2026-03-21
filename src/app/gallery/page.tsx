"use client";

import { useState } from "react";

const categories = [
  "All Moments",
  "Classroom Life", 
  "Seminars",
  "Annual Events",
  "Student Success"
];

const galleryImages = [
  { url: "/gallery/classroom_life.png", category: "Classroom Life", alt: "Students in classroom" },
  { url: "/gallery/seminar_event.png", category: "Seminars", alt: "Seminar presentation" },
  { url: "/gallery/student_success.png", category: "Student Success", alt: "Students celebrating" },
  { url: "/gallery/annual_event.png", category: "Annual Events", alt: "Annual day celebration" },
  { url: "https://images.unsplash.com/photo-1523050853064-952460133d73?w=800&q=80", category: "Student Success", alt: "High school graduation" },
  { url: "https://images.unsplash.com/photo-1524178232363-1fb28f74b573?w=800&q=80", category: "Classroom Life", alt: "Teacher at blackboard" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", category: "Seminars", alt: "Students collaborating" },
  { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", category: "Annual Events", alt: "Tech conference seminar" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", category: "Student Success", alt: "Award ceremony" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Moments");

  const filteredImages = activeCategory === "All Moments" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
           <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-sm mb-4">
              Visual Journey
           </span>
           <h1 className="text-5xl md:text-7xl font-black text-primary italic uppercase tracking-tighter mb-4 leading-tight">
             Academic Velocity <br />
             <span className="text-[#192F6B]">Captured.</span>
           </h1>
           <p className="text-gray-500 text-lg max-w-2xl leading-relaxed uppercase font-bold tracking-tight opacity-70">
             Explore the vibrant atmosphere of Challenger Classes. From focused classroom sessions to transformative seminars and celebratory events.
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
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, i) => (
            <div 
              key={i} 
              className="relative group overflow-hidden rounded-[2rem] border-2 border-transparent hover:border-[#192F6B] transition-all duration-500 break-inside-avoid"
            >
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10192F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <span className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-1 block">
                    {img.category}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">
                    {img.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
           <button className="px-10 py-4 border-2 border-[#192F6B] text-[#192F6B] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#192F6B] hover:text-white transition-all flex items-center gap-3 mx-auto group">
              Load More Memories
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
           </button>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="bg-white py-16 mt-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
           {[
             { label: "Seminars Conducted", value: "500+" },
             { label: "Captured Moments", value: "12k+" },
             { label: "Awards Won", value: "15" },
             { label: "Years of Legacy", value: "20+" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
               <p className="text-4xl md:text-5xl font-black text-[#192F6B] italic uppercase tracking-tighter mb-2">
                 {stat.value}
               </p>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                 {stat.label}
               </p>
             </div>
           ))}
        </div>
      </section>

    </main>
  );
}
