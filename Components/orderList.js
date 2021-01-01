import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const OrderList = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.haederScreen}>
        <AntDesign name="arrowleft" style={styles.Icon} />
        <Text style={styles.mainHeading}>Order List</Text>
      </View>
      <View style={styles.Card}>
        <View style={styles.oderDetail}>
          <Text>Order ID: 956246</Text>
          <Text>Payment: Cash On Delivery</Text>
          <Text>Amount: PkR 200</Text>
        </View>
        <View style={styles.buttonSection}>
          <Text>Thu , 10 Dec 2020 </Text>
          <View style={styles.orderButton}>
            <Text style={styles.textButton}>Cancelled</Text>
          </View>
        </View>
      </View>

      <View style={styles.Card}>
        <View style={styles.oderDetail}>
          <Text>Order ID: 956246</Text>
          <Text>Payment: Cash On Delivery</Text>
          <Text>Amount: PkR 200</Text>
        </View>
        <View style={styles.buttonSection}>
          <Text>Thu , 10 Dec 2020 </Text>
          <View style={styles.deliverButton}>
            <Text style={styles.textButton}>Delivered</Text>
          </View>
        </View>
      </View>

      <View style={styles.Card}>
        <View style={styles.oderDetail}>
          <Text>Order ID: 956246</Text>
          <Text>Payment: Cash On Delivery</Text>
          <Text>Amount: PkR 200</Text>
        </View>
        <View style={styles.buttonSection}>
          <Text>Thu , 10 Dec 2020 </Text>
          <View style={styles.deliverButton}>
            <Text style={styles.textButton}>Delivered</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderList;
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

  //card Box
  Card: {
    flexDirection: "row",
    width: "90%",
    height: 130,
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  //OrderSEction
  oderDetail: {
    width: "60%",
    justifyContent: "space-between",
  },
  //Button Section
  buttonSection: {
    width: "40%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  orderButton: {
    borderRadius: 20,
    width: 100,
    paddingVertical: 8,
    justifyContent: "center",
    backgroundColor: "red",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 12,
  },
  //Separate button style due to change of color
  deliverButton: {
    borderRadius: 20,
    width: 100,
    paddingVertical: 8,
    backgroundColor: "green",
    alignItems: "center",
  },
});
