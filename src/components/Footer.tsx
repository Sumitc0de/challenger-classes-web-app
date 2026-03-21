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
                Challenger <span className="text-accent-orange">Classes</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Empowering students through rigorous academic coaching and modern learning methods in Nalasopara East since 2014.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-accent-orange transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="hover:text-accent-orange transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073z"/><circle cx="12" cy="12" r="5.838"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
              </a>
              <a href="#" className="hover:text-accent-orange transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102 0-4.209-.925-5.903-2.124L9 14.777l-.025-5.22L12 10.881l3.528 2.302c.983.673 2.112 1.341 3.528 1.341.67-.024.67-.976 0-1 0 0-2.102 0-4.209-.925-.112-.061-.21-.137-.308-.216l.044-3.132-3.111 2.031-2.924-1.928 3.528-2.302c.983-.673 2.112-1.341 3.528-1.341.67.024.67.976 0 1 0 0-2.102 0-4.209.925l.308.216-.044 3.132 2.302-1.503c.123-.081.259-.153.402-.213l.825-.347c.224-.094.468-.142.712-.142 1.104 0 2 1 2 2.04 0 .914-.528 1.684-1.281 1.952l-.029.01c-.114.03-.231.045-.349.045z"/></svg>
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
                      className="text-sm font-medium text-white hover:text-accent-orange transition-colors"
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
                className="bg-[#1E293B] border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent-orange outline-none transition-all"
              />
              <button className="bg-[#F97316] hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">
            © 2026 Challenger Classes Nalasopara East. Kinetic Scholarship System.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 tracking-widest uppercase">
            <span>Designed with Velocity, Kinetic</span>
            <span>Version 2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
