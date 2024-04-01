import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PieChart from "../../components/PieChart";
import { chartData, transactions } from "../data/dashboardData";
import RecentTransaction from "../../components/RecentTransaction";

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }}>
        {/* Heading */}
        <View>
          <Text style={{ fontSize: 24 }}>Hello,</Text>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>Eric</Text>
        </View>
      </View>
      <View>
        {/* Graph */}
        <View style={styles.overviewCard}>
          <View style={{ justifyContent: "space-between" }}>
            <View style={styles.infoContainer}>
              <View style={styles.incomeIndicator} />
              <View>
                <Text style={styles.infoTitle}>Income</Text>
                <Text style={styles.infoAmount}>$1000</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.spentIndicator} />
              <View>
                <Text style={styles.infoTitle}>Spent</Text>
                <Text style={styles.infoAmount}>$1000</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 130,
              height: 130,
              transform: [{ rotate: "-135deg" }],
            }}
          >
            <PieChart size={150} strokeWidth={100} data={chartData} />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18 }}>Recent transactions</Text>
          <Pressable
            style={{
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: "#E3E7EA",
              borderRadius: 50,
            }}
          >
            <Text>See all</Text>
          </Pressable>
        </View>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <RecentTransaction
              title={item.title}
              category={item.category}
              paymentMethod={item.paymentMethod}
              amount={item.amount}
              date={item.date}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 5,
  },
  incomeIndicator: {
    backgroundColor: "#9BCF53",
    width: 5,
    height: 20,
    borderRadius: 50,
  },
  spentIndicator: {
    backgroundColor: "#FF725E",
    width: 5,
    height: 20,
    borderRadius: 50,
  },
  infoTitle: {
    color: "#7C8388",
  },
  infoAmount: {
    fontSize: 32,
    fontWeight: "bold",
  },
  overviewCard: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#F8F8FA",
    borderRadius: 20,
    justifyContent: "space-between",
    padding: 30,
  },
  chart: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#9BCF53",
  },
});
