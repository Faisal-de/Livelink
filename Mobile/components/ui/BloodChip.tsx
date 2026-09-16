import { Text, View } from "react-native";

type BloodChipProps = {
  group: string;
  rh?: string;
};

export function BloodChip({ group, rh }: BloodChipProps) {
  return (
    <View className="items-center justify-center rounded-xl border border-red-100 bg-red-50 px-2.5 py-1.5">
      <Text className="font-heading text-base leading-none text-primary">{group}</Text>
      {rh ? <Text className="mt-0.5 text-[9px] font-bold text-primary">{rh}</Text> : null}
    </View>
  );
}
