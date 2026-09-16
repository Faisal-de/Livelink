import { MaterialIcons } from "@expo/vector-icons";
import { Link, type Href } from "expo-router";
import { Linking, Pressable, Text, View } from "react-native";

import { BloodChip } from "@/components/ui/BloodChip";
import { colors } from "@/constants/tokens";
import { type EmergencyRequest } from "@/constants/mock";

type EmergencyRequestCardProps = {
  request: EmergencyRequest;
  ctaLabel?: string;
  href?: Href;
};

export function EmergencyRequestCard({
  request,
  ctaLabel = "Respond to Emergency",
  href,
}: EmergencyRequestCardProps) {
  const target = href ?? (`/(donor)/opportunity/${request.id}` as Href);

  return (
    <View className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
      <View className="mb-3.5 flex-row items-center justify-between">
        <View className="flex-row items-center gap-1.5">
          <View className="h-2 w-2 rounded-full bg-primary" />
          <Text className="text-[11px] font-bold uppercase tracking-wide text-primary">
            Urgent Requirement
          </Text>
        </View>
        <View className="rounded-full bg-red-100 px-2 py-0.5">
          <Text className="text-[11px] font-bold text-primary">{request.neededIn}</Text>
        </View>
      </View>

      <View className="flex-row items-start gap-3 border-b border-slate-100 pb-3">
        <BloodChip group={request.bloodGroup} rh={request.rh} />
        <View className="min-w-0 flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-bold text-slate-900">{request.units} Units Required</Text>
            <View className="rounded-full border border-red-100 bg-red-50 px-2 py-0.5">
              <Text className="text-[11px] font-semibold text-primary">{request.status}</Text>
            </View>
          </View>
          <Text className="mt-0.5 text-xs font-medium text-slate-500">{request.product}</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between py-3.5">
        <View className="min-w-0 flex-1 flex-row items-center gap-2">
          <View className="h-6 w-6 items-center justify-center rounded-md bg-red-50">
            <MaterialIcons color={colors.primary} name="local-hospital" size={14} />
          </View>
          <View className="min-w-0">
            <Text className="truncate text-xs font-semibold text-slate-900">{request.hospital}</Text>
            <Text className="text-[11px] text-slate-500">
              {request.location} ({request.distance})
            </Text>
          </View>
        </View>
        <Pressable
          accessibilityLabel="Call Hospital"
          className="h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50"
          onPress={() => Linking.openURL("tel:1021")}
        >
          <MaterialIcons color={colors["on-surface"]} name="call" size={14} />
        </Pressable>
      </View>

      <Link href={target} asChild>
        <Pressable className="flex-row items-center justify-center gap-2 rounded-xl bg-primary py-2.5 active:scale-[0.99]">
          <Text className="text-xs font-semibold text-white">{ctaLabel}</Text>
          <MaterialIcons color="#fff" name="arrow-forward" size={16} />
        </Pressable>
      </Link>
    </View>
  );
}
