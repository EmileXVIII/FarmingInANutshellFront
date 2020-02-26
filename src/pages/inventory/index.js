import React, { Component } from "react";
import { View,ScrollView } from "react-native";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.nbCaseExpendable = props.nbCaseExpendable;
    this.nbCaseEquipement = props.nbCaseExpendable;
    this.state = {
      item: this.props.item,
      affichage: this.props.affichage
    };
  }
    render() {
      let color = this.props.color;
      return (
        <View
          name="inventory"
          {...this.props.color}
          className={this.props.className}
        >
          <Text>{this.props.name}</Text>
          <ScrollView>
            <ListItems name="ListExpendables" nbSlotItem={this.nbCaseExpendable} items={this.props.itemsExpendables} mapOfOthersAttributes={{name:"slotItemExpendables"}}/>
          </ScrollView>
          <ScrollView>
            <ListItems name="ListEquipements" nbSlotItem={this.nbCaseEquipement} items={this.props.itemsEquipements} mapOfOthersAttributes={{name:"slotItemEquipements"}}/>
          </ScrollView>
        </View>
      );
    }
  }
  