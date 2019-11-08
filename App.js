import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DeckList /> */}
      {/* <AddDeck /> */}
      <AddCard />
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
