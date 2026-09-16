import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not found", headerShown: true }} />
      <View className="flex-1 items-center justify-center bg-surface px-gutter-mobile">
        <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
          Screen not found
        </Text>
        <Link href="/" className="mt-space-md">
          <Text className="font-label-lg text-label-lg text-primary">Go to splash</Text>
        </Link>
      </View>
    </>
  );
}
