import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class AddDeck extends Component {
  state = {
      question: '',
      answer: ''
  }

  // componentDidMount - Make this a connected component - Redux
  // Styling

  onChangeQuestion(userTyped){
      this.setState({
          question: userTyped
      })
  }

  onChangeAnswer(userTyped){
    this.setState({
        answer: userTyped
    })
  }

  onSubmit = () => {

    const { dispatch } = this.props
    const { question, answer } = this.state
    const deck = this.props.navigation.state.params.deck

    // Add to Redux
    dispatch(
      addCard(deck.title, {
        question: question, answer: answer
      })
    )

    // Add to API
    addCardToDeck(deck.title, {
      question: question, answer: answer
    })

    // Clear state
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {

    const { question, answer }  = this.state
    
    return (
      <View>
        <Text>AddCard</Text>
    
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={userTyped => this.onChangeQuestion(userTyped)}
            value={question}
        />
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={userTyped => this.onChangeAnswer(userTyped)}
            value={answer}
        />
        <Button name={'Submit'} onPress={this.onSubmit} />
      </View>
    )
  }
}

export default connect()(AddDeck)
