import React from 'react';
import { View } from 'react-native';
import TabNav from './components/TabNav'

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
          <TabNav />
        </View>
    );
  }
}

export default App