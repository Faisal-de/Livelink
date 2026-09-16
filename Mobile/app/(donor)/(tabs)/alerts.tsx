import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { Screen } from "@/components/ui/Screen";
import { notifications as seed } from "@/constants/mock";

const filters = ["All", "Unread", "Emergency", "System"] as const;

export default function DonorAlertsScreen() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = seed.filter((item) => {
    if (filter === "Unread") return item.unread;
    if (filter === "Emergency") return item.tag.includes("Emergency");
    if (filter === "System") return item.tag === "System";
    return true;
  });

  return (
    <Screen>
      <AppHeader />
      <View className="mt-3 flex-row items-center justify-between">
        <View>
          <Text className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Lifelink notifications
          </Text>
          <Text className="text-xl font-bold text-gray-900">Notifications</Text>
        </View>
        <View className="flex-row items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
          <Text className="text-xs font-semibold text-gray-700">Mark read</Text>
          <View className="rounded-full bg-primary px-1.5">
            <Text className="text-[10px] font-bold text-white">2</Text>
          </View>
        </View>
      </View>

      <View className="mt-3 flex-row gap-2">
        {filters.map((item) => (
          <Pressable
            key={item}
            className={`rounded-full px-3.5 py-1.5 ${
              filter === item ? "bg-primary" : "border border-gray-200 bg-white"
            }`}
            onPress={() => setFilter(item)}
          >
            <Text className={`text-xs font-semibold ${filter === item ? "text-white" : "text-gray-700"}`}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <View className="mt-3 gap-3">
        {items.map((item) => (
          <View
            key={item.id}
            className={`rounded-2xl border border-gray-200 bg-white p-4 ${
              item.unread ? "border-l-4 border-l-primary" : ""
            }`}
          >
            <View className="mb-2 flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="rounded-full bg-red-100 px-2 py-0.5">
                  <Text className="text-[10px] font-bold uppercase text-red-800">{item.tag}</Text>
                </View>
                <Text className="text-[11px] text-gray-400">{item.time}</Text>
              </View>
              {item.unread ? <View className="h-2 w-2 rounded-full bg-primary" /> : null}
            </View>
            <Text className="text-sm font-bold text-gray-900">{item.title}</Text>
            <Text className="mt-1 text-xs leading-relaxed text-gray-600">{item.body}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}
