

// // components/ThirdSectionStats.jsx
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// /* ---------------- utilities ---------------- */
// function easeOutCubic(t) {
//   return 1 - Math.pow(1 - t, 3);
// }

// function parseFormattedValue(val) {
//   if (val == null) return { num: 0, unit: "" };
//   const s = String(val).trim();
//   const m = s.match(/^([\d,.]+)([a-zA-Z]*)$/);
//   if (!m) return { num: NaN, unit: s };
//   const numPart = m[1].replace(/,/g, "");
//   const unit = m[2] || "";
//   const num = parseFloat(numPart);
//   return { num: Number.isFinite(num) ? num : NaN, unit };
// }

// function useAnimatedNumber(target, duration = 1400, start = false) {
//   const [value, setValue] = useState(0);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     if (!start) return;
//     let startTs = null;
//     const from = 0;
//     const to = Number(target) || 0;

//     function step(ts) {
//       if (!startTs) startTs = ts;
//       const elapsed = ts - startTs;
//       const progress = Math.min(elapsed / duration, 1);
//       const current = from + (to - from) * easeOutCubic(progress);

//       if (to < 1 && to !== 0) {
//         setValue(Number(current.toFixed(1)));
//       } else {
//         setValue(Math.floor(current));
//       }

//       if (progress < 1) rafRef.current = requestAnimationFrame(step);
//     }

//     rafRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, [target, duration, start]);

//   return value;
// }

// /* ---------------- default gradients & icons ----------------
//    - This array determines the gradient + icon for each card by index.
//    - Add / reorder entries if you have more cards.
// */
// const STYLE_MAP = [
//   {
//     gradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
//     // simple SVG icon (wallet/chart)
//     icon: "/Vector.png",
//   },
//   {
//     gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
//     // network / nodes icon
//     icon: "/pc.png",
//   },
//   {
//     gradient: "bg-gradient-to-br from-green-400 to-green-600",
//     // trophy / success icon
//     icon: "/success.png",
//   },
//   {
//     gradient: "bg-gradient-to-br from-orange-400 to-amber-500",
//     // rocket / growth icon
//     icon: "/unicorn-1.png",
//   },
// ];

// /* ---------------- main component ---------------- */
// export default function ThirdSectionStats({ apiEndpoint = null }) {
//   const [stats, setStats] = useState([
//     { id: 1, value: "500M", label: "Assets Under Management" },
//     { id: 2, value: "40", label: "Portfolio Companies" },
//     { id: 3, value: "12", label: "Successful Exits" },
//     { id: 4, value: "8", label: "Unicorns Created" },
//   ]);

//   const sectionRef = useRef(null);
//   const [startCount, setStartCount] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setStartCount(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Optional: fetch backend data (expects { stats: [{ id, value, label }, ...] })
//   useEffect(() => {
//     if (!apiEndpoint) return;
//     let mounted = true;
//     async function fetchData() {
//       try {
//         const res = await fetch(apiEndpoint);
//         if (!res.ok) throw new Error("fetch failed");
//         const json = await res.json();
//         if (mounted && Array.isArray(json.stats)) setStats(json.stats);
//       } catch (err) {
//         console.error("API error:", err);
//       }
//     }
//     fetchData();
//     return () => (mounted = false);
//   }, [apiEndpoint]);

//   return (
//     <section ref={sectionRef} className="w-full py-12 md:py-18">
//       <div className="bg-[linear-gradient(180deg,rgba(180,180,180,1)_0%,rgba(16,71,135,0.71)_50%,rgba(16,71,135,1)_100%)]">
//         <motion.div 
//         initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: { staggerChildren: 0.18 },
//             },
//           }}
//         className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-10">
//             {stats.map((s, index) => (
//               <StatCard
//                 key={s.id}
//                 stat={s}
//                 index={index}
//                 animate={startCount}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- StatCard ----------------
//    - picks gradient & icon from STYLE_MAP by index (wraps around if more cards)
//    - keeps backend responsibility only for `value` and `label`
// */
// function StatCard({ stat, index = 0, animate = false }) {
//   const raw = String(stat.value ?? "");
//   const { num, unit } = parseFormattedValue(raw);
//   const animated = useAnimatedNumber(
//     Number.isFinite(num) ? num : 0,
//     1400,
//     animate
//   );

//   function formatAnimated(n) {
//     if (!Number.isFinite(n)) return raw;
//     if (n < 1 && n !== 0) return n.toFixed(1);
//     return n.toLocaleString();
//   }

//   const shown = Number.isFinite(num)
//     ? `${formatAnimated(animated)}${unit}+`
//     : `${raw}+`;

