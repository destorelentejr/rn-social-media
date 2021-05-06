/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './container/home';
import Profile from './container/profile';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const App = () => {
  
  LogBox.ignoreAllLogs(true)

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel : false,
          activeTintColor : 'white',
          inactiveTintColor : 'white',
          activeBackgroundColor : 'black',
          inactiveBackgroundColor : 'black'
        }}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
