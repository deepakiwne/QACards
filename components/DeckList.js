import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class DeckList extends Component {
  state = {
    decks: [
        {title:'D1', cards: [{question: 'Q1', answer: 'A1'}]},
        {title:'D2', cards: [{question: 'Q2', answer: 'A2'}]},
        {title:'D3', cards: [{question: 'Q1', answer: 'A1'}, {question: 'Q2', answer: 'A2'}]}
    ]
  }

  // componentDidMount - Make this a connected component - Redux
  // Styling

  render() {

    const { decks }  = this.state
 
    return (
      <View>
          <Text>DeckList</Text>
          {decks.map((deck) => (
            <TouchableOpacity key={deck.title} onPress={() => this.props.navigation.navigate(
                'Deck',
                { deck: deck }
              )}>
              <View>
                <Text>{deck.title}</Text>
                <Text>{deck.cards.length}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    )
  }
}

export default DeckList
