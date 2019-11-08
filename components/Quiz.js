import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Button from './Button'

class Quiz extends Component {

    state = {
        attempted: 2,
        correct: 1,
        currentCardNumber: 1,
        card: {
            question: 'React uses Virtual DOM?',
            answer: true
        }
    }

  // Styling

  render() {

    const { deck } = this.props
    const { card, currentCardNumber }  = this.state

    return (
      <View>
        <Text>Quiz</Text>
        <Text>{currentCardNumber}/{deck.cards.length}</Text>
        <Text>{card.question}</Text>
        <Button name={'Answer'} onPress={this.submit} />
        <Button name={'Correct'} onPress={this.submit} />
        <Button name={'Incorrect'} onPress={this.submit} />
      </View>
    )
  }
}

export default Quiz
