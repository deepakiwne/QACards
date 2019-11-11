import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { purple, white } from '../utils/colors'

class AddDeck extends Component {
  state = {
    title: ''
  }

  // componentDidMount - Make this a connected component - Redux
  // Styling

  onChangeName(userTyped){
      this.setState({
        title: userTyped
      })
  }

  onSubmit = () => {

    const { dispatch } = this.props
    const { title } = this.state

    // Add to Redux
    dispatch(
      addDeck({
        [title]: { title: title, cards: [] }
      })
    )

    // Add to API
    saveDeckTitle(title)

    // Clear state
    this.setState({
      title: ''
    })

    // Navigate to new deck
    this.props.navigation.navigate(
      'Deck',
      { title: title }
    )
  }

  render() {

    const { title }  = this.state

    return (
      <View style={styles.container}>
        <Text style={ [styles.content, styles.question, { fontSize: 35 }] }> What is the title of your new Deck?</Text>
        <TextInput
            placeholder='Deck Title'
            style={[styles.content, styles.input, { height: 40, borderColor: 'gray', borderWidth: 1 }]}
            onChangeText={userTyped => this.onChangeName(userTyped)}
            value={title}
        />
        {/* <View style={[styles.content]}>
          <Button name={'Create Deck'} onPress={this.onSubmit} />
        </View> */}
        <TouchableOpacity
          style={[styles.content, styles.button, {backgroundColor: purple}]}
          onPress={() => this.onSubmit()}>
          <Text style={{fontSize: 18, color: white}}>Create Deck</Text>
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
  question: {
    maxWidth: 300
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

export default connect()(AddDeck)
