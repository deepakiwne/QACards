import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Button from './Button'

class Card extends Component {

  // Styling

  render() {

    const { question, answer, flip, onQuestion, onAnswer } = this.props

    return (
        flip
        ? 
            <View>
            <Text>{`A: ${answer ? 'Yes!' : 'No!'}`}</Text>
            <Button name={'Show Question'} onPress={() => onQuestion()} />
            </View>
        : 
            <View>
                <Text>{`Q: ${question}`}</Text>
                <Button name={'Show Answer'} onPress={() => onAnswer()} />
            </View>
    )
  }
}

export default Card
