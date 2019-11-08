import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Button from './Button'

class Deck extends Component {

  // Styling

  render() {

    const { deck }  = this.props

    return (
      <View>
        <Text>Deck</Text>
        <View key={deck.name}>
            <Text>{deck.name}</Text>
            <Text>{deck.cards}</Text>
        </View>
        <Button name={'Add Card'} onPress={this.submit} />
        <Button name={'Start Quiz'} onPress={this.submit} />
        <Button name={'Delete Deck'} onPress={this.submit} />
      </View>
    )
  }
}

export default Deck
