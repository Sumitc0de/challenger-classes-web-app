import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Challenger Classes — Leading Coaching Institute in Nalasopara East",
  description:
    "Learn about Challenger Classes, a trusted coaching institute in Nalasopara East, Achole Road, Palghar, Mumbai. Experienced faculty, proven results, and student-first approach.",
};

const faculty = [
  {
    name: "Adv. (Dr.) Purushottam Mishra",
    subject: "Co-Founder & Science Expert",
    exp: "10+ Years",
    image: "/purushautam_sir.png"
  },
  {
    name: "Adv. Ritukesh Tiwari",
    subject: "Founder & Mathematics Expert",
    exp: "8+ Years",
    image: "/ritukesh_sir.png"
  },
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
            Nalasopara East&apos;s most trusted coaching institute, shaping academic futures since 2014.
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
                <div className="w-12 h-12 rounded-2xl bg-[#192F6B]/10 flex items-center justify-center text-2xl mb-4">
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
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {faculty.map((f) => (
              <div
                key={f.name}
                className="w-full max-w-[300px] text-center bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-border/50"
              >
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#192F6B] to-blue-400 rounded-full scale-105 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-[#10192F] text-xl mb-2 group-hover:text-[#192F6B] transition-colors">
                  {f.name}
                </h3>
                <p className="text-sm text-[#192F6B] font-bold uppercase tracking-wider mb-4">
                  {f.subject}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs text-text-muted font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {f.exp} Academic Excellence
                </div>
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
