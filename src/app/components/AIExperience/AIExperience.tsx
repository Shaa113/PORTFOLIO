import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PixelCharacter } from "./PixelCharacter";
import { PixelPanel } from "./PixelPanel";

import { AboutMeCard, AIExperienceHeader, ChatPanel, QueryInterface } from "./UISections";
import { BODY, buildResponse, initialMessages } from "./constants";
import type { ChatMessage } from "./types";
import portfolioLogo from "../../../imports/image.png";

function Scanlines() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.22) 2px, rgba(0,0,0,0.22) 4px)",
        pointerEvents: "none",
        zIndex: 8,
        mixBlendMode: "multiply",
      }}
    />
  );
}

const STAR_DATA = [
  { top: "7%", left: "11%", delay: 0, color: "#b8c0ff", size: 3 },
  { top: "14%", left: "44%", delay: 0.7, color: "#f4b797", size: 2 },
  { top: "5%", left: "71%", delay: 1.4, color: "#7f5af0", size: 3 },
  { top: "21%", left: "87%", delay: 0.3, color: "#b8c0ff", size: 2 },
  { top: "33%", left: "4%", delay: 1.1, color: "#f4b797", size: 2 },
  { top: "54%", left: "92%", delay: 0.5, color: "#2cb67d", size: 2 },
  { top: "69%", left: "17%", delay: 1.8, color: "#b8c0ff", size: 3 },
  { top: "81%", left: "59%", delay: 0.9, color: "#7f5af0", size: 2 },
  { top: "11%", left: "29%", delay: 2.1, color: "#f4b797", size: 2 },
  { top: "47%", left: "49%", delay: 1.6, color: "#b8c0ff", size: 2 },
  { top: "89%", left: "79%", delay: 0.2, color: "#7f5af0", size: 3 },
  { top: "2%", left: "57%", delay: 1.3, color: "#2cb67d", size: 2 },
  { top: "38%", left: "63%", delay: 0.8, color: "#f4b797", size: 2 },
  { top: "75%", left: "38%", delay: 2.4, color: "#b8c0ff", size: 3 },
];

function PixelStars() {
  return (
    <>
      {STAR_DATA.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            pointerEvents: "none",
            imageRendering: "pixelated",
          }}
          animate={{ opacity: [1, 0.1, 0.8, 0.1, 1], scale: [1, 0.5, 1] }}
          transition={{ duration: 2 + (i % 3) * 0.6, repeat: Infinity, delay: s.delay, ease: "steps(3)" }}
        />
      ))}
    </>
  );
}

const FIREFLY_DATA = [
  { left: "18%", top: "28%", delay: 0, dur: 5.2 },
  { left: "34%", top: "62%", delay: 1.1, dur: 6.4 },
  { left: "52%", top: "38%", delay: 0.5, dur: 4.8 },
  { left: "68%", top: "74%", delay: 2.0, dur: 5.8 },
  { left: "82%", top: "22%", delay: 0.8, dur: 6.1 },
  { left: "91%", top: "51%", delay: 1.7, dur: 5.5 },
  { left: "8%", top: "76%", delay: 0.3, dur: 4.9 },
  { left: "73%", top: "14%", delay: 1.4, dur: 5.3 },
];

function PixelFireflies() {
  return (
    <>
      {FIREFLY_DATA.map((f, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: f.left,
            top: f.top,
            width: 3,
            height: 3,
            background: "#ffd966",
            pointerEvents: "none",
            boxShadow: "0 0 4px #ffd966, 0 0 8px rgba(255,217,102,0.4)",
          }}
          animate={{ opacity: [0, 0.9, 0.3, 1, 0], y: [-6, 8, -4, 10, -6], x: [-4, 5, -2, 4, -4] }}
          transition={{ duration: f.dur, repeat: Infinity, delay: f.delay, ease: "steps(4)" }}
        />
      ))}
    </>
  );
}

