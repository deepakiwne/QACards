import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Button from './Button'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Deck extends Component {

  // Styling

  render() {
    
    const deck  = this.props.navigation.state.params.deck

    return (
      <View>
        <Text>Deck</Text>
        <View key={deck.title}>
            <Text>{deck.title}</Text>
            <Text>{deck.cards.length}</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'AddCard'
          )}>
          <Button name={'Add Card'} onPress={this.submit} />
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

export default Deck