//   const style = STYLE_MAP[index % STYLE_MAP.length];

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className={`p-4 rounded-xl shadow-xl mb-4 ${style.gradient} flex items-center justify-center`}
//         aria-hidden
//       >
//         {/* colored icon placed on top of gradient */}
//         <div className="w-12 h-12 flex items-center justify-center">
//           <img src={style.icon} alt="" />
//         </div>
//       </div>

//       <div className="text-white font-semibold text-3xl md:text-4xl leading-none">
//         {shown}
//       </div>
//       <div className="text-white/80 mt-2 text-sm md:text-base">
//         {stat.label}
//       </div>
//     </div>
//   );
// }


// components/ThirdSectionStats.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ---------------- utilities ---------------- */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function parseFormattedValue(val) {
  if (val == null) return { num: 0, unit: "" };
  const s = String(val).trim();
  const m = s.match(/^([\d,.]+)([a-zA-Z]*)$/);
  if (!m) return { num: NaN, unit: s };
  const numPart = m[1].replace(/,/g, "");
  const unit = m[2] || "";
  const num = parseFloat(numPart);
  return { num: Number.isFinite(num) ? num : NaN, unit };
}

function useAnimatedNumber(target, duration = 1400, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTs = null;
    const from = 0;
    const to = Number(target) || 0;

    function step(ts) {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs;
      const progress = Math.min(elapsed / duration, 1);
      const current = from + (to - from) * easeOutCubic(progress);

      if (to < 1 && to !== 0) {
        setValue(Number(current.toFixed(1)));
      } else {
        setValue(Math.floor(current));
      }

      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, start]);

  return value;
}

/* ---------------- default gradients & icons ---------------- */
const STYLE_MAP = [
  {
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
    icon: "/Vector.png",
  },
  {
    gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
    icon: "/pc.png",
  },
  {
    gradient: "bg-gradient-to-br from-green-400 to-green-600",
    icon: "/success.png",
  },
  {
    gradient: "bg-gradient-to-br from-orange-400 to-amber-500",
    icon: "/unicorn-1.png",
  },
];

/* ---------------- card animation variant ---------------- */
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- main component ---------------- */
export default function ThirdSectionStats({ apiEndpoint = null }) {
  const [stats, setStats] = useState([
    { id: 1, value: "500M", label: "Assets Under Management" },
    { id: 2, value: "40", label: "Portfolio Companies" },
    { id: 3, value: "12", label: "Successful Exits" },
    { id: 4, value: "8", label: "Unicorns Created" },
  ]);

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  /* ----------- Repeatable Observer (fixed) ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setStartCount(true); // start animation
        } else {
          setStartCount(false); // reset when section leaves viewport
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ----------- API Fetch (no change) ---------- */
  useEffect(() => {
    if (!apiEndpoint) return;
    let mounted = true;
    async function fetchData() {
      try {
        const res = await fetch(apiEndpoint);
        if (!res.ok) throw new Error("fetch failed");
        const json = await res.json();
        if (mounted && Array.isArray(json.stats)) setStats(json.stats);
      } catch (err) {
        console.error("API error:", err);
      }
    }
    fetchData();
    return () => (mounted = false);
  }, [apiEndpoint]);

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-18">
      <div className="bg-[linear-gradient(180deg,rgba(180,180,180,1)_0%,rgba(16,71,135,0.71)_50%,rgba(16,71,135,1)_100%)]">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} // animation repeats
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-10">
            {stats.map((s, index) => (
              <StatCard
                key={s.id}
                stat={s}
                index={index}
                animate={startCount}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ---------------- StatCard ---------------- */
function StatCard({ stat, index = 0, animate = false }) {
  const raw = String(stat.value ?? "");
  const { num, unit } = parseFormattedValue(raw);
  const animated = useAnimatedNumber(
    Number.isFinite(num) ? num : 0,
    1400,
    animate
  );

  function formatAnimated(n) {
    if (!Number.isFinite(n)) return raw;
    if (n < 1 && n !== 0) return n.toFixed(1);
    return n.toLocaleString();
  }

  const shown = Number.isFinite(num)
    ? `${formatAnimated(animated)}${unit}+`
    : `${raw}+`;

  const style = STYLE_MAP[index % STYLE_MAP.length];

  return (
    <motion.div variants={cardVariant} className="flex flex-col items-center">
      <div
        className={`p-4 rounded-xl shadow-xl mb-4 ${style.gradient} flex items-center justify-center`}
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={style.icon} alt="" />
        </div>
      </div>

      <div className="text-white font-semibold text-3xl md:text-4xl leading-none">
        {shown}
      </div>

      <div className="text-white/80 mt-2 text-sm md:text-base">
        {stat.label}
      </div>
    </motion.div>
  );
}
