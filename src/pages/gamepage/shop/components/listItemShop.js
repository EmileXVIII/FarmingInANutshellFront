import React, { Component } from "react";
import SlotItem from "../components/slotItem";

class ListSlot extends Component {
  constructor() {
    state = {
      arrayShop = this.props.arrayShop
    };
  }

  listSlot(){
    let shop;
    this.state.arrayShop.forEach(element => {
      shop += (
        <SlotItem 
        item={element}
        onClick={(cost, name) => this.props.buyItem(cost, name)}
        checkIfBuyable={cost => {
          return this.props.checkIfBuyable(cost);
        }}
      />
      )
    });
    return shop
  }

  render() {
    return (
      <div id="list-object" className="list-object">
        {listSlot}
      </div>
    );
  }
}

export default ListSlot;
