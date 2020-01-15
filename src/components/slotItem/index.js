import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

this.itemtest = {
  infos:{
    id: id,
    cost: this.randomInt(100),
    specialAttribute: null,
    name: name,
    description: description,
    iconAdress: iconAdress,
    location: null,
    rarity: rarity
  }
}
/*
  item : map witch contain informations about the item
  this.itemtest = {
    infos:{
      id: id,
      cost: this.randomInt(100),
      specialAttribute: null,
      name: name,
      description: description,
      iconAdress: iconAdress,
      location: null,
      rarity: rarity
    }
  }
*/

export default class SlotItem extends Component {
  constructor() {
    super();
    this.state = {
      // item: this.props.item,
      background: require("../../../public/img/Shop-Background-item.png"),
      item : {infos: this.props.item}
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
          style={styles.imageBackground}
          onAccessibilityTap={this.toggleTap}
        >
          <Text>{this.state.item.infos.name}</Text>
          <Image
            name="imageItem"
            source={require(this.item.infos.iconAdress)}
            alt="Object Image"
            style={styles.imageItem}
          >

          </Image>
          <Text className="cost">
            {this.state.item.infos.cost}{" "}
            <Image
              name="coinImage"
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
  imageBackground: {
    height: 50,
    width: 50
  },
  imageItem: {
    height: 50,
    width: 50
  },
  imageCoin: {
    height: 50,
    width: 50
  }
});
