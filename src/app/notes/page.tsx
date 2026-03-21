import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Free Study Notes for Class 10 & 12 Students",
  description:
    "Access high-quality study notes prepared by experienced faculty at Challenger Classes, Nalasopara East. Comprehensive notes for SSC, HSC Science & Commerce subjects.",
};

const noteCategories = [
  {
    title: "Class 10 Notes",
    icon: "📐",
    subjects: [
      { name: "Mathematics", chapters: 8, status: "Available" },
      { name: "Science", chapters: 16, status: "Available" },
      { name: "Social Studies", chapters: 12, status: "Available" },
      { name: "English", chapters: 10, status: "Coming Soon" },
      { name: "Hindi / Marathi", chapters: 8, status: "Coming Soon" },
    ],
  },
  {
    title: "Class 12 Science Notes",
    icon: "🔬",
    subjects: [
      { name: "Physics", chapters: 16, status: "Available" },
      { name: "Chemistry", chapters: 16, status: "Available" },
      { name: "Mathematics", chapters: 13, status: "Available" },
      { name: "Biology", chapters: 16, status: "Available" },
    ],
  },
  {
    title: "Class 12 Commerce Notes",
    icon: "📊",
    subjects: [
      { name: "Accountancy", chapters: 12, status: "Available" },
      { name: "Economics", chapters: 10, status: "Available" },
      { name: "Business Studies", chapters: 12, status: "Coming Soon" },
      { name: "OCM", chapters: 8, status: "Coming Soon" },
    ],
  },
  {
    title: "Competitive Exam Notes",
    icon: "🎯",
    subjects: [
      { name: "MHT-CET Physics", chapters: 15, status: "Available" },
      { name: "MHT-CET Chemistry", chapters: 15, status: "Available" },
      { name: "MHT-CET Maths", chapters: 12, status: "Available" },
      { name: "JEE Formulae Sheets", chapters: 5, status: "Available" },
    ],
  },
];

export default function NotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 mb-4">
            Study Resources
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Free Study Notes for Class 10 &amp; 12 Students
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Access high-quality study notes prepared by experienced faculty at
            Challenger Classes to help students revise and excel in exams.
          </p>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-12">
          {noteCategories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h2
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.subjects.map((sub) => (
                  <div
                    key={sub.name}
                    className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-primary text-sm">
                        {sub.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          sub.status === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {sub.status}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mb-4">
                      {sub.chapters} Chapters
                    </p>
                    <button
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                        sub.status === "Available"
                          ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:shadow-md"
                          : "bg-gray-100 text-text-muted cursor-not-allowed"
                      }`}
                      disabled={sub.status !== "Available"}
                    >
                      {sub.status === "Available"
                        ? "📥 Download Notes"
                        : "Coming Soon"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            badge="Note"
            title="Enrolled Students Get Full Access"
            subtitle="All study notes are available for free to enrolled students of Challenger Classes, Nalasopara East. Contact us to enroll and get instant access to all materials."
          />
        </div>
      </section>

      <CTABanner
        title="Need Personalized Study Material?"
        subtitle="Enroll at Challenger Classes and get access to curated notes, formula sheets, and revision guides for all subjects."
      />
    </>
  );
}
