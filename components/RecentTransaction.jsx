import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultFormValues } from "../constants/formDefaults";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RecentTransaction({
  title,
  type,
  category,
  paymentMethod,
  amount,
  date,
}) {
  const incomeCategories = defaultFormValues.categories.income;
  const expensesCategories = defaultFormValues.categories.expenses;

  const setCategoryIcon = (category) => {
    if (type === "Income") {
      return incomeCategories.filter((item) => item.name === category);
    } else {
      return expensesCategories.filter((item) => item.name === category);
    }
  };

  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: setCategoryIcon(category)[0].color + "80",
          width: 50,
          height: 50,
          borderRadius: 10,
        }}
      >
        <Ionicons
          name={setCategoryIcon(category)[0].icon}
          color="#000"
          size={22}
        />
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
        <Text>{`${type === "Income" ? "+" : "-"}$${amount}`}</Text>
        <Text>{date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
