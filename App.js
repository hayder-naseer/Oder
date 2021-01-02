import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OrderDetails from "./Components/orderDetails";
import OrderList from "./Components/orderList";
import Settings from "./Components/settings";

export default function App() {
  return (
    <View>
      <Settings />
      {/* <OrderDetails /> */}
      {/* <OrderList /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
