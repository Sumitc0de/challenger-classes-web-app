import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Student Results & Achievements",
  description:
    "See the outstanding results achieved by students of Challenger Classes, Nalasopara East. Our students consistently top board exams and competitive exams.",
};

const toppers = [
  { name: "Vinayak Jaiswal", score: "99.3%ile", exam: "JEE Mains", year: "2026", initials: "VJ", image: "/gallery/toppers/vinayak_jaiswal_2026_jee_mains_topper_99.30_percentile.png" },
  { name: "Suman Ray", score: "Selected", exam: "NEET UG", year: "2025", initials: "SR", image: "/gallery/toppers/suman_ray_neet_topper.png" },
  { name: "Vijay Gaud", score: "Selected", exam: "NEET UG", year: "2025", initials: "VG", image: "/gallery/toppers/vijay_gaud_neet_topper.png" },
  { name: "Harsh Jaiswal", score: "244 Marks", exam: "CA Found.", year: "2026", initials: "HJ", image: "/gallery/toppers/harsh_jaiswal_ca_foundation_topper_244_marks.png" },
  { name: "Sameer Baghel", score: "95.20%ile", exam: "Competitive Exam", year: "2025", initials: "SB" },
  { name: "Ankush Pandey", score: "93.00%ile", exam: "Competitive Exam", year: "2025", initials: "AP" },
  { name: "Varun Yadav", score: "92.67%ile", exam: "Competitive Exam", year: "2025", initials: "VY" },
  { name: "Ashish Chauhan", score: "91.28%ile", exam: "Competitive Exam", year: "2025", initials: "AC" },
  { name: "Nihal Tiwari", score: "91.00%ile", exam: "Competitive Exam", year: "2025", initials: "NT" },
];

const highlights = [
  { number: "90%+", label: "Average pass rate across all batches" },
  { number: "50+", label: "Students scored above 90% in SSC 2025" },
  { number: "30+", label: "Students secured 90%+ in HSC 2025" },
  { number: "15+", label: "Students placed in top engineering colleges" },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 mb-4">
            Our Achievements
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Student Results &amp; Achievements
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Our students consistently achieve top scores in board exams and
            competitive exams, reflecting Challenger Classes&apos; commitment to
            excellence in Nalasopara East.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((h) => (
            <div key={h.label} className="text-center text-[#10192F]">
              <p className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {h.number}
              </p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Hall of Fame"
            title="Meet Our Toppers"
            subtitle="These outstanding students have made Challenger Classes proud with their exceptional academic achievements."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {toppers.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-6 text-center shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#192F6B] flex items-center justify-center text-white text-2xl font-black uppercase tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#192F6B]/20 overflow-hidden">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    t.initials
                  )}
                </div>
                <h3 className="font-semibold text-primary">{t.name}</h3>
                <p className="text-2xl font-bold text-[#192F6B] my-1" style={{ fontFamily: "var(--font-display)" }}>
                  {t.score}
                </p>
                <p className="text-xs text-text-muted">
                  {t.exam} · {t.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise results summary */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Year by Year"
            title="Consistent Track Record"
            subtitle="Challenger Classes has maintained an exceptional track record of results year after year in Nalasopara East."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { year: "2024–25", passRate: "96%", distinction: "65%", topScore: "96.8%" },
              { year: "2023–24", passRate: "94%", distinction: "60%", topScore: "98.5%ile" },
              { year: "2022–23", passRate: "93%", distinction: "58%", topScore: "95.6%" },
            ].map((y) => (
              <div
                key={y.year}
                className="bg-bg rounded-3xl p-8 text-center hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {y.year}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xl font-bold text-gradient-start">{y.passRate}</p>
                    <p className="text-xs text-text-muted">Pass Rate</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gradient-end">{y.distinction}</p>
                    <p className="text-xs text-text-muted">Distinction</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#192F6B]">{y.topScore}</p>
                    <p className="text-xs text-text-muted">Top Score</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Your Name Could Be Next!"
        subtitle="Join Challenger Classes and become part of our hall of fame. Enroll now for the 2025-26 batch."
      />
    </>
  );
}
