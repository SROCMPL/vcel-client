"use client";

import PortfolioCard from "./PortfolioCard";


export default function PortfolioSection() {
  const dummyData = [
    {
      id: 1,
      name: "TechFlow AI",
      sector: "Artificial Intelligence",
      stage: "Series B",
      description: "Revolutionary AI platform transforming enterprise workflows",
      raised: "$45M",
      growth: "+300%",
      
    },
    {
      id: 2,
      name: "CloudScale",
      sector: "Cloud Infrastructure",
      stage: "Series C",
      description: "Next-gen cloud infrastructure for modern apps",
      raised: "$80M",
      growth: "+250%",
      
    },
    {
      id: 3,
      name: "HealthSync",
      sector: "HealthTech",
      stage: "Series A",
      description: "Digital platform connecting patients & providers",
      raised: "$25M",
      growth: "+180%",
      
    },
    {
      id: 4,
      name: "FinFlow",
      sector: "FinTech",
      stage: "Series B",
      description: "Innovative payment tools for the digital economy",
      raised: "$50M",
      growth: "+220%",
     
    },
    {
      id: 5,
      name: "GreenEnergy Pro",
      sector: "Clean Tech",
      stage: "Seed",
      description: "Sustainable energy solutions for home & commercial",
      raised: "$12M",
      growth: "+150%",
     
    },
    {
      id: 6,
      name: "DataVault",
      sector: "Cybersecurity",
      stage: "Series A",
      description: "Privacy-first data protection for enterprises",
      raised: "$30M",
      growth: "+200%",
     
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-linear-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="inline-block bg-[rgba(29,96,229,0.1)] text-[#104787] px-4 py-1 rounded-full text-2xl font-semibold shadow-sm">
          Our Portfolio
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-slate-800">
          Exceptional Companies We Back
        </h2>
        <p className="text-base text-slate-800 mt-2 max-w-2xl mx-auto">
          We're proud to back exceptional founders building the next generation of transformative companies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {dummyData.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
