import React, { Component } from "react";
import { View } from "react-native";
import SlotItem from "../slotItem";
/*

*/
function createNElements(type, howMany, listAttributs) {
    let listElements = [];
    for (let i = 0; i < howMany; i++) {
        let newElement = React.createElement(type, { ...listAttributs[i], key: i, numkey: i });
        listElements.push(newElement)
    }
    return listElements
}
function craftList(items,mapOfOthersAtributes){
    list=[]
    items.forEach(element => {
        list.push({item:element,...mapOfOthersAtributes})        
    });
    return list
}
/*
props:
    nbSlotItem : uint
    items : map of items
    mapOfOthersAtributes : NULL or map of attributes to add on each slotObject (ex : classname = "...")

*/ 
export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.nbSlotItem = this.props.nbSlotItem; //should be a uint
    this.list = this.props.slotItemAttributes; //should be a map
    this.state = {
        mapOfOthersAtributes: this.props.mapOfOthersAtributes?this.props.mapOfOthersAtributes:{name:"slotObject"},
        items:this.props.items,
    };
  }
    render() {
        return(
            <View name="listSlot">
                {createNElements(SlotItem, this.nbSlotItem,craftList(this.state.items,this.state.mapOfOthersAtributes))}
            </View>
        )
    }
}