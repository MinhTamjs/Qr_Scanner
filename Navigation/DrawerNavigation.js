import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen1 from "../Screens/DrawerScreen1";
import DrawerScreen2 from "../Screens/DrawerScreen2";
import DrawerScreen3 from "../Screens/DrawerScreen3";
import BottomTabNavigation from "./BottomTabNavigation";


export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        drawerActiveBackgroundColor: Colors.active,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.textActive,
        drawerInactiveTintColor: Colors.inactive,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '45%',
          paddingTop: 20,
        },
        drawerLabelStyle: {
          fontWeight: "bold",
          fontSize: 15,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}
    >
      <Drawer.Screen
        name="HomePage"
        options={{
          headerShown: true,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "Home",
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="Drawer 1"
        options={{
          headerShown: true,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "PC Văn phòng",
        }}
        component={DrawerScreen1}
      />
      <Drawer.Screen
        name="Drawer 2"
        options={{
          headerShown: false,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "PC Gaming",
        }}
        component={DrawerScreen2}
      />
      <Drawer.Screen
        name="Drawer 3"
        options={{
          headerShown: false,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "Laptop",
        }}
        component={DrawerScreen3}
      />
    </Drawer.Navigator>
  );
}

const Colors = {
  bg: "#F98619",
  active: "#FFDEC0",
  inactive: "#eee",
  textActive: "#834304",
  transparent: "transparent",
};
