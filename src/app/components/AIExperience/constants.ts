import type { ChatMessage } from "./types";

export const PX = "'Press Start 2P', monospace";
export const BODY = "'DM Sans', sans-serif";

export const starterPrompts = [
  "Why should I hire Disha?",
  "Show me her projects.",
  "What's her tech stack?",
  "Tell me about Recruit Right AI.",
  "What is Trekka?",
  "Explain RUMI platform.",
  "What are her CS skills?",
];

export const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "> SYSTEM BOOT COMPLETE\n> Welcome, traveler. I am DISHA.AI — your guide through this portfolio.\n> Ask me anything about Disha's work, skills, or projects.",
  },
];

export function buildResponse(prompt: string) {
  const t = prompt.toLowerCase();
  if (t.includes("hire") || t.includes("why should") || t.includes("strongest"))
    return "Hire Disha if you want someone who moves comfortably between product thinking, UI polish, backend logic, and AI-aware workflows. Breadth: React, Node.js, Python, Flask, PostgreSQL, MongoDB, REST APIs, and strong CS fundamentals. Signal: practical, polished projects built around real user problems.";
  if (t.includes("backend") || t.includes("scalable") || t.includes("architecture"))
    return "Disha's approach is API-first, modular, and product-aware. Clean REST boundaries, well-defined data models, decoupled frontend. Comfortable on both sides: React (UI) and Node.js, Python, Flask, PostgreSQL, MongoDB (systems).";
  if (t.includes("project") || t.includes("projects"))
    return "Featured projects:\n▸ [01] Recruit Right AI — AI background verification\n▸ [02] Trekka — smart travel companion\n▸ [03] RUMI — flatmate matching platform\nWant details on any of these?";
  if (t.includes("recruit"))
    return "Recruit Right AI: An AI-powered background verification system — automates candidate screening, cross-references credentials, flags inconsistencies, delivers trust scores. Stack: Python, React.js, Node.js, REST API, AI/ML.";
  if (t.includes("trekka"))
    return "Trekka: Smart travel companion helping explorers discover cities safely — local insights, safe-route mapping, curated cultural experiences. Stack: React.js, Node.js, MongoDB, REST API.";
  if (t.includes("rumi"))
    return "RUMI: Flatmate matching platform connecting compatible roommates via lifestyle-based compatibility scoring and verified profiles. Stack: React.js, Node.js, PostgreSQL, Flask.";
  if (t.includes("skill") || t.includes("tech") || t.includes("stack") || t.includes("know"))
    return "Skill inventory: JavaScript ▸ React.js ▸ Node.js ▸ Python ▸ Flask ▸ PostgreSQL ▸ MongoDB ▸ Java ▸ C/C++ ▸ SQL ▸ HTML ▸ CSS ▸ Git & GitHub ▸ Figma ▸ Postman ▸ REST APIs ▸ DSA ▸ OOP. Full-stack bias + strong design sense.";
  return "I can answer from the portfolio data currently loaded. Ask about projects, skills, education, or any specific build and I'll reply conversationally.";
}
