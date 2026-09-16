import Svg, { Path } from "react-native-svg";
import { Text, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { Screen } from "@/components/ui/Screen";

export default function SplashScreen() {
  return (
    <Screen>
      <View className="min-h-[640px] items-center justify-between py-8">
        <View />
        <View className="items-center">
          <View className="mb-7 h-28 w-28 items-center justify-center rounded-3xl border border-red-100 bg-white">
            <Logo size={64} />
          </View>
          <Text className="font-heading text-3xl text-slate-900">Lifelink</Text>
          <View className="mt-2 flex-row items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
            <View className="h-1.5 w-1.5 rounded-full bg-red-600" />
            <Text className="text-xs font-semibold text-red-700">Save lives, spread smiles</Text>
          </View>
          <Text className="mt-3 max-w-[250px] text-center text-[13px] font-medium leading-relaxed text-slate-500">
            Immediate life-saving blood mobilization & donor dispatch system
          </Text>
        </View>
        <View className="items-center gap-2.5">
          <Svg fill="none" height={20} viewBox="0 0 100 24" width={80}>
            <Path
              d="M0 12H30L36 5L42 19L48 8L53 15L57 12H100"
              stroke="#E2E8F0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <Path
              d="M0 12H30L36 5L42 19L48 8L53 15L57 12H100"
              stroke="#DC2626"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </Svg>
          <Text className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Connecting Network
          </Text>
          <Text className="text-[10px] font-medium text-slate-400">
            Secured Healthcare Emergency Protocol • v2.4
          </Text>
        </View>
      </View>
    </Screen>
  );
}
