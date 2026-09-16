import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Linking, Pressable, Text, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { BackButton } from "@/components/ui/BackButton";
import { PrimaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";
import { TextField } from "@/components/ui/TextField";
import { dashboardHref, useAuth } from "@/context/AuthContext";
import { colors } from "@/constants/tokens";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[\d\s-]{10,}$/;

function isValidIdentifier(value: string) {
  const trimmed = value.trim();
  return emailPattern.test(trimmed) || phonePattern.test(trimmed);
}

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState("");
  const [forgotHint, setForgotHint] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSignIn() {
    const nextIdentifier = identifier.trim();
    const nextPassword = password.trim();
    if (!nextIdentifier || !nextPassword) {
      setError("Enter your phone or email and password.");
      return;
    }
    if (!isValidIdentifier(nextIdentifier)) {
      setError("Enter a valid email or phone number.");
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const role = await login({ identifier: nextIdentifier, password: nextPassword });
      router.replace(dashboardHref(role));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen>
      <View className="flex-row items-center justify-between pt-2">
        <BackButton />
        <View className="flex-row items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1.5">
          <View className="h-2 w-2 rounded-full bg-primary" />
          <Text className="font-label-md text-label-md text-on-secondary-container">
            Save lives, spread smiles
          </Text>
        </View>
      </View>

      <View className="items-center pt-4">
        <View className="mb-3 h-20 w-20 items-center justify-center rounded-2xl bg-white">
          <Logo size={40} />
        </View>
        <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Welcome back</Text>
        <Text className="mt-1 font-body-sm text-body-sm text-secondary">
          Sign in to continue to your Lifelink account
        </Text>
      </View>

      <View className="mt-5 gap-4 rounded-2xl bg-white p-6">
        <TextField
          icon={<MaterialIcons color={colors.secondary} name="alternate-email" size={20} />}
          label="Phone or Email"
          onChangeText={(value) => {
            setIdentifier(value);
            setError("");
          }}
          placeholder="e.g. name@example.com or +92 300 1234567"
          value={identifier}
        />
        <TextField
          icon={<MaterialIcons color={colors.secondary} name="lock" size={20} />}
          label="Password"
          onChangeText={(value) => {
            setPassword(value);
            setError("");
          }}
          placeholder="Enter your password"
          right={
            <Pressable onPress={() => setHidden((value) => !value)}>
              <MaterialIcons
                color={colors.secondary}
                name={hidden ? "visibility" : "visibility-off"}
                size={20}
              />
            </Pressable>
          }
          secureTextEntry={hidden}
          value={password}
        />
        {error ? <Text className="font-body-sm text-body-sm text-primary">{error}</Text> : null}
        <Pressable onPress={() => setForgotHint(true)}>
          <Text className="text-right font-label-md text-label-md text-primary">Forgot password?</Text>
        </Pressable>
        {forgotHint ? (
          <Text className="font-body-sm text-body-sm text-secondary">
            Password reset is not available in this demo. Use Sign In or Continue with OTP.
          </Text>
        ) : null}
        <PrimaryButton label="Sign In" loading={submitting} onPress={() => void onSignIn()} />
        <Text className="text-center font-label-md text-label-md uppercase text-secondary">or</Text>
        <Pressable
          className="h-12 flex-row items-center justify-center gap-2 rounded-xl bg-surface-container-low"
          onPress={() => router.push("/(auth)/otp")}
        >
          <MaterialIcons color={colors.primary} name="smartphone" size={20} />
          <Text className="font-label-lg text-label-lg text-on-surface">Continue with Phone / OTP</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/(auth)/register")}>
          <Text className="text-center font-label-md text-label-md text-secondary">
            New here? <Text className="font-bold text-primary">Sign up</Text>
          </Text>
        </Pressable>
      </View>

      <View className="mt-4 flex-row items-center justify-between rounded-xl bg-secondary-container p-3.5">
        <View className="flex-row items-center gap-2.5">
          <View className="h-8 w-8 items-center justify-center rounded-full bg-primary-container">
            <MaterialIcons color="#fff" name="emergency" size={16} />
          </View>
          <View>
            <Text className="font-label-md text-label-md text-on-surface">Urgent requirement?</Text>
            <Text className="font-body-sm text-body-sm text-secondary">Call Emergency Response 1021</Text>
          </View>
        </View>
        <Pressable
          className="flex-row items-center gap-1 rounded-lg bg-primary px-3 py-1.5"
          onPress={() => Linking.openURL("tel:1021")}
        >
          <MaterialIcons color="#fff" name="call" size={16} />
          <Text className="font-label-md text-label-md text-on-primary">Call</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
