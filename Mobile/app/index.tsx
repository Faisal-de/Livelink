import { Redirect } from "expo-router";

import { AuthSplash } from "@/components/layout/AuthSplash";
import { dashboardHref, useAuth } from "@/context/AuthContext";

export default function Index() {
  const { isReady, isAuthenticated, role } = useAuth();

  if (!isReady) return <AuthSplash />;
  if (!isAuthenticated) return <Redirect href="/(auth)/welcome" />;
  return <Redirect href={dashboardHref(role)} />;
}
