import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { NetworkGraphic } from "@/components/brand/NetworkGraphic";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="mt-2 items-center">
        <View className="flex-row items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5">
          <Logo size={28} />
          <Text className="text-xs font-bold text-slate-800">Lifelink</Text>
          <View className="h-1 w-1 rounded-full bg-slate-300" />
          <Text className="text-xs font-semibold text-slate-700">Save Lives. Spread Smiles</Text>
        </View>
        <Text className="mt-4 text-center font-heading text-[32px] leading-[38px] text-slate-900">
          Every second matters.
        </Text>
        <Text className="mt-2 max-w-[290px] text-center text-sm leading-relaxed text-slate-500">
          Connect verified blood requests with compatible donors and participating blood banks.
        </Text>
      </View>

      <View className="my-3 items-center">
        <NetworkGraphic height={220} width={280} />
        <View className="mt-2 flex-row items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
          <View className="h-2 w-2 rounded-full bg-red-600" />
          <Text className="text-[11px] font-bold uppercase tracking-wider text-red-700">
            Live triage active
          </Text>
        </View>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 flex-row items-center gap-2.5 rounded-2xl border border-slate-100 bg-white p-3">
          <View className="h-9 w-9 items-center justify-center rounded-xl bg-rose-50">
            <MaterialIcons color="#dc2626" name="bolt" size={18} />
          </View>
          <View>
            <Text className="text-[13px] font-bold text-slate-800">&lt; 15 Min</Text>
            <Text className="text-[11px] text-slate-500">Rapid Dispatch</Text>
          </View>
        </View>
        <View className="flex-1 flex-row items-center gap-2.5 rounded-2xl border border-slate-100 bg-white p-3">
          <View className="h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
            <MaterialIcons color="#059669" name="verified" size={18} />
          </View>
          <View>
            <Text className="text-[13px] font-bold text-slate-800">100% Certified</Text>
            <Text className="text-[11px] text-slate-500">Blood Centers</Text>
          </View>
        </View>
      </View>

      <View className="mt-4 gap-2.5">
        <PrimaryButton label="Get Started" onPress={() => router.push("/(auth)/register")} />
        <SecondaryButton
          label="I already have an account"
          onPress={() => router.push("/(auth)/login")}
        />
        <Text className="mt-2 text-center text-xs text-slate-500">Be the saviour for someone</Text>
      </View>
    </Screen>
  );
}
