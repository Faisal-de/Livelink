import { StyleSheet } from "react-native";

// @ts-ignore NativeWind web requires class-based dark mode before CSS loads.
if (typeof StyleSheet.setFlag === "function") {
  // @ts-ignore
  StyleSheet.setFlag("darkMode", "class");
}
