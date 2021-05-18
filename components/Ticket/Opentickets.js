import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Opentickets extends React.Component {

render(){
return(
<View style={styles.container}>
<Text>Opentickets</Text>
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
  