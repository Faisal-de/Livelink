import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { BackButton } from "@/components/ui/BackButton";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";
import { urgentRequest } from "@/constants/mock";

export default function DonorOpportunityRespondScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-row items-center justify-between pt-2">
        <BackButton />
        <Text className="font-heading text-base text-slate-900">Confirm response</Text>
        <View className="h-10 w-10" />
      </View>
      <View className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <Text className="text-lg font-bold text-slate-900">You are about to respond</Text>
        <Text className="mt-2 text-sm leading-relaxed text-slate-500">
          {urgentRequest.units} units of {urgentRequest.bloodGroup} at {urgentRequest.hospital}. The
          hospital coordinator will see your availability immediately.
        </Text>
      </View>
      <View className="mt-4 gap-2.5">
        <PrimaryButton
          label="Confirm response"
          onPress={() => router.push("/(donor)/opportunity/confirmation")}
        />
        <SecondaryButton label="Not now" onPress={() => router.back()} />
      </View>
    </Screen>
  );
}
