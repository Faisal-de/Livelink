import { Text, View } from "react-native";

import { BackButton } from "@/components/ui/BackButton";
import { Screen } from "@/components/ui/Screen";
import { donations } from "@/constants/mock";

export default function DonorDonationHistoryScreen() {
  return (
    <Screen>
      <View className="flex-row items-center justify-between pt-2">
        <BackButton />
        <Text className="font-heading text-base text-slate-900">Donation history</Text>
        <View className="h-10 w-10" />
      </View>
      <View className="mt-4 gap-3">
        {donations.map((item) => (
          <View key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-sm font-bold text-slate-900">{item.place}</Text>
              <View className="rounded-full bg-emerald-50 px-2 py-0.5">
                <Text className="text-[11px] font-semibold text-emerald-700">{item.status}</Text>
              </View>
            </View>
            <Text className="mt-1 text-xs text-slate-500">{item.units}</Text>
            <Text className="mt-1 text-[11px] text-slate-400">{item.date}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}
