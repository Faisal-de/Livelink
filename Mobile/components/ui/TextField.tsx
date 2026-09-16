import { type ReactNode } from "react";
import { Text, TextInput, View } from "react-native";

type TextFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  icon?: ReactNode;
  right?: ReactNode;
  error?: string;
  keyboardType?: "default" | "email-address" | "phone-pad" | "numeric";
};

export function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  icon,
  right,
  error,
  keyboardType = "default",
}: TextFieldProps) {
  return (
    <View className="gap-1.5">
      <Text className="font-label-md text-label-md text-on-surface">{label}</Text>
      <View
        className={`h-12 flex-row items-center rounded-lg bg-surface-container-low px-3 ${
          error ? "border border-primary" : ""
        }`}
      >
        {icon}
        <TextInput
          autoCapitalize="none"
          className="ml-2 flex-1 font-body-sm text-body-sm text-on-surface"
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#6e595a"
          secureTextEntry={secureTextEntry}
          value={value}
        />
        {right}
      </View>
      {error ? <Text className="font-body-sm text-body-sm text-primary">{error}</Text> : null}
    </View>
  );
}
