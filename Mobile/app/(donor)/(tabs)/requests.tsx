import { Text, View } from "react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { EmergencyRequestCard } from "@/components/ui/EmergencyRequestCard";
import { Screen } from "@/components/ui/Screen";
import { emergencyRequests } from "@/constants/mock";

export default function DonorRequestsScreen() {
  return (
    <Screen>
      <AppHeader />
      <View className="mt-3.5">
        <Text className="text-[17px] font-bold text-slate-900">Emergency opportunities</Text>
        <Text className="mt-1 text-xs text-slate-500">
          Verified requests matching your blood group and location.
        </Text>
      </View>
      <View className="mt-3.5 gap-3.5">
        {emergencyRequests.map((request) => (
          <EmergencyRequestCard key={request.id} request={request} />
        ))}
      </View>
    </Screen>
  );
}
