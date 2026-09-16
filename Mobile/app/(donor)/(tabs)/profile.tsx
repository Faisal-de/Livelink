import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Linking, Pressable, Text, View } from "react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { Screen } from "@/components/ui/Screen";
import { donor } from "@/constants/mock";
import { colors } from "@/constants/tokens";
import { useAuth } from "@/context/AuthContext";

export default function DonorProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const name = user?.name ?? donor.name;
  const phone = user?.phone ?? donor.phone;
  const email = user?.email ?? donor.email;
  const bloodGroup = user?.bloodGroup ?? donor.bloodGroup;
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  async function onSignOut() {
    setSigningOut(true);
    try {
      await logout();
      router.replace("/(auth)/welcome");
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <Screen>
      <AppHeader />
      <View className="mt-3.5 flex-row items-center justify-between">
        <View className="items-center flex-1">
          <Text className="text-[17.5px] font-bold text-gray-900">Donor Profile</Text>
          <Text className="text-[12px] font-medium text-slate-500">Ref: {donor.ref}</Text>
        </View>
        <View className="rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
          <Text className="text-xs font-semibold text-primary">Edit</Text>
        </View>
      </View>

      <View className="mt-3 rounded-2xl border border-slate-100 bg-white p-4">
        <View className="flex-row items-center gap-3.5">
          <View className="h-16 w-16 items-center justify-center rounded-full border border-red-100 bg-red-50">
            <Text className="text-xl font-bold text-primary">{initials || "TM"}</Text>
          </View>
          <View className="flex-1">
            <View className="flex-row flex-wrap items-center gap-2">
              <Text className="text-[17px] font-bold text-gray-900">{name}</Text>
              <View className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5">
                <Text className="text-[11px] font-semibold text-emerald-800">Verified</Text>
              </View>
            </View>
            <Text className="mt-1 text-[13px] font-medium text-slate-500">
              Blood Donor • <Text className="font-bold text-primary">{bloodGroup}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-3.5 rounded-2xl border border-slate-100 bg-white p-4">
        <Text className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Assigned desk</Text>
        <Text className="mt-1 text-[13.5px] font-bold text-gray-900">Lifelink Emergency Response</Text>
        <Pressable
          className="mt-3 flex-row items-center justify-center gap-2 rounded-xl bg-primary py-3"
          onPress={() => Linking.openURL("tel:1021")}
        >
          <MaterialIcons color="#fff" name="call" size={16} />
          <Text className="text-[14px] font-bold text-white">Emergency Hotline: 1021</Text>
        </Pressable>
      </View>

      <View className="mt-3.5 rounded-2xl border border-slate-100 bg-white p-4">
        <Text className="mb-3 text-[14px] font-bold text-gray-900">Personal Information</Text>
        <View className="flex-row justify-between py-2">
          <Text className="font-medium text-slate-500">Phone</Text>
          <Text className="font-semibold text-gray-900">{phone}</Text>
        </View>
        <View className="flex-row justify-between py-2">
          <Text className="font-medium text-slate-500">Email</Text>
          <Text className="font-semibold text-gray-900">{email}</Text>
        </View>
        <View className="flex-row justify-between py-2">
          <Text className="font-medium text-slate-500">Hub</Text>
          <Text className="font-semibold text-gray-900">{user?.city ?? donor.hub}</Text>
        </View>
      </View>

      <Link href="/(donor)/history" asChild>
        <Pressable className="mt-3.5 flex-row items-center justify-between rounded-2xl border border-slate-100 bg-white p-4">
          <Text className="text-[14px] font-bold text-gray-900">Donation history</Text>
          <MaterialIcons color={colors.primary} name="chevron-right" size={22} />
        </Pressable>
      </Link>

      <Pressable
        className="mt-3.5 items-center rounded-2xl border border-red-200 bg-white py-3.5"
        disabled={signingOut}
        onPress={() => void onSignOut()}
      >
        <Text className="text-[14px] font-bold text-primary">{signingOut ? "Signing out..." : "Sign Out"}</Text>
      </Pressable>
    </Screen>
  );
}
