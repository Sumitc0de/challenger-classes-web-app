"use client";

import { useState } from "react";
import CTABanner from "@/components/CTABanner";

const subjects = ["All", "Physics", "Chemistry", "Mathematics", "Biology", "English"];

const notes = [
  {
    title: "Gravitation Full Notes",
    subject: "Physics",
    class: "10th Standard",
    size: "2.4 MB",
    type: "PDF",
    date: "March 2025"
  },
  {
    title: "Chemical Reactions & Equations",
    subject: "Chemistry",
    class: "10th Standard",
    size: "3.1 MB",
    type: "PDF",
    date: "March 2025"
  },
  {
    title: "Trigonometry Basics",
    subject: "Mathematics",
    class: "10th Standard",
    size: "1.8 MB",
    type: "PDF",
    date: "Feb 2025"
  },
  {
    title: "Circular Motion",
    subject: "Physics",
    class: "12th Science",
    size: "4.5 MB",
    type: "PDF",
    date: "March 2025"
  },
  {
    title: "Solution & Colligative Properties",
    subject: "Chemistry",
    class: "12th Science",
    size: "5.2 MB",
    type: "PDF",
    date: "Jan 2025"
  },
  {
    title: "Matrices & Determinants",
    subject: "Mathematics",
    class: "12th Science",
    size: "3.8 MB",
    type: "PDF",
    date: "Dec 2024"
  }
];

export default function NotesPage() {
  const [activeSubject, setActiveSubject] = useState("All");

  const filteredNotes = activeSubject === "All" 
    ? notes 
    : notes.filter(n => n.subject === activeSubject);

  return (
    <main className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16">
           <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[#192F6B] bg-[#192F6B]/10 italic uppercase rounded-sm mb-4">
              Study Materials
           </span>
           <h1 className="text-5xl md:text-8xl font-black text-primary italic uppercase tracking-tighter mb-4 leading-none text-[#10192F]">
             Class <span className="text-[#192F6B]">Notes.</span>
           </h1>
           <p className="text-gray-500 text-lg max-w-2xl leading-relaxed uppercase font-bold tracking-tight opacity-70">
             Comprehensive study materials and handwritten notes from our expert faculty.
           </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {subjects.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSubject(s)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeSubject === s 
                ? "bg-[#192F6B] text-white shadow-lg shadow-[#192F6B]/30" 
                : "bg-white text-gray-500 hover:bg-gray-200 border-2 border-border"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="bg-white rounded-[2.5rem] border-2 border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-border bg-gray-50/50">
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Document Title</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Subject</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Class</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Size</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-border">
                {filteredNotes.map((note, i) => (
                  <tr key={i} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#192F6B]/10 flex items-center justify-center text-xl">
                          📄
                        </div>
                        <div>
                          <p className="font-black text-[#10192F] uppercase tracking-tight group-hover:text-[#192F6B] transition-colors">{note.title}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Updated: {note.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#192F6B] text-[10px] font-black uppercase tracking-widest border border-blue-100">
                        {note.subject}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      {note.class}
                    </td>
                    <td className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      {note.size}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#192F6B] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-[#192F6B]/20">
                        Download <span>↓</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <CTABanner />
      </div>
    </main>
  );
}
