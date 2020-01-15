import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonG from "./src/components/button";
import SlotItem from "./src/components/slotItem/Test";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SlotItem></SlotItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
