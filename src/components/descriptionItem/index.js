import React, { Component } from "react";

/*props list
item (item object)
*/

export default class DescriptionItem extends Component {
  constructor(props) {
    super(props);
    this.element = "";
    this.state = {
      item: this.props.item,
      affichage: this.props.affichage
    };
  }
  render() {
    const divStyle = {
      "background-size": `${this.props.width}px ${this.props.height}px`,
      width: `${this.props.width}px`,
      height: `${this.props.height}px`
    };

    if (this.state.affichage) {
      return (
        <div className="Desc-Item-Box" style={divStyle}>
          <h4>{this.state.item.infos.name}</h4>
          <p>{this.state.item.infos.description}</p>
          <p>Atk :{this.state.item.atk}</p>
          <p>Def :{this.state.item.def}</p>
          <p>Crit :{this.state.item.critical}</p>
          <p>Dodge :{this.state.item.dodge}</p>
          <p>Life :{this.state.item.life}</p>
          <p>Rarity :{this.state.item.infos.rarity}</p>
        </div>
      );
    } else {
      return <div className="Desc-Item-Box" style={divStyle}></div>;
    }
  }
}
