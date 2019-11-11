import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import { Switch, TouchableOpacity } from 'react-native-gesture-handler'
import { purple, white } from '../utils/colors'

class AddDeck extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Card'
    }
  }

  state = {
      question: '',
      answer: false
  }
  
  onChangeQuestion(userTyped){
      this.setState({
          question: userTyped
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
      answer: false
    })

    // Navigate to deck
    this.props.navigation.navigate(
      'Deck',
      { title: title }
    )
  }
  onChangeAnswer = () => {
    this.setState((prevState) => ({
      answer: !prevState.answer
    }))
  }
  render() {

    const { question, answer }  = this.state
    
    return (
      <View style={styles.container}>
        <TextInput
            placeholder='Add Your Question'
            style={[styles.content, styles.input, { height: 40, borderColor: 'gray', borderWidth: 1 }]}
            onChangeText={userTyped => this.onChangeQuestion(userTyped)}
            value={question}
        />

        <View style={styles.content}>
          <Text style={{fontSize: 18}}>Answer</Text>
          <Switch
            onValueChange={() => this.onChangeAnswer()}
            value={answer}>
          </Switch>
        </View>
        <TouchableOpacity
          style={[styles.content, styles.button, {backgroundColor: purple}]}
          onPress={() => this.onSubmit()}>
          <Text style={{fontSize: 18, color: white}}>Submit</Text>
        </TouchableOpacity>

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
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(AddDeck)
