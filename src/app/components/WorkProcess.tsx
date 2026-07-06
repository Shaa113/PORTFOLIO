import { motion } from "motion/react";

const experiences = [
  {
    role: "Lead Developer",
    org: "Sankalp",
    type: "Experience",
    description: "Led development of key product features, coordinating implementation across the full stack and driving technical decisions.",
    tags: ["Full Stack", "Leadership", "React.js", "Node.js"],
  },
  {
    role: "Full-Stack Developer",
    org: "Vexraa",
    type: "Experience",
    description: "Built and maintained full-stack features for a production application, working across frontend and backend with a focus on clean, scalable code.",
    tags: ["React.js", "Node.js", "PostgreSQL", "REST API"],
  },
  {
    role: "Research Co-head",
    org: "IEEE-WIE",
    type: "Leadership",
    description: "Co-led research initiatives at the IEEE Women in Engineering student chapter, organizing events and driving knowledge-sharing across disciplines.",
    tags: ["Research", "Leadership", "IEEE"],
  },
  {
    role: "Research Co-head",
    org: "CLTI",
    type: "Leadership",
    description: "Co-head at the Centre of Law Technology & Innovation — exploring the intersection of technology and legal frameworks through research and collaboration.",
    tags: ["Research", "Law Tech", "Innovation"],
  },
];

export function WorkProcess() {
  return (
    <div className="relative bg-transparent py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#f0e8dc]/[0.06] section-draw-line" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#f0e8dc]/[0.06] section-draw-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em] mb-4">Experience & Roles</p>
          <h2
            className="font-light text-[#f0e8dc] leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Where I've Worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#f0e8dc]/[0.06]" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.org}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative pl-10 py-10 border-b border-[#f0e8dc]/[0.06] hover:bg-white/5 transition-colors duration-400"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-[42px] w-2.5 h-2.5 rounded-full border border-[#c9a96e]/40 bg-black/50 group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/20 transition-all duration-300" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#c9a96e]/60 uppercase tracking-widest font-mono">{exp.type}</span>
                    </div>
                    <h3
                      className="text-[#f0e8dc] font-light mb-1 group-hover:text-[#c9a96e] transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem,3vw,2.2rem)" }}
                    >
                      {exp.role}
                      <span className="text-[#7a6f63]"> · {exp.org}</span>
                    </h3>
                    <p className="text-[#7a6f63] text-sm leading-relaxed max-w-xl mt-3">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:justify-end md:max-w-[220px]">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs text-[#7a6f63] border border-[#f0e8dc]/[0.07] rounded-sm font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
