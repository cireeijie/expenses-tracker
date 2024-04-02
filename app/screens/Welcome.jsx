import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 200 }}
        source={require("../../assets/images/home.png")}
      />
      <Text style={styles.heading}>Track Your Expenses, Reach Your Goals</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("home")}
      >
        <Text style={{ color: "#fff" }}>Go to dashboard</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FF725E",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
