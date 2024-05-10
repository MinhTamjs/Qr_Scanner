import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import QRScannerScreen from '../Screens/QRScannerScreen';
import CalendarScreen from '../Screens/CalendarScreen';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
          name="Home"
          options={{ headerShown: true }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Scanner"
          options={{ headerShown: true }}
          component={QRScannerScreen}
        />
        <Stack.Screen
          name="Calendar"
          options={{ headerShown: true }}
          component={CalendarScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
