import React from "react";
import { PX } from "./constants";

export function PanelHeader({
  label,
  bg = "#7f5af0",
  textColor = "#fff",
}: {
  label: string;
  bg?: string;
  textColor?: string;
}) {
  return (
    <div
      style={{
        background: bg,
        borderBottom: "2px solid #1a1a2e",
        padding: "5px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        userSelect: "none",
      }}
    >
      <span style={{ fontFamily: PX, fontSize: "7px", color: textColor }}>{label}</span>
      <div style={{ display: "flex", gap: 3 }}>
        {['#f4b797', '#2cb67d', '#ff6b6b'].map((c, i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              background: c,
              border: "1px solid #0a0a14",
            }}
          />
        ))}
      </div>
    </div>
  );
}
