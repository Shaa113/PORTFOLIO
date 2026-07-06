import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/disha-mehendiratta-029426322", external: true },
  { label: "Github", href: "https://github.com/Shaa113", external: true },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent border-t border-[#f0e8dc]/[0.06] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[#7a6f63] text-sm">
          © {year} Disha Mehendiratta. All rights reserved.
        </div>
        
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 text-[#f0e8dc] text-xs font-semibold uppercase tracking-widest hover:text-[#c9a96e] transition-colors group"
            >
              {link.label}
              {link.external && <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
