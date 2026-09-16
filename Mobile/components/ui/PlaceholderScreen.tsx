import { MaterialIcons } from "@expo/vector-icons";
import { Link, type Href, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Logo } from "@/components/brand/Logo";
import { colors } from "@/constants/tokens";

export type PlaceholderLink = {
  href: Href;
  label: string;
};

type PlaceholderScreenProps = {
  title: string;
  stitchSource: string;
  description?: string;
  links?: PlaceholderLink[];
  showBack?: boolean;
};

export function PlaceholderScreen({
  title,
  stitchSource,
  description,
  links,
  showBack = true,
}: PlaceholderScreenProps) {
  const router = useRouter();
  const canGoBack = router.canGoBack();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-gutter-mobile pb-space-2xl pt-space-md"
      >
        {showBack && canGoBack ? (
          <Pressable
            accessibilityLabel="Go back"
            className="mb-space-md h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest"
            onPress={() => router.back()}
          >
            <MaterialIcons color={colors["on-surface"]} name="arrow-back" size={20} />
          </Pressable>
        ) : null}

        <View className="mb-space-lg items-center">
          <View className="h-20 w-20 items-center justify-center rounded-lg bg-surface-container-lowest">
            <Logo size={48} />
          </View>
        </View>

        <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
          {title}
        </Text>
        <Text className="mt-space-xs font-label-md text-label-md text-primary">
          Stitch: {stitchSource}
        </Text>
        {description ? (
          <Text className="mt-space-sm font-body-sm text-body-sm text-secondary">
            {description}
          </Text>
        ) : null}
        <Text className="mt-space-md font-body-sm text-body-sm text-on-surface-variant">
          Placeholder screen. Stitch layout will be implemented in a later phase.
        </Text>

        {links?.length ? (
          <View className="mt-space-lg gap-space-sm">
            {links.map((link) => (
              <Link href={link.href} key={link.label} asChild>
                <Pressable className="h-12 items-center justify-center rounded-lg bg-primary-container">
                  <Text className="font-label-lg text-label-lg text-on-primary">
                    {link.label}
                  </Text>
                </Pressable>
              </Link>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
