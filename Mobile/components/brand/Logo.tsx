import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

type LogoProps = {
  size?: number;
};

/** Local recreation of Stitch `blood_response_logo` (crimson drop + ECG pulse). */
export function Logo({ size = 64 }: LogoProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Defs>
        <LinearGradient
          id="lifelinkDropGrad"
          x1="20"
          y1="10"
          x2="80"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#EF4444" />
          <Stop offset="60%" stopColor="#DC2626" />
          <Stop offset="100%" stopColor="#B91C1C" />
        </LinearGradient>
      </Defs>
      <Path
        d="M50 8C50 8 20 44 20 62C20 78.5685 33.4315 92 50 92C66.5685 92 80 78.5685 80 62C80 44 50 8 50 8Z"
        fill="url(#lifelinkDropGrad)"
      />
      <Path
        d="M30 55C30 45 38 35 46 25"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity={0.45}
      />
      <Path
        d="M36 64H44L47 57L52 71L56 61L59 64H64"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
