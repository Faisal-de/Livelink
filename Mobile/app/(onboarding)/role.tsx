import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { PrimaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";
import { colors } from "@/constants/tokens";
import { dashboardHref, type Role, useAuth } from "@/context/AuthContext";

const roles: { id: Role; title: string; badge: string; body: string }[] = [
  {
    id: "patient",
    title: "Patient / Family",
    badge: "I need blood",
    body: "Find verified blood support for an urgent need.",
  },
  {
    id: "donor",
    title: "Blood Donor",
    badge: "I want to donate",
    body: "Help verified patients and discover nearby donation opportunities.",
  },
  {
    id: "hospital",
    title: "Hospital / Blood Bank",
    badge: "I verify blood requests",
    body: "Verify requests and coordinate blood availability.",
  },
];

export default function RoleSelectionScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [role, setRole] = useState<Role>("donor");
  const [submitting, setSubmitting] = useState(false);

  async function continueRole() {
    if (role === "donor") {
      router.push("/(auth)/register");
      return;
    }

    setSubmitting(true);
    try {
      const nextRole = await login({ identifier: "+92 300 1234567", role });
      router.replace(dashboardHref(nextRole));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen>
      <View className="mb-6 mt-2">
        <View className="mb-3 flex-row items-center gap-2 self-start rounded-full border border-red-100 bg-white px-3 py-1.5">
          <Logo size={28} />
          <Text className="text-xs font-semibold text-slate-800">Lifelink</Text>
          <View className="h-1 w-1 rounded-full bg-slate-400" />
          <Text className="text-[11px] font-medium text-slate-500">Save Lives. Spread Smiles</Text>
        </View>
        <Text className="font-heading text-2xl text-slate-900">How will you use{"\n"}Lifelink?</Text>
        <Text className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
          Choose your role to get a personalized experience.
        </Text>
      </View>

      <View className="gap-3.5">
        {roles.map((item) => {
          const selected = role === item.id;
          return (
            <Pressable
              key={item.id}
              className={`relative flex-row items-start gap-4 rounded-2xl bg-white p-4 ${
                selected ? "border-2 border-red-600" : "border-2 border-slate-200"
              }`}
              onPress={() => setRole(item.id)}
            >
              <View
                className={`h-12 w-12 items-center justify-center rounded-xl ${
                  selected ? "border border-red-100 bg-red-50" : "border border-slate-100 bg-slate-50"
                }`}
              >
                {item.id === "donor" ? (
                  <MaterialCommunityIcons color={selected ? "#dc2626" : "#334155"} name="water" size={22} />
                ) : item.id === "hospital" ? (
                  <MaterialCommunityIcons
                    color={selected ? "#dc2626" : "#334155"}
                    name="hospital-building"
                    size={22}
                  />
                ) : (
                  <Logo size={28} />
                )}
              </View>
              <View className="flex-1 pr-7">
                <View className="flex-row flex-wrap items-center gap-2">
                  <Text className="text-base font-bold text-slate-900">{item.title}</Text>
                  <Text
                    className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold ${
                      selected
                        ? "border-red-100 bg-red-50 text-red-600"
                        : "border-slate-200 bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.badge}
                  </Text>
                </View>
                <Text className="mt-1 text-[13px] leading-snug text-slate-500">{item.body}</Text>
              </View>
              <View
                className={`absolute right-4 top-4 h-5 w-5 items-center justify-center rounded-full ${
                  selected ? "bg-red-600" : "border-2 border-slate-300 bg-white"
                }`}
              >
                {selected ? <MaterialIcons color="#fff" name="check" size={12} /> : null}
              </View>
            </Pressable>
          );
        })}
      </View>

      <View className="mt-5 flex-row items-center justify-center gap-1.5">
        <MaterialIcons color={colors.tertiary} name="verified-user" size={14} />
        <Text className="text-xs text-slate-500">You can switch or link accounts anytime in Settings</Text>
      </View>

      <View className="mt-8">
        <PrimaryButton label="Continue" loading={submitting} onPress={() => void continueRole()} />
      </View>
    </Screen>
  );
}
