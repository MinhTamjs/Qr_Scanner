import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Scanner')} // Navigate to Scanner
      >
        <Text>QRScannerScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Calendar')} // Navigate to Calendar
      >
        <Text>Calendar</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default HomeScreen;
