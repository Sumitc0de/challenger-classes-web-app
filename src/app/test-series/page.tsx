import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Test Series for SSC, HSC & Competitive Exams",
  description:
    "Practice with our structured test series at Challenger Classes, Nalasopara East. Designed to improve performance, time management, and exam confidence for SSC, HSC & MHT-CET.",
};

const testSeries = [
  {
    title: "Class 10 SSC Test Series",
    icon: "📝",
    tests: 50,
    duration: "1-3 hrs each",
    difficulty: "Board Level",
    features: [
      "Chapter-wise unit tests",
      "Preliminary exams (prelim pattern)",
      "Full board exam mock tests",
      "Detailed solutions & analysis",
    ],
  },
  {
    title: "Class 12 HSC Science Test Series",
    icon: "🧪",
    tests: 60,
    duration: "2-3 hrs each",
    difficulty: "Board + Competitive",
    features: [
      "Subject-wise practice tests",
      "Integrated board pattern papers",
      "Topic-wise objective MCQs",
      "Time-bound practice sessions",
    ],
  },
  {
    title: "Class 12 HSC Commerce Test Series",
    icon: "📈",
    tests: 40,
    duration: "2-3 hrs each",
    difficulty: "Board Level",
    features: [
      "Accounts practical problems",
      "Economics case study papers",
      "Full-length mock exams",
      "Answer key with marking scheme",
    ],
  },
  {
    title: "MHT-CET Test Series",
    icon: "🎯",
    tests: 80,
    duration: "1.5-3 hrs each",
    difficulty: "Competitive",
    features: [
      "Topic-wise MCQ tests",
      "Full-length mock CET papers",
      "Previous year paper analysis",
      "All India rank simulation",
    ],
  },
];

const benefits = [
  { icon: "📊", title: "Performance Analytics", desc: "Detailed score analysis with subject-wise breakdown" },
  { icon: "⏱️", title: "Time Management", desc: "Practice with timed tests to build exam-day speed" },
  { icon: "🔄", title: "Regular Practice", desc: "Weekly tests keep students exam-ready throughout the year" },
  { icon: "📋", title: "Detailed Solutions", desc: "Step-by-step explained answers for every test question" },
];

export default function TestSeriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 mb-4">
            Practice & Excel
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Test Series for SSC, HSC &amp; Competitive Exams
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Practice with our structured test series designed to improve
            performance, time management, and exam confidence at Challenger
            Classes, Nalasopara East.
          </p>
        </div>
      </section>

      {/* Test Series Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {testSeries.map((ts) => (
            <div
              key={ts.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl">{ts.icon}</span>
                  <h2
                    className="text-xl font-bold text-primary mt-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {ts.title}
                  </h2>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-start">
                  {ts.difficulty}
                </span>
              </div>

              <div className="flex gap-6 mb-5 text-sm text-text-muted">
                <span>📄 {ts.tests} Tests</span>
                <span>⏰ {ts.duration}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {ts.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#192F6B] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-[#192F6B] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#192F6B]/30 transition-all duration-300 text-sm">
                Start Practicing
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Why Our Test Series"
            title="Built for Exam Success"
            subtitle="Our test series at Challenger Classes is designed by expert faculty to replicate real exam conditions and boost student performance."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-primary text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Access to All Test Series"
        subtitle="Enroll at Challenger Classes today and practice with 200+ tests across all exam categories."
      />
    </>
  );
}
