import React, { Component } from 'react'
import TabbarComp from './TabbarComp'

//Navigations here
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import {
  Home, } from './containers';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


const AuthStack = () => {
  return <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
}

const AppSatck = () => {

  return (
    <Tab.Navigator tabBar={props => <TabbarComp {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
      />
    </Tab.Navigator >

  )
}
export default class Navigation extends Component {

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false, }}
          />
          <Stack.Screen
            name="Home"
            component={AppSatck}
            options={{ headerShown: false, }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
