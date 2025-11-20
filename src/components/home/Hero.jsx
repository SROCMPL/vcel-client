// // components/Hero.jsx
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function Hero({
//   title,
//   subtitle,
//   videoSrc, // replace with your video path
// }) {
//   // CTA definitions (arrow icon for first button)
//   const ctas = [
//     {
//       label: "View Our Portfolio",
//       href: "#portfolio",
//       variant: "ghost",
//       icon: "/arrow.png", // place in /public/icons/
//     },
//     {
//       label: "Submit Your Pitch",
//       href: "#pitch",
//       variant: "primary",
//     },
//   ];

//   // Stats with icons and formatting
//   const stats = [
//     {
//       id: "aum",
//       label: "Assets Under Management",
//       endValue: 500, // animate 1 -> 500 then displayed as 500M+
//       icon: "/Vector.png",
//       format: (v) => `$${Math.round(v)}M+`,
//     },
//     {
//       id: "companies",
//       label: "Portfolio Companies",
//       endValue: 8,
//       icon: "/unicorn.png",
//       format: (v) => Math.round(v),
//     },
//     {
//       id: "exits",
//       label: "Successful Exits",
//       endValue: 12,
//       icon: "/success.png",
//       format: (v) => Math.round(v),
//     },
//   ];

//   // state for animated counts
//   const [counts, setCounts] = useState(
//     stats.reduce((acc, s) => ({ ...acc, [s.id]: 1 }), {})
//   );

//   const rafRef = useRef(null);

//   useEffect(() => {
//     // animate counts only once on mount
//     const duration = 1500; // ms
//     const start = performance.now();

//     function animate(now) {
//       const t = Math.min(1, (now - start) / duration);
//       const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic

//       const next = {};
//       stats.forEach((s) => {
//         const from = 1;
//         const to = s.endValue;
//         next[s.id] = from + (to - from) * ease;
//       });

//       setCounts((prev) => ({ ...prev, ...next }));

//       if (t < 1) {
//         rafRef.current = requestAnimationFrame(animate);
//       } else {
//         // final exact values
//         const final = {};
//         stats.forEach((s) => (final[s.id] = s.endValue));
//         setCounts((prev) => ({ ...prev, ...final }));
//       }
//     }

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <header className="relative h-screen min-h-[680px] overflow-hidden">
//       {/* Video background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src={videoSrc}
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* dark overlay for contrast */}
//       <div
//         id="philosophy"
//         className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70"
//       />

//       {/* center content - vertically centered */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-28">
//         <p className="text-sm text-slate-200/70 mb-4 tracking-widest uppercase border rounded p-1 px-5">
//           Empowering Innovation Since 2015
//         </p>

//         <h1
//           className="text-white font-serif font-bold leading-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
//           style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
//         >
//           {title}
//         </h1>

//         <p className="mt-6 max-w-2xl mx-auto text-slate-200/80 text-lg ">
//           {subtitle}
//         </p>

//         {/* CTAs */}
//         <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//           {ctas.map((c, i) => {
//             const isPrimary = c.variant === "primary";
//             return (
//               <a
//                 key={i}
//                 href={c.href}
//                 className={`hover-underline relative inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium transition-shadow gap-3 select-none ${
//                   isPrimary
//                     ? "bg-slate-800/80 border border-slate-200/10 text-white shadow-lg hover:bg-[#171718] hover:text-white transition-colors"
//                     : "bg-white/90 text-slate-900 hover:bg-[#171718] hover:text-white transition-colors "
//                 }`}
//                 aria-label={c.label}
//               >
//                 <span>{c.label}</span>

//                 {/* arrow icon (if present) */}
//                 {c.icon && (
//                   // Next/Image optimizes and needs valid width/height
//                   <Image
//                     src={c.icon}
//                     alt={`${c.label} icon`}
//                     width={18}
//                     height={18}
//                     className="inline-block ml-1 "
//                   />
//                 )}
//               </a>
//             );
//           })}
//         </div>

//         {/* small stats cards */}
//         <div className="mt-10 mx-auto flex flex-wrap gap-4 items-stretch justify-center">
//           {stats.map((s, i) => {
//             const raw = counts[s.id] ?? 1;
//             const display = s.format ? s.format(raw) : Math.round(raw);
//             return (
//               <div
//                 key={i}
//                 className="holo backdrop-blur-md bg-white/5 border border-white/6 rounded-xl px-6 py-4 min-w-[220px] text-left flex items-center gap-4 relative"
//               >
//                 {/* icon circle */}
//                 {s.icon && (
//                   <div className="shrink-0 w-12 h-12 rounded-full bg-white/6 flex items-center justify-center">
//                     <Image
//                       src={s.icon}
//                       alt={`${s.label} icon`}
//                       width={28}
//                       height={28}
//                     />
//                   </div>
//                 )}

//                 <div>
//                   <div className="text-sm text-slate-200/70">{s.label}</div>
//                   <div className="mt-2 text-white font-semibold text-lg">
//                     {display}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* subtle bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent pointer-events-none" />
//     </header>
//   );
// }
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ title, subtitle, videoSrc }) {
  const ctas = [
    {
      label: "View Our Portfolio",
      href: "#portfolio",
      variant: "ghost",
      icon: "/arrow.png",
    },
    {
      label: "Submit Your Pitch",
      href: "#pitch",
      variant: "primary",
    },
  ];

  const stats = [
    {
      id: "aum",
      label: "Assets Under Management",
      endValue: 500,
      icon: "/Vector.png",
      format: (v) => `$${Math.round(v)}M+`,
    },
    {
      id: "companies",
      label: "Portfolio Companies",
      endValue: 8,
      icon: "/unicorn.png",
      format: (v) => Math.round(v),
    },
    {
      id: "exits",
      label: "Successful Exits",
      endValue: 12,
      icon: "/success.png",
      format: (v) => Math.round(v),
    },
  ];

  const [counts, setCounts] = useState(
    stats.reduce((acc, s) => ({ ...acc, [s.id]: 1 }), {})
  );

  const rafRef = useRef(null);

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();

    function animate(now) {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);

      const next = {};
      stats.forEach((s) => {
        next[s.id] = 1 + (s.endValue - 1) * ease;
      });

      setCounts(next);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <header className="relative h-screen min-h-[680px] overflow-hidden" id="philosophy">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center min-h-screen flex flex-col justify-center items-center pt-24">

        {/* Small Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-[.7rem] sm:text-sm text-slate-200/70 mb-4 tracking-widest uppercase border rounded p-1 sm:px-5"
        >
          Empowering Innovation Since 2015
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white font-serif font-bold leading-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
          style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl mx-auto text-slate-200/80 text-lg"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {ctas.map((c, i) => {
            const isPrimary = c.variant === "primary";

            return (
              <motion.a
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                href={c.href}
                className={`hover-underline relative inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium transition-shadow gap-3 ${
                  isPrimary
                    ? "bg-slate-800/80 border border-slate-200/10 text-white shadow-lg hover:bg-[#171718]"
                    : "bg-white/90 text-slate-900 hover:bg-[#171718] hover:text-white"
                }`}
              >
                {c.label}
                {c.icon && (
                  <Image src={c.icon} width={16} height={16} alt="icon" className="inline-block ml-1" />
                )}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="mt-10 mx-auto flex flex-wrap gap-4 justify-center "
        >
          {stats.map((s, i) => {
            const display = s.format(counts[s.id]);

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-6 py-4 min-w-[220px] flex items-center gap-4 holo"
              >
                {s.icon && (
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Image src={s.icon} width={28} height={28} alt="icon" />
                  </div>
                )}

                <div>
                  <div className="text-sm text-slate-200/70">{s.label}</div>
                  <div className="mt-2 text-white text-lg font-semibold">
                    {display}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </header>
  );
}

