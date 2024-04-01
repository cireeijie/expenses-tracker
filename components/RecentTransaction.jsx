import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RecentTransaction({
  title,
  category,
  paymentMethod,
  amount,
  date,
}) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        marginBottom: 20,
      }}
    >
      <View>
        <Text>{category}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "semibold",
            fontSize: 17,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Text>
        <Text style={{ textTransform: "capitalize" }}>{paymentMethod}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text>{`-$${amount}`}</Text>
        <Text>{date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
