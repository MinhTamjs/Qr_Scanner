import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DrawerScreenWrapper from '../Navigation/DrawerScreenWrapper';

export default () => {
  const [date, setDate] = useState(new Date());
  return (
    <DrawerScreenWrapper>
      <View classname="flex-1">
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="date" // or "time", "datetime"
        />
      </View>
    </DrawerScreenWrapper>
  );
};
