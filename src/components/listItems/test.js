import React, { Component } from "react";
import { View ,TouchableOpacity} from "react-native";
import SlotItem from "../slotItem";
import DraggableFlatList from 'react-native-draggable-flatlist'
/*

*/
function createNElements(type, howMany, listAttributs) {
    let listElements = [];
    //console.warn("listAtributes",listAttributs);
    for (let i = 0; i < howMany; i++) {
        //console.warn({ ...listAttributs[i], key: i, numkey: i })
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
        data:[]
    };
  }

  componentWillMount(){
    this.setState({
        nbSlotItem:this.props.nbSlotItem,
        mapOfOthersAtributes: this.props.mapOfOthersAtributes?this.props.mapOfOthersAtributes:{name:"slotObject"},
        items:this.props.items,
    })
  }

  renderItem = ({ item, move, moveEnd, isActive }) => {
    return (
      <TouchableOpacity
        onLongPress={move}
        onPressOut={moveEnd}
      >
      {item}
      </TouchableOpacity>
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({item:nextProps.item})
  }
    render() {
        //console.warn(craftList(this.state.items,this.state.mapOfOthersAtributes));
        let data=this.state.data.length==0?createNElements(
                SlotItem,
                this.state.nbSlotItem,
                craftList(this.state.items,this.state.mapOfOthersAtributes)
            ):this.state.data
        return(
            <DraggableFlatList name="listSlot"
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${item.key}`}
            scrollPercent={5}
            onMoveEnd={({ data }) => this.setState((prev)=>{ prev.data= data; return prev })}>
            </DraggableFlatList>
        )
    }
}
/*state = {
    data: [...Array(20)].map((d, index) => ({
      key: `item-${index}`,
      label: index,
      backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
    }))
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <TouchableOpacity
        style={{ 
          height: 100, 
          backgroundColor: isActive ? 'blue' : item.backgroundColor,
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Text style={{ 
          fontWeight: 'bold', 
          color: 'white',
          fontSize: 32,
        }}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={5}
          onMoveEnd={({ data }) => this.setState({ data })}
        />
      </View>
    )
  }
}*/