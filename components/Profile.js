import React, { Component } from "react";
import { Text, View, Image } from "react-native";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const item = this.props.navigation.state.params.item;
    return (
      <View
        style={{
          width: "80%",
          height: "auto",
          padding: 10,
          backgroundColor: "#aaa",
          marginTop: 10,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 5
        }}
      >
        <Image
          source={{ uri: item.avatar_url }}
          style={{ width: "100%", height: "60%", marginTop: 30 }}
        />
        <Text style={{ marginTop: 20 }}>{"Login:  " + item.login}</Text>
      </View>
    );
  }
}

export default Profile;
