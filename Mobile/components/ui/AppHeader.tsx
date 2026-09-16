import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { colors } from "@/constants/tokens";
import { donor } from "@/constants/mock";

export function AppHeader() {
  return (
    <View className="flex-row items-center justify-between border-b border-slate-100 bg-surface pb-2.5 pt-1">
      <View className="flex-row items-center gap-2.5">
        <View className="h-9 w-9 items-center justify-center rounded-full border border-red-100 bg-red-50">
          <Logo size={28} />
        </View>
        <View>
          <Text className="font-heading text-[17px] leading-tight text-primary">Lifelink</Text>
          <Text className="text-[11px] font-medium text-slate-500">Save Lives. Spread Smiles.</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <Link href="/(donor)/(tabs)/alerts" asChild>
          <Pressable
            accessibilityLabel="Notifications"
            className="relative h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white"
          >
            <MaterialIcons color={colors["on-surface"]} name="notifications-none" size={18} />
            <View className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
          </Pressable>
        </Link>
        <Link href="/(donor)/(tabs)/profile" asChild>
          <Pressable
            accessibilityLabel="User Profile"
            className="h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-200"
          >
            <Text className="text-xs font-semibold text-slate-700">{donor.initials}</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
