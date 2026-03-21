import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching Classes for Class 10 & 12 in Nalasopara East",
  description:
    "Challenger Classes offers specialized coaching for SSC, HSC, MHT-CET & competitive exams with expert guidance and structured learning programs in Nalasopara East, Achole Road.",
};

const courseDetails = [
  {
    id: "class-10",
    icon: "📐",
    title: "Class 10 Coaching (SSC / CBSE)",
    subtitle: "Build a rock-solid academic foundation",
    description:
      "Our Class 10 program is designed to help students master all subjects and excel in board examinations. We cover the complete SSC and CBSE syllabus with emphasis on concept clarity and exam preparation techniques.",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi / Marathi"],
    features: [
      "Complete syllabus coverage with detailed notes",
      "Regular chapter-wise and revision tests",
      "Special doubt-solving sessions",
      "Board exam pattern practice papers",
      "Individual progress tracking and mentoring",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "class-12-science",
    icon: "🔬",
    title: "Class 12 Science Coaching",
    subtitle: "Excel in HSC and crack entrance exams",
    description:
      "Our Class 12 Science coaching covers Physics, Chemistry, Mathematics, and Biology with a balanced approach towards board exams and competitive entrance examinations like MHT-CET, JEE, and NEET.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    features: [
      "Board + competitive exam integrated preparation",
      "Extensive problem-solving practice sessions",
      "Lab practical guidance and support",
      "Weekly test series with detailed analysis",
      "One-on-one mentoring for weak areas",
    ],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "class-12-commerce",
    icon: "📊",
    title: "Class 12 Commerce Coaching",
    subtitle: "Master commerce subjects with expert guidance",
    description:
      "Comprehensive coaching for Commerce students covering Accountancy, Economics, Business Studies, and more. We focus on building strong conceptual understanding and practical application skills.",
    subjects: ["Accountancy", "Economics", "Business Studies", "OCM", "Mathematics / SP"],
    features: [
      "In-depth coverage of all commerce subjects",
      "Practical problem-solving in Accountancy",
      "Case study-based learning approach",
      "Regular assessments and grade improvement plans",
      "Career counselling and guidance for after 12th",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "competitive",
    icon: "🎯",
    title: "Competitive Exam Preparation",
    subtitle: "MHT-CET, JEE Main & NEET coaching",
    description:
      "Focused preparation programs for competitive exams including MHT-CET, JEE Main, and NEET. Our coaching combines concept mastery with strategic exam preparation to maximize scores.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology (NEET)"],
    features: [
      "Topic-wise and full-length mock tests",
      "Previous year question paper analysis",
      "Shortcut techniques and time management skills",
      "Daily problem practice (DPP) sheets",
      "Performance analytics and improvement strategies",
    ],
    color: "from-[#192F6B] to-red-500",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 mb-4">
            Our Programs
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Coaching Classes for Class 10 &amp; 12 in Nalasopara East
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Challenger Classes offers specialized coaching for SSC, HSC, and
            competitive exams with expert guidance and structured learning
            programs on Achole Road.
          </p>
        </div>
      </section>

      {/* Course Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {courseDetails.map((course, index) => (
            <div
              key={course.id}
              id={course.id}
              className={`grid lg:grid-cols-2 gap-10 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Info */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{course.icon}</span>
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-start">
                    {course.subtitle}
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-primary mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {course.title}
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  {course.description}
                </p>

                <h3 className="font-semibold text-primary text-sm uppercase tracking-wider mb-3">
                  Subjects Covered
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.subjects.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-bg text-primary border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#192F6B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#192F6B]/30 transition-all duration-300 text-sm"
                >
                  Enquire Now
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Features card */}
              <div className={`bg-white rounded-3xl p-8 shadow-sm border border-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-bold text-primary mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  ✨ What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {course.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-sm text-text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
