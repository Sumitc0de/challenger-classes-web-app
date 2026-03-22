import Link from "next/link";
import StatsCounter from "@/components/StatsCounter";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import HeroSlider from "@/components/HeroSlider";

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
    name: "Vinayak Jaiswal",
    score: "99.3%ile",
    exam: "JEE Mains",
    year: "2026",
    quote: "The structured preparation and mock tests at Challenger Classes were the key to achieving my JEE Mains percentile.",
    initials: "VJ",
    image: "/gallery/toppers/vinayak_jaiswal_2026_jee_mains_topper_99.30_percentile.png",
  },
  {
    name: "Suman Ray",
    score: "Selected",
    exam: "NEET UG",
    year: "2024",
    quote: "Challenger Classes transformed my approach to studies. The faculty made complex biology topics simple and easy to understand.",
    initials: "SR",
    image: "/gallery/toppers/suman_ray_neet_topper.png",
  },
  {
    name: "Harsh Jaiswal",
    score: "244 Marks",
    exam: "CA Found.",
    year: "2024",
    quote: "I cracked CA Foundation with great marks thanks to the expert guidance and constant support at Challenger Classes.",
    initials: "HJ",
    image: "/gallery/toppers/harsh_jaiswal_ca_foundation_topper_244_marks.png",
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
            <div className="relative lg:block">
              <div className="relative w-full aspect-video max-w-3xl mx-auto group">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#192F6B]/20 to-transparent rounded-[3rem] blur-2xl group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative bg-white p-2 rounded-[3rem] shadow-2xl shadow-[#192F6B]/10 overflow-hidden border-2 border-border group-hover:border-[#192F6B]/30 transition-all duration-500 h-full">
                  <HeroSlider />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-border hidden md:block animate-bounce-slow z-30">
                  <p className="text-[10px] font-black text-[#192F6B] uppercase tracking-widest mb-1">Success Rate</p>
                  <p className="text-3xl font-black text-[#10192F] italic uppercase tracking-tighter">98.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────── */}
      <StatsCounter />

      {/* ── Study Hub ────────────────────────────── */}
      <section className="py-24 bg-[#192F6B] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-1000" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F97316]/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="flex flex-col items-center mb-16">
            <span className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-[#F97316] bg-[#F97316]/10 italic uppercase rounded-full mb-6">
               PREMIUM RESOURCES • 100% FREE
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-6 leading-none">
              Master Your <span className="text-[#F97316]">Subjects.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium tracking-tight">
              Stop memorizing. Start understanding. Download our exclusive study materials designed by expert faculty to accelerate your preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Formula card */}
            <Link 
              href="/formulas" 
              className="group/card relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-500 text-left overflow-hidden shadow-2xl hover:shadow-[#F97316]/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F97316]/20 to-transparent rounded-bl-[4rem] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
              
              <div className="w-16 h-16 bg-[#F97316] rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-[#F97316]/30 group-hover/card:rotate-12 transition-transform duration-500">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-3">Formula Hub</h3>
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest leading-relaxed mb-8">Download Physics, Maths & Chemistry Cheat Sheets</p>
              
              <div className="flex items-center gap-3 text-[#F97316] text-xs font-black uppercase tracking-[0.2em] group-hover/card:gap-5 transition-all">
                Get Free Access <span className="text-lg">→</span>
              </div>
            </Link>

            {/* Concepts card */}
            <Link 
              href="/concepts" 
              className="group/card relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-500 text-left overflow-hidden shadow-2xl hover:shadow-white/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-[4rem] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#192F6B] mb-8 shadow-xl shadow-white/10 group-hover/card:rotate-12 transition-transform duration-500">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-3">Concept Maps</h3>
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest leading-relaxed mb-8">Visual Master Guides for Biology & Science Units</p>
              
              <div className="flex items-center gap-3 text-white text-xs font-black uppercase tracking-[0.2em] group-hover/card:gap-5 transition-all">
                Explore Concepts <span className="text-lg">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

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
