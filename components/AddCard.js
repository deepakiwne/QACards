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

    const { title, dispatch } = this.props
    const { question, answer } = this.state

    // Add to Redux
    dispatch(
      addCard(title, {
        question: question, answer: answer
      })
    )

    // Add to API
    addCardToDeck(title, {
      question: question, answer: answer
    })

    // Clear state
    this.setState({
      question: '',
      answer: ''
    })

    // Navigate to deck
    this.props.navigation.navigate(
      'Deck',
      { title: title }
    )
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

function mapStateToProps (decks, { navigation }) {

  const { title } = navigation.state.params

  return {
    title,
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(AddDeck)
