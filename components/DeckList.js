import React, { Component } from 'react'
import { View, Text} from 'react-native'

class DeckList extends Component {
  state = {
    decks: [
        {name:'D1', cards: 5},
        {name:'D2', cards: 2},
        {name:'D3', cards: 7}
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
            <View key={deck.name}>
                <Text>{deck.name}</Text>
                <Text>{deck.cards}</Text>
            </View>
          ))}
      </View>
    )
  }
}

export default DeckList
