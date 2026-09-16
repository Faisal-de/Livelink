import { type ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
};

export function Screen({ children, scroll = true }: ScreenProps) {
  if (!scroll) {
    return <SafeAreaView className="flex-1 bg-surface">{children}</SafeAreaView>;
  }

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pb-8"
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
