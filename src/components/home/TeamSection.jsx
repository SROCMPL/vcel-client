// TeamSectionComponent.jsx
// Tailwind + React component (single-file).
// Uses a local image URL: /mnt/data/Team.png (replace with your real portrait URLs from backend)
"use client";
import React from "react";
import { motion } from "framer-motion";
export default function TeamSection() {
  // Dummy data (replace with backend fetch). Each member should have an `image` URL.
  const team = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Managing Partner",
      bio: "15+ years in venture capital with focus on enterprise software and AI. Former VP at Sequoia Capital.",
      tags: ["Enterprise SaaS", "AI/ML"],
      image: "/Team.jpg",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "General Partner",
      bio: "Former founder and CEO of FinTech unicorn. Led company from seed to $2B+ valuation.",
      tags: ["FinTech", "Blockchain"],
      image: "/Team.jpg",
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Principal",
      bio: "Specialized in healthcare innovation and digital therapeutics. MD from Johns Hopkins.",
      tags: ["HealthTech", "Biotech"],
      image: "/Team.jpg",
    },
    {
      id: 4,
      name: "David Park",
      role: "Venture Partner",
      bio: "Expert in climate tech and sustainable energy solutions. Former Director at Tesla Energy Division.",
      tags: ["CleanTech", "Energy"],
      image: "/Team.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="team">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Meet Our Team</h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Experienced investors and operators dedicated to helping founders
          succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <motion.article
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            key={member.id}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center holo"
          >
            {/* square image on top */}
            <div className="w-48 h-48 rounded-xl overflow-hidden mb-4 shadow-md group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                draggable={false}
              />
            </div>

            <h3 className="text-lg font-medium">{member.name}</h3>
            <p className="text-indigo-600 text-sm mt-1">{member.role}</p>

            <p className="text-gray-500 text-sm mt-4">{member.bio}</p>

            <div className="flex gap-2 flex-wrap justify-center mt-4">
              {member.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-gray-100 rounded-full border border-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* social buttons (placeholder) */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label={`LinkedIn ${member.name}`}
                className="w-9 h-9 rounded-full bg-white border flex items-center justify-center shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-13h4v2" />
                  <rect x="2" y="9" width="4" height="13" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="#"
                aria-label={`Twitter ${member.name}`}
                className="w-9 h-9 rounded-full bg-white border flex items-center justify-center shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.1 9.1 0 0 1-2.88 1.1A4.52 4.52 0 0 0 12.07 4v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label={`Email ${member.name}`}
                className="w-9 h-9 rounded-full bg-white border flex items-center justify-center shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/*
        Notes:
        - To load real data from your backend, replace the constant `team` above with a fetch in useEffect:

          useEffect(() => {
            fetch('/api/team')
              .then(r => r.json())
              .then(data => setTeam(data))
          }, [])

        - Make sure your backend returns image URLs (absolute or relative). Replace "/mnt/data/Team.png" with those URLs.
        - This component uses Tailwind utility classes. Keep Tailwind configured in your project.
      */}
    </section>
  );
}
