import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  Button,
  Alert
} from "react-native";

export default class Item extends React.Component {
  choseImage = value => {
    switch (value) {
      case 1:
        return "https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-512.png";
      case 0:
        return "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_play_circle_filled_white_48px-512.png";
      case -1:
        return "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png";
      default:
        return;
    }
  };
  render() {
    const { value } = this.props;
    return (
      <Image
        source={{ uri: this.choseImage(value) }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "white",
          margin: 3,
          borderRadius: 10
        }}
      />
    );
  }
}
