import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import quizData from '../Data/Quiz';
import DrawerScreenWrapper from '../Navigation/DrawerScreenWrapper';

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <DrawerScreenWrapper>
      <TouchableOpacity
        onPress={() => navigation.navigate('QuizScreen', {item})}>
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </DrawerScreenWrapper>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(quizData)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {
    backgroundColor: '#FEFEF4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 1,
  },
});
