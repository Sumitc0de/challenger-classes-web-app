"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

const IMAGEKIT_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/akpxh7r76";

const books10 = [
  {
    title: "Mathematics Part I",
    class: "10th Standard",
    board: "SSC",
    subject: "Maths",
    size: "12.4 MB",
    color: "from-blue-500 to-indigo-600",
    icon: "📐",
    desc: "Algebra & Problem Solving",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/ssc-maths-1.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/ssc-maths-1.pdf`
  },
  {
    title: "Mathematics Part II",
    class: "10th Standard",
    board: "SSC",
    subject: "Geometry",
    size: "11.8 MB",
    color: "from-blue-400 to-indigo-500",
    icon: "📐",
    desc: "Geometry & Theorems",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/ssc-maths-2.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/ssc-maths-2.pdf`
  },
  {
    title: "Science & Tech Part I",
    class: "10th Standard",
    board: "SSC",
    subject: "Science",
    size: "15.2 MB",
    color: "from-green-500 to-emerald-600",
    icon: "🧪",
    desc: "Physics & Chemistry Basics",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/ssc-science-1.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/ssc-science-1.pdf`
  },
  {
    title: "Science & Tech Part II",
    class: "10th Standard",
    board: "SSC",
    subject: "Biology",
    size: "18.1 MB",
    color: "from-green-400 to-emerald-500",
    icon: "🌿",
    desc: "Biology & Environment",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/ssc-science-2.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/ssc-science-2.pdf`
  },
];

const books12Sci = [
  {
    title: "Physics Volume I",
    class: "12th Science",
    board: "HSC",
    subject: "Physics",
    size: "24.5 MB",
    color: "from-purple-500 to-violet-600",
    icon: "⚛️",
    desc: "Dynamics & Mechanics",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/hsc-physics-1.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/hsc-physics-1.pdf`
  },
  {
    title: "Chemistry Volume II",
    class: "12th Science",
    board: "HSC",
    subject: "Chemistry",
    size: "21.2 MB",
    color: "from-pink-500 to-rose-600",
    icon: "⚗️",
    desc: "Organic & Physical Chem",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/hsc-chemistry-2.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/hsc-chemistry-2.pdf`
  },
  {
    title: "Biology Part I",
    class: "12th Science",
    board: "HSC",
    subject: "Biology",
    size: "20.8 MB",
    color: "from-emerald-500 to-teal-600",
    icon: "🧬",
    desc: "Botany & Genetics",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/hsc-biology-1.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/hsc-biology-1.pdf`
  },
];

const books12Comm = [
  {
    title: "Book-keeping & Accountancy",
    class: "12th Commerce",
    board: "HSC",
    subject: "Accounts",
    size: "15.8 MB",
    color: "from-amber-500 to-blue-700",
    icon: "📊",
    desc: "Practical Bookkeepings",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/hsc-accounts.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/hsc-accounts.pdf`
  },
  {
    title: "Economics",
    class: "12th Commerce",
    board: "HSC",
    subject: "Eco",
    size: "14.2 MB",
    color: "from-cyan-500 to-[#192F6B]",
    icon: "📈",
    desc: "Macro & Micro Economics",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/hsc-economics.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/hsc-economics.pdf`
  },
  {
    title: "Secretarial Practice",
    class: "12th Commerce",
    board: "HSC",
    subject: "SP",
    size: "13.1 MB",
    color: "from-[#192F6B] to-red-600",
    icon: "💼",
    desc: "Business Correspondence",
    imageUrl: `${IMAGEKIT_ENDPOINT}/books/covers/hsc-sp.png`,
    fileUrl: `${IMAGEKIT_ENDPOINT}/books/pdfs/hsc-sp.pdf`
  },
];

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterBooks = (bookList: any[]) => 
    bookList.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const BookCard = ({ book }: { book: any }) => (
    <div className="group bg-white rounded-[2rem] p-6 border-2 border-border hover:border-blue-600 hover:shadow-2xl hover:shadow-[#192F6B]/10 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#192F6B]/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-14 h-18 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 overflow-hidden shrink-0 border border-gray-200">
            {/* If image doesn't load or doesn't exist, we fallback to icon but here we assume the imageUrl is a valid ImageKit cover */}
            {book.imageUrl ? (
              <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover" onError={(e) => { (e.target as any).style.display='none'; (e.target as any).nextSibling.style.display='flex'; }} />
            ) : null}
            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${book.color} ${book.imageUrl ? 'hidden' : ''}`}>
               {book.icon}
            </div>
          </div>
          
          <div className="mb-4 flex-1">
            <span className="px-2 py-0.5 rounded-md bg-[#192F6B]/10 text-[10px] font-black text-[#192F6B] uppercase tracking-wider mb-2 inline-block">
              {book.board} // {book.subject}
            </span>
            <h3 className="text-xl font-black text-primary uppercase leading-tight group-hover:text-[#192F6B] transition-colors">
              {book.title}
            </h3>
            <p className="text-[10px] text-text-muted font-bold mt-1 uppercase tracking-widest">{book.desc}</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-dashed border-border mt-auto">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{book.size}</span>
             <a 
               href={book.fileUrl || "#"} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#192F6B] transition-all active:scale-95"
             >
                Download <span className="text-xs">⬇️</span>
             </a>
          </div>
        </div>
    </div>
  );

  const Section = ({ title, sub, books }: { title: string, sub: string, books: any[] }) => {
    const filtered = filterBooks(books);
    if (filtered.length === 0 && searchQuery) return null;
    return (
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-[2px] w-12 bg-[#192F6B]" />
           <div>
             <h2 className="text-3xl font-black text-primary italic uppercase tracking-tighter leading-none">
               {title}
             </h2>
             <p className="text-[10px] font-bold text-[#192F6B] uppercase tracking-[0.3em] mt-1">{sub}</p>
           </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="px-3 py-1 text-[10px] font-black tracking-[0.2em] text-white bg-[#192F6B] italic uppercase rounded-sm">
                Digital Repository
             </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-primary italic uppercase tracking-tighter mb-4 leading-none">
            Digital <span className="text-[#192F6B]">Library.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed uppercase font-bold tracking-tight opacity-70">
            Official Textbooks & Study Resources for SSC & HSC Board
          </p>
          
          <div className="mt-8 relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="QUICK SEARCH PDF..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-sm"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">🔍</span>
          </div>
        </div>

        {/* Sections */}
        <Section title="10th Standard" sub="SSC // State Board" books={books10} />
        <Section title="12th Science" sub="HSC // Science Stream" books={books12Sci} />
        <Section title="12th Commerce" sub="HSC // Commerce Stream" books={books12Comm} />

        {/* Empty State */}
        {searchQuery && !filterBooks(books10).length && !filterBooks(books12Sci).length && !filterBooks(books12Comm).length && (
          <div className="text-center py-24 glass rounded-[3rem] border-2 border-dashed border-border uppercase">
            <span className="text-6xl mb-6 block">📚</span>
            <h3 className="text-2xl font-black text-primary tracking-tight">Resource Not Found</h3>
            <p className="text-[10px] font-bold text-text-muted mt-2 tracking-widest">Adjust your search parameters.</p>
          </div>
        )}
      </div>

      <div className="mt-24">
        <CTABanner />
      </div>
    </main>
  );
}
