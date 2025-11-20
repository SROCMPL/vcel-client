// components/InvestmentFocus.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
export default function InvestmentFocus() {
  const [items] = useState([
    {
      id: 1,
      title: "Artificial Intelligence",
      subtitle: "Machine learning, NLP, and autonomous systems",
      icon: "/ai.png",
      gradient: "linear-gradient(135deg,#60a5fa,#2563eb)",
    },
    {
      id: 2,
      title: "Cloud & Infrastructure",
      subtitle: "Next-gen cloud platforms and developer tools",
      icon: "/ct.png",
      gradient: "linear-gradient(135deg,#ec4899,#8b5cf6)",
    },
    {
      id: 3,
      title: "HealthTech",
      subtitle: "Digital health, biotech, and medical devices",
      icon: "/ht.png",
      gradient: "linear-gradient(135deg,#f87171,#fb923c)",
    },
    {
      id: 4,
      title: "FinTech",
      subtitle: "Payment systems, blockchain, and financial services",
      icon: "/ft.png",
      gradient: "linear-gradient(135deg,#facc15,#f59e0b)",
    },
    {
      id: 5,
      title: "Clean Technology",
      subtitle: "Renewable energy and sustainability solutions",
      icon: "/ct.png",
      gradient: "linear-gradient(135deg,#4ade80,#059669)",
    },
    {
      id: 6,
      title: "Cybersecurity",
      subtitle: "Data protection and enterprise security",
      icon: "/cs.png",
      gradient: "linear-gradient(135deg,#a78bfa,#6366f1)",
    },
  ]);

  return (
    <section
      className="w-full py-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.75),rgba(16,71,135,1))]"
      id="focus"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
            Investment Focus
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            We invest in early to growth-stage companies across transformative
            sectors shaping tomorrow.
          </p>
          <div className="mx-auto mt-4 w-20 h-1 rounded bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card) => (
            <motion.article
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={card.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 text-center hover:-translate-y-1 transform transition holo"
            >
              {/* Square Icon Box (TOP) */}
              <div
                className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center overflow-hidden mb-4"
                style={{ background: card.gradient }}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-7 h-7 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              {/* Title (Middle) */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Subtitle (Bottom) */}
              <p className="text-sm text-gray-600">{card.subtitle}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
