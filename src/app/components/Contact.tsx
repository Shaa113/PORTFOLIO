import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-transparent py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#f0e8dc]/[0.06]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em] mb-4">Contact</p>
          <h2
            className="font-light text-[#f0e8dc] leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-10"
          >
            <p className="text-[#7a6f63] text-lg leading-relaxed">
              Whether it's a project idea, a collaboration, or just a conversation about tech —
              I'm always happy to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "dishamehendiratta13@gmail.com", href: "mailto:dishamehendiratta13@gmail.com" },
                { icon: Github, label: "GitHub", value: "github.com/Shaa113", href: "https://github.com/Shaa113" },
                { icon: Linkedin, label: "LinkedIn", value: "in/disha-mehendiratta-029426322", href: "https://www.linkedin.com/in/disha-mehendiratta-029426322" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="group flex items-center gap-4 py-4 border-b border-[#f0e8dc]/[0.06] hover:border-[#c9a96e]/30 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-sm border border-[#f0e8dc]/[0.07] bg-black/50 text-[#7a6f63] group-hover:text-[#c9a96e] group-hover:border-[#c9a96e]/30 transition-all duration-300">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[#7a6f63] text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-[#f0e8dc]/80 text-sm group-hover:text-[#c9a96e] transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-[#7a6f63]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
              Open to internships &amp; freelance projects
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.id} className="space-y-2">
                  <label htmlFor={field.id} className="text-xs text-[#7a6f63] uppercase tracking-widest">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-black/50 border border-[#f0e8dc]/[0.08] rounded-sm text-[#f0e8dc] placeholder:text-[#7a6f63]/50 text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs text-[#7a6f63] uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me what you have in mind..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 bg-black/50 border border-[#f0e8dc]/[0.08] rounded-sm text-[#f0e8dc] placeholder:text-[#7a6f63]/50 text-sm focus:outline-none focus:border-[#c9a96e]/40 transition-colors resize-none"
                />
              </div>

              {error && <p className="text-red-400 text-xs text-center">{error}</p>}
              
              <button
                type="submit"
                disabled={loading || sent}
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#c9a96e] text-[#0f0c0a] text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-[#d4b887] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? "Message Sent ✓" : loading ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
