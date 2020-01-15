import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

const itemtest = {
  infos: {
    cost: 40,
    name: "Item test"
  }
};

export default class SlotItem extends Component {
  constructor() {
    super();
    this.state = {
      // item: this.props.item,
      background: require("../../../public/img/Shop-Background-item.png"),
      item: itemtest
    };
  }

  toggleTap = () => {
    // this.props.desc = item;
    this.setState({
      background: require("../../../public/img/Shop-Background-item-hover.png")
    });
  };

  toggleClear = () => {
    this.props.desc = "";
  };

  render() {
    return (
      <View
        style={styles.view}
        // onClick={this.props.onClick}
        className="slot-item-shop"
      >
        <ImageBackground
          source={this.state.background}
          style={styles.image}
          onAccessibilityTap={this.toggleTap}
        >
          <Text>{this.state.item.infos.name}</Text>
          {/* <img
            width="30px"
            src={this.state.item.infos.iconAdresse}
            alt="Item"
          /> */}
          <Text className="cost">
            {this.state.item.infos.cost}{" "}
            <Image
              source={require("../../../public/img/CoinIcon.png")}
              alt="Coin Icon"
              style={styles.image}
            />
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const heightImage = "100%";
const heightView = "15%";

const styles = StyleSheet.create({
  view: {
    height: 50,
    width: 50
  },
  image: {
    height: 50,
    width: 50
  }
});
