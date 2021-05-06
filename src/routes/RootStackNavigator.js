import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ContinueWithPhoneScreen from '../screens/ContinueWithPhoneScreen';
import LoginMethodScreen from '../screens/LoginMethodScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginMethodScreen" component={LoginMethodScreen} />
      <Stack.Screen
        name="ContinueWithPhoneScreen"
        component={ContinueWithPhoneScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
