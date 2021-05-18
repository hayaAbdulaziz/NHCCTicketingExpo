
import React, { Component } from "react";
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { createDrawerNavigator  } from '@react-navigation/drawer';
import Login from "./components/Login";
import Ticket from "./components/ticket";
import AllTickets from"./components/Ticket/AllTickets";
import CreateTicket from "./components/Ticket/CreateTicket";
import Opentickets from "./components/Ticket/Opentickets";
import Detials from"./components/Ticket/Detials";
import ClosedTickets from "./components/Ticket/ClosedTickets";
import DueTickets from "./components/Ticket/DueTickets";
import { MaterialCommunityIcons } from '@expo/vector-icons';

enableScreens();
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <AuthStack.Navigator  
    initialRouteName="Login"  
     screenOptions={{
      headerStyle: {
        backgroundColor: "#3f614d",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
    }}>
    <AuthStack.Screen
      name="Login"
      component={Login}
  
    />
    <AuthStack.Screen
      name="Ticket"
      component={Ticket}
      options={{ title: "Ticket" }}
    />
    <AuthStack.Screen
      name="Detials"
      component={Detials}
      options={{ title: "Detials" }}
    />
  </AuthStack.Navigator>  

  );
}
function TicketScreen({ navigation }) {
  return(

    <Drawer.Navigator  initialRouteName="Ticket"  drawerContentOptions={{activeTintColor:'#3f614d'}} style={styles.Drawer}>
        <Drawer.Screen name="Ticket" component={HomeScreen}  />
        {/* <Drawer.Screen name="Ticket" component={Ticket} /> */}
        <Drawer.Screen name="Create Ticket" component={CreateTicket} />
        <Drawer.Screen name="All Tickets" component={AllTickets} />
        <Drawer.Screen name="Open Tickets" component={Opentickets} />
        <Drawer.Screen name="Closed Tickets" component={ClosedTickets} />
        <Drawer.Screen name="Due Tickets" component={DueTickets} />
      </Drawer.Navigator>
  );


}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
   {Login ? (
        <>
          <TicketScreen/> 
        </>
      ) : (
        <>
  <Login/>
        </>
      )}

    </NavigationContainer>

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
