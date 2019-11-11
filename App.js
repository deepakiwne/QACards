import React from 'react';
import { View } from 'react-native';
import TabNav from './components/TabNav'
import StackNav from './components/StackNav';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';

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
  componentDidMount() {
    setLocalNotification()
  }
  render(){
    return (
      // <Provider store={createStore(reducer, applyMiddleware(createLogger()))}>
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1}}>
          <StackNav />
        </View>
      </Provider>
    );
  }
}

export default App