import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { purple, white, orange } from '../utils/colors'

class Card extends Component {

  // Styling

  render() {

    const { question, answer, flip, onQuestion, onAnswer } = this.props

    return (
        flip
        ? 
          <View style={styles.container}>
            <Text style={[styles.content, {fontSize: 22}]}>{answer ? 'Yes!' : 'No!'}</Text>
            <Text
              style={[styles.content, {fontSize: 18, color: orange}]}
              onPress={() => onQuestion()}>
              Show Question
            </Text>
          </View>
        : 
          <View style={styles.container}>
            <Text style={[styles.content, {fontSize: 22}]}>{question}</Text>
            <Text
              style={[styles.content, {fontSize: 18, color: orange}]}
              onPress={() => onAnswer()}>
              Show Answer
            </Text>
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
  button: {
    padding: 5,
    borderRadius: 8,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Card
