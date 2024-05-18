import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import FlipCard from 'react-native-flip-card';
import {useRoute} from '@react-navigation/native';

const QuizScreen = () => {
  const route = useRoute();
  const {questions} = route.params.item;
  const [flippedIndices, setFlippedIndices] = useState([]);

  const handleFlip = index => {
    if (!flippedIndices.includes(index)) {
      setFlippedIndices(prevIndices => [...prevIndices, index]);
    }
    setFlippedIndices(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={questions.map((question, index) => index.toString())}
        renderCard={cardIndex => {
          const {question, options, answer} = questions[parseInt(cardIndex)];
          const isFlipped = flippedIndices.includes(parseInt(cardIndex));

          return (
            <FlipCard
              style={styles.card}
              friction={6}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              flip={isFlipped}
              clickable={true}
              onFlipEnd={isFlipped => handleFlip(parseInt(cardIndex))}>
              {/* Front Side */}
              <View>
                <Text style={styles.text}>{question}</Text>
                <View>
                  {Object.entries(options).map(([optionKey, optionValue]) => (
                    <Text
                      key={optionKey}>{`${optionKey}: ${optionValue}`}</Text>
                  ))}
                </View>
              </View>
              {/* Back Side */}
              <View style={styles.back}>
                <Text style={styles.text}>Answer: {answer}</Text>
              </View>
            </FlipCard>
          );
        }}
        onSwiped={cardIndex => {
          console.log('Swiped card index:', cardIndex);
          // Reset flipped state after swiping
          setFlippedIndices([]);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={3}></Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardFront: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  back: {
    flex: 1,
    width: 320,
    borderRadius: 8,
    height: '100%',
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default QuizScreen;
