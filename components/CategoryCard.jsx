import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { amountSeparator } from "../utils/amountSeparator";

export default function CategoryCard({
  name,
  type,
  icon,
  color,
  isActive,
  onPress,
}) {
  return (
    <Pressable
      style={{
        padding: 20,
        backgroundColor: isActive ? color + "80" : "#f8f8fa",
        borderRadius: 10,
        gap: 5,
        minWidth: 200,
      }}
      onPress={onPress}
    >
      <View>
        <Ionicons name={icon} size={24} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 12 }}>{type}</Text>
      </View>
      <Text style={{ fontSize: 22 }}>${amountSeparator(10000)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
