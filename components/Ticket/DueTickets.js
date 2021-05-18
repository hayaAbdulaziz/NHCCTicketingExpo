import React, { Component } from "react";
import {
    Alert,
    Button,
    TextInput,
    View,
    StyleSheet,
    Image,
    Text, 
  } from "react-native";
export default class DueTickets extends React.Component {

render(){
return (
<View style={styles.container}>
<Text>DueTickets</Text>
</View>
);

    }
}
const styles = StyleSheet.create({
  container: {

      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },

});
