import React, { Component } from "react";
import { View } from "react-native";
import SlotItem from "../slotItem";
/*

*/
function createNElements(type, howMany, listAttributs) {
    let listElements = [];
    console.warn("listAtributes",listAttributs);
    for (let i = 0; i < howMany; i++) {
        console.warn({ ...listAttributs[i], key: i, numkey: i })
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
    items : list of items
    mapOfOthersAtributes : NULL or map of attributes to add on each slotObject (ex : classname = "...")

*/ 
export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nbSlotItem:0,//should be a uint
        mapOfOthersAtributes: this.props.mapOfOthersAtributes?this.props.mapOfOthersAtributes:{name:"slotObject"},
        items:this.props.items,//should be a list of map
    };
  }

  componentWillMount(){
    this.setState({
        nbSlotItem:this.props.nbSlotItem,
        mapOfOthersAtributes: this.props.mapOfOthersAtributes?this.props.mapOfOthersAtributes:{name:"slotObject"},
        items:this.props.items,
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({item:nextProps.item})
  }
    render() {
        console.warn(craftList(this.state.items,this.state.mapOfOthersAtributes));
        return(
            <View name="listSlot">
                {createNElements(SlotItem,this.state.nbSlotItem, craftList(this.state.items,this.state.mapOfOthersAtributes))}
            </View>
        )
    }
}