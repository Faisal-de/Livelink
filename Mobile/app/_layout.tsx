import "../nativewind-flags";
import "../global.css";

import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import {
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from "@expo-google-fonts/plus-jakarta-sans";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { AuthSplash } from "@/components/layout/AuthSplash";
import { MobileFrame } from "@/components/layout/MobileFrame";
import { AuthProvider, useAuth } from "@/context/AuthContext";

function RootStack() {
  const { isReady } = useAuth();

  if (!isReady) {
    return <AuthSplash />;
  }

  return (
    <MobileFrame>
      <StatusBar style="dark" />
      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(onboarding)" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(patient)" />
          <Stack.Screen name="(donor)" />
          <Stack.Screen name="(hospital)" />
        </Stack>
      </View>
    </MobileFrame>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <View className="flex-1 bg-surface" />;
  }

  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}
