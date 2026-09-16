import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Linking, Pressable, Text, View } from "react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { EmergencyRequestCard } from "@/components/ui/EmergencyRequestCard";
import { Screen } from "@/components/ui/Screen";
import { activity, donor, urgentRequest } from "@/constants/mock";
import { colors } from "@/constants/tokens";

export default function DonorHomeScreen() {
  return (
    <Screen>
      <AppHeader />
      <View className="mt-3.5 flex-row items-center justify-between">
        <View>
          <Text className="text-[17px] font-bold text-slate-900">Donor Dashboard</Text>
          <Text className="text-[11px] font-medium text-slate-500">Ref: {donor.ref}</Text>
        </View>
        <View className="flex-row items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-2.5 py-1">
          <View className="h-2 w-2 rounded-full bg-emerald-500" />
          <Text className="text-xs font-semibold text-emerald-700">Available</Text>
        </View>
      </View>

      <View className="mt-3.5 flex-row items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
        <View className="flex-row items-center gap-2.5">
          <View className="h-8 w-8 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50">
            <MaterialIcons color="#059669" name="check-circle" size={16} />
          </View>
          <View>
            <Text className="text-xs font-semibold text-slate-900">Ready for Instant Dispatch</Text>
            <Text className="text-[11px] text-slate-500">Broadcast Radius: {donor.radius}</Text>
          </View>
        </View>
        <View className="rounded-md bg-slate-100 px-2 py-0.5">
          <Text className="text-[11px] font-semibold text-slate-600">{donor.hub}</Text>
        </View>
      </View>

      <View className="mt-3.5 flex-row items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-3">
        <Text className="text-base">💡</Text>
        <Text className="flex-1 text-xs font-medium leading-snug text-amber-900">
          <Text className="font-bold">You are eligible to donate today. </Text>
          Your last voluntary donation was completed 92 days ago.
        </Text>
      </View>

      <View className="mt-3.5">
        <EmergencyRequestCard request={urgentRequest} />
      </View>

      <View className="mt-3.5 flex-row gap-2.5">
        <Pressable className="flex-1 rounded-xl border border-slate-200 bg-white p-3">
          <View className="mb-2 h-7 w-7 items-center justify-center rounded-lg bg-red-50">
            <MaterialIcons color={colors.primary} name="place" size={16} />
          </View>
          <Text className="text-xs font-semibold text-slate-800">Find Blood Banks</Text>
          <Text className="mt-0.5 text-[11px] text-slate-500">8 certified within 10km</Text>
        </Pressable>
        <Link href="/(donor)/history" asChild>
          <Pressable className="flex-1 rounded-xl border border-slate-200 bg-white p-3">
            <View className="mb-2 h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
              <MaterialIcons color="#2563eb" name="event" size={16} />
            </View>
            <Text className="text-xs font-semibold text-slate-800">Schedule Donation</Text>
            <Text className="mt-0.5 text-[11px] text-slate-500">Select preferred slot</Text>
          </Pressable>
        </Link>
      </View>

      <View className="mt-3.5 rounded-2xl border border-slate-200 bg-white p-4">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-xs font-bold text-slate-900">Recent Activity</Text>
          <Text className="text-[11px] font-semibold text-emerald-600">Verified Log</Text>
        </View>
        {activity.map((item, index) => (
          <View key={item.title}>
            {index > 0 ? <View className="my-3 border-t border-slate-100" /> : null}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2.5">
                <View
                  className={`h-7 w-7 items-center justify-center rounded-full ${
                    item.tone === "success" ? "bg-emerald-50" : "bg-slate-100"
                  }`}
                >
                  <MaterialIcons
                    color={item.tone === "success" ? "#059669" : "#475569"}
                    name={item.tone === "success" ? "check" : "visibility"}
                    size={14}
                  />
                </View>
                <View>
                  <Text className="text-xs font-medium text-slate-800">{item.title}</Text>
                  <Text className="text-[11px] text-slate-500">{item.detail}</Text>
                </View>
              </View>
              <Text className="text-[11px] font-medium text-slate-400">{item.time}</Text>
            </View>
          </View>
        ))}
      </View>

      <View className="mt-3 flex-row items-center justify-between px-1 py-1">
        <Text className="text-[11px] font-medium text-slate-600">Need urgent assistance?</Text>
        <Pressable onPress={() => Linking.openURL("tel:1021")}>
          <Text className="text-[11px] font-bold text-primary">Call 1021 Dispatch</Text>
        </Pressable>
      </View>
      <Text className="mt-2 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        256-Bit Encrypted Healthcare Network
      </Text>
    </Screen>
  );
}
