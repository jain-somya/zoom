import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function Contact({ name, type, photo }) {
  return (
    <View style={styles.row}>
      {type == "starred" ? (
        <View style={styles.icon}>
          <AntDesign name="star" size={30} color="white" />
        </View>
      ) : (
        <Image source={photo} style={styles.image} />
      )}

      <Text style={styles.text}>{name ? name : "Starred"}</Text>
    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#1c1c1c",
  //   padding: 20,
  // },
  image: {
    height: 55,
    width: 55,
    borderRadius:20,
    backgroundColor:"white"
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
});
