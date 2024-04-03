import { StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import Dashboard from "../tabs/Dashboard";
import Transactions from "../tabs/Transactions";
import Wallet from "../tabs/Wallet";
import Profile from "../tabs/Profile";

const Tab = createMaterialBottomTabNavigator();

export default function Home({ navigation }) {
  const screenOptions = {
    unmountOnBlur: true,
    headerShown: false,
  };
  return (
    <Tab.Navigator
      activeColor="#FF725E"
      inactiveColor="#000000"
      activeIndicatorStyle={{ backgroundColor: "transparent" }}
      barStyle={{
        backgroundColor: "#f9f9f9",
        padding: 0,
      }}
      screenOptions={{ screenOptions }}
    >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="transactions"
        component={Transactions}
        options={{
          tabBarLabel: "Transactions",
          tabBarAccessibilityLabel: "Transactions",
          tabBarIcon: ({ color }) => (
            <Ionicons name="swap-horizontal-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
