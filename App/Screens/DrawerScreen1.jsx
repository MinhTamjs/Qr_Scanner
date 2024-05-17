import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FlipCard from 'react-native-flip-card';

const DrawerScreen1 = () => {
  return (
    <FlipCard
      style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
      onFlipEnd={isFlipEnd => {
        console.log('isFlipEnd', isFlipEnd);
      }}>
      {/* Face Side */}
      <View style={styles.face}>
        <Text>The Face</Text>
      </View>
      {/* Back Side */}
      <View style={styles.back}>
        <Text>The Back</Text>
      </View>
    </FlipCard>
  );
};

export default DrawerScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  face: {
    backfaceVisibility: 'hidden',
  },
  back: {
    flex: 1
  }
});