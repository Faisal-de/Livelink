import { type ReactNode } from "react";
import { Platform, View } from "react-native";

export function MobileFrame({ children }: { children: ReactNode }) {
  if (Platform.OS !== "web") {
    return <View className="flex-1">{children}</View>;
  }

  return (
    <View className="min-h-screen bg-slate-200">
      <View className="mx-auto min-h-screen w-full max-w-md flex-1 border-x border-slate-200 bg-surface shadow-xl">
        {children}
      </View>
    </View>
  );
}
