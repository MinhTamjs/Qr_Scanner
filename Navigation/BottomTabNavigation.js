import { View, Text, Dimensions } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCodeScannerScreen from "../Screens/QRScannerScreen";
import CalendarScreen from "../Screens/CalendarScreen";
import UserScreen from "../Screens/UserScreen";


export default function BottomTabNavigation() {
  const screenWidth = Dimensions.get("window").width;
  const tabBarWidth = 300; // Chiều rộng của thanh tab
  const tabBarMarginHorizontal = (screenWidth - tabBarWidth) / 2;

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="UserTab"
      screenOptions={{
        tabBarActiveTintColor: "#F9BC19",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          position: "absolute",
          height: 62,
          width: 300,
          bottom: 17,
          left: tabBarMarginHorizontal,
          right: tabBarMarginHorizontal,
          borderRadius: 50,
          backgroundColor: "#F94848",
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 5, // Giảm khoảng cách giữa icon và text
        },
      }}
    >
      <Tab.Screen
        name="ScannerTab"
        component={QRCodeScannerScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Scanner",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CalendarTab"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
