// components/Footer.jsx
import React from "react";

const footerLinks = {
  "Quick Links": [
    { label: "About", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Investment Focus", href: "#" },
    { label: "Team", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "News", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="pt-16 pb-24 bg-[linear-gradient(135deg,#000000_0%,#0C3360_50%,#104787_83.14%)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column: logo + description + social */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-6">
              {/* Rounded white box with logo */}
              <div className="shrink-0 bg-white rounded-xl p-4 shadow-md w-24 h-24 flex items-center justify-center">
                {/* Use local image path provided */}
                <img
                  src="/vcel-logo.jpg"
                  alt="VCEL logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="text-slate-200 max-w-xl">
                <p className="text-sm leading-relaxed">
                  Empowering tomorrow's innovation today. Building the future
                  through strategic investments in transformative technologies.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  {/* round icon buttons */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/8 hover:bg-white/12 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-slate-100"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.6V24H.2zM8.98 8h4.4v2.2h.06c.61-1.12 2.1-2.3 4.32-2.3 4.62 0 5.48 3.04 5.48 6.98V24h-4.6v-7.8c0-1.86-.03-4.24-2.58-4.24-2.59 0-2.99 2.03-2.99 4.12V24h-4.6z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/8 hover:bg-white/12 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-slate-100"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.39 4.49A13.96 13.96 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.56 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.82 4.93 4.93 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 20.54a13.92 13.92 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21-.01-.42-.02-.63A9.98 9.98 0 0 0 24 4.56z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    aria-label="Email"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/8 hover:bg-white/12 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-slate-100"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 13.5L.25 5.5V20a2 2 0 0 0 2 2h19.5a2 2 0 0 0 2-2V5.5L12 13.5zM12 11L24 3H0l12 8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right columns: three groups */}
          <div className="lg:col-span-7">
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-3xl">
                <div className="grid grid-cols-3 gap-8">
                  {Object.entries(footerLinks).map(([heading, links]) => (
                    <div key={heading}>
                      <h3 className="text-sm font-semibold text-slate-100 mb-4">
                        {heading}
                      </h3>
                      <ul className="space-y-3">
                        {links.map((l) => (
                          <li key={l.label}>
                            <a
                              href={l.href}
                              className="text-sm text-slate-200/80 hover:text-white transition"
                            >
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Responsive: stack columns on small screens */}
            <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading}>
                  <h3 className="text-sm font-semibold text-slate-100 mb-3">
                    {heading}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-sm text-slate-200/80 hover:text-white transition"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-10">
          <div className="border-t border-slate-700/40"></div>
        </div>

        {/* bottom small text (if needed) */}
        <div className="mt-8 text-center text-slate-300 text-sm">
          © {new Date().getFullYear()} VCEL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
