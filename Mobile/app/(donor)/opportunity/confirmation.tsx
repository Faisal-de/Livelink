import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { PrimaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";

export default function DonorResponseConfirmationScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="mt-10 items-center">
        <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
          <Logo size={48} />
        </View>
        <Text className="text-center font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
          Response confirmed
        </Text>
        <Text className="mt-2 max-w-xs text-center font-body-sm text-body-sm text-secondary">
          The hospital and patient network have been notified. Follow dispatch instructions and keep
          your phone available.
        </Text>
      </View>
      <View className="mt-8">
        <PrimaryButton label="Return to home" onPress={() => router.replace("/(donor)/(tabs)")} />
      </View>
    </Screen>
  );
}
