import { CardStyleInterpolators } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.meetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Enter Name"
            placeholderTextColor="#767476"
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>

        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            placeholder="Enter Room Id"
            placeholderTextColor="#767476"
            onChangeText={(text) => setRoomId(text)}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.startMeetingButton}
          >
            <Text style={{ color: "white", fontWeight:"bold" }}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#0470dc",
    borderRadius: 20,
  },
});
