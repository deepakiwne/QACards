import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from './Button'

class AddDeck extends Component {
  state = {
      question: 'Question',
      answer: 'Answer'
  }

  // componentDidMount - Make this a connected component - Redux
  // Styling

  onChangeQuestion(userTyped){
      this.setState({
          question: userTyped
      })
  }

  onChangeQuestion(userTyped){
    this.setState({
        answer: userTyped
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
        <Button name={'Submit'} onPress={this.submit} />
      </View>
    )
  }
}

export default AddDeck
