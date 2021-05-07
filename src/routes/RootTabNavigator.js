import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import AlertScreen from '../screens/AlertScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {primaryGreen, primaryWhite} from '../assets/colors/colors';

const Tab = createMaterialBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      shifting={false}
      backBehavior="initialRoute"
      barStyle={{backgroundColor: primaryWhite}}
      initialRouteName="HomeScreen"
      activeColor={primaryGreen}>
      <Tab.Screen
        options={{
          inactiveColor: 'black',
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          inactiveColor: 'black',
          tabBarLabel: 'CHATS',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
        }}
        name="ChatScreen"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          inactiveColor: 'black',
          tabBarLabel: 'ALERTS',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
        name="AlertScreen"
        component={AlertScreen}
      />
      <Tab.Screen
        options={{
          inactiveColor: 'black',
          tabBarLabel: 'SETTINGS',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;
