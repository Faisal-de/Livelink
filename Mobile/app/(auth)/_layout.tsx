import { Redirect, Stack } from "expo-router";

import { AuthSplash } from "@/components/layout/AuthSplash";
import { dashboardHref, useAuth } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isReady, isAuthenticated, role } = useAuth();

  if (!isReady) return <AuthSplash />;
  if (isAuthenticated) return <Redirect href={dashboardHref(role)} />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
