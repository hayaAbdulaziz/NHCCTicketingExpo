import React, { Component } from "react";
import {
    Alert,
    Button,
    TextInput,
    View,
    StyleSheet,
    Image,
    Text
  } from "react-native";

export default class AllTickets extends React.Component {

render(){
return(
<View style={styles.container}>
<Text>AllTickets</Text>
</View>
);
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  }
});

