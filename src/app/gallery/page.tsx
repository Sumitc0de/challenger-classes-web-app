"use client";

import { useState } from "react";

const categories = [
  "All Moments",
  "Classroom Life",
  "Teachers",
  "Annual Events",
  "Student Success"
];

const galleryImages = [
  // Student Success & Awards
  { url: "/gallery/events/award1.jpeg", category: "Student Success", alt: "Award Ceremony" },
  { url: "/gallery/events/award2.jpeg", category: "Student Success", alt: "Top Performer Award" },
  { url: "/gallery/events/achievements.png", category: "Student Success", alt: "Student Achievement" },
  { url: "/gallery/events/achievements1.png", category: "Student Success", alt: "Academic Excellence" },
  { url: "/gallery/events/achievements2.png", category: "Student Success", alt: "Success Celebration" },
  { url: "/gallery/events/achievements3.png", category: "Student Success", alt: "Outstanding Results" },
  { url: "/gallery/events/achievements4.png", category: "Student Success", alt: "Merit Students" },
  { url: "/gallery/events/achievements5.png", category: "Student Success", alt: "Proud Moments" },


  // Annual Events
  { url: "/gallery/events/Screenshot%202026-03-22%20163048.png", category: "Annual Events", alt: "Annual Function" },
  { url: "/gallery/events/farewell.jpeg", category: "Annual Events", alt: "Farewell Celebration" },
  { url: "/gallery/events/farewell2.png", category: "Annual Events", alt: "Farewell Party" },
  { url: "/gallery/events/wetnjoy1.jpeg", category: "Annual Events", alt: "Wet N Joy Excursion" },
  { url: "/gallery/events/wetnjoy2.jpeg", category: "Annual Events", alt: "Students having fun" },
  { url: "/gallery/events/wetnjoy3.jpeg", category: "Annual Events", alt: "Trip activities" },
  { url: "/gallery/events/wetnjoy4.jpeg", category: "Annual Events", alt: "Group photo" },
  { url: "/gallery/events/wetnjoy5.jpeg", category: "Annual Events", alt: "Water park fun" },
  { url: "/gallery/events/wetnjoy6.jpeg", category: "Annual Events", alt: "Rides and enjoyment" },
  { url: "/gallery/events/wetnjoy7.jpeg", category: "Annual Events", alt: "Memorable moments" },
  { url: "/gallery/events/wetnjoy8.png", category: "Annual Events", alt: "Resort" },

  // Classroom Life & Seminars
  { url: "/gallery/events/classes.png", category: "Classroom Life", alt: "Interactive Class" },
  { url: "/gallery/events/classes1.png", category: "Classroom Life", alt: "Lecture Session" },
  { url: "/gallery/events/faculties.png", category: "Teachers", alt: "Staff and Faculty" },
  { url: "/gallery/events/faculty.png", category: "Teachers", alt: "Faculty Session" },
  { url: "/gallery/events/faculty1.png", category: "Teachers", alt: "Teacher Interaction" },

];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Moments");

  const filteredImages = activeCategory === "All Moments"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-white pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-full mb-4">
            VISUAL JOURNEY
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-4 leading-tight">
            Academic Velocity<br />
            <span className="text-[#192F6B] italic font-black">Captured.</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed tracking-tight opacity-90 font-medium">
            Explore the vibrant atmosphere of Challenger Classes. From focused classroom sessions to transformative seminars and celebratory events.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 ${activeCategory === cat
                ? "bg-[#192F6B] text-white shadow-lg shadow-[#192F6B]/30"
                : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100"
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
              className="relative group overflow-hidden rounded-[2rem] border border-black/5 hover:border-[#192F6B]/20 transition-all duration-500 break-inside-avoid shadow-sm hover:shadow-xl"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>


      </div>


    </main>
  );
}
