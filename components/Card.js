import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Button from './Button'

class Card extends Component {

  // Styling

  render() {

    const { question, answer, flip, onFlip } = this.props

    return (
        flip
        ? 
            <View>
            <Text>{`A: ${answer ? 'Yes!' : 'No!'}`}</Text>
            </View>
        : 
            <View>
                <Text>{`Q: ${question}`}</Text>
                <Button name={'Show Answer'} onPress={() => onFlip()} />
            </View>
    )
  }
}

export default Card
