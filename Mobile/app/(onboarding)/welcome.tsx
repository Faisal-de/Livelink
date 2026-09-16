import { Redirect } from "expo-router";

export default function OnboardingWelcomeRedirect() {
  return <Redirect href="/(auth)/welcome" />;
}
