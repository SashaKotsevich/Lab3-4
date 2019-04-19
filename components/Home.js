import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableHighlight
} from "react-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  }
  state = {
    users: []
  };

  static navigationOptions = {
    title: "Home"
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
  handlePressOnProfile = item => {
    this.navigate("Profile", { item });
  };

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
              <TouchableHighlight
                onPress={this.handlePressOnProfile.bind(this, item)}
                key={item.id}
                style={{
                  width: "50%",
                  height: "auto"
                }}
              >
                <View
                  style={{
                    width: "auto",
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
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
