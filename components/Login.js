import React, { Component, useLayoutEffect } from "react";
import {
  Alert,
  TextInput,
  View,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@callstack/async-storage";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Ticket from "./ticket";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    this._loadInitialState().then((value) => {
      if (value !== null) {
        this.props.navigation.navigate("Ticket");
      }
    });
  }

  _loadInitialState = async () => {
    const value = await AsyncStorage.getItem("user");

    return value;
  };
  onLogin = () => {
    fetch("https://test.tickets.digitum.com.sa/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:"haya.binkhathran@ascend.com.sa" ,
        password:"moh2020",
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.accessToken);
        if (res.accessToken) {
          AsyncStorage.setItem("user", res.user);
          this.props.navigation.navigate("Ticket");
          alert("Success");
          console.log("user", res.user);
        } else {
          alert(res.message);
        }
      })
      .catch((error) => console.error(error));
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Image
          source={{ uri: "https://nhcc.digitum.com.sa/image/logo.png" }}
          style={{ width: 255, height: 230, top: -50 }}
        />

        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={"Email"}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity>
          <Button
            title={"Login"}
            color="#3f614d"
            style={styles.button}
            onPress={this.onLogin}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 20,
    marginHorizontal: 16,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#8d8841",
    marginBottom: 10,
  },
  button: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
