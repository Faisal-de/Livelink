import { Redirect, Stack } from "expo-router";

import { AuthSplash } from "@/components/layout/AuthSplash";
import { useAuth } from "@/context/AuthContext";

export default function PatientLayout() {
  const { isReady, isAuthenticated } = useAuth();

  if (!isReady) return <AuthSplash />;
  if (!isAuthenticated) return <Redirect href="/(auth)/welcome" />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
