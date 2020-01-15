import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

export default class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      // item: this.props.item,
      background: require("../../../public/img/Shop-Background-item.png")
    };
  }

  toggleTap = () => {
    // this.props.desc = item;
    this.setState({
      background: require("../../../public/img/Shop-Background-item-hover.png")
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleTap}>
          <ImageBackground
            source={this.state.background}
            style={{ width: 70, height: 65 }}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
