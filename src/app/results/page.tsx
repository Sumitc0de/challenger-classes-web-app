"use client";

import { useState, useMemo } from "react";
import CTABanner from "@/components/CTABanner";

const toppers = [
  { name: "Vinayak Jaiswal", score: "99.3%ile", exam: "JEE Mains", year: "2026", initials: "VJ", image: "/gallery/toppers/vinayak_jaiswal_2026_jee_mains_topper_99.30_percentile.png" },
  { name: "Suman Ray", score: "Selected", exam: "NEET UG", year: "2025", initials: "SR", image: "/gallery/toppers/suman_ray_neet_topper.png" },
  { name: "Vijay Gaud", score: "Selected", exam: "NEET UG", year: "2025", initials: "VG", image: "/gallery/toppers/vijay_gaud_neet_topper.png" },
  { name: "Harsh Jaiswal", score: "244 Marks", exam: "CA Found.", year: "2026", initials: "HJ", image: "/gallery/toppers/harsh_jaiswal_ca_foundation_topper_244_marks.png" },
  { name: "Sameer Baghel", score: "95.20%ile", exam: "JEE Mains", year: "2026", initials: "SB" },
  { name: "Ankush Pandey", score: "93.00%ile", exam: "JEE Mains", year: "2026", initials: "AP" },
  { name: "Varun Yadav", score: "92.67%ile", exam: "JEE Mains", year: "2026", initials: "VY" },
  { name: "Ashish Chauhan", score: "91.28%ile", exam: "JEE Mains", year: "2026", initials: "AC" },
  { name: "Nihal Tiwari", score: "91.00%ile", exam: "JEE Mains", year: "2026", initials: "NT" },
];

