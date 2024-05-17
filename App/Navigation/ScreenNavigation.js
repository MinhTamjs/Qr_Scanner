import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import LoginScreen from '../Screens/LoginScreen';
import DrawerNavigation from './DrawerNavigation';
import QuizScreen from '../Screens/QuizScreen';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={DrawerNavigation}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="QuizScreen"
          options={{ headerShown: false }}
          component={QuizScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
