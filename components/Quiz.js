import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import Card from './Card'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { purple, white, red, green } from '../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Quiz extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz'
    }
  }

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
        <View style={styles.container}>
          <Text style={[styles.content, {fontSize: 22}]}>Sorry, you cannot take a quiz because there are no cards in the deck</Text>
        </View>
      )
    }

    if(gameComplete) {
      return (
        <View style={styles.container}>
          <Text style={[styles.content, {fontSize: 22}]}>{`Quiz Complete! Score: ${(correct/attempted*100).toFixed(1)} %`}</Text>
          <TouchableOpacity
            style={[styles.content, styles.button, {backgroundColor: purple}]}
            onPress={() => this.onRestartQuiz()}>
            <Text style={{fontSize: 18, color: white}}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.content, styles.button, {backgroundColor: purple}]}
            onPress={() => this.props.navigation.navigate(
              'Deck',
              { title: title }
            )}>
            <Text style={{fontSize: 18, color: white}}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.content, {fontSize: 18}]}>{cardIndex + 1}/{cards.length}</Text>
        <Card style={styles.content} question={cards[cardIndex].question} answer={cards[cardIndex].answer}
          flip={flip} onQuestion={this.onQuestion} onAnswer={this.onAnswer}/>
        
        {flip
        ?
          <Text></Text>
        :
          <View>
            <TouchableOpacity
              style={[styles.content, styles.button, {backgroundColor: green}]}
              onPress={() => this.onCorrect(cards[cardIndex].answer)}>
              <Text style={{fontSize: 18, color: white}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.content, styles.button, {backgroundColor: red}]}
              onPress={() => this.onIncorrect(cards[cardIndex].answer)}>
              <Text style={{fontSize: 18, color: white}}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    margin: 30
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 5,
    borderRadius: 8,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function mapStateToProps (decks, { navigation }) {

  const { title } = navigation.state.params

  return {
    title,
    cardsMaxIndex: decks[title].cards.length - 1,
    cards: decks[title].cards
  }
}

export default connect(mapStateToProps)(Quiz)
