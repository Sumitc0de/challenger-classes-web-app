interface TestimonialCardProps {
  name: string;
  score: string;
  exam: string;
  year: string;
  quote: string;
  initials: string;
}

export default function TestimonialCard({
  name,
  score,
  exam,
  year,
  quote,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Avatar + Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center text-white text-lg font-bold">
          {initials}
        </div>
        <div>
          <h4 className="font-semibold text-primary">{name}</h4>
          <p className="text-xs text-text-muted">
            {exam} · {year}
          </p>
        </div>
        <span className="ml-auto text-xl font-bold text-[#192F6B]">
          {score}
        </span>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            fill="#F97316"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-text-muted leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}
