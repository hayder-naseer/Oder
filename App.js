import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OrderDetails from "./Components/orderDetails";
import OrderList from "./Components/orderList";

export default function App() {
  return (
    <View>
      {/* <OrderDetails /> */}
      <OrderList />
    </View>
  );
}

const styles = StyleSheet.create({});
