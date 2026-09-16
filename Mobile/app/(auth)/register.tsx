import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { Logo } from "@/components/brand/Logo";
import { BackButton } from "@/components/ui/BackButton";
import { PrimaryButton } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";
import { TextField } from "@/components/ui/TextField";
import { dashboardHref, useAuth } from "@/context/AuthContext";
import { colors } from "@/constants/tokens";

const groups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

type FieldErrors = {
  name?: string;
  phone?: string;
  bloodGroup?: string;
};

export default function RegisterScreen() {
  const router = useRouter();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit() {
    const nextErrors: FieldErrors = {};
    if (!name.trim()) nextErrors.name = "Enter your full name.";
    if (!phone.trim()) nextErrors.phone = "Enter your phone number.";
    if (!group) nextErrors.bloodGroup = "Select your blood group.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const role = await register({
        name,
        phone,
        email: email.trim() || undefined,
        bloodGroup: group,
        city: city.trim() || undefined,
        role: "donor",
      });
      router.replace(dashboardHref(role));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen>
      <View className="flex-row items-center justify-between pt-2 pb-5">
        <BackButton />
        <View className="flex-row items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1">
          <Logo size={20} />
          <Text className="text-[10px] font-bold uppercase text-gray-800">
            Lifelink Healthcare Network
          </Text>
        </View>
        <MaterialIcons color={colors.secondary} name="verified-user" size={18} />
      </View>

      <View className="mb-5 items-center">
        <View className="mb-3 h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50">
          <Logo size={40} />
        </View>
        <Text className="text-[21px] font-bold text-gray-900">Create Donor Account</Text>
        <Text className="mt-1 max-w-[280px] text-center text-[12.5px] leading-snug text-gray-500">
          Join as a verified life saver to respond to emergency blood requests.
        </Text>
      </View>

      <View className="gap-3.5">
        <TextField
          error={errors.name}
          icon={<MaterialIcons color="#9ca3af" name="person-outline" size={18} />}
          label="Full Name"
          onChangeText={(value) => {
            setName(value);
            setErrors((current) => ({ ...current, name: undefined }));
          }}
          placeholder="e.g. Tariq Mehmood"
          value={name}
        />
        <TextField
          error={errors.phone}
          icon={<Text className="text-sm">🇵🇰</Text>}
          keyboardType="phone-pad"
          label="Phone Number"
          onChangeText={(value) => {
            setPhone(value);
            setErrors((current) => ({ ...current, phone: undefined }));
          }}
          placeholder="300 1234567"
          value={phone}
        />
        <TextField
          icon={<MaterialIcons color="#9ca3af" name="location-city" size={18} />}
          label="City"
          onChangeText={setCity}
          placeholder="e.g. Lahore"
          value={city}
        />
        <TextField
          icon={<MaterialIcons color="#9ca3af" name="mail-outline" size={18} />}
          keyboardType="email-address"
          label="Email Address"
          onChangeText={setEmail}
          placeholder="name@example.com"
          value={email}
        />
        <Text className="font-label-md text-label-md text-on-surface">Blood Group</Text>
        <View className="flex-row flex-wrap gap-2">
          {groups.map((item) => (
            <Pressable
              key={item}
              className={`rounded-xl border px-3 py-2 ${
                group === item ? "border-primary bg-red-50" : "border-slate-200 bg-white"
              }`}
              onPress={() => {
                setGroup(item);
                setErrors((current) => ({ ...current, bloodGroup: undefined }));
              }}
            >
              <Text className={`text-sm font-bold ${group === item ? "text-primary" : "text-slate-700"}`}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        {errors.bloodGroup ? (
          <Text className="font-body-sm text-body-sm text-primary">{errors.bloodGroup}</Text>
        ) : null}
        <PrimaryButton label="Create account" loading={submitting} onPress={() => void onSubmit()} />
      </View>
    </Screen>
  );
}
