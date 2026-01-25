import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* =======================
   SKILL DATA
======================= */
const SKILLS = {
  frontend: [
    { name: "React", level: 60 },
    { name: "Redux", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 80 },
  ],
  backend: [
    { name: "Java", level: 80 },
    { name: "Spring Boot", level: 80 },
    { name: "DSA", level: 80 },
    { name: "MySQL", level: 75 },
  ],
};

/* =======================
   AUTO COUNT HOOK
======================= */
function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return value;
}

/* =======================
   SKILL CARD
======================= */
function SkillCard({ name, level, delay }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const count = useCountUp(level);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="
        relative rounded-2xl p-6
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_0_35px_rgba(99,102,241,0.4)]
        hover:shadow-[0_0_70px_rgba(99,102,241,0.9)]
        transition-shadow
        flex flex-col items-center justify-center
      "
    >
      {/* NEON GLOW */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-25 blur-xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* CIRCLE */}
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          <svg width="120" height="120">
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#6366f1"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              strokeLinecap="round"
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>

          {/* CENTERED % */}
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-indigo-400">
            {count}%
          </span>
        </div>

        {/* NAME */}
        <p className="mt-4 font-semibold text-white text-center">
          {name}
        </p>
      </div>
    </motion.div>
  );
}

/* =======================
   MAIN SKILLS SECTION
======================= */
export default function Skills() {
  const [tab, setTab] = useState("frontend");

  return (
    <section
      id="skills"
      className="py-28 bg-gradient-to-b from-gray-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-16">
          {["frontend", "backend"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2 rounded-full font-semibold transition-all
                ${
                  tab === t
                    ? "bg-indigo-600 text-white shadow-[0_0_30px_rgba(99,102,241,0.9)]"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }
              `}
            >
              {t === "frontend" ? "Frontend" : "Backend"}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 perspective-[1000px]">
          {SKILLS[tab].map((skill, i) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
