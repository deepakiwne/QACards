import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import Deck from './components/Deck';
import Quiz from './components/Quiz';

export default function App() {

  state = {
    deck : {
      title: 'React',
      cards: [
        {
          question: 'React uses Virtual DOM?',
          answer: true
        },
        {
          question: 'Can you dvelop mobile apps using react?',
          answer: true
        }
      ]
    }
  }

  return (
    <View style={styles.container}>
      {/* <DeckList /> */}
      {/* <AddDeck /> */}
      {/* <AddCard /> */}
      {/* <Deck deck={{name:'D1', cards: 5}}/> */}
      <Quiz deck={this.state.deck}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
