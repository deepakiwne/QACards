import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from './Button'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

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
      <View>
        <Text>AddDeck</Text>
        <Text> What is the title of your new Deck?</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={userTyped => this.onChangeName(userTyped)}
            value={title}
        />
        <Button name={'Create Deck'} onPress={this.onSubmit} />
      </View>
    )
  }
}

export default connect()(AddDeck)
