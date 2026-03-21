interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-start mb-4">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-primary"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
