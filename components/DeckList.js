import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
            <TouchableOpacity key={deck.name} onPress={() => this.props.navigation.navigate(
                'Deck',
                { deck: deck }
              )}>
              <View>
                <Text>{deck.name}</Text>
                <Text>{deck.cards}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    )
  }
}

export default DeckList
