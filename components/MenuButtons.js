import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SingleButton from "./SingleButton";
const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#ff751f",
  },
  { id: 2, name: "plus-square", title: "Join" },
  { id: 3, name: "calendar", title: "Schedule" },
  { id: 4, name: "upload", title: "Share Screen" },
];
function MenuButtons({navigation}) {
  return (
    <View style={styles.container}>
      {items.map((item)=>{
        return <SingleButton {...item} navigation={navigation}/>
      })}

    </View>
  );
}

export default MenuButtons;
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
