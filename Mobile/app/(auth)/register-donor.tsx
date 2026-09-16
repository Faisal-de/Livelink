import { Redirect } from "expo-router";

export default function RegisterDonorRedirect() {
  return <Redirect href="/(auth)/register" />;
}
