import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

class DeckList extends Component {
  state = {
  }

  // componentDidMount - Make this a connected component - Redux
  // Styling

  componentDidMount(){

    const { dispatch } = this.props

    getDecks()
    .then((decks) => dispatch(receiveDecks(decks)))

  }

  render() {

    const { decks }  = this.props
 
    return (
      <View>
          <Text>DeckList</Text>
          {Object.keys(decks).map((key) => (
            <TouchableOpacity key={decks[key].title} onPress={() => this.props.navigation.navigate(
                'Deck',
                { deck: decks[key] }
              )}>
              <View>
                <Text>{decks[key].title}</Text>
                <Text>{decks[key].cards.length}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)