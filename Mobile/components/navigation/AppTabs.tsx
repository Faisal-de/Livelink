import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors } from "@/constants/tokens";

type AppTabsProps = {
  variant: "patient" | "donor" | "hospital";
};

export function AppTabs({ variant }: AppTabsProps) {
  const thirdTab =
    variant === "hospital"
      ? { name: "inventory", title: "Inventory", icon: "package-variant-closed" as const }
      : { name: "alerts", title: "Alerts", icon: "bullhorn-outline" as const };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors["on-surface-variant"],
        tabBarStyle: {
          backgroundColor: colors["surface-container-lowest"],
          borderTopColor: colors["surface-container"],
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: "Inter_600SemiBold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="home-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="requests"
        options={{
          title: "Requests",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name="clipboard-text-outline" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name={thirdTab.name}
        options={{
          title: thirdTab.title,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} name={thirdTab.icon} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              name={variant === "hospital" ? "office-building-outline" : "account-outline"}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
