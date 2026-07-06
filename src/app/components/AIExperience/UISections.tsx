import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { PixelCharacter } from "./PixelCharacter";
import { PixelPanel } from "./PixelPanel";
import { PanelHeader } from "./PanelHeader";
import { BODY, PX, starterPrompts } from './constants';
import portfolioLogo from '../../../imports/image.png';
import type { ChatMessage } from "./types";

export function AboutMeCard() {
  return (
    <PixelPanel
      borderColor="#f4b797"
      bgColor="#08061a"
      cornerColor="#f4b797"
      shadow="5px 5px 0 #060610, 0 0 16px rgba(244,183,151,0.12)"
      style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      <div
        style={{
          background: "#f4b797",
          borderBottom: "3px solid #c48050",
          padding: "7px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          userSelect: "none",
        }}
      >
        <span style={{ fontFamily: PX, fontSize: "8px", color: "#0d0d1a" }}>HELLO !!</span>
        <div style={{ display: "flex", gap: 3 }}>
          {['#0d0d1a', '#0d0d1a', '#0d0d1a'].map((c, i) => (
            <div key={i} style={{ width: 7, height: 7, background: c, border: "1px solid #6a3a10" }} />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "14px 0 8px",
          borderBottom: "2px solid #1a1228",
          background: "linear-gradient(180deg, #0f0820 0%, #08061a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 20,
            background: "radial-gradient(ellipse, rgba(127,90,240,0.25) 0%, transparent 70%)",
            filter: "blur(4px)",
          }}
        />
        <PixelCharacter scale={3} />
      </div>
      <div style={{ padding: "12px 12px 10px", flex: 1 }}>
        {[
          { label: "Player:", value: "Disha Mehendiratta" },
          { label: "Role:", value: "Full-Stack Dev & Student" },
          { label: "Uni:", value: "Bennett University" },
          { label: "CGPA:", value: "8.38 / 10" },
          { label: "Mission:", value: "Build real products. Learn fast." },
          { label: "Status:", value: "Ready to explore & win!" },
        ].map((field) => (
          <div key={field.label} style={{ marginBottom: 10 }}>
            <span style={{ fontFamily: PX, fontSize: "5.5px", color: "#f4b797", display: "block", marginBottom: 3, lineHeight: 1.8 }}>
              {field.label}
            </span>
            <span style={{ fontFamily: PX, fontSize: "5px", color: "#c0c0e8", lineHeight: 2, display: "block" }}>
              {field.value}
            </span>
          </div>
        ))}
        <div
          style={{
            height: 2,
            background: "repeating-linear-gradient(90deg, #f4b797 0px, #f4b797 4px, transparent 4px, transparent 8px)",
            margin: "10px 0",
            opacity: 0.4,
          }}
        />
        <motion.p
          style={{
            fontFamily: PX,
            fontSize: "5.5px",
            color: "#7f5af0",
            textAlign: "center",
            lineHeight: 2,
            cursor: "default",
          }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "steps(2)" }}
        >
          ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â¸ LET'S START THE GAME!
        </motion.p>
      </div>
    </PixelPanel>
  );
}

export function AIExperienceHeader({ onExit }: { onExit: () => void }) {
  return (
    <PixelPanel borderColor="#2a2a50" bgColor="#0c0a1a" cornerColor="#7f5af0" shadow="0 4px 0 #060410">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px" }}>
        <motion.button
          type="button"
          onClick={onExit}
          whileTap={{ y: 3, boxShadow: "1px 1px 0 #040310" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: PX,
            fontSize: "6px",
            color: "#f4b797",
            background: "#0f0c20",
            border: "2px solid #3a3a70",
            boxShadow: "3px 3px 0 #040310",
            padding: "7px 12px",
            cursor: "pointer",
            transition: "all 0.08s",
          }}
        >
          <ArrowLeft size={10} />
          EXIT
        </motion.button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, background: "#0f0c20", border: "2px solid #7f5af0", boxShadow: "2px 2px 0 #040310, 0 0 10px rgba(127,90,240,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={portfolioLogo} alt="AI" style={{ width: 20, height: 20, objectFit: "contain", imageRendering: "pixelated" }} />
          </div>
          <div>
            <p style={{ fontFamily: PX, fontSize: "8px", color: "#fff", marginBottom: 3 }}>DISHA.AI PORTFOLIO</p>
            <p style={{ fontFamily: PX, fontSize: "5px", color: "#7f5af0" }}>ÃƒÂ¢Ã¢â‚¬â€Ã‹â€  AI MODE ACTIVE</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#051209", border: "2px solid #1a3a28", boxShadow: "3px 3px 0 #040310, 0 0 8px rgba(44,182,125,0.15)", padding: "6px 10px" }}>
          <motion.div style={{ width: 5, height: 5, background: "#2cb67d" }} animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.1, repeat: Infinity, ease: "steps(2)" }} />
          <span style={{ fontFamily: PX, fontSize: "5px", color: "#2cb67d" }}>ONLINE</span>
        </div>
      </div>
    </PixelPanel>
  );
}