export default function ResultsPage() {
  const [activeFilter, setActiveFilter] = useState("Total");
  const filters = ["Total", "2026", "2025", "2024"];

  const filteredToppers = useMemo(() => {
    if (activeFilter === "Total") return toppers;
    return toppers.filter(t => t.year === activeFilter);
  }, [activeFilter]);

  const featuredMain = filteredToppers[0];
  const featuredSub = filteredToppers.slice(1, 3);
  const gallery = filteredToppers.slice(3);

  return (
    <main className="min-h-screen bg-white pt-24 pb-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 mt-8 text-left">
           <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-full mb-4 animate-in fade-in slide-in-from-left-4 duration-700">
              ACADEMIC EXCELLENCE
           </span>
           <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-4 leading-tight">
             Wall of <span className="text-[#192F6B] italic font-black">Champions.</span>
           </h1>
           <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed tracking-tight opacity-90 font-medium">
             Celebrating the kinetic energy of ambition. Our students don&apos;t just pass; they accelerate towards their dreams with distinction.
           </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 transform active:scale-95 ${
                activeFilter === f 
                ? "bg-[#192F6B] text-white shadow-lg shadow-[#192F6B]/30 scale-105" 
                : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filteredToppers.length > 0 ? (
          <>
            {/* Featured Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
              
              {/* Main Featured (Left, 7 cols) */}
              {featuredMain && (
                <div className="lg:col-span-7 rounded-[2rem] overflow-hidden bg-white border border-gray-100 group shadow-xl shadow-[#192F6B]/10 transition-all hover:shadow-2xl flex flex-col md:flex-row min-h-[400px]">
                  {/* Image Box (on the left for desktop, top for mobile) */}
                  <div className="w-full md:w-[45%] lg:w-[40%] h-64 md:h-auto bg-gray-50 relative shrink-0 overflow-hidden">
                     <img 
                       src={featuredMain.image || "/gallery/student_success.png"} 
                       alt={featuredMain.name} 
                       className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 shadow-inner"></div>
                  </div>
                  
                  {/* Content Box (on the right for desktop, bottom for mobile) */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white">
                     <div className="flex items-center gap-3 mb-4">
                       <span className="text-primary/90 text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-primary/5 rounded-full">{featuredMain.exam} - {featuredMain.year}</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">{featuredMain.name}</h2>
                     <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-4">
                       <p className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#F97316] to-[#ea580c] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                         {featuredMain.score}
                       </p>
                       <span className="text-primary/80 font-bold mb-3 uppercase tracking-widest text-[10px]">{featuredMain.exam} Qualifier</span>
                     </div>
                  </div>
                </div>
              )}

              {/* Sub Featured (Right, 5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {featuredSub.map((sub) => (
                  <div key={sub.name} className="flex-1 bg-white rounded-[2rem] border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    {/* Image Box */}
                    <div className="w-full sm:w-32 h-44 sm:h-32 rounded-3xl overflow-hidden bg-gradient-to-b from-[#E2E8F0] to-[#F1F5F9] shrink-0 relative">
                       {sub.image ? (
                         <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       ) : (
                         <div className="w-full h-full bg-[#192F6B] flex items-center justify-center text-white text-3xl font-black uppercase tracking-tighter shadow-inner">
                           {sub.initials}
                         </div>
                       )}
                    </div>
                    {/* Info */}
                    <div className="flex-1 w-full text-center sm:text-left">
                      <h3 className="text-2xl font-black text-primary mb-1 tracking-tight">{sub.name}</h3>
                      <p className="text-3xl sm:text-4xl font-black text-[#F97316]" style={{ fontFamily: "var(--font-display)" }}>{sub.score}</p>
                      
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                        <span className="px-3 py-1 bg-[#192F6B]/5 text-[#192F6B] rounded-full text-[9px] font-black uppercase tracking-widest">{sub.exam.split(" ")[0]}</span>
                        <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-[9px] font-bold uppercase tracking-widest border border-gray-100">{sub.year} TOPPER</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Gallery Section */}
            {gallery.length > 0 && (
              <div className="mb-24">
                <div className="flex items-center gap-6 mb-10">
                  <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">Gallery of Distinction</h2>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {gallery.map(t => (
                    <div key={t.name} className="bg-white rounded-[2rem] p-4 md:p-5 pb-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
                      <div className="w-full aspect-square md:aspect-[4/3] rounded-[1.5rem] bg-gradient-to-b from-[#E2E8F0] to-[#F1F5F9] overflow-hidden mb-6 relative">
                        {t.image ? (
                          <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#192F6B]/5">
                             <span className="text-[#192F6B] text-4xl md:text-6xl font-black opacity-20 uppercase">{t.initials}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-auto px-2 gap-2">
                         <div>
                           <h4 className="font-bold text-primary text-base md:text-lg leading-tight mb-1">{t.name}</h4>
                           <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{t.exam}</p>
                         </div>
                         <p className="text-xl md:text-2xl font-black text-[#F97316]" style={{ fontFamily: "var(--font-display)" }}>{t.score.replace('ile', '')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="py-24 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6">
              <span className="text-4xl">🎓</span>
            </div>
            <h3 className="text-2xl font-black text-primary mb-2">Expanding Our Champions Legacy</h3>
            <p className="text-gray-500 max-w-sm mx-auto font-medium">We are currently updating our database for {activeFilter}. Check back soon to see the full list of achievers!</p>
          </div>
        )}

      </div>

      {/* Hero Stats (always visible at bottom) */}
      <section className="bg-gradient-to-br from-[#10192F] to-[#192F6B] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           {[
             { label: "AVERAGE GROWTH", value: "92%" },
             { label: "ALL INDIA RANKS", value: "15+" },
             { label: "SELECTION RATE", value: "100%" }
           ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center justify-center">
               <p className="text-6xl md:text-7xl lg:text-8xl font-black italic tracking-tighter mb-4" style={{ fontFamily: "var(--font-display)" }}>
                 {stat.value}
               </p>
               <p className="text-[10px] md:text-sm font-black text-white/80 uppercase tracking-[0.2em]">
                 {stat.label}
               </p>
             </div>
           ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
