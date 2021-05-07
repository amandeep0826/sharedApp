import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {primaryWhite} from '../assets/colors/colors';
import CompleteSignupScreen from '../screens/CompleteSignupScreen';
import ContinueWithPhoneScreen from '../screens/ContinueWithPhoneScreen';
import EnterOTPScreen from '../screens/EnterOTPScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginMethodScreen from '../screens/LoginMethodScreen';
import LoginScreen from '../screens/LoginScreen';
import NumberVerifiedScreen from '../screens/NumberVerifiedScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SplashScreen from '../screens/SplashScreen';
import RootTabNavigator from './RootTabNavigator';

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
      <Stack.Screen
        name="EnterOTPScreen"
        component={EnterOTPScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: primaryWhite,
          },
        }}
      />
      <Stack.Screen
        name="NumberVerifiedScreen"
        component={NumberVerifiedScreen}
      />
      <Stack.Screen
        name="CompleteSignupScreen"
        component={CompleteSignupScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: primaryWhite,
          },
        }}
      />
      <Stack.Screen name="RootTabNavigator" component={RootTabNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
