import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function SingleButton({ name, title, customColor, navigation }) {
  const openMeeting = () => {
    navigation.navigate("Room");
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => openMeeting()}
        style={{
          ...styles.button,
          backgroundColor: customColor ? customColor : "#0470dc",
        }}
      >
        <FontAwesome name={name} size={30} color={"#efefef"}></FontAwesome>
      </TouchableOpacity>
      <Text style={styles.textButton}>{title}</Text>
    </View>
  );
}

export default SingleButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
