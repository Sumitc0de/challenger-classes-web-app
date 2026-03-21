import Link from "next/link";

interface CourseCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export default function CourseCard({
  icon,
  title,
  description,
  features,
  href = "/courses",
}: CourseCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-border hover:border-gradient-start/30 transition-all duration-500 hover:-translate-y-1">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gradient-start/10 to-gradient-end/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title & Description */}
      <h3
        className="text-xl font-bold text-primary mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed mb-5">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm text-text-muted"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#192F6B] shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-gradient-start hover:text-gradient-end transition-colors"
      >
        Explore Syllabus
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}
