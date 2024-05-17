import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const DrawerScreenWrapper = ({ children }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(progress.value, [0, 1], [1, 0.8], "clamp") },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 30], "clamp"),
    overflow: 'hidden',
    
  }));

  return (
    <Animated.View style={[animatedStyle]} className="flex-1 bg-white">
      {children}
    </Animated.View>
  );
};

export default DrawerScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
