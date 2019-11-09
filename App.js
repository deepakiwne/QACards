import React from 'react';
import { View } from 'react-native';
import TabNav from './components/TabNav'
import StackNav from './components/StackNav';

export class App extends React.Component {

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

  render(){
    return (
        <View style={{ flex: 1}}>
          <StackNav />
        </View>
    );
  }
}

export default App