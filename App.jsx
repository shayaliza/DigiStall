import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './store';

import LayoutScreen from './main/pages/auth/layout';
import HomeScreen from './main/pages/Home';
import SettingsScreen from './main/pages/Settings';
// import { Text } from 'react-native';
// import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        ) : (
          <LayoutScreen />
        )}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
