import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Linking, Pressable, Text, View } from "react-native";

import { BackButton } from "@/components/ui/BackButton";
import { BloodChip } from "@/components/ui/BloodChip";
import { PrimaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";
import { emergencyRequests, urgentRequest } from "@/constants/mock";
import { colors } from "@/constants/tokens";

export default function DonorOpportunityScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const request = emergencyRequests.find((item) => item.id === id) ?? urgentRequest;

  return (
    <Screen>
      <View className="flex-row items-center justify-between pt-2">
        <BackButton />
        <Text className="font-heading text-base text-slate-900">Emergency opportunity</Text>
        <View className="h-10 w-10" />
      </View>

      <View className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-[11px] font-bold uppercase tracking-wide text-primary">
            Urgent Requirement
          </Text>
          <Text className="rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-bold text-primary">
            {request.neededIn}
          </Text>
        </View>
        <View className="flex-row items-start gap-3">
          <BloodChip group={request.bloodGroup} rh={request.rh} />
          <View className="flex-1">
            <Text className="text-lg font-bold text-slate-900">{request.units} units required</Text>
            <Text className="mt-1 text-sm text-slate-500">{request.product}</Text>
            <Text className="mt-2 text-sm font-semibold text-slate-900">{request.hospital}</Text>
            <Text className="text-xs text-slate-500">
              {request.location} ({request.distance})
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-3.5 rounded-2xl border border-slate-200 bg-white p-4">
        <Text className="text-sm font-bold text-slate-900">What happens next</Text>
        <Text className="mt-2 text-xs leading-relaxed text-slate-500">
          Confirm you can reach the blood bank. Dispatch will notify the hospital and keep your
          response on the verified log.
        </Text>
      </View>

      <View className="mt-4 gap-2.5">
        <PrimaryButton
          label="I'm available"
          onPress={() => router.push("/(donor)/opportunity/respond")}
        />
        <Pressable
          className="h-12 flex-row items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white"
          onPress={() => Linking.openURL("tel:1021")}
        >
          <MaterialIcons color={colors.primary} name="call" size={18} />
          <Text className="font-label-lg text-label-lg text-on-surface">Call 1021</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
