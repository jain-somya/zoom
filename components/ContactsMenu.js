import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Contact from "./Contact";
const items = [
  { type: "starred" },
  { type: "contact", name: "John Doe", photo: require("../assets/g.png") },
  {
    type: "contact",
    name: "Jane Doe",
    photo: require("../assets/empty_cart.png"),
  },
  {
    type: "contact",
    name: "Jessy Doe",
    photo: require("../assets/profile.png"),
  },
];
export default function ContactsMenu() {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        return <Contact {...item}/>;
      })}
      {/* <Contact/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#1c1c1c",
  //   padding: 20,
  // },
});
