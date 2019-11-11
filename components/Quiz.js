import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import Card from './Card'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {

    state = {
        attempted: 0,
        correct: 0,
        cardIndex: 0,
        gameComplete: false,
        flip: false
    }

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }
  // Styling
  onCorrect = (answer) => {

    const { cardIndex } = this.state
    const { cardsMaxIndex } = this.props

    this.setState((prevState) => ({
        attempted: prevState.attempted + 1,
        correct: answer ? prevState.correct + 1 : prevState.correct,
        gameComplete: cardIndex === cardsMaxIndex,
        cardIndex: prevState.cardIndex === cardsMaxIndex ? prevState.cardIndex : prevState.cardIndex + 1,
        flip: false
    }))
  }
  onIncorrect = (answer) => {

    const { cardIndex } = this.state
    const { cardsMaxIndex } = this.props
    
    this.setState((prevState) => ({
        attempted: prevState.attempted + 1,
        correct: !answer ? prevState.correct + 1 : prevState.correct,
        gameComplete: cardIndex === cardsMaxIndex,
        cardIndex: prevState.cardIndex === cardsMaxIndex ? prevState.cardIndex : prevState.cardIndex + 1,
        flip: false
    }))
  }
  onQuestion = () => {

    this.setState({
      flip: false
    })
  }
  onAnswer = () => {

    this.setState({
      flip: true
    })
  }
  onRestartQuiz = () => {
    this.setState(
      {
        attempted: 0,
        correct: 0,
        cardIndex: 0,
        gameComplete: false,
        flip: false
      }
    )
  }
  onBackToDeck = () => {
    
  }
  render() {
    
    const { cards, title } = this.props
    const { cardIndex, gameComplete, attempted, correct, flip }  = this.state

    if(cards.length === 0) {
      return (
        <Text>Sorry, you cannot take a quiz because there are no cards in the deck</Text>
      )
    }

    return (
      <View>
        <Text>Quiz</Text>
        <View>
            <Text>{cardIndex + 1}/{cards.length}</Text>

            {gameComplete
            ? 
              <View>
                <Text>{`Quiz Complete! Attempted: ${attempted} Correct: ${correct} Percent Correct: ${(correct/attempted*100).toFixed(1)}`}</Text>
                <Button name={'Restart Quiz'} onPress={() => this.onRestartQuiz()} />
                <Button name={'Back to Deck'} onPress={() => this.props.navigation.navigate(
                  'Deck',
                  { title: title }
                )} />
              </View>
            :
              <View>
                  <Card question={cards[cardIndex].question} answer={cards[cardIndex].answer}
                    flip={flip} onQuestion={this.onQuestion} onAnswer={this.onAnswer}/>
                  {flip
                  ? <View></View>
                  :
                  <View>
                  <Button name={'Correct'} onPress={() => this.onCorrect(cards[cardIndex].answer)} />
                  <Button name={'Incorrect'} onPress={() => this.onIncorrect(cards[cardIndex].answer)} />
                  </View>
                  }
              </View>
            }
        </View>
      </View>
    )
  }
}

function mapStateToProps (decks, { navigation }) {

  const { title } = navigation.state.params

  return {
    title,
    cardsMaxIndex: decks[title].cards.length - 1,
    cards: decks[title].cards
  }
}

export default connect(mapStateToProps)(Quiz)
