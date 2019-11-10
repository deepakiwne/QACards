import React from 'react';
import { View } from 'react-native';
import TabNav from './components/TabNav'
import StackNav from './components/StackNav';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

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
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1}}>
          <StackNav />
        </View>
      </Provider>
    );
  }
}

export default App