import Svg, { Circle, Defs, G, Line, LinearGradient, Path, RadialGradient, Stop } from "react-native-svg";

export function NetworkGraphic({ width = 280, height = 220 }: { width?: number; height?: number }) {
  return (
    <Svg fill="none" height={height} viewBox="0 0 360 280" width={width}>
      <Defs>
        <RadialGradient cx="50%" cy="50%" id="netGlow" r="50%">
          <Stop offset="0%" stopColor="#fee2e2" stopOpacity="0.8" />
          <Stop offset="60%" stopColor="#fef2f2" stopOpacity="0.4" />
          <Stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <LinearGradient id="primaryDropGrad" x1="0%" x2="100%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#ef4444" />
          <Stop offset="60%" stopColor="#dc2626" />
          <Stop offset="100%" stopColor="#991b1b" />
        </LinearGradient>
      </Defs>
      <Circle cx="180" cy="140" fill="url(#netGlow)" r="130" />
      <G stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="1.5">
        <Line opacity="0.6" x1="180" x2="80" y1="140" y2="70" />
        <Line opacity="0.6" x1="180" x2="280" y1="140" y2="80" />
        <Line opacity="0.6" x1="180" x2="60" y1="140" y2="190" />
        <Line opacity="0.6" x1="180" x2="290" y1="140" y2="200" />
        <Line opacity="0.6" x1="180" x2="180" y1="140" y2="235" />
      </G>
      <G transform="translate(80, 70)">
        <Circle cx="0" cy="0" fill="#ffffff" r="18" stroke="#e2e8f0" strokeWidth="1.5" />
        <Circle cx="0" cy="0" fill="#fef2f2" r="14" />
        <Path d="M-4 3c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#dc2626" strokeLinecap="round" strokeWidth="1.5" />
        <Circle cx="0" cy="-3" fill="#dc2626" r="2.5" />
        <Circle cx="12" cy="-12" fill="#16a34a" r="4" />
      </G>
      <G transform="translate(280, 80)">
        <Circle cx="0" cy="0" fill="#ffffff" r="18" stroke="#e2e8f0" strokeWidth="1.5" />
        <Circle cx="0" cy="0" fill="#eff6ff" r="14" />
        <Path d="M0 -5v10M-5 0h10" stroke="#2563eb" strokeLinecap="round" strokeWidth="2" />
        <Circle cx="12" cy="-12" fill="#2563eb" r="4" />
      </G>
      <G transform="translate(60, 190)">
        <Circle cx="0" cy="0" fill="#ffffff" r="16" stroke="#e2e8f0" strokeWidth="1.5" />
        <Circle cx="0" cy="0" fill="#fff7ed" r="12" />
        <Path d="M0 -4c-2 2.5-3.5 4.5-3.5 6.5a3.5 3.5 0 0 0 7 0C3.5 2.5 2 .5 0 -4Z" fill="#ea580c" />
        <Circle cx="11" cy="-11" fill="#ea580c" r="3.5" />
      </G>
      <G transform="translate(290, 200)">
        <Circle cx="0" cy="0" fill="#ffffff" r="16" stroke="#e2e8f0" strokeWidth="1.5" />
        <Circle cx="0" cy="0" fill="#f0fdf4" r="12" />
        <Path d="M-4 1h8M-1 -3l-3 4h4l-1 4" stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <Circle cx="11" cy="-11" fill="#16a34a" r="3.5" />
      </G>
      <G transform="translate(180, 235)">
        <Circle cx="0" cy="0" fill="#ffffff" r="10" stroke="#e2e8f0" />
        <Circle cx="0" cy="0" fill="#dc2626" r="5" />
      </G>
      <G transform="translate(180, 140)">
        <Circle cx="0" cy="0" fill="#ffffff" r="38" />
        <Circle cx="0" cy="0" fill="url(#primaryDropGrad)" r="32" />
        <Path d="M-8 -6C-12 2 -14 10 -10 16" opacity="0.5" stroke="#ffffff" strokeLinecap="round" strokeWidth="2" />
        <Path
          d="M-13 6h6l2.5-7 5 13 4-9 2.5 3h6"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </G>
    </Svg>
  );
}
