import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import Constants from "expo-constants";

import { enableScreens } from "react-native-screens";
import {
  Screen,
  screensEnabled,
  // @ts-ignore
  shouldUseActivityState,
} from "react-native-screens";
enableScreens();
import * as AuthSession from "expo-auth-session";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = { ticket: [], isLoding: true };
  }

  componentDidMount() {
    this.getticketList();
  }

  getticketList = () => {

    fetch("https://test.tickets.digitum.com.sa/api/tickets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:`Bearer ${this.accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
       
        this.setState({
       
          ticket: responseJson,
          isLoding: false,
        })
        console.log(this.state.ticket);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    if (this.state.isLoding == true) {
      return (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 100 }}
          color="#3f614d"
        />
      );
    } else {
      return (
        <View>
          <FlatList style={{ width: 400 }} ticket={this.state.ticket} />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
    marginBottom: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
