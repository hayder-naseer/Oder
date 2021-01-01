import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const OrderDetails = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.haederScreen}>
        <AntDesign name="arrowleft" style={styles.Icon} />
        <Text style={styles.mainHeading}>Order details</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardDetail}>
          <Text>Order ID: 956246</Text>
          <Text>Name: Uzair Ahmead Baig</Text>
          <Text>Payment: Cash On Delivery</Text>
          <Text>Phone: 03117865141</Text>
          <Text>Address: M.A Jinnah Road</Text>
          <Text>State: Sindh</Text>
        </View>
        <View style={styles.oderDate}>
          <Text>Thu , 10 Dec 2020 </Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Text>Status : </Text>
        <View style={styles.deliverButton}>
          <Text style={styles.textButton}>Delivered</Text>
        </View>
      </View>
      <View style={styles.priceCard}>
        <View style={styles.productMenu}>
          <Text>Product</Text>
          <Text>Washar</Text>
          <Text>Blue Mug</Text>
          <Text>Total</Text>
        </View>
        <View style={styles.quantityMenu}>
          <Text>Quantity</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text></Text>
        </View>
        <View style={styles.priceMenu}>
          <Text>Price</Text>
          <Text>PKR 5,600 </Text>
          <Text>PKR 350/each</Text>
          <Text>6,650</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  haederScreen: {
    flexDirection: "row",
    backgroundColor: "#9e1d21",
    height: 100,
    paddingTop: 40,
    width: "100%",
  },
  mainHeading: {
    color: "white",
    fontSize: 25,
  },
  Icon: {
    fontSize: 40,
    color: "white",
    paddingHorizontal: 20,
  },
  //Card menu
  card: {
    flexDirection: "row",
    width: "100%",
    height: 210,
    padding: 20,
  },
  cardDetail: {
    justifyContent: "space-between",
    width: "60%",
  },
  oderDate: {
    width: "40%",
    alignItems: "flex-end",
  },
  //Button Section
  buttonSection: {
    flexDirection: "row",
    width: "100%",
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    paddingTop: 0,
  },
  textButton: {
    color: "white",
    fontSize: 12,
  },
  deliverButton: {
    borderRadius: 20,
    width: 100,
    paddingVertical: 8,
    backgroundColor: "green",
    alignItems: "center",
    marginLeft: 5,
  },
  //Price Card
  priceCard: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    height: 180,
    paddingTop: 25,
  },
  //First coloum
  productMenu: {
    width: "33%",
    justifyContent: "space-between",
  },
  //Second Coloum
  quantityMenu: {
    width: "33%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  //Third Menu
  priceMenu: {
    width: "33%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});
