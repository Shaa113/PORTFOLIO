import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent z-10 w-full text-center px-6">
      {/* Brand logo top left */}
      <div className="absolute top-8 left-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-[#f4b797] text-black font-bold flex items-center justify-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>D</div>
        <span className="text-white font-medium text-sm tracking-widest uppercase">Disha</span>
      </div>

      {/* Top right status */}
      <div className="absolute top-8 right-32 text-right hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#f4b797] border border-[#f4b797]/30 rounded-full px-4 py-1.5 backdrop-blur-md bg-black/20">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></div>
          Available for projects
        </div>
        <div className="text-xs text-gray-400 text-right uppercase tracking-wider">
          New Delhi, IN<br/>
          <span className="text-gray-500">Student</span>
        </div>
      </div>

      <div
        className="max-w-4xl mx-auto flex flex-col items-center mt-12"
      >
        <h1 
          className="text-white mb-6 text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(5rem, 15vw, 12rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1 }}
        >
          Disha
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light mb-8 text-center max-w-lg">
          Hi, I'm Disha Mehendiratta,<br/>
          Working as Full-Stack Developer and Student
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
           <a href="https://github.com/Shaa113" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:text-[#f4b797] transition-colors text-white"><Github size={16}/></a>
           <a href="https://www.linkedin.com/in/disha-mehendiratta-029426322" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:text-[#f4b797] transition-colors text-white"><Linkedin size={16}/></a>
           <a href="mailto:dishamehendiratta13@gmail.com" className="w-11 h-11 rounded-full border border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:text-[#f4b797] transition-colors text-white"><Mail size={16}/></a>
        </div>

        {/* Horizontal separator line — like lukebaffait.fr */}
        <div className="hero-separator w-full max-w-md h-px bg-[#f0e8dc]/10 mb-10" />

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            data-magnetic
            className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium flex items-center gap-2 hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            Hire Me <ArrowRight size={16} className="-rotate-45" />
          </a>
          <a
            href="#projects"
            data-magnetic
            className="px-8 py-3 rounded-full bg-black/40 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}