export function QueryInterface({ draft, setDraft, sendPrompt, isStreaming }: { draft: string; setDraft: (value: string) => void; sendPrompt: (value: string) => void; isStreaming: boolean }) {
  return (
    <PixelPanel borderColor="#7f5af0" bgColor="#0c0a1c" cornerColor="#f4b797" shadow="4px 4px 0 #060410, 0 0 16px rgba(127,90,240,0.18)">
      <PanelHeader label="ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â  QUERY INTERFACE" bg="#7f5af0" />
      <div style={{ padding: "14px 14px 12px" }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#1a1030", border: "2px solid #3a2a60", padding: "4px 8px", marginBottom: 10 }}>
            <Sparkles size={8} color="#7f5af0" />
            <span style={{ fontFamily: PX, fontSize: "5px", color: "#7f5af0" }}>AI MODE</span>
          </div>
          <p style={{ fontFamily: PX, fontSize: "clamp(7px, 1.2vw, 12px)", color: "#fff", lineHeight: 2.2, marginBottom: 8, maxWidth: 480 }}>
            What would you like to know about Disha?
          </p>
          <p style={{ fontFamily: BODY, fontSize: "13px", color: "#5a5a8a", lineHeight: 1.6 }}>
            Ask naturally ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â replies stream in real-time from the portfolio knowledge base.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendPrompt(draft);
          }}
        >
          <PixelPanel borderColor="#3a3a6a" bgColor="#06050c" cornerColor="#7f5af0" shadow="3px 3px 0 #040310" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", marginBottom: 10 }}>
            <span style={{ fontFamily: PX, fontSize: "7px", color: "#f4b797", flexShrink: 0, userSelect: "none" }}>&gt;_</span>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask about my projects..."
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: BODY, fontSize: "14px", color: "#c0c0e8", caretColor: "#f4b797", minWidth: 0 }}
            />
            <motion.button
              type="submit"
              disabled={!draft.trim() || isStreaming}
              whileTap={{ y: 2, boxShadow: "1px 1px 0 #040310" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: PX,
                fontSize: "6px",
                color: draft.trim() && !isStreaming ? "#0d0d1a" : "#3a3a6a",
                background: draft.trim() && !isStreaming ? "#f4b797" : "#0f0e20",
                border: `2px solid ${draft.trim() && !isStreaming ? "#d49070" : "#2a2a4a"}`,
                boxShadow: "3px 3px 0 #040310",
                padding: "7px 12px",
                cursor: draft.trim() && !isStreaming ? "pointer" : "not-allowed",
                flexShrink: 0,
                transition: "all 0.08s",
              }}
            >
              <Send size={9} />
              SEND
            </motion.button>
          </PixelPanel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {starterPrompts.map((p) => (
              <motion.button
                key={p}
                type="button"
                onClick={() => sendPrompt(p)}
                whileTap={{ y: 2, boxShadow: "1px 1px 0 #040310" }}
                whileHover={{ borderColor: "#7f5af0", color: "#b8b8ff" }}
                style={{
                  fontFamily: PX,
                  fontSize: "5px",
                  color: "#6868a0",
                  background: "#0c0a1c",
                  border: "2px solid #252545",
                  boxShadow: "2px 2px 0 #060410",
                  padding: "5px 8px",
                  cursor: "pointer",
                  lineHeight: 1.9,
                  transition: "all 0.08s",
                }}
              >
                ÃƒÂ¢Ã¢â‚¬â€Ã‹â€  {p}
              </motion.button>
            ))}
          </div>
        </form>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, marginTop: 10 }}>
          {[
            { tag: "TIP", body: "Ask anything naturally" },
            { tag: "INFO", body: "Replies stream live" },
            { tag: "NOTE", body: "Focused on portfolio" },
          ].map((h) => (
            <div key={h.tag} style={{ background: "#09071a", border: "2px solid #1e1e40", borderLeft: "3px solid #7f5af0", padding: "8px 8px" }}>
              <span style={{ fontFamily: PX, fontSize: "5px", color: "#7f5af0", display: "block", marginBottom: 5 }}>
                [ {h.tag} ]
              </span>
              <span style={{ fontFamily: BODY, fontSize: "11px", color: "#4a4a78", lineHeight: 1.5, display: "block" }}>
                {h.body}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PixelPanel>
  );
}

export function ChatPanel({ messages, streamingText, isStreaming, showCursor, msgCount, messageEndRef }: { messages: ChatMessage[]; streamingText: string; isStreaming: boolean; showCursor: boolean; msgCount: number; messageEndRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <PixelPanel borderColor="#2a2a50" bgColor="#09071a" cornerColor="#2cb67d" shadow="4px 4px 0 #060410" style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 280 }}>
      <PanelHeader label="ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â  COMM CHANNEL" bg="#2a2a50" />
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", scrollbarWidth: "thin", scrollbarColor: "#3a3a6a #09071a" }}>
        <AnimatePresence initial={false}>
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            const isLastStreaming = msg.role === "assistant" && msg.streaming;
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", alignItems: "flex-end", gap: 6, marginBottom: 10 }}
              >
                {!isUser && (
                  <div style={{ width: 20, height: 20, background: "#0f0c20", border: "2px solid #7f5af0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: 2 }}>
                    <span style={{ fontFamily: PX, fontSize: "4px", color: "#7f5af0" }}>AI</span>
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "9px 13px",
                    fontFamily: BODY,
                    fontSize: "13px",
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    ...(isUser
                      ? {
                          background: "#f4b797",
                          color: "#0a0818",
                          border: "2px solid #c47840",
                          boxShadow: "3px 3px 0 #040310",
                        }
                      : {
                          background: "#0f0c22",
                          color: "#c0c0e8",
                          border: "2px solid #2a2a50",
                          boxShadow: "3px 3px 0 #060410, 0 0 10px rgba(127,90,240,0.06) inset",
                        }),
                  }}
                >
                  {isUser ? msg.content : isLastStreaming ? streamingText : msg.content}
                  {isLastStreaming && (
                    <span style={{ display: "inline-block", width: 7, height: 14, background: "#7f5af0", marginLeft: 3, verticalAlign: "middle", opacity: showCursor ? 1 : 0, transition: "opacity 0s" }} />
                  )}
                </div>
                {isUser && (
                  <div style={{ width: 20, height: 20, background: "#140e04", border: "2px solid #f4b797", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: 2 }}>
                    <span style={{ fontFamily: PX, fontSize: "4px", color: "#f4b797" }}>YOU</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {isStreaming && streamingText === "" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 10 }}>
            <div style={{ width: 20, height: 20, background: "#0f0c20", border: "2px solid #7f5af0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: PX, fontSize: "4px", color: "#7f5af0" }}>AI</span>
            </div>
            <div style={{ background: "#0f0c22", border: "2px solid #2a2a50", boxShadow: "3px 3px 0 #060410", padding: "8px 14px", display: "flex", gap: 5, alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <motion.div key={i} style={{ width: 5, height: 5, background: "#7f5af0" }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.3, ease: "steps(2)" }} />
              ))}
            </div>
          </motion.div>
        )}
        <div ref={messageEndRef} />
      </div>
      <div style={{ padding: "7px 14px", borderTop: "2px solid #1a1830", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: PX, fontSize: "5px", color: "#2a2a50" }}>MSG: {String(msgCount).padStart(3, "0")} / SESSION ACTIVE</span>
        <motion.span style={{ fontFamily: PX, fontSize: "5px", color: isStreaming ? "#2cb67d" : "#2a2a50" }} animate={isStreaming ? { opacity: [1, 0.4, 1] } : {}} transition={{ duration: 0.8, repeat: Infinity }}>
          {isStreaming ? "ÃƒÂ¢Ã¢â‚¬â€Ã‹â€  STREAMING..." : "ÃƒÂ¢Ã¢â‚¬â€Ã‹â€  READY"}
        </motion.span>
      </div>
    </PixelPanel>
  );
}
