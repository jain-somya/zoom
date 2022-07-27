import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView  style={{height:'100%'}}>
        <Header />

        {/* Search bar  */}
        <Searchbar />
        {/* Menu Buttons */}
        <MenuButtons navigation={navigation}/>

        {/* Users */}
        <ContactsMenu />

      </SafeAreaView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1c",
        padding:30
    }
}
)

