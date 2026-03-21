import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Classroom & Student Activities Gallery",
  description:
    "Explore photos from Challenger Classes, Nalasopara East — classroom sessions, events, and student activities.",
};

const categories = [
  {
    title: "Classroom Sessions",
    items: [
      { label: "Physics Lab", color: "from-blue-400 to-indigo-500" },
      { label: "Maths Workshop", color: "from-violet-400 to-purple-500" },
      { label: "Chemistry Practical", color: "from-emerald-400 to-teal-500" },
      { label: "Group Discussion", color: "from-amber-400 to-orange-500" },
    ],
  },
  {
    title: "Events & Celebrations",
    items: [
      { label: "Annual Day 2024", color: "from-pink-400 to-rose-500" },
      { label: "Science Exhibition", color: "from-cyan-400 to-blue-500" },
      { label: "Topper Felicitation", color: "from-orange-400 to-red-500" },
      { label: "Republic Day", color: "from-green-400 to-emerald-500" },
    ],
  },
  {
    title: "Student Activities",
    items: [
      { label: "Quiz Competition", color: "from-indigo-400 to-blue-500" },
      { label: "Career Counselling", color: "from-teal-400 to-cyan-500" },
      { label: "Study Circle", color: "from-purple-400 to-violet-500" },
      { label: "Sports Day", color: "from-yellow-400 to-amber-500" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 mb-4">
            Life at Challenger
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Classroom &amp; Student Activities
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            A glimpse into the vibrant learning environment at Challenger Classes, Nalasopara East.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-display)" }}>{cat.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cat.items.map((item) => (
                  <div key={item.label} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                      <div>
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📸</div>
                        <p className="text-sm font-semibold px-2">{item.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="Want to Be Part of This?" subtitle="Join the Challenger family and experience a learning environment like no other." />
    </>
  );
}
