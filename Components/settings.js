import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Settings = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.settingCard}>
        <View style={styles.profileCard}>
          <FontAwesome name="user-o" style={styles.cardIcon} />
          <Text style={styles.cardText}>User Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <SimpleLineIcons name="login" style={styles.cardIcon} />
          <Text style={styles.cardText}>Login</Text>
        </View>
      </View>

      <View style={styles.settingCard02}>
        <View style={styles.profileCard}>
          <SimpleLineIcons name="logout" style={styles.cardIcon} />
          <Text style={styles.cardText}>Logout</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  //Settings
  settingCard: {
    flexDirection: "row",
    justifyContent: "center",
    height: 200,
    marginVertical: 25,
    width: "100%",
  },
  profileCard: {
    width: "45%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderRadius: 5,
    //shadow
    elevation: 4,
  },
  //Inner Card content
  cardIcon: {
    fontSize: 50,
    paddingBottom: 14,
  },
  cardText: {
    fontSize: 18,
  },
  //Setting02
  settingCard02: {
    flexDirection: "row",
    height: 200,
    width: "100%",
  },
});
export default Settings;
