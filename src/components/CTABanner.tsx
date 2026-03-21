import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to Challenge Your Limits?",
  subtitle = "Join the most prestigious coaching institute in Nalasopara East. Book a free demo class today and experience the difference.",
  primaryLabel = "Book Free Demo",
  primaryHref = "/contact",
  secondaryLabel = "Contact Admission",
  secondaryHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary-light to-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primaryHref}
              className="px-8 py-3.5 bg-white text-[#192F6B] font-semibold rounded-full hover:shadow-lg hover:shadow-white/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
