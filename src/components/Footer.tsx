import Link from "next/link";

const footerLinks = {
  "QUICK LINKS": [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  "LEGAL": [
    { label: "Privacy Policy", href: "/faq" },
    { label: "Terms of Service", href: "/faq" },
    { label: "Cookie Policy", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo.png"
                alt="Challenger Classes Logo"
                className="w-12 h-12 object-contain rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <span
                className="text-2xl font-black text-white italic uppercase tracking-tighter"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Challenger <span className="text-xl ">Classes</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Empowering students through rigorous academic coaching and modern learning methods in Nalasopara East since 2014.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="https://www.youtube.com/@ChallengersClasses"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#192F6B] transition-colors"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/officialchallengersclasses/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#192F6B] transition-colors"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073z" /><circle cx="12" cy="12" r="5.838" /><circle cx="18.406" cy="5.594" r="1.44" /></svg>
              </a>
              <a
                href="https://t.me/challengerClasses"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#192F6B] transition-colors"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 8.146l-1.847 8.706c-.14.633-.516.789-1.047.492l-2.812-2.073-1.357 1.305c-.15.15-.276.276-.566.276l.202-2.863 5.211-4.707c.227-.202-.049-.314-.351-.112l-6.441 4.055-2.774-.867c-.604-.189-.616-.604.126-.894l10.835-4.175c.502-.183.941.117.761.892z" /></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-widest text-[#64748B] mb-8">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white hover:text-[#192F6B] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold tracking-widest text-[#64748B] mb-8">
              NEWSLETTER
            </h4>
            <p className="text-sm text-gray-400 mb-6">
              Stay updated with academic schedules &amp; scholarship news.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#1E293B] border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#192F6B] outline-none transition-all"
              />
              <button className="bg-[#192F6B] hover:bg-[#192F6B]/80 text-white font-bold py-3 rounded-lg text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">
            © 2026 Challenger's Classes
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 tracking-widest uppercase">
            <span className="normal-case">
              made with love by{" "}
              <Link
                href="https://github.com/sumitc0de"
                target="_blank"
                className="hover:text-[#192F6B] transition-colors"
              >
                sumitc0de
              </Link>
            </span>
            <span>Version 2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
