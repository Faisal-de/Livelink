import { useRouter } from "expo-router";
import { useMemo, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { BackButton } from "@/components/ui/BackButton";
import { PrimaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";
import { donor } from "@/constants/mock";
import { dashboardHref, useAuth } from "@/context/AuthContext";

export default function OtpScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState("582");
  const [submitting, setSubmitting] = useState(false);
  const digits = useMemo(() => Array.from({ length: 6 }, (_, index) => code[index] ?? ""), [code]);

  async function onVerify() {
    setSubmitting(true);
    try {
      const role = await login({ identifier: donor.phone });
      router.replace(dashboardHref(role));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen>
      <View className="flex-row items-center justify-between py-4">
        <BackButton />
        <View className="flex-row items-center gap-1 rounded-full bg-white px-3 py-1">
          <View className="h-2 w-2 rounded-full bg-primary" />
          <Text className="font-label-md text-label-md text-on-surface">Lifelink Healthcare Network</Text>
        </View>
        <View className="h-10 w-10" />
      </View>

      <View className="mb-6 items-center">
        <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-primary-fixed">
          <View className="h-14 w-14 items-center justify-center rounded-full bg-white">
            <Logo size={40} />
          </View>
        </View>
        <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
          Verify your phone
        </Text>
        <Text className="mt-1 text-center font-body-md text-body-md text-secondary">
          We sent a 6-digit emergency verification code to
        </Text>
        <Text className="mt-1 font-label-lg text-label-lg text-on-surface">{donor.phone}</Text>
      </View>

      <View className="rounded-xl bg-white p-6">
        <Text className="mb-4 font-label-md text-label-md uppercase text-secondary">SMS Security Code</Text>
        <Pressable className="mb-6 flex-row justify-between" onPress={() => inputRef.current?.focus()}>
          {digits.map((digit, index) => (
            <View
              key={index}
              className={`h-14 w-12 items-center justify-center rounded-lg ${
                digit ? "bg-surface-container-low" : "bg-surface-container"
              }`}
            >
              <Text className="font-headline-md text-headline-md text-on-surface">{digit || "•"}</Text>
            </View>
          ))}
        </Pressable>
        <TextInput
          ref={inputRef}
          className="h-0 w-0"
          keyboardType="numeric"
          maxLength={6}
          onChangeText={setCode}
          value={code}
        />
        <PrimaryButton label="Verify & Continue" loading={submitting} onPress={() => void onVerify()} />
      </View>
    </Screen>
  );
}
