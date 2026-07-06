import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { category: "Languages", items: ["JavaScript", "Python", "Java", "C / C++", "SQL", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React.js", "Node.js", "Flask"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git & GitHub", "Figma", "Postman", "VS Code", "REST API", "Canva"] },
  { category: "CS Fundamentals", items: ["Data Structures & Algorithms", "OOP Concepts"] },
];

const education = [
  {
    institution: "Bennett University",
    detail: "School of Computer Science and Engineering",
    sub: "Specialization in Fullstack · CGPA 8.38",
    period: "2024 – 2028",
  },
  {
    institution: "Sir Padampat Singhania",
    detail: "Senior Secondary",
    sub: "",
    period: "2022 – 2024",
  },
];

export function About() {
  return (
    <div className="relative bg-transparent py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#f0e8dc]/[0.06] section-draw-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em] mb-4">About</p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f0e8dc] leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20">
          {/* Left — bio + education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-12"
          >
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              containerClassName="my-0"
              textClassName="text-[#7a6f63] !text-lg !leading-relaxed !font-normal"
            >
              I'm a second-year full-stack development student at Bennett University, building real products and learning fast. I enjoy working across the stack — from designing APIs to crafting smooth UI experiences. Currently exploring AI integrations and how they can make products smarter.
            </ScrollReveal>

            {/* Education */}
            <div>
              <p className="text-[#c9a96e] text-xs uppercase tracking-[0.3em] mb-6">Education</p>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex justify-between items-start gap-4 py-4 border-b border-[#f0e8dc]/[0.06]"
                  >
                    <div>
                      <p className="text-[#f0e8dc] font-medium text-sm">{edu.institution}</p>
                      <p className="text-[#7a6f63] text-sm mt-0.5">{edu.detail}</p>
                      {edu.sub && <p className="text-[#c9a96e]/70 text-xs mt-1">{edu.sub}</p>}
                    </div>
                    <span className="text-[#7a6f63] text-xs font-mono shrink-0">{edu.period}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Roles */}
            <div>
              <p className="text-[#c9a96e] text-xs uppercase tracking-[0.3em] mb-6">Positions of Responsibility</p>
              <div className="space-y-3">
                {[
                  "Research Co-head — IEEE-WIE",
                  "Research Co-head — CLTI (Centre of Law Technology & Innovation)",
                ].map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-[#7a6f63] text-sm"
                  >
                    <span className="text-[#c9a96e] mt-1 text-xs">▹</span>
                    {role}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <p className="text-[#7a6f63] text-xs uppercase tracking-widest mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs text-[#f0e8dc]/80 border border-[#f0e8dc]/[0.08] rounded-sm bg-[#161210] hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
