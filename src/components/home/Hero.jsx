// // components/Hero.jsx
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function Hero({ title, subtitle, videoSrc }) {
//   // CTA & stats definitions (icons: replace paths as needed)
//   const ctas = [
//     {
//       label: "View Our Portfolio",
//       href: "#portfolio",
//       variant: "ghost",
//       icon: "/arrow.png", // arrow PNG for this button
//     },
//     { label: "Submit Your Pitch", href: "#pitch", variant: "primary" },
//   ];

//   const stats = [
//     {
//       id: "aum",
//       label: "Assets Under Management",
//       // animate to 500 => render as "500M+"
//       endValue: 500,
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

//   // animated values state
//   const [counts, setCounts] = useState(
//     stats.reduce((acc, s) => ({ ...acc, [s.id]: 1 }), {})
//   );

//   // Animate helper using requestAnimationFrame
//   const rafRef = useRef({});
//   useEffect(() => {
//     // single animation driver for all stats
//     const duration = 1500; // ms (tweak if you want slower/faster)
//     const start = performance.now();

//     function animate(now) {
//       const t = Math.min(1, (now - start) / duration);
//       // easeOut cubic
//       const ease = 1 - Math.pow(1 - t, 3);

//       const next = {};
//       stats.forEach((s) => {
//         const from = 1;
//         const to = s.endValue;
//         const value = from + (to - from) * ease;
//         next[s.id] = value;
//       });

//       setCounts((prev) => ({ ...prev, ...next }));

//       if (t < 1) {
//         rafRef.current.id = requestAnimationFrame(animate);
//       } else {
//         // ensure final exact values after animation ends
//         const final = {};
//         stats.forEach((s) => (final[s.id] = s.endValue));
//         setCounts((prev) => ({ ...prev, ...final }));
//       }
//     }

//     rafRef.current.id = requestAnimationFrame(animate);

//     return () => {
//       if (rafRef.current.id) cancelAnimationFrame(rafRef.current.id);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // run once on mount

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
//       <div className="absolute inset-0 bg-gradient-to-bottom from-black/60 via-black/30 to-black/70" />

//       {/* center content - vertically centered */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center min-h-screen flex flex-col justify-center items-center mt-10">
//         <p className="text-sm text-slate-200/70 mb-4 tracking-widest uppercase">
//           Empowering Innovation Since 2015
//         </p>

//         <h1
//           className="text-white font-serif font-bold leading-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
//           style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
//         >
//           {title}
//         </h1>

//         <p className="mt-6 max-w-2xl mx-auto text-slate-200/80 text-lg">
//           {subtitle}
//         </p>

//         {/* CTAs */}
//         <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
//           {ctas.map((c, i) => {
//             const isPrimary = c.variant === "primary";
//             return (
//               <a
//                 key={i}
//                 href={c.href}
//                 className={`inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium transition-shadow gap-3 ${
//                   isPrimary
//                     ? "bg-slate-800/80 border border-slate-200/10 text-white shadow-lg hover:shadow-xl"
//                     : "bg-white/90 text-slate-900 hover:bg-white"
//                 }`}
//                 aria-label={c.label}
//               >
//                 <span>{c.label}</span>
//                 {/* optional icon image (arrow) */}
//                 {c.icon && (
//                   <Image
//                     src={c.icon}
//                     alt={`${c.label} icon`}
//                     width={16}
//                     height={16}
//                     className="inline-block"
//                   />
//                 )}
//               </a>
//             );
//           })}
//         </div>

//         {/* small stats cards */}
//         <div className="mt-10 mx-auto flex flex-wrap gap-4 items-stretch justify-center">
//           {stats.map((s, i) => {
//             // current numeric value
//             const raw = counts[s.id] ?? 1;
//             const display = s.format ? s.format(raw) : Math.round(raw);
//             return (
//               <div
//                 key={i}
//                 className="backdrop-blur-md bg-white/5 border border-white/6 rounded-xl px-6 py-4 min-w-[220px] text-left flex items-center gap-4"
//               >
//                 {/* icon */}
//                 {s.icon && (
//                   <div className="shrink-0 w-10 h-10 rounded-full bg-white/6 flex items-center justify-center">
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
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-top from-black to-transparent pointer-events-none" />
//     </header>
//   );
// }
// components/Hero.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  videoSrc, // replace with your video path
}) {
  // CTA definitions (arrow icon for first button)
  const ctas = [
    {
      label: "View Our Portfolio",
      href: "#portfolio",
      variant: "ghost",
      icon: "/arrow.png", // place in /public/icons/
    },
    {
      label: "Submit Your Pitch",
      href: "#pitch",
      variant: "primary",
    },
  ];

  // Stats with icons and formatting
  const stats = [
    {
      id: "aum",
      label: "Assets Under Management",
      endValue: 500, // animate 1 -> 500 then displayed as 500M+
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

  // state for animated counts
  const [counts, setCounts] = useState(
    stats.reduce((acc, s) => ({ ...acc, [s.id]: 1 }), {})
  );

  const rafRef = useRef(null);

  useEffect(() => {
    // animate counts only once on mount
    const duration = 1500; // ms
    const start = performance.now();

    function animate(now) {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic

      const next = {};
      stats.forEach((s) => {
        const from = 1;
        const to = s.endValue;
        next[s.id] = from + (to - from) * ease;
      });

      setCounts((prev) => ({ ...prev, ...next }));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // final exact values
        const final = {};
        stats.forEach((s) => (final[s.id] = s.endValue));
        setCounts((prev) => ({ ...prev, ...final }));
      }
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="relative h-screen min-h-[680px] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* dark overlay for contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />

      {/* center content - vertically centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center min-h-screen flex flex-col justify-center items-center">
        <p className="text-sm text-slate-200/70 mb-4 tracking-widest uppercase border rounded p-1 px-5">
          Empowering Innovation Since 2015
        </p>

        <h1
          className="text-white font-serif font-bold leading-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
          style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
        >
          {title}
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-slate-200/80 text-lg">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {ctas.map((c, i) => {
            const isPrimary = c.variant === "primary";
            return (
              <a
                key={i}
                href={c.href}
                className={`holo relative inline-flex items-center px-5 py-2.5 rounded-md text-sm font-medium transition-shadow gap-3 select-none ${
                  isPrimary
                    ? "bg-slate-800/80 border border-slate-200/10 text-white shadow-lg"
                    : "bg-white/90 text-slate-900"
                }`}
                aria-label={c.label}
              >
                <span>{c.label}</span>

                {/* arrow icon (if present) */}
                {c.icon && (
                  // Next/Image optimizes and needs valid width/height
                  <Image
                    src={c.icon}
                    alt={`${c.label} icon`}
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* small stats cards */}
        <div className="mt-10 mx-auto flex flex-wrap gap-4 items-stretch justify-center">
          {stats.map((s, i) => {
            const raw = counts[s.id] ?? 1;
            const display = s.format ? s.format(raw) : Math.round(raw);
            return (
              <div
                key={i}
                className="holo backdrop-blur-md bg-white/5 border border-white/6 rounded-xl px-6 py-4 min-w-[220px] text-left flex items-center gap-4 relative"
              >
                {/* icon circle */}
                {s.icon && (
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white/6 flex items-center justify-center">
                    <Image
                      src={s.icon}
                      alt={`${s.label} icon`}
                      width={28}
                      height={28}
                    />
                  </div>
                )}

                <div>
                  <div className="text-sm text-slate-200/70">{s.label}</div>
                  <div className="mt-2 text-white font-semibold text-lg">
                    {display}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </header>
  );
}