const PARTICLE_DATA = [
  { left: "22%", color: "#7f5af0", dur: 8, delay: 0 },
  { left: "41%", color: "#f4b797", dur: 10, delay: 2 },
  { left: "61%", color: "#2cb67d", dur: 7, delay: 1 },
  { left: "77%", color: "#b8c0ff", dur: 9, delay: 3 },
  { left: "87%", color: "#7f5af0", dur: 11, delay: 0.5 },
];

function PixelParticles() {
  return (
    <>
      {PARTICLE_DATA.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: p.left,
            bottom: "8%",
            width: 2,
            height: 2,
            background: p.color,
            pointerEvents: "none",
          }}
          animate={{ y: [0, -140, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </>
  );
}

function AIIntroLoader() {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const bootLines = [
    "> DISHA.AI v1.0 ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â INITIALIZING...",
    "> LOADING PORTFOLIO KNOWLEDGE BASE...",
    "> MOUNTING SKILL MODULES...",
    "> CALIBRATING RESPONSE ENGINE...",
    "> PIXEL RENDERER ONLINE...",
    "> ALL SYSTEMS NOMINAL.",
    "> WELCOME, TRAVELER.",
  ];

  useEffect(() => {
    const prog = setInterval(() => {
      setProgress((c) => Math.min(100, c + (c < 70 ? 3 : 5)));
    }, 60);
    const line = setInterval(() => {
      setLineIdx((c) => Math.min(bootLines.length - 1, c + 1));
    }, 440);
    const cur = setInterval(() => setShowCursor((c) => !c), 480);
    return () => {
      clearInterval(prog);
      clearInterval(line);
      clearInterval(cur);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "#06050f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Scanlines />
      <PixelStars />
      <PixelFireflies />
      {[
        { top: 12, left: 12, borderTop: "3px solid #7f5af0", borderLeft: "3px solid #7f5af0" },
        { top: 12, right: 12, borderTop: "3px solid #7f5af0", borderRight: "3px solid #7f5af0" },
        { bottom: 12, left: 12, borderBottom: "3px solid #7f5af0", borderLeft: "3px solid #7f5af0" },
        { bottom: 12, right: 12, borderBottom: "3px solid #7f5af0", borderRight: "3px solid #7f5af0" },
      ].map((style, i) => (
        <div key={i} style={{ position: "absolute", width: 22, height: 22, pointerEvents: "none", ...style }} />
      ))}
      <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} style={{ width: "100%", maxWidth: 540, margin: "0 16px" }}>
        <PixelPanel borderColor="#7f5af0" bgColor="#0a0818" cornerColor="#f4b797" shadow="6px 6px 0 #040310, 0 0 20px rgba(127,90,240,0.25)">
          <div style={{ background: "#7f5af0", padding: "7px 12px", borderBottom: "2px solid #1a1a2e", display: "flex", alignItems: "center", gap: 8 }}>
            {['#f4b797', '#2cb67d', '#ff6b6b'].map((c, i) => (
              <div key={i} style={{ width: 7, height: 7, background: c, border: "1px solid #0a0a14" }} />
            ))}
            <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "7px", color: "#fff", marginLeft: 6 }}>DISHA.AI ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â BOOT SEQUENCE</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", borderBottom: "2px solid #1a1228", background: "#08060f" }}>
            <div style={{ width: 52, height: 52, background: "#0f0c20", border: "2px solid #7f5af0", boxShadow: "3px 3px 0 #0a0a14, 0 0 12px rgba(127,90,240,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src={portfolioLogo} alt="AI" style={{ width: 34, height: 34, objectFit: "contain", imageRendering: "pixelated" }} />
            </div>
            <div>
              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "6px", color: "#7f5af0", marginBottom: 6 }}>ÃƒÂ¢Ã¢â‚¬â€Ã‹â€  PORTFOLIO AI UNIT</p>
              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px", color: "#fff", marginBottom: 4 }}>DISHA.AI</p>
              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#5a5a90" }}>v1.0.0 ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â BOOTING...</p>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <PixelCharacter scale={3} />
            </div>
          </div>
          <div style={{ padding: "16px 18px", minHeight: 170, background: "#07050e" }}>
            {bootLines.slice(0, lineIdx + 1).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "6px", lineHeight: 2.4, margin: 0, color: i === lineIdx ? "#f4b797" : "#3a3a60" }}
              >
                {line}
                {i === lineIdx && <span style={{ opacity: showCursor ? 1 : 0, color: "#f4b797" }}>ÃƒÂ¢Ã¢â‚¬â€œÃ…â€™</span>}
              </motion.p>
            ))}
          </div>
          <div style={{ padding: "12px 18px 16px", background: "#08060f", borderTop: "2px solid #1a1228" }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#4a4a70", display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span>BOOT PROGRESS</span>
              <span style={{ color: "#f4b797" }}>{String(progress).padStart(3, "0")}%</span>
            </div>
            <div style={{ height: 12, background: "#06050c", border: "2px solid #3d3d6b", boxShadow: "3px 3px 0 #040310", position: "relative", overflow: "hidden" }}>
              <motion.div style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "linear-gradient(90deg, #7f5af0 0%, #f4b797 100%)" }} animate={{ width: `${progress}%` }} transition={{ ease: "steps(40)", duration: 0.08 }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(0,0,0,0.3) 9px, rgba(0,0,0,0.3) 10px)", pointerEvents: "none" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
              {[0, 25, 50, 75, 100].map((t) => (
                <span key={t} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "4px", color: "#2a2a40" }}>{t}</span>
              ))}
            </div>
          </div>
        </PixelPanel>
      </motion.div>
    </motion.div>
  );
}

