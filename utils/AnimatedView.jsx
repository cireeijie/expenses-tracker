import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export default function AnimatedView({ children }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity,
      }}
    >
      {children}
    </Animated.View>
  );
}
