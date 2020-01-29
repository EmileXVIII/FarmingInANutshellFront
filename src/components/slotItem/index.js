import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import images from "../../../public/img";
import imgShortCuts from "../../../public/img";

/*
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
}*/
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
      URL:"toto",
      background: require("../../../public/img/Shop-Background-item.png"),
      item : {}
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

  componentWillMount(){
    this.setState({item:this.props.item})
  }

  componentWillReceiveProps(nextProps){
    this.setState({item:nextProps.item})
  }

  render() {
    // require the module
var RNGRP = require('react-native-get-real-path');

var filePath1 =imgShortCuts[this.state.item.infos.iconAdress]?this.state.item.infos.iconAdress:"/local/tv_error.png"
RNGRP.getRealPathFromURI("../../../public/img/Shop-Background-item.png").then(filePath =>
  this.setState({URL:filePath})
)
    return (
      <View
        style={styles.view}
        // onClick={this.props.onClick}
        className="slot-item-shop"
      >
        <Text>
          {this.state.URL}
        </Text>
        {/*<Text>
          {JSON.stringify(this.state.item)}
        </Text>*/}
      {/*
        <ImageBackground
          source={this.state.background}
          style={styles.imageBackground}
          onAccessibilityTap={this.toggleTap}
      >*/}
          <Text>{this.state.item.infos.iconAdress}</Text>
        <Text>
          {filePath1}
        </Text>
          <Image
            name="imageItem"
            source={imgShortCuts[filePath1]}
            alt="Object Image"
            style={styles.imageItem}
          />
          <Text>{JSON.stringify(this.item)}</Text>


          <Text className="cost">
            {this.state.item.infos.cost}{" "}
          </Text>
          <Image
              name="coinImage"
              source={imgShortCuts[filePath1]}
              alt="Coin Icon"
              style={styles.imageCoin}
            />
        {/*</ImageBackground>*/}
      
      </View>
    );
  }
}

const heightImage = "100%";
const heightView = "15%";

const styles = StyleSheet.create({
  view: {
    height: 5000,
    width: 500
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
