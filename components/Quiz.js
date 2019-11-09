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
        },
        userResponded: false,
        userResponse: true
    }

  // Styling

  render() {

    const deck  = this.props.navigation.state.params.deck
    const { card, currentCardNumber, userResponded, userResponse }  = this.state

    return (
      <View>
        <Text>Quiz</Text>

        {deck.cards.length === 0
        ?   <Text>Sorry, you cannot take a quiz because there are no cards in the deck</Text>
        :   
            <View>
                <Text>{currentCardNumber}/{deck.cards}</Text>

                {userResponded
                ? 
                    <View>
                        <Text>{card.answer === userResponse ? 'Yes!' : 'No!'}</Text>
                        <Button name={'Next'} onPress={this.submit} />
                    </View>
                :
                    <View>
                        <Text>{card.question}</Text>
                        <Button name={'Answer'} onPress={this.submit} />
                    </View>
                }
                <Button name={'Correct'} onPress={this.submit} />
                <Button name={'Incorrect'} onPress={this.submit} />
            </View>
        }
      </View>
    )
  }
}

export default Quiz
