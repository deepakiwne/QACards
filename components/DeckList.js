import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { gray } from '../utils/colors';

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
      <View style={styles.deckCardContainer}>
          {Object.keys(decks).map((key) => (
            <TouchableOpacity
              style={styles.deckCard}
              key={decks[key].title}
              onPress={() => this.props.navigation.navigate(
                'Deck',
                { title: key }
              )}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{decks[key].title}</Text>
              <Text style={{ fontSize: 16, color: gray }}>{decks[key].cards.length} {decks[key].cards.length === 1 ? 'card' : 'cards'}</Text>
            </TouchableOpacity>
          ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckCardContainer: {
    flex: 1,
    alignItems: 'center'
  },
  deckCard: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderRadius: 6,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)