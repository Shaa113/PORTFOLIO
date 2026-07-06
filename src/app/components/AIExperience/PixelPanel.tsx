import React from "react";

export function PixelPanel({
  children,
  borderColor = "#3d3d6b",
  bgColor = "#0d0d1a",
  cornerColor = "#7f5af0",
  shadow = "4px 4px 0 #060610",
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  borderColor?: string;
  bgColor?: string;
  cornerColor?: string;
  shadow?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const corners = [
    { top: -3, left: -3 },
    { top: -3, right: -3 },
    { bottom: -3, left: -3 },
    { bottom: -3, right: -3 },
  ] as React.CSSProperties[];

  return (
    <div
      className={className}
      style={{
        position: "relative",
        border: `2px solid ${borderColor}`,
        background: bgColor,
        boxShadow: shadow,
        ...style,
      }}
    >
      {corners.map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            background: cornerColor,
            ...pos,
            zIndex: 1,
          }}
        />
      ))}
      {children}
    </div>
  );
}
