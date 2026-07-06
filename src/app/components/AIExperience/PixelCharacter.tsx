import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const CP: Record<string, string> = {
  _: "transparent",
  H: "#4a1870",
  h: "#6a2a9a",
  S: "#f5c0a0",
  s: "#e8a888",
  E: "#1a1020",
  C: "#f09080",
  T: "#7f5af0",
  t: "#5a3ab0",
  L: "#a07af0",
  D: "#1a1a3a",
  d: "#2a2a5a",
  B: "#2a1a4a",
  b: "#3a2a6a",
};

const FRAME_OPEN: string[][] = [
  ["_","_","H","H","H","H","h","_"],
  ["_","H","H","H","H","H","H","h"],
  ["H","H","S","S","S","S","H","H"],
  ["H","S","E","S","S","E","S","H"],
  ["H","S","S","S","S","S","S","H"],
  ["_","S","C","S","S","C","S","_"],
  ["_","_","S","S","S","S","_","_"],
  ["_","T","T","T","T","T","T","_"],
  ["T","T","L","T","T","L","T","T"],
  ["T","t","T","T","T","T","t","T"],
  ["_","_","D","D","D","D","_","_"],
  ["_","_","D","d","d","D","_","_"],
  ["_","S","_","_","_","_","S","_"],
  ["_","S","_","_","_","_","S","_"],
  ["B","B","_","_","_","B","B","_"],
  ["b","B","_","_","_","B","b","_"],
];

const FRAME_BLINK: string[][] = FRAME_OPEN.map((row, i) =>
  i === 3 ? ["H","S","S","S","S","S","S","H"] : row
);

export function PixelCharacter({ scale = 4 }: { scale?: number }) {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let blinkTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setIsBlinking(true);
      blinkTimeout = setTimeout(() => setIsBlinking(false), 160);
    }, 3400);
    return () => {
      clearInterval(interval);
      clearTimeout(blinkTimeout);
    };
  }, []);

  const frame = isBlinking ? FRAME_BLINK : FRAME_OPEN;
  const W = 8 * scale;
  const H = 16 * scale;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <motion.div
        style={{
          position: "absolute",
          bottom: -3,
          left: "15%",
          width: "70%",
          height: scale * 0.75,
          background: "rgba(0,0,0,0.45)",
          borderRadius: "50%",
          filter: "blur(2px)",
        }}
        animate={{ scaleX: [1, 0.85, 1], opacity: [0.45, 0.25, 0.45] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "steps(2)" }}
      />
      <motion.div
        animate={{ y: [0, -Math.ceil(scale * 0.5), 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "steps(2)" }}
      >
        <svg
          width={W}
          height={H}
          style={{ imageRendering: "pixelated", display: "block" }}
          shapeRendering="crispEdges"
        >
          {frame.map((row, y) =>
            row.map((key, x) =>
              key === "_" ? null : (
                <rect
                  key={`${x},${y}`}
                  x={x * scale}
                  y={y * scale}
                  width={scale}
                  height={scale}
                  fill={CP[key]}
                />
              )
            )
          )}
        </svg>
      </motion.div>
    </div>
  );
}
