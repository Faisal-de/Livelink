import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

import { colors } from "@/constants/tokens";

export function BackButton() {
  const router = useRouter();

  if (!router.canGoBack()) {
    return <View className="h-10 w-10" />;
  }

  return (
    <Pressable
      accessibilityLabel="Go back"
      className="h-10 w-10 items-center justify-center rounded-full bg-white"
      onPress={() => router.back()}
    >
      <MaterialIcons color={colors["on-surface"]} name="arrow-back" size={20} />
    </Pressable>
  );
}
