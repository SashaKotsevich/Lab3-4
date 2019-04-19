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

export default class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users?per_page=100")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ users: data });
        AsyncStorage.setItem("data", JSON.stringify(data));
      })
      .catch(err => {
        AsyncStorage.getItem("data")
          .then(data => {
            if (data) {
              this.setState({ users: data.json() });
            } else this.setState({ users: [] });
          })
          .done();
      });
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "#fff",
            justifyContent: "space-between",
            padding: 30,
            backgroundColor: "black"
          }}
        >
          {this.state.users.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  width: "40%",
                  height: "auto",
                  padding: 10,
                  backgroundColor: "#aaa",
                  margin: 10,
                  borderRadius: 5
                }}
              >
                <Image
                  source={{ uri: item.avatar_url }}
                  style={{ width: "100%", height: 100 }}
                />
                <Text>{item.login}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
