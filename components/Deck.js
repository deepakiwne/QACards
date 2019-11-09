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
        <View key={deck.name}>
            <Text>{deck.name}</Text>
            <Text>{deck.cards}</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'AddCard'
          )}>
          <Button name={'Add Card'} onPress={this.submit} />
        </TouchableOpacity>
        <Button name={'Start Quiz'} onPress={this.submit} />
        <Button name={'Delete Deck'} onPress={this.submit} />
      </View>
    )
  }
}

export default Deck
