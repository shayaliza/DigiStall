import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './login';
import Signup from './signup';
const Tab = createBottomTabNavigator();

function Layout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUP" component={Signup} />
    </Tab.Navigator>
  );
}
export default Layout;
