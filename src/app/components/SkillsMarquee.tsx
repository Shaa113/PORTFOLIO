import { motion } from "motion/react";

const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "React.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Flask", category: "Framework" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Java", category: "Language" },
  { name: "C / C++", category: "Language" },
  { name: "Git & GitHub", category: "Tool" },
  { name: "Figma", category: "Design" },
  { name: "REST API", category: "Practice" },
  { name: "SQL", category: "Language" },
  { name: "Postman", category: "Tool" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "DSA", category: "CS Core" },
  { name: "OOP", category: "CS Core" },
];

const doubled = [...skills, ...skills];

export function SkillsMarquee() {
  return (
    <div className="relative bg-transparent py-20 overflow-hidden border-y border-[#f0e8dc]/[0.05]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-4 border border-[#f0e8dc]/[0.07] bg-[#161210] rounded-sm shrink-0 group hover:border-[#c9a96e]/30 transition-all duration-300"
          >
            <span className="w-1 h-1 rounded-full bg-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-colors" />
            <span className="text-[#f0e8dc]/70 text-sm group-hover:text-[#f0e8dc] transition-colors whitespace-nowrap">
              {skill.name}
            </span>
            <span className="text-[#7a6f63] text-xs uppercase tracking-wider">{skill.category}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
