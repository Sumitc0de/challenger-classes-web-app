import Link from "next/link";
import StatsCounter from "@/components/StatsCounter";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

const courses = [
  {
    icon: "📐",
    title: "Class 10",
    description:
      "Strong foundation building with focus on board exam excellence for SSC and CBSE students in Nalasopara East.",
    features: [
      "All Subjects Covered",
      "Board Exam Focused",
      "Personalized Learning",
    ],
  },
  {
    icon: "🔬",
    title: "Class 12 Sci/Comm",
    description:
      "Specialized coaching for Science and Commerce students to help them ace their HSC exams with conceptual clarity.",
    features: [
      "Physics & Chemistry",
      "Maths & Biology",
      "Commerce Subjects",
    ],
  },
  {
    icon: "🎯",
    title: "CET / JEE / NEET",
    description:
      "Competitive exam coaching using proven strategies and techniques for engineering and medical entrance exams.",
    features: [
      "Mock Tests",
      "Expert Problem Solving",
      "Time Management Tips",
    ],
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    score: "96.8%",
    exam: "SSC",
    year: "2025",
    quote:
      "Challenger Classes transformed my approach to studies. The faculty made complex topics simple and easy to understand.",
    initials: "RS",
  },
  {
    name: "Sneha Patil",
    score: "95.2%",
    exam: "HSC Science",
    year: "2025",
    quote:
      "The test series and personal attention helped me consistently improve. Best coaching in Nalasopara!",
    initials: "SP",
  },
  {
    name: "Aman Khan",
    score: "99.1%ile",
    exam: "MHT-CET",
    year: "2024",
    quote:
      "I cracked MHT-CET with a great percentile thanks to the structured preparation at Challenger Classes.",
    initials: "AK",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Expert Faculty",
    description:
      "Learn from industry veterans and subject matter experts who bring real-world teaching excellence and passion.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Modern Facilities",
    description:
      "Air-conditioned smart classrooms equipped with digital learning tools to enhance student experience.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Progress Tracking",
    description:
      "Regular tests and performance reports to monitor improvement.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────── */}
      <section className="relative bg-bg min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gradient-start/5 to-gradient-end/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#192F6B]/10 text-[#192F6B] mb-6">
                #1 Rated in Nalasopara East
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Best{" "}
                <span className="gradient-text">Coaching</span>
                <br />
                Classes in
                <br />
                Nalasopara East
              </h1>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Challenger Classes in Nalasopara East is a leading coaching
                institute providing quality education for Class 10, Class 12,
                and competitive exam students. With experienced faculty and a
                results-driven approach, we help students achieve academic
                excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-[#192F6B] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#192F6B]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/courses"
                  className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Courses
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">🎓</div>
                    <p className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      Challenger Classes
                    </p>
                    <p className="text-sm text-gray-300">
                      Shaping Future Leaders Since 2014
                    </p>
                    <div className="mt-6 glass-dark rounded-2xl p-4 inline-block">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Open Admissions
                      </p>
                      <p className="text-lg font-bold text-accent mt-1">
                        2025–26 Batch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────── */}
      <StatsCounter />

      {/* ── Courses ───────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Programs"
            title="Choose Your Path"
            subtitle="Comprehensive coaching programs designed to help students in Nalasopara East and Achole Road achieve their academic goals."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {whyChooseUs.map((item, i) => (
                <div key={i} className="flex gap-4 mb-8">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-gradient-start/10 to-gradient-end/10 flex items-center justify-center text-gradient-start">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Beyond Conventional{" "}
                <span className="gradient-text">Learning.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                We don&apos;t just teach — we ignite the spark of curiosity.
                Our &quot;Ready. Set. Challenge!&quot; model ensures that every
                student reaches their maximum potential by mastering concepts,
                not just memorizing answers.
              </p>
              <p className="text-sm text-text-muted">
                🏆 Trusted by 1000+ families in Nalasopara &amp; Achole Road
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials / Toppers ─────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Hall of Fame"
            title="Our Toppers"
            subtitle="Our students consistently achieve outstanding results, reflecting Challenger Classes' commitment to academic excellence."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/results"
              className="text-sm font-semibold text-gradient-start hover:text-gradient-end transition-colors"
            >
              View All Results →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────── */}
      <CTABanner />
    </>
  );
}
