import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";

/*props list
color (primary,secondary,success,info,warning,danger,link)
onClick (function)
name (show name of the button)
*/

export default class ButtonG extends Component {
  render() {
    let color = this.props.color;
    return (
      <View
        accessibilityRole="button"
        {...this.props.color}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
