// components/Navbar.jsx
"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "portfolio", label: "Portfolio" },
    { id: "philosophy", label: "Our Philosophy" },
    { id: "focus", label: "Investment Focus" },
    { id: "team", label: "Team" },
    // contact maps to button; kept for mobile menu too
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-full md:px-14 lg:px-25 px-3 sm:h-25 h:15 flex items-center justify-between relative">
        {/* Logo (left) */}
        <div className="flex items-center gap-2">
          <Image
            src="/vcel-logo.jpg"
            alt="Vcel-Logo"
            width={130}
            height={100}
            className="object-cover"
          />
        </div>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-8">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.id} className="md:text-[0.8rem] lg:text-[1.1rem]">
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={400}
                  activeClass="text-[#104787] font-semibold text-[1.2rem]"
                  className="cursor-pointer text-[#364153] hover:text-[#104787] transition-colors"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button (right) */}
        <div className="hidden md:flex items-center ">
          <div className="hover-underline">
            {" "}
            <ScrollLink
              to="contact "
              spy={true}
              smooth={true}
              offset={-64}
              duration={400}
              className="inline-block px-4 py-2 text-sm rounded-md bg-[#104787] text-white shadow-sm cursor-pointer hover:bg-[#202427] transition-colors"
              activeClass="ring-2 ring-gray-500 "
            >
              Contact Us
            </ScrollLink>
          </div>
        </div>

        {/* Mobile toggle (right) */}
        <button
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
        >
          <span
            className={`text-2xl transition-transform duration-300 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          >
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden origin-top overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-[400px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-sm px-4 py-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id} className="text-base">
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={() => setOpen(false)}
                  activeClass="text-[#104787] font-semibold text-[1rem]"
                  className=" block py-2 cursor-pointer text-[#364153] hover:text-[#104787] transition-colors"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                onClick={() => setOpen(false)}
                className="mt-2 inline-block w-max px-4 py-2 text-sm rounded-md bg-[#104787] text-white shadow-sm cursor-pointer"
                activeClass="ring-2 ring-gray-500"
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
