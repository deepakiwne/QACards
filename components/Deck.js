import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Button from './Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

class Deck extends Component {

  // Styling

  render() {
    
    const { deck }  = this.props

    return (
      <View>
        <Text>Deck</Text>
        <View key={deck.title}>
            <Text>{deck.title}</Text>
            <Text>{deck.cards.length}</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'AddCard',
            { title: deck.title }
          )}>
          <Button name={'Add Card'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deck: deck }
          )}>
          <Button name={'Start Quiz'} onPress={this.submit} />
        </TouchableOpacity>
        <Button name={'Delete Deck'} onPress={this.submit} />
      </View>
    )
  }
}

function mapStateToProps (decks, { navigation }) {

  const { title } = navigation.state.params

  return {
    title,
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(Deck)
