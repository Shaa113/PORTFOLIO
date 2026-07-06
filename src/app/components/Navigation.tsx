import { motion } from "motion/react";
import { Home, User, Briefcase, Mail, Layers } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Layers, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function Navigation() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed right-0 top-0 bottom-0 z-50 hidden md:flex flex-col items-center justify-center px-4 md:px-8 border-l border-white/5 bg-black/10 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-6 p-3 rounded-[32px] bg-black/40 border border-white/10 backdrop-blur-md">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.href)}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            title={item.label}
          >
            <item.icon size={18} />
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
