import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Challenger Classes — Leading Coaching Institute in Nalasopara East",
  description:
    "Learn about Challenger Classes, a trusted coaching institute in Nalasopara East, Achole Road, Palghar, Mumbai. Experienced faculty, proven results, and student-first approach.",
};

const faculty = [
  { name: "Prof. Rajesh Deshmukh", subject: "Mathematics", exp: "18+ Years", initials: "RD" },
  { name: "Prof. Sneha Joshi", subject: "Physics", exp: "12+ Years", initials: "SJ" },
  { name: "Prof. Anil Gupta", subject: "Chemistry", exp: "15+ Years", initials: "AG" },
  { name: "Prof. Priya Nair", subject: "Biology", exp: "10+ Years", initials: "PN" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 mb-4">
            Our Story
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Challenger Classes
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Nalasopara East&apos;s most trusted coaching institute, shaping academic futures since 2010.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-bold text-primary mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Legacy of Academic Excellence in Nalasopara East
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Challenger Classes in Nalasopara East, Palghar, Mumbai is one
                  of the leading coaching institutes providing quality education
                  for students of Class 10, Class 12, and competitive exams.
                  Known for its result-oriented teaching approach, Challenger
                  Classes has built a strong reputation among students and
                  parents in Nalasopara and nearby areas.
                </p>
                <p>
                  With a focus on concept clarity, regular testing, and personal
                  attention, the institute helps students achieve excellent
                  academic results. Over the years, Challenger Classes has
                  established itself as a trusted name among educational
                  institutes in Palghar, Mumbai.
                </p>
                <p>
                  Located on Achole Road, our institute is easily accessible
                  to students from Nalasopara East, Nalasopara West, Virar, and
                  surrounding areas. We believe every student has the potential
                  to excel — they just need the right guidance and environment.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-orange/10 to-orange-500/10 flex items-center justify-center text-2xl mb-4">
                  🎯
                </div>
                <h3 className="font-bold text-xl text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  Our Mission
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  To provide accessible, high-quality education that empowers every
                  student in Nalasopara East to unlock their full academic potential
                  and build a strong foundation for their future careers.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gradient-start/10 to-gradient-end/10 flex items-center justify-center text-2xl mb-4">
                  🌟
                </div>
                <h3 className="font-bold text-xl text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  Our Vision
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  To become the most impactful and innovative coaching institute
                  in Palghar district by fostering a culture of curiosity,
                  discipline, and academic excellence that produces future leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Team"
            title="Meet Our Faculty"
            subtitle="Our experienced and dedicated teachers are the backbone of Challenger Classes' success in Nalasopara East."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {faculty.map((f) => (
              <div
                key={f.name}
                className="text-center bg-bg rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {f.initials}
                </div>
                <h3 className="font-semibold text-primary text-sm">{f.name}</h3>
                <p className="text-xs text-accent-orange font-medium mt-1">{f.subject}</p>
                <p className="text-xs text-text-muted mt-1">{f.exp} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="What Sets Us Apart"
            title="Why Choose Challenger Classes?"
            subtitle="Discover what makes us the top choice for coaching in Nalasopara East, Achole Road."
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "👨‍🏫", text: "Experienced & Dedicated Faculty" },
              { icon: "📝", text: "Regular Test Series & Tracking" },
              { icon: "🤝", text: "Personal Attention to Each Student" },
              { icon: "🏆", text: "Proven Track Record of Results" },
              { icon: "📍", text: "Easily Accessible on Achole Road" },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <p className="text-sm font-medium text-primary">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
