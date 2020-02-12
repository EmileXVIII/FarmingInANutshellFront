import React from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import FooterMenu from "./src/components/footer";
import SlotItem from "./src/components/slotItem";
import ListItems from "./src/components/listItems";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <ListItems items={[
          {
            infos:{
              id: 1,
              cost: 50,
              specialAttribute: null,
              name: "testItem",
              description: "description",
              iconAdress: "local/CoinIcon.png",
              location: null,
              rarity: "rarity"
            }
          },
          {
            infos:{
              id: 2,
              cost: 25,
              specialAttribute: null,
              name: "testItem",
              description: "description",
              iconAdress: "local/Shop-Background-item.png",
              location: null,
              rarity: "rarity"
            }
          }
        ]}
         nbSlotItem={20}
         mapOfOthersAtributes={null}
        ></ListItems>
        {/*<FooterMenu></FooterMenu>*/}
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
