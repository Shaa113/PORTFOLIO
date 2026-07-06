import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Career Genie",
    category: "Platform · AI Career Assistant",
    year: "2024",
    description:
      "An intelligent career assistant platform designed to streamline job discovery and professional growth using AI-driven insights and personalized recommendations.",
    tags: ["React.js", "Next.js", "Node.js", "AI", "Tailwind CSS"],
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4MTc3OTQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://career-genie-beige.vercel.app/",
    accent: "#9eb8c9",
  },
  {
    id: 2,
    number: "02",
    title: "RUMI",
    category: "Platform · Flatmate Matching",
    year: "2023",
    description:
      "A smart flatmate matching platform that connects compatible roommates using lifestyle-based compatibility scoring and verified profiles — turning the stressful search into a trusted, data-driven process.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Flask"],
    imageUrl:
      "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjByb29tbWF0ZXMlMjBsaXZpbmclMjBzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3ODE3Nzk0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://rumi-platform.vercel.app/",
    accent: "#c9a96e",
  },
];

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "center center"],
  });

  const opacity = useTransform(cardProgress, [0, 0.5], [0, 1]);
  const y = useTransform(cardProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className="relative w-full max-w-5xl mx-auto mb-16 last:mb-0"
    >
      <div className="relative group rounded-[2px] overflow-hidden border border-[#f0e8dc]/[0.07] hover:border-[#c9a96e]/30 transition-all duration-700 bg-black/40 backdrop-blur-sm flex flex-col md:flex-row min-h-[400px]">
        {/* Image */}
        <div className="relative h-[300px] md:h-auto md:w-1/2 overflow-hidden shrink-0">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

          <div
            className="absolute top-5 left-5 text-[5rem] font-black leading-none select-none pointer-events-none text-white/[0.06]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {project.number}
          </div>

          <span className="absolute top-5 right-5 text-xs font-mono text-[#c9a96e]/70 border border-[#c9a96e]/20 px-3 py-1 rounded-sm bg-black/50 backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        {/* Text content */}
        <div className="p-8 md:p-10 space-y-6 flex flex-col justify-center flex-grow">
          <div>
            <p className="text-[#c9a96e]/70 text-[0.65rem] uppercase tracking-[0.25em] mb-3">
              {project.category}
            </p>
            <h3
              className="font-light text-[#f0e8dc] group-hover:italic transition-all duration-400 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              }}
            >
              {project.title}
            </h3>
          </div>

          <p className="text-[#7a6f63] text-[0.95rem] leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-[0.65rem] text-[#f0e8dc]/50 border border-[#f0e8dc]/[0.07] rounded-sm font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-5 mt-auto border-t border-[#f0e8dc]/[0.05]">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#f0e8dc] text-xs font-semibold uppercase tracking-widest hover:text-[#c9a96e] transition-colors group/link"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              View Project
              <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </motion.a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#7a6f63] hover:text-[#f0e8dc] text-xs transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectShowcase() {
  return (
    <div id="projects-inner" className="relative bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#f0e8dc]/[0.06] section-draw-line" />

      {/* ── Static header ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em] mb-4">
              Selected Work
            </p>
            <h2
              className="font-light text-[#f0e8dc] leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem,7vw,6rem)",
              }}
            >
              Projects
            </h2>
          </div>
          <p className="text-[#7a6f63] max-w-xs text-sm leading-relaxed">
            Products I've designed, engineered, and shipped — each one a craft
            exercise.
          </p>
        </div>
      </div>

      {/* ── Vertical list ────────────────────────────────────────────────────── */}
      <div className="px-6 lg:px-12 pb-28">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}

        {/* End card — GitHub CTA */}
        <div className="max-w-5xl mx-auto mt-20">
          <motion.div
            className="flex flex-col items-center justify-center gap-6 border border-[#f0e8dc]/[0.07] rounded-[2px] bg-black/20 backdrop-blur-sm p-10 py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[#f0e8dc] font-light text-center leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              More on GitHub
            </p>
            <p className="text-[#7a6f63] text-sm text-center leading-relaxed max-w-[240px]">
              Explore all my open source projects and experiments.
            </p>
            <motion.a
              href="https://github.com/Shaa113"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[#c9a96e]/30 text-[#c9a96e] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#c9a96e]/10 transition-all duration-300"
              whileHover={{ scale: 1.04, x: 3 }}
            >
              <Github className="h-4 w-4" />
              github.com/Shaa113
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