export function AIExperience({ onExit }: { onExit: () => void }) {
  const [ready, setReady] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [msgCount, setMsgCount] = useState(1);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, streamingText]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 520);
    return () => clearInterval(t);
  }, []);

  const sendPrompt = useCallback(
    (prompt: string) => {
      const clean = prompt.trim();
      if (!clean || isStreaming) return;

      const reply = buildResponse(clean);
      const uid = Date.now();
      const aid = uid + 1;

      setMessages((cur) => [
        ...cur,
        { id: uid, role: "user", content: clean },
        { id: aid, role: "assistant", content: "", streaming: true },
      ]);
      setMsgCount((c) => c + 2);
      setDraft("");
      setStreamingText("");
      setIsStreaming(true);

      let idx = 0;
      const inc = Math.max(1, Math.ceil(reply.length / 120));
      const timer = setInterval(() => {
        idx = Math.min(reply.length, idx + inc);
        setStreamingText(reply.slice(0, idx));
        if (idx >= reply.length) {
          clearInterval(timer);
          setIsStreaming(false);
          setMessages((cur) =>
            cur.map((m) => (m.id === aid ? { ...m, content: reply, streaming: false } : m))
          );
          setStreamingText("");
        }
      }, 18);
    },
    [isStreaming]
  );

  if (!ready) {
    return (
      <AnimatePresence>
        <AIIntroLoader />
      </AnimatePresence>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} style={{ position: "relative", minHeight: "100vh", background: "#07050e", fontFamily: BODY, overflow: "hidden" }}>
      <Scanlines />
      <PixelStars />
      <PixelFireflies />
      <PixelParticles />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, #1a183a 1px, transparent 1px)", backgroundSize: "20px 20px", opacity: 0.6, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "-8%", left: "25%", width: "50%", height: "30%", background: "radial-gradient(ellipse, rgba(127,90,240,0.18) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", right: "5%", width: "35%", height: "25%", background: "radial-gradient(ellipse, rgba(244,183,151,0.07) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
      {[{ top: 8, left: 8, borderTop: "3px solid #7f5af0", borderLeft: "3px solid #7f5af0" }, { top: 8, right: 8, borderTop: "3px solid #7f5af0", borderRight: "3px solid #7f5af0" }, { bottom: 8, left: 8, borderBottom: "3px solid #7f5af0", borderLeft: "3px solid #7f5af0" }, { bottom: 8, right: 8, borderBottom: "3px solid #7f5af0", borderRight: "3px solid #7f5af0" }].map((s, i) => (
        <div key={i} style={{ position: "fixed", width: 20, height: 20, pointerEvents: "none", zIndex: 50, ...s }} />
      ))}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1440, margin: "0 auto", padding: "10px", minHeight: "100vh", display: "flex", flexDirection: "column", gap: 8 }}>
        <AIExperienceHeader onExit={onExit} />
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "190px 1fr 178px", gap: 8, minHeight: 0 }} className="ai-body-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }} className="ai-sidebar-left">
            <PixelPanel borderColor="#3d3d6b" bgColor="#0d0b1e" cornerColor="#7f5af0">
              <PanelHeader label="ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â  STATUS" bg="#7f5af0" />
              <div style={{ padding: "10px 10px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 34, height: 34, background: "#0f0c20", border: "2px solid #7f5af0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={portfolioLogo} alt="" style={{ width: 22, height: 22, objectFit: "contain", imageRendering: "pixelated" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "6px", color: "#fff", marginBottom: 3 }}>DISHA.AI</p>
                    <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#7f5af0" }}>LVL 01</p>
                  </div>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#7070a0", display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>EXP</span><span style={{ color: "#f4b797" }}>87/100</span></div>
                  <div style={{ height: 7, background: "#0a0a18", border: "2px solid #2a2a4a", boxShadow: "2px 2px 0 #060610" }}><motion.div style={{ height: "100%", background: "#f4b797" }} initial={{ width: 0 }} animate={{ width: "87%" }} transition={{ duration: 1.2, ease: "steps(20)" }} /></div>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#7070a0", display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>ENERGY</span><span style={{ color: "#2cb67d" }}>100/100</span></div>
                  <div style={{ height: 7, background: "#0a0a18", border: "2px solid #2a2a4a", boxShadow: "2px 2px 0 #060610" }}><motion.div style={{ height: "100%", background: "#2cb67d" }} initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.2, ease: "steps(20)" }} /></div>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#7070a0", display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>INT</span><span style={{ color: "#7f5af0" }}>95/100</span></div>
                  <div style={{ height: 7, background: "#0a0a18", border: "2px solid #2a2a4a", boxShadow: "2px 2px 0 #060610" }}><motion.div style={{ height: "100%", background: "#7f5af0" }} initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1.2, ease: "steps(20)" }} /></div>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#7070a0", display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>SKILL</span><span style={{ color: "#b8c0ff" }}>82/100</span></div>
                  <div style={{ height: 7, background: "#0a0a18", border: "2px solid #2a2a4a", boxShadow: "2px 2px 0 #060610" }}><motion.div style={{ height: "100%", background: "#b8c0ff" }} initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1.2, ease: "steps(20)" }} /></div>
                </div>
              </div>
            </PixelPanel>
            <PixelPanel borderColor="#3d3d6b" bgColor="#0d0b1e" cornerColor="#2cb67d" style={{ flex: 1 }}>
              <PanelHeader label="ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â  INVENTORY" bg="#2a2a50" />
              <div style={{ padding: "8px 8px" }}>
                {[
                  { name: "JavaScript", color: "#f4b797" },
                  { name: "React.js", color: "#61dafb" },
                  { name: "Node.js", color: "#2cb67d" },
                  { name: "Python", color: "#7f5af0" },
                  { name: "PostgreSQL", color: "#5b8fd4" },
                  { name: "MongoDB", color: "#2cb67d" },
                  { name: "Flask", color: "#f4b797" },
                  { name: "Figma", color: "#f24e1e" },
                  { name: "Git", color: "#f05032" },
                  { name: "REST API", color: "#b8c0ff" },
                ].map((item) => (
                  <motion.div key={item.name} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 6px", marginBottom: 2, borderLeft: `3px solid ${item.color}30`, cursor: "default", transition: "all 0.1s" }} whileHover={{ borderLeftColor: item.color, backgroundColor: `${item.color}08` }}>
                    <div style={{ width: 4, height: 4, background: item.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5.5px", color: "#7070a0" }}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </PixelPanel>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
            <QueryInterface draft={draft} setDraft={setDraft} sendPrompt={sendPrompt} isStreaming={isStreaming} />
            <ChatPanel messages={messages} streamingText={streamingText} isStreaming={isStreaming} showCursor={showCursor} msgCount={msgCount} messageEndRef={messageEndRef} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }} className="ai-sidebar-right">
            <AboutMeCard />
            <PixelPanel borderColor="#2a2a50" bgColor="#0d0b1e" cornerColor="#b8c0ff">
              <PanelHeader label="ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â  KEY CONTROLS" bg="#2a2a50" />
              <div style={{ padding: "10px 10px" }}>
                {[
                  { keys: ["ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬Ëœ", "ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬Å“"], action: "Scroll" },
                  { keys: ["ÃƒÂ¢Ã¢â‚¬Â Ã‚Âµ"], action: "Send" },
                  { keys: ["ESC"], action: "Exit" },
                ].map((ctrl) => (
                  <div key={ctrl.action} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 3 }}>
                      {ctrl.keys.map((k) => (
                        <span key={k} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "6px", color: "#c0c0e8", background: "#14122a", border: "2px solid #3a3a6a", boxShadow: "2px 2px 0 #060410", padding: "3px 6px", display: "inline-block" }}>{k}</span>
                      ))}
                    </div>
                    <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#4a4a70" }}>{ctrl.action}</span>
                  </div>
                ))}
              </div>
            </PixelPanel>
            <PixelPanel borderColor="#2a2a50" bgColor="#0d0b1e" cornerColor="#f4b797">
              <PanelHeader label="ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â  LINKS" bg="#2a2a50" />
              <div style={{ padding: "8px 10px" }}>
                {[
                  { href: "https://github.com/Shaa113", label: "GitHub", sym: "ÃƒÂ¢Ã…â€™Ã‚Â¥" },
                  { href: "https://www.linkedin.com/in/disha-mehendiratta-029426322", label: "LinkedIn", sym: "ÃƒÂ¢Ã…â€™Ã‚Â¥" },
                  { href: "mailto:dishamehendiratta13@gmail.com", label: "Email", sym: "ÃƒÂ¢Ã…â€™Ã‚Â¥" },
                ].map((link) => (
                  <motion.a key={link.label} href={link.href} target="_blank" rel="noreferrer" whileHover={{ borderColor: "#f4b797", color: "#f4b797" }} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "'Press Start 2P', monospace", fontSize: "5.5px", color: "#6868a0", padding: "6px 6px", border: "2px solid transparent", textDecoration: "none", marginBottom: 4, transition: "all 0.08s" }}>
                    <span style={{ color: "#7f5af0", fontSize: "8px" }}>{link.sym}</span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </PixelPanel>
          </div>
        </div>
        <div style={{ borderTop: "2px solid #1a1830", paddingTop: 8, display: "flex", justifyContent: "center" }}>
          <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "#2a2a4a" }}>ÃƒÂ¢Ã¢â€žÂ¢Ã‚Â¥ MADE WITH LOVE AND LOTS OF ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¢ BY DISHA ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â DISHA.AI v1.0.0</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .ai-body-grid { grid-template-columns: 1fr !important; }
          .ai-sidebar-left, .ai-sidebar-right { display: none !important; }
        }
        @media (max-width: 600px) {
          .ai-body-grid { gap: 6px !important; }
        }
      `}</style>
    </motion.div>
  );
}
