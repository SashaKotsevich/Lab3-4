import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  Button,
  Alert,
  TouchableHighlight
} from "react-native";
import Item from "./compnents/Item";

export default class App extends React.Component {
  state = {
    data: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    isCross: true,
    gameRun: true,
    moveCount: 0,
    lastWin: ""
  };
  onCeilPress = (i, j) => {
    if (this.state.data[i][j] == 0 && this.state.gameRun) {
      if (this.state.moveCount === 8) {
        Alert.alert("Draw");
        this.setState({ gameRun: false, lastWin: "Draw" });
      } else this.setState({ moveCount: this.state.moveCount + 1 });
      let data = this.state.data;
      data[i][j] = this.state.isCross ? 1 : -1;
      this.setState({ data, isCross: !this.state.isCross });
      this.winCheck();
    }
  };

  winCheck = () => {
    let winner = 0;
    const { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i][0] !== 0 &&
        data[i][0] === data[i][1] &&
        data[i][1] === data[i][2]
      ) {
        winner = data[i][0];
      } else if (
        data[0][i] !== 0 &&
        data[0][i] === data[1][i] &&
        data[1][i] === data[2][i]
      ) {
        winner = data[0][i];
      }
    }
    if (winner === 0) {
      if (
        data[0][0] !== 0 &&
        data[0][0] == data[1][1] &&
        data[1][1] == data[(2, 2)]
      ) {
        winner = data[0][0];
      } else if (
        data[2][0] !== 0 &&
        data[2][0] == data[1][1] &&
        data[1][1] == data[0][2]
      ) {
        winner = data[2][0];
      }
    }
    if (winner) {
      let winSym;
      if (winner === 1) winSym = "X";
      else winSym = "0";
      Alert.alert(`${winSym} Win!!!!!`);
      this.setState({ gameRun: false, lastWin: winSym });
    }
  };

  newGame = () => {
    this.setState({
      data: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      isCross: true,
      gameRun: true,
      moveCount: 0
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "black",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <Text
          style={{ backgroundColor: "white", marginBottom: 30, fontSize: 30 }}
        >{`LastWinner: ${this.state.lastWin}`}</Text>
        <Button title={"New Game"} onPress={this.newGame} />
        <View
          style={{
            fle: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            height: "50%",
            marginTop: 30
          }}
        >
          <TouchableHighlight onPress={this.onCeilPress.bind(this, 0, 0)}>
            <Item value={this.state.data[0][0]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onCeilPress.bind(this, 0, 1)}>
            <Item value={this.state.data[0][1]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onCeilPress.bind(this, 0, 2)}>
            <Item value={this.state.data[0][2]} />
          </TouchableHighlight>

          <TouchableHighlight onPress={this.onCeilPress.bind(this, 1, 0)}>
            <Item value={this.state.data[1][0]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onCeilPress.bind(this, 1, 1)}>
            <Item value={this.state.data[1][1]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onCeilPress.bind(this, 1, 2)}>
            <Item value={this.state.data[1][2]} />
          </TouchableHighlight>

          <TouchableHighlight onPress={this.onCeilPress.bind(this, 2, 0)}>
            <Item value={this.state.data[2][0]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onCeilPress.bind(this, 2, 1)}>
            <Item value={this.state.data[2][1]} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onCeilPress.bind(this, 2, 2)}>
            <Item value={this.state.data[2][2]} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
