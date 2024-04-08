import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { defaultFormValues } from "../../constants/formDefaults";
import CategoryCard from "../../components/CategoryCard";
import { transactions } from "../data/dashboardData";
import RecentTransaction from "../../components/RecentTransaction";
import Ionicons from "react-native-vector-icons/Ionicons";

const { categories } = defaultFormValues;
const { income, expenses } = categories;
const updateIcome = income.map((item) => ({
  ...item,
  isActive: false,
  type: "Income",
}));

const updateExpenses = expenses.map((item) => ({
  ...item,
  isActive: false,
  type: "Expenses",
}));
const categoryData = [
  { id: 0, name: "All", icon: "layers-outline", color: "#00000000" },
  ...updateIcome,
  ...updateExpenses,
];

export default function Transactions({ navigation }) {
  const [newData, setNewData] = useState(categoryData);
  const [currentTransactions, setCurrentTransactions] = useState(transactions);

  const filterTransactions = (category) => {
    const newCategories = newData.map((item) => ({
      ...item,
      isActive: item.name === category ? true : false,
    }));

    const filterResults = transactions.filter((item) => {
      if (category === "All") {
        return item;
      }

      if (item.category === category) {
        return item;
      }
    });

    setNewData(newCategories);
    setCurrentTransactions(filterResults);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 50 }}>
        <FlatList
          contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={newData}
          extraData={newData}
          keyExtractor={(item) => item.name.replace(" ", "") + item.id}
          renderItem={({ item }) => (
            <CategoryCard
              key={item.id + item.name}
              name={item.name}
              type={item.type}
              icon={item.icon}
              color={item.color}
              isActive={item.isActive || false}
              onPress={() => filterTransactions(item.name)}
            />
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          alignItems: currentTransactions.length === 0 ? "center" : "",
          justifyContent: currentTransactions.length === 0 ? "center" : "",
        }}
      >
        {currentTransactions.length > 0 && (
          <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            data={currentTransactions}
            extraData={currentTransactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RecentTransaction
                title={item.title}
                type={item.type}
                category={item.category}
                paymentMethod={item.paymentMethod}
                amount={item.amount}
                date={item.date}
              />
            )}
          />
        )}

        {currentTransactions.length === 0 && (
          <View style={{ gap: 10 }}>
            <Text style={{ textAlign: "center" }}>No transactions found</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FF725E",
                gap: 5,
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Ionicons name="add-outline" size={22} color={"#fff"} />
              <Text style={{ color: "#ffffff" }}>Add transaction</Text>
            </Pressable>
          </View>
        )}
        {currentTransactions.length > 0 && (
          <Pressable style={styles.addIcon}>
            <Ionicons name="add-outline" size={24} color={"#fff"} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    flex: 1,
    gap: 20,
  },
  addIcon: {
    position: "absolute",
    backgroundColor: "#FF725E",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
