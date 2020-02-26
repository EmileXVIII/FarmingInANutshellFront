import React from "react";
import { AppLoading } from "expo";
import { Container, Text, View} from "native-base";
import * as Font from "expo-font";
import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import FooterMenu from "./src/components/footer";
import SlotItem from "./src/components/slotItem";
import ListItems from "./src/components/listItems";
import Draggable from "./src/components/draggable";
import d from "./src/utils/dimensions"
const DEVICE_WIDTH = Dimensions.get("window").width
const DEVICE_HEIGHT = Dimensions.get("window").height
// const dim = Dimensions.get('window');

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
    
    console.warn(" Dimensions.get('window')")
    return (
      // <Container style={{height: dim.height*dimention.mainScreen, width: dim.width*dimention.mainScreen}}>
      <View style={styles.test}>
      <ScrollView style={{height: DEVICE_HEIGHT*d.scrollView.h, width: 50}}>
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
         mapOfOthersAtributes={{"style":{"height":50,"width":50}}}
        ></ListItems>
        </ScrollView>
        <Draggable conteneurStyle={{height: DEVICE_HEIGHT*d.Screen.h, width: DEVICE_WIDTH*d.Screen.w}}></Draggable>
        <FooterMenu></FooterMenu>
      {/* // </Container> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  test: {
    height: DEVICE_HEIGHT*d.Screen.h,
    width: DEVICE_WIDTH*d.Screen.w
  }
});
