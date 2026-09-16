import { type ReactNode } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

type ButtonProps = {
  label: string;
  onPress?: () => void;
  icon?: ReactNode;
  loading?: boolean;
};

export function PrimaryButton({ label, onPress, icon, loading }: ButtonProps) {
  return (
    <Pressable
      className="h-12 flex-row items-center justify-center gap-2 rounded-xl bg-primary-container active:scale-[0.98]"
      disabled={loading}
      onPress={onPress}
    >
      {loading ? <ActivityIndicator color="#fff" /> : null}
      <Text className="font-label-lg text-label-lg text-on-primary">{label}</Text>
      {icon}
    </Pressable>
  );
}

export function SecondaryButton({ label, onPress }: ButtonProps) {
  return (
    <Pressable
      className="h-12 items-center justify-center rounded-xl border border-slate-200 bg-white active:bg-slate-50"
      onPress={onPress}
    >
      <Text className="font-label-lg text-label-lg text-on-surface">{label}</Text>
    </Pressable>
  );
}
