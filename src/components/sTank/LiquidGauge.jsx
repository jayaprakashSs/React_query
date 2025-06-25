// components/LiquidGauge.jsx
import React from "react";
import LiquidFillGauge from "react-liquid-gauge";

function LiquidGauge({ value }) {
  const radius = 80;
  const startColor = "#00BFFF";
  const endColor = "#FF6347";

  const interpolateColor = (start, end, percent) => {
    const hex = (x) => {
      const val = Math.round(x).toString(16);
      return val.length === 1 ? "0" + val : val;
    };
    const r = (1 - percent) * parseInt(start.slice(1, 3), 16) + percent * parseInt(end.slice(1, 3), 16);
    const g = (1 - percent) * parseInt(start.slice(3, 5), 16) + percent * parseInt(end.slice(3, 5), 16);
    const b = (1 - percent) * parseInt(start.slice(5, 7), 16) + percent * parseInt(end.slice(5, 7), 16);
    return `#${hex(r)}${hex(g)}${hex(b)}`;
  };

  const fillColor = interpolateColor(startColor, endColor, value / 100);

  return (
    <LiquidFillGauge
      width={radius * 2}
      height={radius * 2}
      value={value}
      percent="%"
      textSize={1}
      riseAnimation
      waveAnimation
      waveFrequency={2}
      waveAmplitude={3}
      gradient
      circleStyle={{ fill: "#ffffff" }}
      waveStyle={{ fill: fillColor }}
      textStyle={{ fill: "#444", fontSize: "1.5em", fontWeight: "bold" }}
      waveTextStyle={{ fill: "#fff", fontSize: "1.5em", fontWeight: "bold" }}
    />
  );
}

export default LiquidGauge;
